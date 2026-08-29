import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { artData } from '../data/artData';
import MouseSpotlight from '../components/MouseSpotlight';
import { ArtworkImage } from '../components/ArtworkImage';
import { RotateCw, ArrowLeft, ArrowRight, Shuffle, Layers, Palette, Landmark } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1];

const CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'art', label: 'Art', icon: Palette },
  { key: 'architecture', label: 'Architecture', icon: Landmark },
];

export default function Flashcards() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getAllCards = (category) => {
    let pool = artData;
    if (category !== 'all') pool = artData.filter(m => m.category === category);
    return pool.flatMap(m =>
      m.artists.flatMap(a =>
        a.artworks.map(w => ({
          ...w,
          artistName: a.name,
          artistEnglish: a.englishName,
          movementName: m.name,
          category: m.category
        }))
      )
    );
  };

  const [cards, setCards] = useState(() => getAllCards('all'));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCards(getAllCards(cat));
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const currentCard = cards[currentIndex];

  const handleNext = () => { setIsFlipped(false); setCurrentIndex((prev) => (prev + 1) % cards.length); };
  const handlePrev = () => { setIsFlipped(false); setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length); };
  const handleShuffle = () => {
    setIsFlipped(false);
    setCards([...cards].sort(() => Math.random() - 0.5));
    setCurrentIndex(0);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space') { e.preventDefault(); setIsFlipped(f => !f); }
      else if (e.key === 'ArrowRight') handleNext();
      else if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [cards.length]);

  return (
    <MouseSpotlight>
      <motion.div
        initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.5, ease: EASE }}
        className="container"
        style={{ maxWidth: '820px' }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div className="chip chip-neutral" style={{ marginBottom: '0.75rem' }}>
            <Layers size={11} /> Flashcards
          </div>
          <h1 style={{ marginBottom: '0.35rem' }}>
            Study Cards
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
            <strong>Space</strong> to flip · <strong>← →</strong> to navigate
          </p>

          {/* Category Tabs with layoutId */}
          <div className="tab-bar">
            {CATEGORIES.map(cat => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  className={`tab-item ${isActive ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(cat.key)}
                >
                  {isActive && (
                    <motion.div
                      layoutId="flashcard-tab-indicator"
                      className="tab-indicator"
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.4 }}
                    />
                  )}
                  <span style={{ position: 'relative', zIndex: 1, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    {Icon && <Icon size={11} />}
                    {cat.label} ({getAllCards(cat.key).length})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {cards.length > 0 && currentCard ? (
          <div>
            {/* 3D Flip Card */}
            <div
              style={{ perspective: '1200px', margin: '0 auto', maxWidth: '600px', height: '460px', cursor: 'pointer' }}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <motion.div
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                style={{ width: '100%', height: '100%', position: 'relative', transformStyle: 'preserve-3d' }}
              >
                {/* Front */}
                <div className="card" style={{
                  position: 'absolute', width: '100%', height: '100%',
                  backfaceVisibility: 'hidden',
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  padding: '1.75rem', boxShadow: 'var(--shadow-card-hover)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="chip chip-neutral">
                      {currentCard.category === 'architecture' ? 'Architecture' : 'Artwork'}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>
                      {currentIndex + 1}/{cards.length}
                    </span>
                  </div>

                  <div style={{ 
                    height: '310px', 
                    borderRadius: 'var(--radius-sm)', 
                    overflow: 'hidden', 
                    backgroundColor: 'var(--bg-subtle)', 
                    margin: '0.75rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '8px'
                  }}>
                    <ArtworkImage 
                      artworkId={currentCard.id} 
                      alt="Identify this work" 
                      fit="contain" 
                      className="w-full h-full"
                    />
                  </div>

                  <div style={{ textAlign: 'center', color: 'var(--text-tertiary)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                    <RotateCw size={12} /> Tap or press Space to reveal
                  </div>
                </div>

                {/* Back */}
                <div className="card" style={{
                  position: 'absolute', width: '100%', height: '100%',
                  backfaceVisibility: 'hidden', transform: 'rotateY(180deg)',
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  padding: '1.75rem', boxShadow: 'var(--shadow-card-hover)',
                  backgroundColor: 'var(--bg-surface)', overflowY: 'auto'
                }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                      <span className="chip chip-neutral">{currentCard.movementName}</span>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>{currentCard.date}</span>
                    </div>

                    <h2 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-serif)', marginBottom: '0.3rem' }}>
                      {currentCard.title}
                    </h2>

                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.6rem', fontWeight: 500 }}>
                      {currentCard.artistEnglish} ({currentCard.artistName})
                    </div>

                    <div style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', marginBottom: '1rem' }}>
                      {currentCard.location}
                    </div>

                    {currentCard.notes && (
                      <p style={{
                        fontSize: '0.84rem', lineHeight: '1.6', color: 'var(--text-primary)',
                        backgroundColor: 'var(--bg-subtle)', padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-sm)', marginBottom: '0.75rem'
                      }}>
                        {currentCard.notes}
                      </p>
                    )}

                    {currentCard.knowledgePoints && currentCard.knowledgePoints.length > 0 && (
                      <div>
                        <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--text-tertiary)', fontWeight: 600, marginBottom: '0.3rem', letterSpacing: '0.04em' }}>
                          Key Points
                        </div>
                        <ul style={{ margin: 0, paddingLeft: '1.1rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                          {currentCard.knowledgePoints.map((kp, kIdx) => (
                            <li key={kIdx} style={{ marginBottom: '3px' }}>{kp}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div style={{ textAlign: 'center', color: 'var(--text-tertiary)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', marginTop: '0.5rem' }}>
                    <RotateCw size={12} /> Tap to flip back
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem', marginTop: '1.75rem' }}>
              <motion.button className="btn btn-outline" onClick={handlePrev} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <ArrowLeft size={14} /> Prev
              </motion.button>
              <motion.button className="btn btn-outline" onClick={handleShuffle} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Shuffle size={14} /> Shuffle
              </motion.button>
              <motion.button className="btn btn-primary" onClick={handleNext} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                Next <ArrowRight size={14} />
              </motion.button>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-tertiary)' }}>
            No cards found
          </div>
        )}
      </motion.div>
    </MouseSpotlight>
  );
}
