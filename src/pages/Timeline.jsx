import React, { useState, useContext, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { artData } from '../data/artData';
import { AppContext } from '../context/AppContext';
import MouseSpotlight from '../components/MouseSpotlight';
import { ArtworkImage } from '../components/ArtworkImage';
import { getAssetUrl } from '../utils/assetUrl';
import {
  History,
  Calendar,
  Layers,
  Landmark,
  Palette,
  ArrowRight,
  Sparkles,
  ChevronRight,
  User,
  ExternalLink
} from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1];

// Parse numeric starting year for accurate chronological sorting
function getStartYear(yearsStr) {
  if (!yearsStr) return 9999;
  const match = yearsStr.match(/\d{3,4}/);
  return match ? parseInt(match[0], 10) : 9999;
}

export default function Timeline() {
  const { t, l, lArray, resolveArtistAvatar } = useContext(AppContext);
  const [selectedFilter, setSelectedFilter] = useState('all'); // 'all' | 'art' | 'architecture'

  const FILTER_OPTIONS = [
    { key: 'all', label: t ? t('timeline.all', 'All Overview') : 'All Overview', icon: Layers },
    { key: 'art', label: t ? t('timeline.art', 'Art Movements') : 'Art Movements', icon: Palette },
    { key: 'architecture', label: t ? t('timeline.architecture', 'Architecture') : 'Architecture', icon: Landmark },
  ];

  // Chronologically sorted movements
  const sortedMovements = useMemo(() => {
    return [...artData].sort((a, b) => getStartYear(a.years) - getStartYear(b.years));
  }, []);

  const filteredMovements = useMemo(() => {
    if (selectedFilter === 'all') return sortedMovements;
    return sortedMovements.filter(m => m.category === selectedFilter);
  }, [sortedMovements, selectedFilter]);

  return (
    <MouseSpotlight>
      <motion.div
        initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.5, ease: EASE }}
        className="container"
        style={{ maxWidth: '960px', paddingBottom: '5rem' }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="chip chip-neutral" style={{ marginBottom: '0.75rem' }}>
            <History size={12} /> {t ? t('nav.timeline', 'Timeline') : 'Timeline'}
          </div>
          <h1 style={{ marginBottom: '0.4rem' }}>
            {t ? t('timeline.title', 'Chronological Timeline') : 'Chronological Timeline'}
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', maxWidth: '640px', margin: '0 auto 1.75rem auto', lineHeight: '1.6' }}>
            {t ? t('timeline.subtitle', 'Explore the historical evolution spanning Baroque, Neoclassicism, Avant-Garde movements, and Post-War Contemporary Art.') : 'Explore the historical evolution spanning Baroque, Neoclassicism, Avant-Garde movements, and Post-War Contemporary Art.'}
          </p>

          {/* Filter Tab Bar */}
          <div className="tab-bar" style={{ display: 'inline-flex', margin: '0 auto' }}>
            {FILTER_OPTIONS.map((tab) => {
              const Icon = tab.icon;
              const isActive = selectedFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  className={`tab-item ${isActive ? 'active' : ''}`}
                  onClick={() => setSelectedFilter(tab.key)}
                  style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="timeline-filter-indicator"
                      className="tab-indicator"
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.4 }}
                    />
                  )}
                  <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Icon size={13} />
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Timeline Rail & Nodes */}
        <div style={{ position: 'relative', marginTop: '3rem' }}>
          {/* Vertical Center Track Line */}
          <div
            style={{
              position: 'absolute',
              left: '28px',
              top: '15px',
              bottom: '20px',
              width: '2px',
              backgroundColor: 'var(--border-subtle)',
              zIndex: 0
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <AnimatePresence mode="popLayout">
              {filteredMovements.map((movement, index) => {
                const isArch = movement.category === 'architecture';
                const artistsList = movement.artists || [];
                const allWorks = artistsList.flatMap(a => (a.artworks || []).map(w => ({ ...w, artistId: a.id, artistName: a.name })));
                const previewWorks = allWorks.slice(0, 3);

                return (
                  <motion.div
                    key={movement.id}
                    layout
                    initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.45, delay: index * 0.04, ease: EASE }}
                    style={{
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1.5rem',
                      zIndex: 1
                    }}
                  >
                    {/* Milestone Bead Indicator */}
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--bg-surface)',
                        border: '2px solid var(--border-subtle)',
                        boxShadow: 'var(--shadow-card)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        zIndex: 2
                      }}
                    >
                      {isArch ? (
                        <Landmark size={18} style={{ color: 'var(--text-primary)' }} />
                      ) : (
                        <Palette size={18} style={{ color: 'var(--text-primary)' }} />
                      )}
                      <span style={{ fontSize: '0.62rem', fontWeight: 600, color: 'var(--text-tertiary)', marginTop: '2px' }}>
                        {getStartYear(movement.years)}
                      </span>
                    </div>

                    {/* Timeline Event Card */}
                    <div
                      className="card-editorial"
                      style={{
                        flex: 1,
                        padding: '1.5rem',
                        transition: 'box-shadow 0.3s ease',
                      }}
                    >
                      {/* Top Header Row */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.75rem' }}>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.35rem' }}>
                            <span className={`chip ${isArch ? 'chip-neutral' : 'chip-neutral'}`} style={{ fontSize: '0.72rem', padding: '2px 8px' }}>
                              {isArch ? (t ? t('movement.archMovement', 'Architecture') : 'Architecture') : (t ? t('movement.artMovement', 'Art Movement') : 'Art Movement')}
                            </span>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', fontWeight: 550, display: 'flex', alignItems: 'center', gap: '4px' }}>
                              <Calendar size={12} /> {movement.years}
                            </span>
                          </div>

                          <h2 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-serif)', margin: '0 0 0.2rem 0', color: 'var(--text-primary)' }}>
                            {movement.englishName} <span style={{ fontSize: '1rem', fontWeight: 400, color: 'var(--text-secondary)' }}>({movement.name})</span>
                          </h2>
                        </div>

                        <Link
                          to={`/movement/${movement.id}`}
                          className="btn btn-outline"
                          style={{ fontSize: '0.78rem', padding: '0.35rem 0.85rem' }}
                        >
                          <span>{t ? t('timeline.exploreMovement', 'Explore') : 'Explore'}</span>
                          <ArrowRight size={12} />
                        </Link>
                      </div>

                      {/* Description */}
                      <p style={{ fontSize: '0.88rem', lineHeight: '1.68', color: 'var(--text-secondary)', marginBottom: '1.1rem' }}>
                        {l ? l(movement, 'description', 'movements') : movement.description}
                      </p>

                      {/* Key Features Chips */}
                      {movement.keyFeatures && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.25rem' }}>
                          {(lArray ? lArray(movement, 'keyFeatures', 'movements') : movement.keyFeatures).slice(0, 4).map((feat, fidx) => (
                            <span
                              key={fidx}
                              style={{
                                fontSize: '0.74rem',
                                padding: '3px 8px',
                                borderRadius: 'var(--radius-xs)',
                                backgroundColor: 'var(--bg-subtle)',
                                color: 'var(--text-secondary)',
                                border: '1px solid var(--border-hairline)'
                              }}
                            >
                              • {feat}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Masters & Representative Works Section */}
                      <div style={{ borderTop: '1px solid var(--border-hairline)', paddingTop: '1rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                        {/* Representative Masters */}
                        <div>
                          <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--text-tertiary)', fontWeight: 600, marginBottom: '0.6rem' }}>
                            {t ? t('timeline.keyMasters', 'Representative Masters') : 'Representative Masters'} ({artistsList.length})
                          </div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {artistsList.map(artist => {
                              const resolvedAvatar = resolveArtistAvatar(artist.id, getAssetUrl(artist.avatar));
                              return (
                                <Link
                                  key={artist.id}
                                  to={`/artist/${movement.id}/${artist.id}`}
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    padding: '3px 8px',
                                    borderRadius: 'var(--radius-pill)',
                                    backgroundColor: 'var(--bg-subtle)',
                                    border: '1px solid var(--border-hairline)',
                                    textDecoration: 'none',
                                    color: 'var(--text-primary)',
                                    fontSize: '0.76rem',
                                    transition: 'all 0.2s ease'
                                  }}
                                >
                                  <img
                                    src={resolvedAvatar}
                                    alt={artist.name}
                                    style={{ width: '20px', height: '20px', borderRadius: '50%', objectFit: 'cover' }}
                                    loading="lazy"
                                    decoding="async"
                                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                  />
                                  <span style={{ fontWeight: 500 }}>{artist.englishName || artist.name}</span>
                                </Link>
                              );
                            })}
                          </div>
                        </div>

                        {/* Representative Works Thumbnails */}
                        {previewWorks.length > 0 && (
                          <div>
                            <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--text-tertiary)', fontWeight: 600, marginBottom: '0.6rem' }}>
                              {t ? t('timeline.representativeWorks', 'Key Artworks') : 'Key Artworks'}
                            </div>
                            <div style={{ display: 'flex', gap: '8px' }}>
                              {previewWorks.map((work) => (
                                <Link
                                  key={work.id}
                                  to={`/artwork/${movement.id}/${work.artistId}/${work.id}`}
                                  style={{
                                    width: '64px',
                                    height: '64px',
                                    borderRadius: 'var(--radius-xs)',
                                    overflow: 'hidden',
                                    backgroundColor: 'var(--bg-subtle)',
                                    border: '1px solid var(--border-hairline)',
                                    position: 'relative',
                                    display: 'block'
                                  }}
                                  title={`${work.titleEn || work.title} (${work.artistName})`}
                                >
                                  <ArtworkImage artworkId={work.id} alt={work.title} fit="cover" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </MouseSpotlight>
  );
}
