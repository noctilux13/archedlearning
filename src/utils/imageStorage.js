/**
 * Lightweight IndexedDB key-value storage for custom image overrides.
 * Overcomes the 5MB quota limit of localStorage for high-res user images.
 */

const DB_NAME = 'ArtLearningCustomImagesDB';
const DB_VERSION = 1;
const STORE_NAME = 'custom_images';

let dbPromise = null;

function getDB() {
  if (dbPromise) return dbPromise;

  dbPromise = new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB not supported'));
      return;
    }

    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });

  return dbPromise;
}

/**
 * Save or update a custom image
 * @param {string} id - e.g. "artist:vincent-van-gogh" or "artwork:starry-night"
 * @param {string} dataUrl - Base64 Data URL or HTTP URL
 * @param {object} meta - Optional metadata (title, targetType, timestamp)
 */
export async function saveCustomImage(id, dataUrl, meta = {}) {
  try {
    const db = await getDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const record = {
        id,
        dataUrl,
        title: meta.title || id,
        targetType: meta.targetType || (id.startsWith('artist:') ? 'artist' : 'artwork'),
        updatedAt: new Date().toISOString()
      };
      const request = store.put(record);
      request.onsuccess = () => resolve(record);
      request.onerror = () => reject(request.error);
    });
  } catch (err) {
    console.warn('IndexedDB write failed, falling back to localStorage:', err);
    try {
      const fallbackMap = JSON.parse(localStorage.getItem('customImagesFallback') || '{}');
      fallbackMap[id] = { id, dataUrl, ...meta, updatedAt: new Date().toISOString() };
      localStorage.setItem('customImagesFallback', JSON.stringify(fallbackMap));
      return fallbackMap[id];
    } catch (e) {
      throw err;
    }
  }
}

/**
 * Get a single custom image by key
 */
export async function getCustomImage(id) {
  try {
    const db = await getDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(id);
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(request.error);
    });
  } catch (err) {
    try {
      const fallbackMap = JSON.parse(localStorage.getItem('customImagesFallback') || '{}');
      return fallbackMap[id] || null;
    } catch (e) {
      return null;
    }
  }
}

/**
 * Get all saved custom images
 * @returns {Promise<Record<string, { id, dataUrl, title, targetType, updatedAt }>>}
 */
export async function getAllCustomImages() {
  try {
    const db = await getDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.getAll();
      request.onsuccess = () => {
        const records = request.result || [];
        const map = {};
        for (const item of records) {
          map[item.id] = item;
        }
        resolve(map);
      };
      request.onerror = () => reject(request.error);
    });
  } catch (err) {
    try {
      return JSON.parse(localStorage.getItem('customImagesFallback') || '{}');
    } catch (e) {
      return {};
    }
  }
}

/**
 * Delete a custom image override by key
 */
export async function deleteCustomImage(id) {
  try {
    const db = await getDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.delete(id);
      request.onsuccess = () => resolve(true);
      request.onerror = () => reject(request.error);
    });
  } catch (err) {
    try {
      const fallbackMap = JSON.parse(localStorage.getItem('customImagesFallback') || '{}');
      delete fallbackMap[id];
      localStorage.setItem('customImagesFallback', JSON.stringify(fallbackMap));
      return true;
    } catch (e) {
      return false;
    }
  }
}

/**
 * Clear all custom image overrides
 */
export async function clearAllCustomImages() {
  try {
    const db = await getDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.clear();
      request.onsuccess = () => resolve(true);
      request.onerror = () => reject(request.error);
    });
  } catch (err) {
    try {
      localStorage.removeItem('customImagesFallback');
      return true;
    } catch (e) {
      return false;
    }
  }
}
