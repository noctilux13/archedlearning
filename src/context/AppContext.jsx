import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [apiKey, setApiKey] = useState(localStorage.getItem('groqApiKey') || '');
  const [cfWorkerUrl, setCfWorkerUrl] = useState(localStorage.getItem('cfWorkerUrl') || '');
  
  const [progress, setProgress] = useState(() => {
    const defaults = {
      viewedArtworks: [],
      favorites: [],
      quizScores: [],
      masteryLevel: 0
    };
    try {
      const saved = localStorage.getItem('artProgress');
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...defaults, ...parsed };
      }
    } catch (e) {
      // corrupted localStorage, reset
    }
    return defaults;
  });

  const [customImageMap, setCustomImageMap] = useState(() => {
    const saved = localStorage.getItem('customImageMap');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('groqApiKey', apiKey);
  }, [apiKey]);

  useEffect(() => {
    localStorage.setItem('cfWorkerUrl', cfWorkerUrl);
  }, [cfWorkerUrl]);

  useEffect(() => {
    localStorage.setItem('artProgress', JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    localStorage.setItem('customImageMap', JSON.stringify(customImageMap));
  }, [customImageMap]);

  const markArtworkViewed = (id) => {
    if (!(progress.viewedArtworks || []).includes(id)) {
      setProgress(prev => ({
        ...prev,
        viewedArtworks: [...prev.viewedArtworks, id]
      }));
    }
  };

  const toggleFavorite = (id) => {
    setProgress(prev => {
      const isFav = prev.favorites.includes(id);
      return {
        ...prev,
        favorites: isFav ? prev.favorites.filter(item => item !== id) : [...prev.favorites, id]
      };
    });
  };

  const addQuizScore = (scorePercentage) => {
    setProgress(prev => {
      const newScores = [...prev.quizScores, scorePercentage];
      const avg = Math.round(newScores.reduce((a, b) => a + b, 0) / newScores.length);
      return {
        ...prev,
        quizScores: newScores,
        masteryLevel: avg
      };
    });
  };

  const resetProgress = () => {
    const fresh = { viewedArtworks: [], favorites: [], quizScores: [], masteryLevel: 0 };
    setProgress(fresh);
    localStorage.setItem('artProgress', JSON.stringify(fresh));
  };

  const updateArtworkImage = (artworkId, newImageUrl) => {
    setCustomImageMap(prev => ({
      ...prev,
      [artworkId]: newImageUrl
    }));
  };

  return (
    <AppContext.Provider value={{
      apiKey,
      setApiKey,
      cfWorkerUrl,
      setCfWorkerUrl,
      progress,
      markArtworkViewed,
      toggleFavorite,
      addQuizScore,
      resetProgress,
      customImageMap,
      updateArtworkImage
    }}>
      {children}
    </AppContext.Provider>
  );
};
