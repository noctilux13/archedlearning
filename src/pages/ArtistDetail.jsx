import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { artData } from '../data/artData';
import MouseSpotlight from '../components/MouseSpotlight';
import { ArtworkImage } from '../components/ArtworkImage';
import { getAssetUrl } from '../utils/assetUrl';
import { ArrowRight, ChevronRight, Calendar, Landmark, Palette } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1];

export default function ArtistDetail() {
  const { movementId, id } = useParams();
  const movement = artData.find(m => m.id === movementId);
  const artist = movement?.artists.find(a => a.id === id);

  if (!movement || !artist) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '6rem 0' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>Artist not found</h2>
        <Link to="/" className="btn btn-primary">Back to Overview</Link>
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
          <Link to="/">Overview</Link>
          <ChevronRight size={12} />
          <Link to={`/movement/${movement.id}`}>{movement.englishName}</Link>
          <ChevronRight size={12} />
          <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{artist.englishName || artist.name}</span>
        </div>

        {/* Profile Banner */}
        <motion.div
          className="card-editorial"
          style={{ marginBottom: '3rem' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1, ease: EASE }}
        >
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.15, ease: EASE }}
              style={{
                width: '100px', height: '100px', borderRadius: '50%',
                overflow: 'hidden', backgroundColor: 'var(--bg-subtle)',
                flexShrink: 0, border: '1px solid var(--border-hairline)',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <img
                src={getAssetUrl(artist.avatar)}
                alt={artist.englishName || artist.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </motion.div>

            <div style={{ flex: '1 1 320px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                <span className="chip chip-neutral">
                  <Calendar size={11} /> {artist.years}
                </span>
                <span className="chip chip-neutral" style={{ gap: '3px' }}>
                  {isArch ? <Landmark size={11} /> : <Palette size={11} />}
                  {movement.englishName}
                </span>
              </div>

              <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', marginBottom: '0.25rem' }}>
                {artist.englishName || artist.name}{' '}
                <span style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', fontWeight: 400, fontFamily: 'var(--font-sans)' }}>
                  ({artist.name})
                </span>
              </h1>

              <p style={{ fontSize: '0.95rem', lineHeight: '1.8', color: 'var(--text-secondary)', margin: '0.75rem 0 0 0' }}>
                {artist.bio}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Section Title */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          marginBottom: '1.5rem', paddingBottom: '0.6rem',
          borderBottom: '1px solid var(--border-hairline)'
        }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}>
            Selected Works
            <span style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-sans)', fontWeight: 400, marginLeft: '0.5rem' }}>
              ({artist.artworks.length})
            </span>
          </h2>
        </div>

        {/* Artworks Grid */}
        <div className="grid">
          {artist.artworks.map((work, wIdx) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.4, delay: 0.15 + wIdx * 0.05, ease: EASE }}
              whileHover={{ y: -5, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to={`/artwork/${movement.id}/${artist.id}/${work.id}`}>
                <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    {/* Image */}
                    <div className="image-box" style={{ height: '200px', marginBottom: '1rem' }}>
                      <ArtworkImage artworkId={work.id} alt={work.title} className="w-full h-full object-cover" showMetaBadge={true} />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                      <span className="chip chip-neutral">{work.date}</span>
                    </div>

                    <h3 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-serif)', marginBottom: '0.25rem', fontWeight: 600 }}>
                      {work.title}
                    </h3>

                    <div style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', marginBottom: '0.7rem' }}>
                      {work.location}
                    </div>

                    {work.notes && (
                      <p style={{
                        color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: '1.6',
                        marginBottom: '1rem',
                        display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden'
                      }}>
                        {work.notes}
                      </p>
                    )}
                  </div>

                  <div style={{
                    borderTop: '1px solid var(--border-hairline)', paddingTop: '0.7rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    color: 'var(--text-primary)', fontWeight: 550, fontSize: '0.82rem'
                  }}>
                    <span>Details</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </MouseSpotlight>
  );
}
