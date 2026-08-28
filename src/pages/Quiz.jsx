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

const CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'architecture', label: 'Architecture', icon: Landmark },
  { key: 'art', label: 'Art', icon: Palette },
];

export default function Quiz() {
  const { apiKey, addQuizScore } = useContext(AppContext);

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
        ? 'focus on Baroque, Neoclassical, Industrial, Art Nouveau, and Expressionist architecture'
        : 'focus on 20th century modern art movements';
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
      setErrorMsg('AI quiz generation failed. Using built-in questions.');
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
        <Sparkles size={32} className="animate-spin" style={{ color: 'var(--text-primary)', marginBottom: '1rem', display: 'inline-block' }} />
        <h2 style={{ fontFamily: 'var(--font-serif)', marginBottom: '0.4rem' }}>Generating Quiz...</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>AI is crafting questions from the curriculum.</p>
      </div>
    );
  }

  // Finished
  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <MouseSpotlight>
        <motion.div
          initial={{ opacity: 0, scale: 0.96, filter: 'blur(6px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.5, ease: EASE }}
          className="container"
          style={{ maxWidth: '580px', textAlign: 'center', padding: '3rem 1.5rem' }}
        >
          <div className="card-editorial" style={{ padding: '2.5rem 2rem' }}>
            <Award size={48} style={{ color: 'var(--text-primary)', marginBottom: '1rem' }} />
            <h1 style={{ fontSize: '2rem', marginBottom: '0.3rem' }}>Quiz Complete</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.75rem' }}>
              {aiGenerated ? 'AI-generated quiz' : 'Standard quiz'}
            </p>

            <div style={{ backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)', padding: '1.5rem', marginBottom: '1.75rem' }}>
              <div style={{ fontSize: '3rem', fontWeight: 600, fontFamily: 'var(--font-serif)' }}>
                {score} <span style={{ fontSize: '1.2rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-sans)', fontWeight: 400 }}>/ {questions.length}</span>
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                Accuracy: <strong>{percentage}%</strong>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.button className="btn btn-outline" onClick={() => loadQuestions(selectedCategory)} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <RotateCcw size={14} /> Retry
              </motion.button>
              <motion.button className="btn btn-primary" onClick={handleGenerateAiQuiz} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Sparkles size={14} /> New AI Quiz
              </motion.button>
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
        initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.5, ease: EASE }}
        className="container"
        style={{ maxWidth: '720px' }}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="chip chip-neutral" style={{ marginBottom: '0.4rem' }}>
              <Brain size={11} /> Quiz
            </div>
            <h1 style={{ fontSize: '1.8rem', margin: 0 }}>Knowledge Check</h1>
          </div>

          <motion.button
            className="btn btn-primary"
            onClick={handleGenerateAiQuiz}
            disabled={loading}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Sparkles size={13} /> AI Quiz
          </motion.button>
        </div>

        {/* Category Tabs */}
        <div className="tab-bar" style={{ marginBottom: '1.5rem' }}>
          {CATEGORIES.map(cat => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                className={`tab-item ${isActive ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.key)}
              >
                {isActive && (
                  <motion.div
                    layoutId="quiz-tab-indicator"
                    className="tab-indicator"
                    transition={{ type: 'spring', bounce: 0.15, duration: 0.4 }}
                  />
                )}
                <span style={{ position: 'relative', zIndex: 1, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  {Icon && <Icon size={11} />}
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>

        {errorMsg && (
          <div style={{ backgroundColor: 'var(--accent-red-subtle)', color: 'var(--accent-red)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.84rem', border: '1px solid rgba(225, 29, 72, 0.15)' }}>
            <AlertCircle size={14} /> {errorMsg}
          </div>
        )}

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, x: 20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: -20, filter: 'blur(4px)' }}
            transition={{ duration: 0.35, ease: EASE }}
            className="card"
            style={{ padding: '2rem' }}
          >
            {/* Progress */}
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-tertiary)', fontSize: '0.8rem', fontWeight: 500, marginBottom: '1rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)' }}>{currentIdx + 1}/{questions.length}</span>
              <span>Score: {score}</span>
            </div>

            <h2 style={{ fontSize: '1.15rem', marginBottom: '1.75rem', lineHeight: '1.5', fontFamily: 'var(--font-serif)' }}>
              {currentQ.text}
            </h2>

            {/* Options */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.5rem' }}>
              {currentQ.options.map((opt, idx) => {
                let optStyle = {
                  justifyContent: 'space-between',
                  padding: '0.85rem 1.15rem',
                  fontSize: '0.9rem',
                  borderRadius: 'var(--radius-sm)',
                  textAlign: 'left',
                  border: '1px solid var(--border-subtle)',
                  backgroundColor: 'var(--bg-surface)'
                };

                let isSelected = selectedOption === idx;
                let isCorrect = idx === currentQ.correctAnswer;

                if (selectedOption !== null) {
                  if (isCorrect) {
                    optStyle.backgroundColor = 'var(--accent-emerald-subtle)';
                    optStyle.borderColor = 'rgba(5, 150, 105, 0.35)';
                    optStyle.color = 'var(--accent-emerald)';
                  } else if (isSelected) {
                    optStyle.backgroundColor = 'var(--accent-red-subtle)';
                    optStyle.borderColor = 'rgba(225, 29, 72, 0.35)';
                    optStyle.color = 'var(--accent-red)';
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
                    {selectedOption !== null && isCorrect && <CheckCircle2 size={16} />}
                    {selectedOption !== null && isSelected && !isCorrect && <XCircle size={16} />}
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
                style={{ borderTop: '1px solid var(--border-hairline)', paddingTop: '1rem', marginTop: '1rem' }}
              >
                <div style={{ marginBottom: '1.25rem', backgroundColor: 'var(--bg-subtle)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--text-tertiary)', fontWeight: 600, marginBottom: '0.2rem' }}>
                    Explanation
                  </div>
                  <span style={{ color: 'var(--text-primary)', fontSize: '0.88rem', lineHeight: '1.6' }}>
                    {currentQ.explanation || 'Review the historical context and key theories for this topic.'}
                  </span>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <motion.button className="btn btn-primary" onClick={handleNextQuestion} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <span>{currentIdx + 1 === questions.length ? 'View Results' : 'Next'}</span>
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
