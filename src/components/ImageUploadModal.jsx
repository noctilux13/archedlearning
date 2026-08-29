import React, { useState, useRef, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppContext } from '../context/AppContext';
import { Upload, Link as LinkIcon, RotateCcw, Check, X, AlertCircle, Loader2 } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1];

/**
 * Image Upload & Replacement Modal
 */
export default function ImageUploadModal({
  isOpen,
  onClose,
  targetType = 'artwork',
  targetId,
  title = '',
  currentDefaultUrl = ''
}) {
  const { customImages, setCustomImage, removeCustomImage, t } = useContext(AppContext);
  const fullKey = `${targetType}:${targetId}`;
  const existingCustom = customImages[fullKey] || customImages[targetId];

  const [mode, setMode] = useState('file'); // 'file' | 'url'
  const [urlInput, setUrlInput] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef(null);

  // Initialize preview if custom exists
  useEffect(() => {
    if (isOpen) {
      setError('');
      setLoading(false);
      if (existingCustom?.dataUrl) {
        setPreviewUrl(existingCustom.dataUrl);
        if (existingCustom.dataUrl.startsWith('http')) {
          setMode('url');
          setUrlInput(existingCustom.dataUrl);
        } else {
          setMode('file');
          setUrlInput('');
        }
      } else {
        setPreviewUrl('');
        setUrlInput('');
        setMode('file');
      }
    }
  }, [isOpen, existingCustom]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Process file into optimized Data URL
  const processFile = (file) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setError(t ? t('modal.fileTypeError', '请上传有效的图片文件 (JPG, PNG, WebP, SVG 等)') : 'Please upload a valid image file');
      return;
    }

    setLoading(true);
    setError('');

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target.result;
      
      // If image is very large (> 2.5MB), downscale via Canvas
      if (file.size > 2.5 * 1024 * 1024) {
        const img = new Image();
        img.onload = () => {
          const maxDim = 2048;
          let w = img.width;
          let h = img.height;
          if (w > maxDim || h > maxDim) {
            if (w > h) {
              h = Math.round((h * maxDim) / w);
              w = maxDim;
            } else {
              w = Math.round((w * maxDim) / h);
              h = maxDim;
            }
          }
          const canvas = document.createElement('canvas');
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, w, h);
          const compressed = canvas.toDataURL('image/jpeg', 0.9);
          setPreviewUrl(compressed);
          setLoading(false);
        };
        img.onerror = () => {
          setPreviewUrl(result);
          setLoading(false);
        };
        img.src = result;
      } else {
        setPreviewUrl(result);
        setLoading(false);
      }
    };
    reader.onerror = () => {
      setError(t ? t('modal.fileReadError', '文件读取失败，请重试') : 'Failed to read file');
      setLoading(false);
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) processFile(file);
  };

  const handleUrlChange = (val) => {
    setUrlInput(val);
    setError('');
    if (val.trim().startsWith('http://') || val.trim().startsWith('https://') || val.trim().startsWith('data:')) {
      setPreviewUrl(val.trim());
    } else {
      setPreviewUrl('');
    }
  };

  const handleSave = async () => {
    if (!previewUrl) {
      setError(t ? t('modal.emptyError', '请先选取本地图片或输入有效的图片网址') : 'Please select an image first');
      return;
    }
    setLoading(true);
    try {
      await setCustomImage(fullKey, previewUrl, {
        title,
        targetType,
        targetId
      });
      onClose();
    } catch (err) {
      setError('保存失败：' + (err.message || '存储异常'));
    } finally {
      setLoading(false);
    }
  };

  const handleReset = async () => {
    if (window.confirm(t ? t('modal.restoreConfirm', '确认恢复为系统默认图片？') : 'Restore to default image?')) {
      setLoading(true);
      try {
        await removeCustomImage(fullKey);
        await removeCustomImage(targetId);
        onClose();
      } catch (err) {
        setError('恢复失败：' + err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose} style={{ zIndex: 1000 }}>
        <motion.div
          className="modal-content"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.35, ease: EASE }}
          onClick={(e) => e.stopPropagation()}
          style={{
            maxWidth: '560px',
            width: '92%',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '1.75rem',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-hairline)',
            boxShadow: 'var(--shadow-modal)'
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
            <div>
              <div className="chip chip-neutral" style={{ marginBottom: '0.4rem', fontSize: '0.72rem' }}>
                {targetType === 'artist' ? (t ? t('modal.replaceAvatarTitle', '艺术家肖像替换') : 'Replace Avatar') : (t ? t('modal.replaceArtworkTitle', '作品图片替换') : 'Replace Artwork')}
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', margin: 0, color: 'var(--text-primary)' }}>
                {title || targetId}
              </h3>
            </div>
            <button className="modal-close" onClick={onClose} style={{ top: 0, right: 0 }}>
              <X size={16} />
            </button>
          </div>

          {/* Mode Tabs */}
          <div className="tab-bar" style={{ marginBottom: '1.25rem' }}>
            <button
              className={`tab-item ${mode === 'file' ? 'active' : ''}`}
              onClick={() => setMode('file')}
            >
              <Upload size={13} />
              <span>{t ? t('modal.localTab', '本地图片上传') : 'Upload File'}</span>
            </button>
            <button
              className={`tab-item ${mode === 'url' ? 'active' : ''}`}
              onClick={() => setMode('url')}
            >
              <LinkIcon size={13} />
              <span>{t ? t('modal.urlTab', '网络图片链接') : 'Image URL'}</span>
            </button>
          </div>

          {/* Tab 1: File Upload */}
          {mode === 'file' && (
            <div
              onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
              onDragLeave={() => setIsDragOver(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              style={{
                border: `2px dashed ${isDragOver ? 'var(--text-primary)' : 'var(--border-subtle)'}`,
                backgroundColor: isDragOver ? 'var(--bg-subtle)' : 'var(--bg-base)',
                borderRadius: 'var(--radius-sm)',
                padding: '2rem 1rem',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                marginBottom: '1.25rem'
              }}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
              <Upload size={28} style={{ color: 'var(--text-tertiary)', margin: '0 auto 0.75rem auto' }} />
              <div style={{ fontSize: '0.9rem', fontWeight: 550, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                {t ? t('modal.dragDropTitle', '点击选取或拖拽图片至此处') : 'Choose or drag image here'}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
                {t ? t('modal.dragDropDesc', '支持 JPG, PNG, WebP, SVG（保存在本地浏览器，离线可用）') : 'Supports JPG, PNG, WebP, SVG'}
              </div>
            </div>
          )}

          {/* Tab 2: URL Input */}
          {mode === 'url' && (
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 550, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                {t ? t('modal.urlLabel', '图片直链地址 (URL)') : 'Image URL'}
              </label>
              <input
                type="text"
                className="input-field"
                placeholder={t ? t('modal.urlPlaceholder', 'https://upload.wikimedia.org/.../artwork.jpg') : 'https://...'}
                value={urlInput}
                onChange={(e) => handleUrlChange(e.target.value)}
                style={{ fontSize: '0.85rem' }}
              />
              <p style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginTop: '0.35rem' }}>
                {t ? t('modal.urlHint', '提示：支持维基百科、各大博物馆官网或图片托管站点的直接图片链接。') : 'Direct link from Wikipedia, museums, etc.'}
              </p>
            </div>
          )}

          {/* Error notice */}
          {error && (
            <div style={{
              backgroundColor: 'var(--accent-red-subtle)',
              border: '1px solid rgba(225, 29, 72, 0.2)',
              color: 'var(--accent-red)',
              padding: '0.6rem 0.85rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.82rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              marginBottom: '1rem'
            }}>
              <AlertCircle size={14} />
              <span>{error}</span>
            </div>
          )}

          {/* Live Preview Area */}
          {previewUrl && (
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>
                {t ? t('modal.previewLabel', '替换后效果预览') : 'Preview'}
              </div>
              <div style={{
                width: '100%',
                height: targetType === 'artist' ? '180px' : '220px',
                backgroundColor: 'var(--bg-subtle)',
                borderRadius: 'var(--radius-sm)',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--border-hairline)'
              }}>
                <img
                  src={previewUrl}
                  alt="Preview"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: targetType === 'artist' ? 'cover' : 'contain',
                    borderRadius: targetType === 'artist' ? '50%' : '0',
                    width: targetType === 'artist' ? '120px' : 'auto',
                    height: targetType === 'artist' ? '120px' : 'auto',
                    boxShadow: targetType === 'artist' ? 'var(--shadow-card)' : 'none'
                  }}
                  onError={() => setError(t ? t('modal.previewLoadError', '图片加载失败，请检查文件或链接是否有效') : 'Failed to load image')}
                />
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
            {existingCustom && (
              <motion.button
                type="button"
                className="btn btn-outline"
                onClick={handleReset}
                disabled={loading}
                style={{ color: 'var(--accent-red)', borderColor: 'rgba(225, 29, 72, 0.3)', marginRight: 'auto' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <RotateCcw size={13} />
                <span>{t ? t('modal.restoreDefault', '恢复默认') : 'Restore Default'}</span>
              </motion.button>
            )}

            <motion.button
              type="button"
              className="btn btn-outline"
              onClick={onClose}
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t ? t('modal.cancel', '取消') : 'Cancel'}
            </motion.button>

            <motion.button
              type="button"
              className="btn btn-primary"
              onClick={handleSave}
              disabled={loading || !previewUrl}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? (
                <>
                  <Loader2 size={13} className="animate-spin" />
                  <span>{t ? t('modal.saving', '保存中...') : 'Saving...'}</span>
                </>
              ) : (
                <>
                  <Check size={13} />
                  <span>{t ? t('modal.save', '保存替换') : 'Save Override'}</span>
                </>
              )}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
