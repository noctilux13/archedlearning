import React, { createContext, useState, useEffect, useCallback } from 'react';
import { getAllCustomImages, saveCustomImage, deleteCustomImage, clearAllCustomImages } from '../utils/imageStorage';

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

  const [customImages, setCustomImages] = useState({});

  // Load custom images from IndexedDB on startup
  useEffect(() => {
    getAllCustomImages().then(map => {
      if (map && Object.keys(map).length > 0) {
        setCustomImages(map);
      }
    }).catch(err => {
      console.warn('Failed to load custom images:', err);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('groqApiKey', apiKey);
  }, [apiKey]);

  useEffect(() => {
    localStorage.setItem('cfWorkerUrl', cfWorkerUrl);
  }, [cfWorkerUrl]);

  useEffect(() => {
    localStorage.setItem('artProgress', JSON.stringify(progress));
  }, [progress]);

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

  // Custom image handlers
  const setCustomImage = useCallback(async (id, dataUrl, meta = {}) => {
    const record = await saveCustomImage(id, dataUrl, meta);
    setCustomImages(prev => ({
      ...prev,
      [id]: record
    }));
    return record;
  }, []);

  const removeCustomImage = useCallback(async (id) => {
    await deleteCustomImage(id);
    setCustomImages(prev => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }, []);

  const clearAllOverrides = useCallback(async () => {
    await clearAllCustomImages();
    setCustomImages({});
  }, []);

  // Fast helper to resolve an image URL with custom override priority
  const resolveArtworkUrl = useCallback((artworkId, defaultUrl) => {
    const custom = customImages[`artwork:${artworkId}`] || customImages[artworkId];
    return custom ? custom.dataUrl : defaultUrl;
  }, [customImages]);

  const resolveArtistAvatar = useCallback((artistId, defaultUrl) => {
    const custom = customImages[`artist:${artistId}`] || customImages[artistId];
    return custom ? custom.dataUrl : defaultUrl;
  }, [customImages]);

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
      customImages,
      setCustomImage,
      removeCustomImage,
      clearAllOverrides,
      resolveArtworkUrl,
      resolveArtistAvatar
    }}>
      {children}
    </AppContext.Provider>
  );
};
