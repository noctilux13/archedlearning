import React, { createContext, useState, useEffect, useCallback } from 'react';
import { getAllCustomImages, saveCustomImage, deleteCustomImage, clearAllCustomImages } from '../utils/imageStorage';
import { translations, LANGUAGES } from '../i18n/translations';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [apiKey, setApiKey] = useState(localStorage.getItem('groqApiKey') || '');
  const [cfWorkerUrl, setCfWorkerUrl] = useState(localStorage.getItem('cfWorkerUrl') || '');
  const [language, setLanguageState] = useState(() => localStorage.getItem('app_lang') || 'zh');
  
  const setLanguage = useCallback((lang) => {
    setLanguageState(lang);
    localStorage.setItem('app_lang', lang);
  }, []);

  // Translation helper function
  const t = useCallback((path, fallback = '') => {
    const langDict = translations[language] || translations.zh;
    const parts = path.split('.');
    let current = langDict;
    for (const part of parts) {
      if (current && typeof current === 'object' && part in current) {
        current = current[part];
      } else {
        // Fallback to English, then Chinese, then provided fallback
        let fallbackVal = translations.en;
        for (const p of parts) {
          if (fallbackVal && typeof fallbackVal === 'object' && p in fallbackVal) {
            fallbackVal = fallbackVal[p];
          } else {
            fallbackVal = null;
            break;
          }
        }
        return fallbackVal || fallback || path;
      }
    }
    return typeof current === 'string' ? current : (fallback || path);
  }, [language]);

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
    const cleanId = id.replace(/^(artwork|artist):/, '');
    const fullId = meta.targetType ? `${meta.targetType}:${cleanId}` : id;

    setCustomImages(prev => ({
      ...prev,
      [id]: record,
      [cleanId]: record,
      [fullId]: record
    }));
    return record;
  }, []);

  const removeCustomImage = useCallback(async (id) => {
    const cleanId = id.replace(/^(artwork|artist):/, '');
    await deleteCustomImage(id);
    await deleteCustomImage(`artwork:${cleanId}`);
    await deleteCustomImage(`artist:${cleanId}`);
    await deleteCustomImage(cleanId);
    
    setCustomImages(prev => {
      const next = { ...prev };
      delete next[id];
      delete next[cleanId];
      delete next[`artwork:${cleanId}`];
      delete next[`artist:${cleanId}`];
      return next;
    });
  }, []);

  const clearAllOverrides = useCallback(async () => {
    await clearAllCustomImages();
    setCustomImages({});
  }, []);

  // Fast helper to resolve an image URL with custom override priority
  const resolveArtworkUrl = useCallback((artworkId, defaultUrl) => {
    if (!artworkId) return defaultUrl;
    const custom = customImages[`artwork:${artworkId}`] || customImages[artworkId];
    return custom?.dataUrl || defaultUrl;
  }, [customImages]);

  const resolveArtistAvatar = useCallback((artistId, defaultUrl) => {
    if (!artistId) return defaultUrl;
    const custom = customImages[`artist:${artistId}`] || customImages[artistId];
    return custom?.dataUrl || defaultUrl;
  }, [customImages]);

  return (
    <AppContext.Provider value={{
      apiKey,
      setApiKey,
      cfWorkerUrl,
      setCfWorkerUrl,
      language,
      setLanguage,
      t,
      LANGUAGES,
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
