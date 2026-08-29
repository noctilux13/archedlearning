import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { artData } from '../data/artData';
import { AppContext } from '../context/AppContext';
import { generateStudyReport } from '../services/aiService';
import MouseSpotlight from '../components/MouseSpotlight';
import { ArtworkImage } from '../components/ArtworkImage';
import { Trophy, BookOpen, Heart, Sparkles, Bot, Loader2, RotateCcw, AlertCircle, ChevronRight, CheckCircle2, Award } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1];

export default function Dashboard() {
  const { progress, resetProgress, apiKey, t } = useContext(AppContext);
  const [report, setReport] = useState('');
  const [loadingReport, setLoadingReport] = useState(false);
  const [errorReport, setErrorReport] = useState('');

  const allArtworks = artData.flatMap(m =>
    m.artists.flatMap(a =>
      a.artworks.map(w => ({
        ...w,
        artistName: a.name,
        artistId: a.id,
        movementName: m.name,
        movementId: m.id
      }))
    )
  );

  const totalArtworks = allArtworks.length;
  const viewedCount = (progress.viewedArtworks || []).length;
  const viewPercentage = Math.round((viewedCount / totalArtworks) * 100) || 0;
  const masteryPercentage = Math.round(progress.masteryLevel || 0);
  const favoritedArtworks = allArtworks.filter(w => (progress.favorites || []).includes(w.id));

  const handleGenerateReport = async () => {
    setLoadingReport(true);
    setErrorReport('');
    try {
      const res = await generateStudyReport(progress);
      setReport(res);
    } catch (err) {
      setErrorReport(err.message || (t ? t('dashboard.emptyFavorites', 'Report generation failed. Please check API settings.') : 'Report generation failed. Please check API settings.'));
    } finally {
      setLoadingReport(false);
    }
  };

  return (
    <MouseSpotlight>
      <motion.div
        initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.5, ease: EASE }}
        className="container"
        style={{ maxWidth: '920px' }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="chip chip-neutral" style={{ marginBottom: '0.75rem' }}>
            <Award size={11} /> {t ? t('nav.dashboard', 'Dashboard') : 'Dashboard'}
          </div>
          <h1 style={{ marginBottom: '0.3rem' }}>{t ? t('dashboard.title', 'Study Progress') : 'Study Progress'}</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', maxWidth: '560px', margin: '0 auto' }}>
            {t ? t('dashboard.subtitle', 'Track exploration coverage and mastery level across art history and architecture.') : 'Track exploration coverage and mastery level across art history and architecture.'}
          </p>
        </div>

        {/* Metric Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
          {/* Coverage */}
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.4, delay: 0.1, ease: EASE }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <span className="chip chip-blue"><BookOpen size={11} /> {t ? t('dashboard.viewedCount', 'Coverage') : 'Coverage'}</span>
              <span style={{ fontSize: '0.82rem', color: 'var(--accent-blue)', fontWeight: 600 }}>{viewPercentage}%</span>
            </div>
            <div style={{ fontSize: '2.4rem', fontWeight: 600, fontFamily: 'var(--font-serif)', marginBottom: '0.25rem' }}>
              {viewedCount} <span style={{ fontSize: '1rem', color: 'var(--text-tertiary)', fontWeight: 400, fontFamily: 'var(--font-sans)' }}>/ {totalArtworks}</span>
            </div>
            <div style={{ marginTop: '1rem' }}>
              <div style={{ width: '100%', backgroundColor: 'var(--bg-subtle)', height: '4px', borderRadius: 'var(--radius-pill)', overflow: 'hidden' }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${viewPercentage}%` }}
                  transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
                  style={{ backgroundColor: 'var(--accent-blue)', height: '100%', borderRadius: 'var(--radius-pill)' }}
                />
              </div>
            </div>
          </motion.div>

          {/* Mastery */}
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.4, delay: 0.15, ease: EASE }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <span className="chip chip-green"><Trophy size={11} /> {t ? t('dashboard.masteryRate', 'Mastery') : 'Mastery'}</span>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>{(progress.quizScores || []).length} {t ? t('dashboard.quizCount', 'quizzes') : 'quizzes'}</span>
            </div>
            <div style={{ fontSize: '2.4rem', fontWeight: 600, fontFamily: 'var(--font-serif)', marginBottom: '0.25rem' }}>
              {masteryPercentage}%
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '1rem' }}>
              {t ? t('dashboard.masteryDesc', 'Calculated from quiz scores and study exploration coverage.') : 'Calculated from quiz scores and study exploration coverage.'}
            </p>
          </motion.div>
        </div>

        {/* Favorites */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-hairline)' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 500 }}>
              {t ? t('dashboard.favoritesTitle', 'Saved Works') : 'Saved Works'} <span style={{ fontSize: '0.82rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-sans)' }}>({favoritedArtworks.length})</span>
            </h2>
          </div>
          {favoritedArtworks.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}>
              {favoritedArtworks.map((w, idx) => (
                <motion.div
                  key={w.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.25 + idx * 0.04, ease: EASE }}
                  whileHover={{ y: -3, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                >
                  <Link to={`/artwork/${w.movementId}/${w.artistId}/${w.id}`}>
                    <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', padding: '0.85rem' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', backgroundColor: 'var(--bg-subtle)', flexShrink: 0 }}>
                        <ArtworkImage artworkId={w.id} alt={w.title} className="w-full h-full object-cover" />
                      </div>
                      <div style={{ overflow: 'hidden' }}>
                        <h4 style={{ fontSize: '0.88rem', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', fontFamily: 'var(--font-serif)' }}>
                          {w.title}
                        </h4>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)' }}>{w.artistName} · {w.movementName}</div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div style={{ padding: '2rem', backgroundColor: 'var(--bg-surface)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-hairline)', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
              {t ? t('dashboard.emptyFavorites', 'No saved works yet. Click "Save" on any artwork page to curate your collection!') : 'No saved works yet. Click "Save" on any artwork page to curate your collection!'}
            </div>
          )}
        </div>

        {/* AI Report */}
        <motion.div
          className="card-editorial"
          style={{ marginBottom: '2.5rem' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25, ease: EASE }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Bot size={20} style={{ color: 'var(--text-primary)' }} />
              <div>
                <h2 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-serif)', margin: 0 }}>AI Study Report</h2>
                <div style={{ fontSize: '0.76rem', color: 'var(--text-tertiary)' }}>Personalized diagnosis and review strategy</div>
              </div>
            </div>

            <motion.button
              className="btn btn-primary"
              onClick={handleGenerateReport}
              disabled={loadingReport}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {loadingReport ? (
                <><Loader2 size={13} className="animate-spin" /> <span>Generating...</span></>
              ) : (
                <><Sparkles size={13} /> <span>Generate Report</span></>
              )}
            </motion.button>
          </div>

          {errorReport && (
            <div style={{ color: 'var(--accent-red)', fontSize: '0.82rem', margin: '0.75rem 0', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <AlertCircle size={13} /> {errorReport}
            </div>
          )}

          {report ? (
            <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', marginTop: '0.75rem', whiteSpace: 'pre-wrap', lineHeight: '1.8', fontSize: '0.9rem' }}>
              {report}
            </div>
          ) : (
            <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', marginTop: '0.5rem', textAlign: 'center', color: 'var(--text-tertiary)', fontSize: '0.82rem' }}>
              Click "Generate Report" for an AI-powered study diagnosis and review plan.
            </div>
          )}
        </motion.div>

        {/* Reset */}
        <div style={{ textAlign: 'center', borderTop: '1px solid var(--border-hairline)', paddingTop: '1.5rem' }}>
          <motion.button
            className="btn btn-outline"
            onClick={() => { if (window.confirm(t ? t('dashboard.clearConfirm', 'Reset all progress?') : 'Reset all progress?')) resetProgress(); }}
            style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)' }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <RotateCcw size={13} /> {t ? t('dashboard.clearProgress', 'Reset All Progress') : 'Reset All Progress'}
          </motion.button>
        </div>
      </motion.div>
    </MouseSpotlight>
  );
}
