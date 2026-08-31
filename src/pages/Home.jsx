import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { artData } from '../data/artData';
import { AppContext } from '../context/AppContext';
import MouseSpotlight from '../components/MouseSpotlight';
import { ArtworkImage } from '../components/ArtworkImage';
import { ArrowRight, Search, BookOpen, Layers, Users, X, Landmark, Palette, Sparkles } from 'lucide-react';

const EASE_SPRING = [0.16, 1, 0.3, 1];
const STAGGER_DELAY = 0.04;

const fadeBlurUp = {
  initial: { opacity: 0, y: 16, filter: 'blur(6px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -8, filter: 'blur(4px)' },
};

export default function Home() {
  const { t, l, lArray } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const CATEGORIES = [
    { key: 'all', label: t('home.all', 'All'), count: artData.length },
    { key: 'art', label: t('home.art', 'Art History'), icon: Palette, count: artData.filter(m => m.category === 'art').length, badgeClass: 'chip-blue' },
    { key: 'architecture', label: t('home.architecture', 'Architecture'), icon: Landmark, count: artData.filter(m => m.category === 'architecture').length, badgeClass: 'chip-green' },
  ];

  const totalArtists = artData.reduce((acc, m) => acc + m.artists.length, 0);
  const totalArtworks = artData.reduce((acc, m) => acc + m.artists.reduce((a2, a) => a2 + a.artworks.length, 0), 0);

  const filteredMovements = artData.filter(m => {
    if (activeCategory !== 'all' && m.category !== activeCategory) return false;
    const term = searchTerm.toLowerCase().trim();
    if (!term) return true;
    const matchesMovement = m.name.toLowerCase().includes(term) || m.englishName.toLowerCase().includes(term);
    const matchesArtist = m.artists.some(a => a.name.toLowerCase().includes(term) || a.englishName.toLowerCase().includes(term));
    const matchesArtwork = m.artists.some(a => a.artworks.some(w => w.title.toLowerCase().includes(term) || (w.notes && w.notes.toLowerCase().includes(term))));
    return matchesMovement || matchesArtist || matchesArtwork;
  });

  return (
    <MouseSpotlight>
      <div className="container">
        {/* ── Hero Section ── */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.5, ease: EASE_SPRING }}
          style={{ textAlign: 'center', maxWidth: '780px', margin: '1.2rem auto 3rem auto' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '1.2rem' }}>
            <span className="chip chip-blue" style={{ fontSize: '0.72rem', textTransform: 'uppercase' }}>
              <Palette size={11} />
              {t('home.artBadge', 'Art History')}
            </span>
            <span style={{ color: 'var(--text-tertiary)' }}>+</span>
            <span className="chip chip-green" style={{ fontSize: '0.72rem', textTransform: 'uppercase' }}>
              <Landmark size={11} />
              {t('home.archBadge', 'Architecture')}
            </span>
          </div>

          <h1 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>
            {t('home.heroTitle', 'Movements, Masters & Architecture')}
          </h1>

          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1.02rem',
            lineHeight: '1.7',
            maxWidth: '640px',
            margin: '0 auto 2.2rem auto'
          }}>
            {t('home.heroSubtitle', '从古典巴洛克到当代前卫，从哥特式大教堂到现代主义建筑。构建结构化流派脉络、艺术大师全景档案与核心考点深度解析。')}
          </p>

          {/* Quick Stats Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.12, ease: EASE_SPRING }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '1.4rem',
              padding: '7px 22px', borderRadius: 'var(--radius-pill)',
              backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-hairline)',
              boxShadow: 'var(--shadow-subtle)', marginBottom: '2rem',
              flexWrap: 'wrap', justifyContent: 'center',
              fontSize: '0.84rem', color: 'var(--text-secondary)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Layers size={14} style={{ color: 'var(--accent-blue)' }} />
              <span><strong>{artData.length}</strong> {t('home.movementsCount', 'movements')}</span>
            </div>
            <span style={{ color: 'var(--border-subtle)' }}>·</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Users size={14} style={{ color: 'var(--accent-sage)' }} />
              <span><strong>{totalArtists}</strong> {t('home.artistsCount', 'masters')}</span>
            </div>
            <span style={{ color: 'var(--border-subtle)' }}>·</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <BookOpen size={14} style={{ color: 'var(--accent-terracotta)' }} />
              <span><strong>{totalArtworks}</strong> {t('home.artworksCount', 'landmarks & works')}</span>
            </div>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.18, ease: EASE_SPRING }}
            style={{ maxWidth: '520px', margin: '0 auto 1.5rem auto', position: 'relative' }}
          >
            <Search size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-tertiary)' }} />
            <input
              type="text"
              className="input-field"
              style={{
                paddingLeft: '40px',
                paddingRight: searchTerm ? '40px' : '14px',
                height: '44px',
                borderRadius: 'var(--radius-pill)',
                boxShadow: 'var(--shadow-subtle)'
              }}
              placeholder={t('home.searchPlaceholder', 'Search movements, artists, landmarks, or works...')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                style={{
                  position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)',
                  background: 'none', border: 'none', color: 'var(--text-tertiary)', cursor: 'pointer', padding: '4px'
                }}
              >
                <X size={14} />
              </button>
            )}
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.22 }}
            className="tab-bar"
            style={{ borderRadius: 'var(--radius-pill)', padding: '4px' }}
          >
            {CATEGORIES.map(cat => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  className={`tab-item ${isActive ? 'active' : ''}`}
                  style={{ borderRadius: 'var(--radius-pill)', padding: '6px 16px' }}
                  onClick={() => setActiveCategory(cat.key)}
                >
                  {isActive && (
                    <motion.div
                      layoutId="category-tab-indicator"
                      className="tab-indicator"
                      style={{ borderRadius: 'var(--radius-pill)' }}
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.4 }}
                    />
                  )}
                  <span style={{ position: 'relative', zIndex: 1, display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                    {Icon && <Icon size={13} style={{ color: isActive ? (cat.key === 'architecture' ? 'var(--accent-sage)' : 'var(--accent-blue)') : 'inherit' }} />}
                    {cat.label} ({cat.count})
                  </span>
                </button>
              );
            })}
          </motion.div>
        </motion.div>

        {/* ── Section Header ── */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          marginBottom: '1.6rem', paddingBottom: '0.6rem',
          borderBottom: '1px solid var(--border-hairline)'
        }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>{activeCategory === 'architecture' ? t('home.architecture', 'Architecture') : activeCategory === 'art' ? t('home.art', 'Art Movements') : t('home.all', 'All Movements')}</span>
            <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-sans)', color: 'var(--text-tertiary)', fontWeight: 400 }}>
              ({filteredMovements.length})
            </span>
          </h2>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
            {t('home.academicCurated', 'Curated Academic Catalog')}
          </span>
        </div>

        {/* ── Movements Bento Grid ── */}
        {filteredMovements.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '4rem 1rem',
            backgroundColor: 'var(--bg-surface)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-hairline)',
            margin: '1rem 0'
          }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>{t('home.noResultsTitle', 'No matching items found')}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{t('home.noResultsDesc', 'Try different keywords (e.g. Brunelleschi, Gothic, Duchamp, Baroque)')}</p>
            <button className="btn btn-outline" onClick={() => { setSearchTerm(''); setActiveCategory('all'); }}>
              {t('home.resetSearch', 'Reset Search')}
            </button>
          </div>
        ) : (
          <div className="grid">
            <AnimatePresence mode="popLayout">
              {filteredMovements.map((movement, idx) => {
                const firstArtwork = movement.artists[0]?.artworks[0];
                const isArch = movement.category === 'architecture';
                return (
                  <motion.div
                    key={movement.id}
                    layout
                    {...fadeBlurUp}
                    transition={{
                      duration: 0.38,
                      delay: idx * STAGGER_DELAY,
                      ease: EASE_SPRING,
                      layout: { type: 'spring', bounce: 0.15, duration: 0.5 }
                    }}
                    whileHover={{ y: -4, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link to={`/movement/${movement.id}`}>
                      <div
                        className={`card ${isArch ? 'card-highlight-sage' : 'card-highlight-blue'}`}
                        style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                      >
                        <div>
                          {/* Image Box 16:10 Frame */}
                          {firstArtwork && (
                            <div className="image-box" style={{ height: '175px', marginBottom: '1.1rem' }}>
                              <ArtworkImage artworkId={firstArtwork.id} alt={firstArtwork.title} className="w-full h-full object-cover" />
                            </div>
                          )}

                          {/* Meta Badges */}
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
                            <span className={isArch ? 'chip chip-green' : 'chip chip-blue'} style={{ gap: '4px' }}>
                              {isArch ? <Landmark size={11} /> : <Palette size={11} />}
                              {movement.years}
                            </span>
                            <span style={{ fontSize: '0.74rem', color: 'var(--text-tertiary)', fontWeight: 500 }}>
                              {movement.artists.length} {t('home.artistsInMovement', 'masters')} · {movement.artists.reduce((sum, a) => sum + a.artworks.length, 0)} {t('home.worksCount', 'works')}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 style={{ fontSize: '1.18rem', fontFamily: 'var(--font-serif)', marginBottom: '0.2rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                            {movement.englishName}
                          </h3>
                          <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', marginBottom: '0.75rem' }}>
                            {movement.name}
                          </div>

                          <p style={{
                            color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.6',
                            marginBottom: '1.1rem',
                            display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden'
                          }}>
                            {l(movement, 'description', 'movements')}
                          </p>
                        </div>

                        {/* Footer */}
                        <div>
                          {movement.keyFeatures && (
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '1rem' }}>
                              {lArray(movement, 'keyFeatures', 'movements').slice(0, 2).map((feat, fIdx) => (
                                <span key={fIdx} style={{ fontSize: '0.72rem', padding: '2px 8px', borderRadius: '4px', backgroundColor: 'var(--bg-subtle)', color: 'var(--text-secondary)' }}>
                                  {feat}
                                </span>
                              ))}
                            </div>
                          )}

                          <div style={{
                            borderTop: '1px solid var(--border-hairline)', paddingTop: '0.85rem',
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            color: isArch ? 'var(--accent-sage)' : 'var(--accent-blue)',
                            fontWeight: 550, fontSize: '0.83rem'
                          }}>
                            <span>{t('home.exploreNow', 'Explore movement')}</span>
                            <ArrowRight size={14} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </div>
    </MouseSpotlight>
  );
}
