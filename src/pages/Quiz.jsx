import React, { useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { AppContext } from '../context/AppContext';
import { getQuizQuestions } from '../data/artData';
import { generateAiQuizFromContent } from '../services/aiService';
import MouseSpotlight from '../components/MouseSpotlight';
import { Brain, AlertCircle, CheckCircle2, XCircle, RotateCcw, Sparkles, Award, ArrowRight, Landmark, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

const EASE = [0.16, 1, 0.3, 1];

export default function Quiz() {
  const { apiKey, addQuizScore, t } = useContext(AppContext);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [finished, setFinished] = useState(false);
  const [loading, setLoading] = useState(false);
  const [aiGenerated, setAiGenerated] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const CATEGORIES = [
    { key: 'all', label: t ? t('quiz.all', 'All Modules') : 'All Modules' },
    { key: 'architecture', label: t ? t('quiz.architecture', 'Architecture Exam') : 'Architecture Exam', icon: Landmark },
    { key: 'art', label: t ? t('quiz.art', 'Art History') : 'Art History', icon: Palette },
  ];

  useEffect(() => { loadQuestions(selectedCategory); }, [selectedCategory]);

  const loadQuestions = (cat = 'all') => {
    const qs = getQuizQuestions(cat);
    setQuestions(qs);
    setCurrentIdx(0);
    setScore(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setFinished(false);
    setAiGenerated(false);
    setErrorMsg('');
  };

  const handleGenerateAiQuiz = async () => {
    setLoading(true);
    setErrorMsg('');
    try {
      const promptContext = selectedCategory === 'architecture'
        ? 'focus on Romanesque, Gothic, Renaissance, Baroque, and Modernist European architecture'
        : 'focus on 20th century modern art movements and avant-garde manifestos';
      const aiQs = await generateAiQuizFromContent(promptContext, 5);
      if (Array.isArray(aiQs) && aiQs.length > 0) {
        setQuestions(aiQs);
        setCurrentIdx(0);
        setScore(0);
        setSelectedOption(null);
        setShowExplanation(false);
        setFinished(false);
        setAiGenerated(true);
      } else {
        throw new Error('Invalid AI response format');
      }
    } catch (err) {
      console.error(err);
      setErrorMsg('AI quiz generation failed. Using built-in Italian entrance exam questions.');
      loadQuestions(selectedCategory);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectOption = (idx) => {
    if (selectedOption !== null) return;
    setSelectedOption(idx);
    setShowExplanation(true);
    if (idx === questions[currentIdx].correctAnswer) setScore(prev => prev + 1);
  };

  const handleNextQuestion = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      const finalScore = selectedOption === questions[currentIdx].correctAnswer ? score : score;
      const percentage = Math.round((finalScore / questions.length) * 100);
      addQuizScore(percentage);
      setFinished(true);
      try { confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } }); } catch (e) {}
    }
  };

  // Loading
  if (loading) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '6rem 0' }}>
        <Sparkles size={32} className="animate-spin" style={{ color: 'var(--accent-blue)', marginBottom: '1rem', display: 'inline-block' }} />
        <h2 style={{ fontFamily: 'var(--font-serif)', marginBottom: '0.4rem' }}>{t ? t('quiz.aiGenerating', 'Generating AI Quiz...') : 'Generating AI Quiz...'}</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>{t ? t('quiz.startAiQuiz', 'AI is crafting exam questions from the art & architecture syllabus.') : 'AI is crafting exam questions.'}</p>
      </div>
    );
  }

  // Finished
  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <MouseSpotlight>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="container"
          style={{ maxWidth: '600px', textAlign: 'center', padding: '3rem 1.5rem' }}
        >
          <div className="card-editorial" style={{ padding: '2.8rem 2rem' }}>
            <Award size={48} style={{ color: 'var(--accent-ochre)', marginBottom: '1rem' }} />
            <h1 style={{ fontSize: '2.1rem', marginBottom: '0.35rem' }}>{t ? t('quiz.resultsTitle', 'Quiz Completed!') : 'Quiz Complete'}</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', marginBottom: '1.8rem' }}>
              {percentage === 100 ? (t ? t('quiz.perfectScore', 'Flawless! 🏆 Perfect Score') : 'Flawless! 🏆 Perfect Score') : percentage >= 70 ? (t ? t('quiz.goodScore', 'Great Job! 🎉 Excellent Recall') : 'Great Job! 🎉 Excellent Recall') : (t ? t('quiz.passScore', 'Keep reviewing key points! 👍') : 'Keep reviewing key points! 👍')}
            </p>

            <div style={{ backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)', padding: '1.6rem', marginBottom: '1.8rem', border: '1px solid var(--border-hairline)' }}>
              <div style={{ fontSize: '3.2rem', fontWeight: 600, fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                {score} <span style={{ fontSize: '1.3rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-sans)', fontWeight: 400 }}>/ {questions.length}</span>
              </div>
              <div style={{ fontSize: '0.92rem', fontWeight: 550, color: 'var(--text-secondary)', marginTop: '0.3rem' }}>
                {t ? t('quiz.score', 'Score') : 'Accuracy'}: <strong style={{ color: 'var(--text-primary)' }}>{percentage}%</strong>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.button className="btn btn-outline" onClick={() => loadQuestions(selectedCategory)} whileHover={{ scale: 1.025, y: -1 }} whileTap={{ scale: 0.975 }} style={{ borderRadius: 'var(--radius-pill)' }}>
                <RotateCcw size={14} /> {t ? t('quiz.restartQuiz', 'Retry Quiz') : 'Retry Quiz'}
              </motion.button>
              <motion.button className="btn btn-primary" onClick={handleGenerateAiQuiz} whileHover={{ scale: 1.025, y: -1 }} whileTap={{ scale: 0.975 }} style={{ borderRadius: 'var(--radius-pill)' }}>
                <Sparkles size={14} /> {t ? t('quiz.startAiQuiz', 'Generate AI Quiz') : 'Generate AI Quiz'}
              </motion.button>
              <Link to="/dashboard" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', borderRadius: 'var(--radius-pill)' }}>
                {t ? t('quiz.viewDashboard', 'View Dashboard') : 'View Dashboard'}
              </Link>
            </div>
          </div>
        </motion.div>
      </MouseSpotlight>
    );
  }

  const currentQ = questions[currentIdx];
  if (!currentQ) return null;

  return (
    <MouseSpotlight>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="container"
        style={{ maxWidth: '740px' }}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.6rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="chip chip-terracotta" style={{ marginBottom: '0.45rem' }}>
              <Brain size={11} /> {t ? t('nav.quiz', 'Quiz') : 'Italian Entrance Exam Quiz'}
            </div>
            <h1 style={{ fontSize: '1.85rem', margin: 0 }}>{t ? t('quiz.title', 'Knowledge Check') : 'Knowledge Check'}</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: '0.25rem 0 0 0' }}>{t ? t('quiz.subtitle', 'Test your architectural & art history understanding') : 'Test your architectural & art history understanding'}</p>
          </div>

          <motion.button
            className="btn btn-primary"
            onClick={handleGenerateAiQuiz}
            disabled={loading}
            whileHover={{ scale: 1.025, y: -1 }}
            whileTap={{ scale: 0.975 }}
            style={{ borderRadius: 'var(--radius-pill)' }}
          >
            <Sparkles size={13} /> {t ? t('quiz.startAiQuiz', 'AI Quiz Generator') : 'AI Quiz Generator'}
          </motion.button>
        </div>

        {/* Category Tabs */}
        <div className="tab-bar" style={{ marginBottom: '1.6rem', borderRadius: 'var(--radius-pill)', padding: '4px' }}>
          {CATEGORIES.map(cat => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                className={`tab-item ${isActive ? 'active' : ''}`}
                style={{ borderRadius: 'var(--radius-pill)', padding: '6px 16px' }}
                onClick={() => setSelectedCategory(cat.key)}
              >
                {isActive && (
                  <motion.div
                    layoutId="quiz-tab-indicator"
                    className="tab-indicator"
                    style={{ borderRadius: 'var(--radius-pill)' }}
                    transition={{ type: 'spring', bounce: 0.16, duration: 0.42 }}
                  />
                )}
                <span style={{ position: 'relative', zIndex: 1, display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  {Icon && <Icon size={12} style={{ color: isActive ? (cat.key === 'architecture' ? 'var(--accent-sage)' : 'var(--accent-blue)') : 'inherit' }} />}
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>

        {errorMsg && (
          <div style={{ backgroundColor: 'var(--accent-terracotta-subtle)', color: 'var(--accent-terracotta)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.84rem', border: '1px solid var(--accent-terracotta-border)' }}>
            <AlertCircle size={14} /> {errorMsg}
          </div>
        )}

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.28, ease: EASE }}
            className="card-editorial"
            style={{ padding: '2.2rem' }}
          >
            {/* Progress Bar Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-tertiary)', fontSize: '0.82rem', fontWeight: 550, marginBottom: '1.1rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)' }}>{t ? t('quiz.questionPrefix', 'Question') : 'Question'} {currentIdx + 1} / {questions.length}</span>
              <span className="chip chip-neutral">{t ? t('quiz.score', 'Score') : 'Score'}: {score}</span>
            </div>

            <h2 style={{ fontSize: '1.2rem', marginBottom: '1.8rem', lineHeight: '1.6', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
              {currentQ.text}
            </h2>

            {/* Options */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.6rem' }}>
              {currentQ.options.map((opt, idx) => {
                let optStyle = {
                  justifyContent: 'space-between',
                  padding: '0.9rem 1.25rem',
                  fontSize: '0.92rem',
                  borderRadius: 'var(--radius-sm)',
                  textAlign: 'left',
                  border: '1px solid var(--border-subtle)',
                  backgroundColor: 'var(--bg-surface)',
                  color: 'var(--text-primary)'
                };

                let isSelected = selectedOption === idx;
                let isCorrect = idx === currentQ.correctAnswer;

                if (selectedOption !== null) {
                  if (isCorrect) {
                    optStyle.backgroundColor = 'var(--accent-sage-subtle)';
                    optStyle.borderColor = 'var(--accent-sage-border)';
                    optStyle.color = 'var(--accent-sage)';
                  } else if (isSelected) {
                    optStyle.backgroundColor = 'var(--accent-terracotta-subtle)';
                    optStyle.borderColor = 'var(--accent-terracotta-border)';
                    optStyle.color = 'var(--accent-terracotta)';
                  }
                }

                return (
                  <button
                    key={idx}
                    className="btn"
                    style={optStyle}
                    onClick={() => handleSelectOption(idx)}
                    disabled={selectedOption !== null}
                  >
                    <span><strong>{String.fromCharCode(65 + idx)}.</strong> {opt}</span>
                    {selectedOption !== null && isCorrect && <CheckCircle2 size={17} style={{ color: 'var(--accent-sage)' }} />}
                    {selectedOption !== null && isSelected && !isCorrect && <XCircle size={17} style={{ color: 'var(--accent-terracotta)' }} />}
                  </button>
                );
              })}
            </div>

            {/* Explanation */}
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: EASE }}
                style={{ borderTop: '1px solid var(--border-hairline)', paddingTop: '1.1rem', marginTop: '1.1rem' }}
              >
                <div style={{ marginBottom: '1.35rem', backgroundColor: 'var(--bg-subtle)', padding: '1rem 1.2rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-hairline)' }}>
                  <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--accent-blue)', fontWeight: 650, marginBottom: '0.3rem' }}>
                    {t ? t('quiz.explanation', 'Academic Explanation:') : 'Academic Explanation:'}
                  </div>
                  <span style={{ color: 'var(--text-primary)', fontSize: '0.9rem', lineHeight: '1.65' }}>
                    {currentQ.explanation || (t ? t('quiz.explanation', 'Review the historical context.') : 'Review the historical context.')}
                  </span>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <motion.button className="btn btn-primary" onClick={handleNextQuestion} whileHover={{ scale: 1.025, y: -1 }} whileTap={{ scale: 0.975 }} style={{ borderRadius: 'var(--radius-pill)' }}>
                    <span>{currentIdx + 1 === questions.length ? (t ? t('quiz.finishQuiz', 'View Results') : 'View Results') : (t ? t('quiz.nextQuestion', 'Next Question') : 'Next Question')}</span>
                    <ArrowRight size={14} />
                  </motion.button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </MouseSpotlight>
  );
}
