import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { artData } from '../data/artData';
import { AppContext } from '../context/AppContext';
import { generateArtworkDeepDive } from '../services/aiService';
import MouseSpotlight from '../components/MouseSpotlight';
import { ArtworkImage } from '../components/ArtworkImage';
import ImageUploadModal from '../components/ImageUploadModal';
import { ChevronRight, Heart, Sparkles, ZoomIn, Bot, Loader2, AlertCircle, Calendar, MapPin, Palette, CheckCircle2, Maximize2, X, Landmark, Camera, Edit3 } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1];

export default function ArtworkDetail() {
  const { movementId, artistId, id } = useParams();
  const { markArtworkViewed, progress, toggleFavorite, apiKey, cfWorkerUrl, customImages, t } = useContext(AppContext) || {};

  const [isZoomed, setIsZoomed] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState('');

  const movement = artData.find(m => m.id === movementId);
  const artist = movement?.artists.find(a => a.id === artistId);
  const artwork = artist?.artworks.find(a => a.id === id);

  const isFav = (progress?.favorites || []).includes(artwork?.id);
  const isArch = movement?.category === 'architecture';
  const isCustomized = Boolean(customImages?.[`artwork:${artwork?.id}`] || customImages?.[artwork?.id]);

  useEffect(() => {
    if (artwork && markArtworkViewed) markArtworkViewed(artwork.id);
  }, [artwork, markArtworkViewed]);

  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === 'Escape') setIsZoomed(false); };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!artwork || !artist || !movement) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '6rem 0' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>{t ? t('artwork.notFound', '未找到该作品信息') : 'Work not found'}</h2>
        <Link to="/" className="btn btn-primary">{t ? t('artwork.backOverview', '返回总览') : 'Back to Overview'}</Link>
      </div>
    );
  }

  const handleAiAnalysis = async () => {
    setAiLoading(true);
    setAiError('');
    try {
      const res = await generateArtworkDeepDive(
        artwork.title,
        artist.englishName || artist.name,
        movement.englishName,
        artwork.knowledgePoints
      );
      setAiAnalysis(res);
    } catch (err) {
      setAiError(err.message || (t ? t('artwork.aiNeedKey', '请在设置中配置 API Key 以启用 AI 对话') : 'AI analysis failed. Please configure API Key in Settings.'));
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <MouseSpotlight>
      <motion.div
        initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.5, ease: EASE }}
        className="container"
      >
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link to="/">{t ? t('movement.backOverview', 'Overview') : 'Overview'}</Link>
          <ChevronRight size={12} />
          <Link to={`/movement/${movement.id}`}>{movement.englishName}</Link>
          <ChevronRight size={12} />
          <Link to={`/artist/${movement.id}/${artist.id}`}>{artist.englishName || artist.name}</Link>
          <ChevronRight size={12} />
          <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{artwork.title}</span>
        </div>

        {/* Header Card */}
        <motion.div
          className="card-editorial"
          style={{ marginBottom: '2rem' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1, ease: EASE }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '0.5rem', alignItems: 'center' }}>
                <span className="chip chip-neutral" style={{ gap: '3px' }}>
                  {isArch ? <Landmark size={10} /> : <Palette size={10} />}
                  {movement.englishName}
                </span>
                <span className="chip chip-neutral">
                  <Calendar size={10} /> {artwork.date}
                </span>
                {isCustomized && (
                  <span className="chip chip-blue" style={{ fontSize: '0.72rem' }}>
                    {t ? t('artwork.customizedImage', '已自定义图片') : '已自定义图片'}
                  </span>
                )}
              </div>

              <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', margin: '0 0 0.25rem 0' }}>
                {artwork.title}
              </h1>

              <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                {artist.englishName || artist.name}{' '}
                <span style={{ color: 'var(--text-tertiary)' }}>({artist.name})</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <motion.button
                className="btn btn-outline"
                onClick={() => setShowUploadModal(true)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{ padding: '0.45rem 0.85rem', fontSize: '0.84rem' }}
                title="更换或修正此作品图片"
              >
                <Camera size={13} />
                <span>{t ? t('artwork.replaceImage', '更换图片') : '更换图片'}</span>
              </motion.button>

              <motion.button
                className="btn btn-outline"
                onClick={() => toggleFavorite && toggleFavorite(artwork.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{ padding: '0.45rem 0.85rem', fontSize: '0.84rem' }}
              >
                <Heart size={14} fill={isFav ? '#e11d48' : 'none'} color={isFav ? '#e11d48' : 'var(--text-secondary)'} />
                <span>{isFav ? (t ? t('artwork.saved', 'Saved') : 'Saved') : (t ? t('artwork.save', 'Save') : 'Save')}</span>
              </motion.button>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.82rem', color: 'var(--text-tertiary)', borderTop: '1px solid var(--border-hairline)', paddingTop: '0.7rem' }}>
            <MapPin size={13} />
            <span>{artwork.location}</span>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem', alignItems: 'start', marginBottom: '3rem' }}>
          {/* Image Stage */}
          <motion.div
            className="card"
            style={{ padding: '1rem', overflow: 'hidden' }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15, ease: EASE }}
          >
            <div
              style={{
                width: '100%', height: '440px', backgroundColor: 'var(--bg-subtle)',
                borderRadius: 'var(--radius-sm)', overflow: 'hidden',
                cursor: 'zoom-in', position: 'relative'
              }}
              onClick={() => setIsZoomed(true)}
            >
              <ArtworkImage artworkId={artwork.id} alt={artwork.title} fit="contain" showMetaBadge={true} />
              
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowUploadModal(true);
                }}
                style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '10px',
                  padding: '5px 10px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'rgba(0,0,0,0.65)',
                  color: '#fff',
                  fontSize: '0.72rem',
                  backdropFilter: 'blur(6px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  cursor: 'pointer',
                  zIndex: 3
                }}
                title="更换或修正此作品图片"
              >
                <Camera size={12} /> {t ? t('artwork.replaceImage', '更换图片') : '更换图片'}
              </button>

              <div style={{
                position: 'absolute', bottom: '10px', right: '10px',
                padding: '5px 10px', borderRadius: 'var(--radius-sm)',
                backgroundColor: 'rgba(0,0,0,0.6)', color: '#fff',
                fontSize: '0.72rem', backdropFilter: 'blur(6px)',
                display: 'flex', alignItems: 'center', gap: '5px'
              }}>
                <Maximize2 size={11} /> {t ? t('artwork.viewFullSize', 'View full size') : 'View full size'}
              </div>
            </div>
          </motion.div>

          {/* Details Panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Notes */}
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: EASE }}
            >
              <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-tertiary)', fontWeight: 600, marginBottom: '0.5rem' }}>
                {t ? t('artwork.curatorialNotes', 'Curatorial Notes') : 'Curatorial Notes'}
              </div>
              <p style={{ fontSize: '0.94rem', lineHeight: '1.75', color: 'var(--text-primary)', margin: 0 }}>
                {artwork.notes}
              </p>
            </motion.div>

            {/* Knowledge Points */}
            {artwork.knowledgePoints && artwork.knowledgePoints.length > 0 && (
              <motion.div
                className="card"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25, ease: EASE }}
              >
                <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-tertiary)', fontWeight: 600, marginBottom: '0.65rem' }}>
                  {t ? t('artwork.keyPoints', 'Key Examination Points') : 'Key Points'}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {artwork.knowledgePoints.map((kp, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <CheckCircle2 size={14} style={{ color: 'var(--text-primary)', marginTop: '3px', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.88rem', color: 'var(--text-primary)', lineHeight: '1.6' }}>{kp}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* AI Analysis Section */}
        <motion.div
          className="card-editorial"
          style={{ marginBottom: '3rem' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease: EASE }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Bot size={20} style={{ color: 'var(--text-primary)' }} />
              <div>
                <h3 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-serif)', margin: 0 }}>{t ? t('artwork.aiSectionTitle', 'AI Analysis') : 'AI Analysis'}</h3>
                <div style={{ fontSize: '0.76rem', color: 'var(--text-tertiary)' }}>{t ? t('artwork.aiSectionDesc', 'Formal analysis, iconography & historical context') : 'Formal analysis, iconography & historical context'}</div>
              </div>
            </div>

            <motion.button
              className="btn btn-primary"
              onClick={handleAiAnalysis}
              disabled={aiLoading}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {aiLoading ? (
                <>
                  <Loader2 size={14} className="animate-spin" />
                  <span>{t ? t('artwork.aiGenerating', 'Analyzing...') : 'Analyzing...'}</span>
                </>
              ) : (
                <>
                  <Sparkles size={14} />
                  <span>{t ? t('artwork.generateAi', 'Generate AI Analysis') : 'Generate AI Analysis'}</span>
                </>
              )}
            </motion.button>
          </div>

          {aiError && (
            <div style={{ color: 'var(--accent-red)', fontSize: '0.84rem', margin: '0.75rem 0', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <AlertCircle size={14} /> {aiError}
            </div>
          )}

          {aiAnalysis ? (
            <div style={{
              backgroundColor: 'var(--bg-subtle)', padding: '1.25rem',
              borderRadius: 'var(--radius-sm)', marginTop: '0.75rem',
              whiteSpace: 'pre-wrap', lineHeight: '1.8', fontSize: '0.9rem', color: 'var(--text-primary)'
            }}>
              {aiAnalysis}
            </div>
          ) : (
            <div style={{
              backgroundColor: 'var(--bg-subtle)', padding: '1.25rem',
              borderRadius: 'var(--radius-sm)', marginTop: '0.5rem',
              textAlign: 'center', color: 'var(--text-tertiary)', fontSize: '0.84rem'
            }}>
              {t ? t('artwork.aiPlaceholder', 'Click "Generate AI Analysis" to receive an in-depth academic interpretation.') : 'Click "Generate AI Analysis" to receive an in-depth academic interpretation.'}
            </div>
          )}
        </motion.div>

        {/* Fullscreen Lightbox */}
        <AnimatePresence>
          {isZoomed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="modal-backdrop"
              onClick={() => setIsZoomed(false)}
            >
              <motion.button
                className="modal-close"
                onClick={() => setIsZoomed(false)}
                title="Close (ESC)"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15, type: 'spring', stiffness: 300, damping: 20 }}
              >
                <X size={18} />
              </motion.button>

              <motion.div
                initial={{ opacity: 0, scale: 0.92, filter: 'blur(8px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.95, filter: 'blur(4px)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                style={{ maxWidth: '90vw', maxHeight: '90vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                onClick={(e) => e.stopPropagation()}
              >
                <div style={{ maxHeight: '82vh', maxWidth: '90vw', overflow: 'hidden', borderRadius: 'var(--radius-sm)' }}>
                  <ArtworkImage
                    artworkId={artwork.id}
                    alt={artwork.title}
                    fit="contain"
                    style={{ maxHeight: '80vh', maxWidth: '88vw' }}
                  />
                </div>
                <div style={{ marginTop: '0.75rem', textAlign: 'center', color: 'rgba(255,255,255,0.9)' }}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 500 }}>{artwork.title}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>
                    {artist.englishName || artist.name} · {artwork.date} · {artwork.location}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Image Upload Modal */}
        <ImageUploadModal
          isOpen={showUploadModal}
          onClose={() => setShowUploadModal(false)}
          targetType="artwork"
          targetId={artwork.id}
          title={artwork.title}
        />
      </motion.div>
    </MouseSpotlight>
  );
}
