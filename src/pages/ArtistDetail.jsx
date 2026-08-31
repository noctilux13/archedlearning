import React, { useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { artData } from '../data/artData';
import { AppContext } from '../context/AppContext';
import MouseSpotlight from '../components/MouseSpotlight';
import { ArtworkImage } from '../components/ArtworkImage';
import ImageUploadModal from '../components/ImageUploadModal';
import { getAssetUrl } from '../utils/assetUrl';
import { ArrowRight, ChevronRight, Calendar, Landmark, Palette, Camera, Edit3 } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1];

export default function ArtistDetail() {
  const { movementId, id } = useParams();
  const { resolveArtistAvatar, customImages, t, l } = useContext(AppContext) || {};
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [artworkModalTarget, setArtworkModalTarget] = useState(null);

  const movement = artData.find(m => m.id === movementId);
  const artist = movement?.artists.find(a => a.id === id);

  if (!movement || !artist) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '6rem 0' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>{t ? t('artist.notFound', '未找到该大师信息') : 'Artist not found'}</h2>
        <Link to="/" className="btn btn-primary">{t ? t('artist.backOverview', '返回总览') : 'Back to Overview'}</Link>
      </div>
    );
  }

  const isArch = movement.category === 'architecture';
  const defaultAvatarUrl = getAssetUrl(artist.avatar);
  const avatarUrl = resolveArtistAvatar ? resolveArtistAvatar(artist.id, defaultAvatarUrl) : defaultAvatarUrl;
  const isCustomized = Boolean(customImages?.[`artist:${artist.id}`] || customImages?.[artist.id]);

  return (
    <MouseSpotlight>
      <motion.div
        initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.45, ease: EASE }}
        className="container"
      >
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link to="/">{t ? t('movement.backOverview', 'Overview') : 'Overview'}</Link>
          <ChevronRight size={12} />
          <Link to={`/movement/${movement.id}`}>{movement.englishName}</Link>
          <ChevronRight size={12} />
          <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{artist.englishName || artist.name}</span>
        </div>

        {/* Profile Banner */}
        <motion.div
          className={`card-editorial ${isArch ? 'card-highlight-sage' : 'card-highlight-blue'}`}
          style={{ marginBottom: '3rem' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08, ease: EASE }}
        >
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {/* Avatar with hover edit overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.12, ease: EASE }}
              onClick={() => setShowUploadModal(true)}
              style={{
                width: '112px', height: '112px', borderRadius: '50%',
                overflow: 'hidden', backgroundColor: 'var(--bg-subtle)',
                flexShrink: 0, border: '2px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-card)', position: 'relative',
                cursor: 'pointer'
              }}
              title="点击更换/修正肖像图片"
            >
              <img
                src={avatarUrl}
                alt={artist.englishName || artist.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
                decoding="async"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div
                style={{
                  position: 'absolute', inset: 0,
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  opacity: 0, transition: 'opacity 0.2s ease', color: '#fff',
                  fontSize: '0.72rem', fontWeight: 500, backdropFilter: 'blur(2px)'
                }}
                className="hover-reveal"
                onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
              >
                <Camera size={18} style={{ marginBottom: '2px' }} />
                <span>{t ? t('artist.changeAvatar', '更换肖像') : '更换肖像'}</span>
              </div>
            </motion.div>

            <div style={{ flex: '1 1 320px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
                <span className="chip chip-ochre">
                  <Calendar size={11} /> {artist.years}
                </span>
                <span className={isArch ? 'chip chip-green' : 'chip chip-blue'} style={{ gap: '4px' }}>
                  {isArch ? <Landmark size={11} /> : <Palette size={11} />}
                  {movement.englishName}
                </span>
                {isCustomized && (
                  <span className="chip chip-blue" style={{ fontSize: '0.72rem' }}>
                    {t ? t('artist.customizedAvatar', '已自定义肖像') : '已自定义肖像'}
                  </span>
                )}
                <button
                  onClick={() => setShowUploadModal(true)}
                  className="btn btn-outline"
                  style={{ padding: '2px 8px', fontSize: '0.72rem', height: '24px', marginLeft: 'auto', borderRadius: 'var(--radius-pill)' }}
                >
                  <Edit3 size={11} /> {t ? t('artist.changeAvatar', '更换肖像') : '更换肖像'}
                </button>
              </div>

              <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', marginBottom: '0.3rem' }}>
                {artist.englishName || artist.name}{' '}
                <span style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', fontWeight: 400, fontFamily: 'var(--font-sans)' }}>
                  ({artist.name})
                </span>
              </h1>

              <p style={{ fontSize: '0.96rem', lineHeight: '1.8', color: 'var(--text-secondary)', margin: '0.8rem 0 0 0' }}>
                {l ? l(artist, 'bio', 'artists') : artist.bio}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Artist Avatar Upload Modal */}
        <ImageUploadModal
          isOpen={showUploadModal}
          onClose={() => setShowUploadModal(false)}
          targetType="artist"
          targetId={artist.id}
          title={artist.englishName || artist.name}
          currentDefaultUrl={defaultAvatarUrl}
        />

        {/* Artwork Image Upload Modal */}
        {artworkModalTarget && (
          <ImageUploadModal
            isOpen={Boolean(artworkModalTarget)}
            onClose={() => setArtworkModalTarget(null)}
            targetType="artwork"
            targetId={artworkModalTarget.id}
            title={artworkModalTarget.title}
          />
        )}

        {/* Section Title */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          marginBottom: '1.5rem', paddingBottom: '0.6rem',
          borderBottom: '1px solid var(--border-hairline)'
        }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}>
            {t ? t('artist.selectedWorks', 'Selected Works & Landmarks') : 'Selected Works & Landmarks'}
            <span style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-sans)', fontWeight: 400, marginLeft: '0.5rem' }}>
              ({artist.artworks.length})
            </span>
          </h2>
        </div>

        {/* Artworks Grid */}
        <div className="grid">
          {artist.artworks.map((work, wIdx) => {
            const hasCustomImg = Boolean(customImages?.[`artwork:${work.id}`] || customImages?.[work.id]);
            return (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.38, delay: 0.1 + wIdx * 0.04, ease: EASE }}
                whileHover={{ y: -4, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to={`/artwork/${movement.id}/${artist.id}/${work.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
                    <div>
                      {/* Image Stage with Quick Replace Button */}
                      <div className="image-box" style={{ height: '210px', marginBottom: '1.1rem', position: 'relative' }}>
                        <ArtworkImage artworkId={work.id} alt={work.title} className="w-full h-full object-cover" showMetaBadge={true} />
                        
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setArtworkModalTarget(work);
                          }}
                          title="更换/修正此作品图片"
                          className="btn btn-outline"
                          style={{
                            position: 'absolute',
                            top: '8px',
                            right: '8px',
                            zIndex: 4,
                            padding: '3px 9px',
                            fontSize: '0.72rem',
                            backgroundColor: 'rgba(0,0,0,0.65)',
                            color: '#fff',
                            border: '1px solid rgba(255,255,255,0.2)',
                            backdropFilter: 'blur(6px)',
                            borderRadius: 'var(--radius-pill)'
                          }}
                        >
                          <Camera size={11} /> {t ? t('artwork.replaceImage', '更换') : '更换'}
                        </button>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem' }}>
                        <span className="chip chip-ochre">{work.date}</span>
                        {hasCustomImg && (
                          <span className="chip chip-blue" style={{ fontSize: '0.68rem', padding: '1px 6px' }}>
                            {t ? t('artwork.customizedImage', '已自定义') : '已自定义'}
                          </span>
                        )}
                      </div>

                      <h3 style={{ fontSize: '1.12rem', fontFamily: 'var(--font-serif)', marginBottom: '0.25rem', fontWeight: 600 }}>
                        {work.title}
                      </h3>

                      <div style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', marginBottom: '0.75rem' }}>
                        {work.location}
                      </div>

                      {work.notes && (
                        <p style={{
                          color: 'var(--text-secondary)', fontSize: '0.83rem', lineHeight: '1.6',
                          marginBottom: '1rem',
                          display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden'
                        }}>
                          {l ? l(work, 'notes', 'artworks') : work.notes}
                        </p>
                      )}
                    </div>

                    <div style={{
                      borderTop: '1px solid var(--border-hairline)', paddingTop: '0.75rem',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      color: isArch ? 'var(--accent-sage)' : 'var(--accent-blue)',
                      fontWeight: 550, fontSize: '0.82rem'
                    }}>
                      <span>{t ? t('artist.details', 'Inspect & Deep Dive') : 'Inspect & Deep Dive'}</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </MouseSpotlight>
  );
}
