import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { artData } from '../data/artData';
import { AppContext } from '../context/AppContext';
import MouseSpotlight from '../components/MouseSpotlight';
import { ArtworkImage } from '../components/ArtworkImage';
import { getAssetUrl } from '../utils/assetUrl';
import { ArrowRight, ChevronRight, Calendar, Landmark, Palette } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1];

export default function MovementDetail() {
  const { id } = useParams();
  const { resolveArtistAvatar, t } = useContext(AppContext) || {};
  const movement = artData.find(m => m.id === id);

  if (!movement) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '6rem 0' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>{t ? t('movement.notFound', '未找到该流派信息') : 'Movement not found'}</h2>
        <Link to="/" className="btn btn-primary">{t ? t('movement.backOverview', '返回总览') : 'Back to Overview'}</Link>
      </div>
    );
  }

  const isArch = movement.category === 'architecture';

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
          <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{movement.englishName}</span>
        </div>

        {/* Editorial Hero */}
        <motion.div
          className="card-editorial"
          style={{ marginBottom: '3rem' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1, ease: EASE }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <span className="chip chip-neutral" style={{ gap: '4px' }}>
              <Calendar size={11} /> {movement.years}
            </span>
            <span className="chip chip-neutral" style={{ gap: '4px' }}>
              {isArch ? <Landmark size={11} /> : <Palette size={11} />}
              {isArch ? (t ? t('movement.archMovement', 'Architecture') : 'Architecture') : (t ? t('movement.artMovement', 'Art Movement') : 'Art Movement')}
            </span>
          </div>

          <h1 style={{ marginBottom: '0.5rem' }}>
            {movement.englishName}{' '}
            <span style={{ fontSize: '1.4rem', color: 'var(--text-secondary)', fontWeight: 400, fontFamily: 'var(--font-sans)' }}>
              ({movement.name})
            </span>
          </h1>

          <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '1.75rem', maxWidth: '880px' }}>
            {movement.description}
          </p>

          {/* Historical Context */}
          <div style={{
            backgroundColor: 'var(--bg-subtle)', padding: '1.25rem 1.5rem',
            borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem',
            borderLeft: '3px solid var(--accent-primary)'
          }}>
            <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-tertiary)', marginBottom: '0.3rem', fontWeight: 600 }}>
              {t ? t('movement.historicalContext', 'Historical Context') : 'Historical Context'}
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-primary)', lineHeight: '1.7', margin: 0 }}>
              {movement.historicalContext}
            </p>
          </div>

          {/* Key Features */}
          {movement.keyFeatures && (
            <div>
              <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-tertiary)', marginBottom: '0.5rem', fontWeight: 600 }}>
                {t ? t('movement.keyFeatures', 'Key Features') : 'Key Features'}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {movement.keyFeatures.map((feat, idx) => (
                  <span key={idx} className="chip chip-neutral" style={{ fontSize: '0.78rem', padding: '4px 10px' }}>
                    {feat}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Section Title */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          marginBottom: '1.5rem', paddingBottom: '0.6rem',
          borderBottom: '1px solid var(--border-hairline)'
        }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}>
            {t ? t('movement.selectedArtists', 'Key Masters & Architects') : 'Key Masters & Architects'}
          </h2>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
            {movement.artists.length} {t ? t('movement.artistsCount', 'artists') : 'artists'}
          </span>
        </div>

        {/* Artists Grid */}
        <div className="grid">
          {movement.artists.map((artist, aIdx) => {
            const firstArtwork = artist.artworks[0];
            return (
              <motion.div
                key={artist.id}
                initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.4, delay: 0.15 + aIdx * 0.05, ease: EASE }}
                whileHover={{ y: -5, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to={`/artist/${movement.id}/${artist.id}`}>
                  <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      {/* Avatar & Name */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                        <div style={{
                          width: '48px', height: '48px', borderRadius: '50%',
                          overflow: 'hidden', backgroundColor: 'var(--bg-subtle)',
                          flexShrink: 0, border: '1px solid var(--border-hairline)'
                        }}>
                          <img
                            src={resolveArtistAvatar ? resolveArtistAvatar(artist.id, getAssetUrl(artist.avatar)) : getAssetUrl(artist.avatar)}
                            alt={artist.englishName || artist.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            onError={(e) => { e.target.style.display = 'none'; }}
                          />
                        </div>
                        <div>
                          <h3 style={{ fontSize: '1.05rem', fontFamily: 'var(--font-serif)', margin: 0, fontWeight: 600 }}>
                            {artist.englishName || artist.name}
                          </h3>
                          <div style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
                            {artist.name} · {artist.years}
                          </div>
                        </div>
                      </div>

                      {/* Artwork Preview */}
                      {firstArtwork && (
                        <div className="image-box" style={{ height: '140px', marginBottom: '1rem' }}>
                          <ArtworkImage artworkId={firstArtwork.id} alt={firstArtwork.title} className="w-full h-full object-cover" />
                        </div>
                      )}

                      <p style={{
                        color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: '1.6',
                        marginBottom: '1rem',
                        display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden'
                      }}>
                        {artist.bio}
                      </p>
                    </div>

                    <div style={{
                      borderTop: '1px solid var(--border-hairline)', paddingTop: '0.7rem',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      color: 'var(--text-primary)', fontWeight: 550, fontSize: '0.82rem'
                    }}>
                      <span>{artist.artworks.length} {t ? t('artist.worksCount', 'works') : 'works'}</span>
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
