import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { artData } from '../data/artData';
import { AppContext } from '../context/AppContext';
import MouseSpotlight from '../components/MouseSpotlight';
import AIFloatingAssistant from '../components/AIFloatingAssistant';
import { ArtworkImage } from '../components/ArtworkImage';
import { ArrowRight, Search, BookOpen, Layers, Users, X, Landmark, Palette } from 'lucide-react';

// ── Animation Presets (from smooth-interactions-motion skill) ──
const EASE_SPRING = [0.16, 1, 0.3, 1];
const STAGGER_DELAY = 0.05; // 50ms per card

const fadeBlurUp = {
  initial: { opacity: 0, y: 20, filter: 'blur(6px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -10, filter: 'blur(4px)' },
};

export default function Home() {
  const { t, l, lArray } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const CATEGORIES = [
    { key: 'all', label: t('home.all', 'All') },
    { key: 'art', label: t('home.art', 'Art History'), icon: Palette },
    { key: 'architecture', label: t('home.architecture', 'Architecture'), icon: Landmark },
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

  const getCategoryCount = (key) => key === 'all' ? artData.length : artData.filter(m => m.category === key).length;

  return (
    <MouseSpotlight>
      <div className="container">
        {/* ── Hero Section ── */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, ease: EASE_SPRING }}
          style={{ textAlign: 'center', maxWidth: '760px', margin: '1rem auto 3rem auto' }}
        >
          <div className="chip chip-neutral" style={{ marginBottom: '1rem' }}>
            {t('home.tagline', 'Western Art History & European Architecture')}
          </div>

          <h1 style={{ marginBottom: '1rem' }}>
            {t('home.heroTitle', 'Movements, Masters & Masterworks')}
          </h1>

          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1.05rem',
            lineHeight: '1.7',
            maxWidth: '620px',
            margin: '0 auto 2rem auto'
          }}>
            {t('home.heroSubtitle', '从古典巴洛克到当代前卫，从哥特式大教堂到现代主义建筑。构建结构化流派脉络、艺术大师全景档案与核心考点深度解析。')}
          </p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.15, ease: EASE_SPRING }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '1.25rem',
              padding: '8px 20px', borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-hairline)',
              boxShadow: 'var(--shadow-subtle)', marginBottom: '2rem',
              flexWrap: 'wrap', justifyContent: 'center',
              fontSize: '0.84rem', color: 'var(--text-secondary)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Layers size={14} style={{ color: 'var(--text-primary)' }} />
              <span><strong>{artData.length}</strong> {t('home.movementsCount', 'movements')}</span>
            </div>
            <span style={{ color: 'var(--border-subtle)' }}>·</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Users size={14} style={{ color: 'var(--text-primary)' }} />
              <span><strong>{totalArtists}</strong> {t('home.artistsCount', 'artists')}</span>
            </div>
            <span style={{ color: 'var(--border-subtle)' }}>·</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <BookOpen size={14} style={{ color: 'var(--text-primary)' }} />
              <span><strong>{totalArtworks}</strong> {t('home.artworksCount', 'works')}</span>
            </div>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: EASE_SPRING }}
            style={{ maxWidth: '520px', margin: '0 auto 1.5rem auto', position: 'relative' }}
          >
            <Search size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-tertiary)' }} />
            <input
              type="text"
              className="input-field"
              style={{ paddingLeft: '40px', paddingRight: searchTerm ? '40px' : '14px', height: '44px' }}
              placeholder={t('home.searchPlaceholder', 'Search movements, artists, or works...')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--text-tertiary)', cursor: 'pointer', padding: '4px' }}
              >
                <X size={14} />
              </button>
            )}
          </motion.div>

          {/* Category Tabs with layoutId animated indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.25 }}
            className="tab-bar"
          >
            {CATEGORIES.map(cat => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  className={`tab-item ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.key)}
                >
                  {isActive && (
                    <motion.div
                      layoutId="category-tab-indicator"
                      className="tab-indicator"
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.4 }}
                    />
                  )}
                  <span style={{ position: 'relative', zIndex: 1, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    {Icon && <Icon size={12} />}
                    {cat.label} ({getCategoryCount(cat.key)})
                  </span>
                </button>
              );
            })}
          </motion.div>
        </motion.div>

        {/* ── Section Header ── */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          marginBottom: '1.5rem', paddingBottom: '0.6rem',
          borderBottom: '1px solid var(--border-hairline)'
        }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}>
            {activeCategory === 'architecture' ? t('home.architecture', 'Architecture') : activeCategory === 'art' ? t('home.art', 'Art Movements') : t('home.all', 'All Movements')}
          </h2>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
            {filteredMovements.length} {t('home.movementsCount', 'results')}
          </span>
        </div>

        {/* ── Movements Grid with staggered blur entrance ── */}
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
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{t('home.noResultsDesc', 'Try different keywords (e.g. Van Gogh, Gothic, Impressionism, Baroque)')}</p>
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
                      duration: 0.4,
                      delay: idx * STAGGER_DELAY,
                      ease: EASE_SPRING,
                      layout: { type: 'spring', bounce: 0.15, duration: 0.5 }
                    }}
                    whileHover={{ y: -5, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link to={`/movement/${movement.id}`}>
                      <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                          {/* Thumbnail */}
                          {firstArtwork && (
                            <div className="image-box" style={{ height: '160px', marginBottom: '1rem' }}>
                              <ArtworkImage artworkId={firstArtwork.id} alt={firstArtwork.title} className="w-full h-full object-cover" />
                            </div>
                          )}

                          {/* Meta */}
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                            <span className="chip chip-neutral" style={{ gap: '3px' }}>
                              {isArch ? <Landmark size={10} /> : <Palette size={10} />}
                              {movement.years}
                            </span>
                            <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', fontWeight: 500 }}>
                              {movement.artists.length} {t('home.artistsInMovement', 'artists')} · {movement.artists.reduce((sum, a) => sum + a.artworks.length, 0)} {t('home.worksCount', 'works')}
                            </span>
                          </div>

                          {/* Title — English primary */}
                          <h3 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-serif)', marginBottom: '0.15rem', fontWeight: 600 }}>
                            {movement.englishName}
                          </h3>
                          <div style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', marginBottom: '0.6rem' }}>
                            {movement.name}
                          </div>

                          <p style={{
                            color: 'var(--text-secondary)', fontSize: '0.84rem', lineHeight: '1.6',
                            marginBottom: '1rem',
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
                                <span key={fIdx} style={{ fontSize: '0.7rem', padding: '2px 7px', borderRadius: '3px', backgroundColor: 'var(--bg-subtle)', color: 'var(--text-tertiary)' }}>
                                  {feat}
                                </span>
                              ))}
                            </div>
                          )}

                          <div style={{
                            borderTop: '1px solid var(--border-hairline)', paddingTop: '0.75rem',
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            color: 'var(--text-primary)', fontWeight: 550, fontSize: '0.82rem'
                          }}>
                            <span>{t('home.exploreNow', 'Explore')}</span>
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
      <AIFloatingAssistant contextText="用户在流派与建筑史总览主页，可以解答关于西方现代艺术流派与经典建筑史的演变、核心考点问题。" />
    </MouseSpotlight>
  );
}
