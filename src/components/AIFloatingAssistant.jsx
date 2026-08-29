import React, { useState, useContext, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Loader2, Sparkles } from 'lucide-react';
import { AppContext } from '../context/AppContext';
import { chatWithFloatingAssistant } from '../services/aiService';

export default function AIFloatingAssistant({ contextText }) {
  const { apiKey, t, language } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Initialize greeting with translation when language changes or first load
  useEffect(() => {
    setMessages([
      {
        role: 'assistant',
        content: t ? t('assistant.greeting', 'Hello! I am your AI Art & Architecture tutor. Ask me anything about movements, artists, or landmarks!') : 'Hello! I am your AI Art & Architecture tutor.'
      }
    ]);
  }, [language, t]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    if (!apiKey) {
      setMessages(prev => [
        ...prev,
        { role: 'user', content: inputValue },
        { role: 'assistant', content: t ? t('assistant.configureKey', 'Please configure your API Key in Settings first.') : 'Please configure your API Key in Settings first.' }
      ]);
      setInputValue('');
      return;
    }

    const userMessage = inputValue.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await chatWithFloatingAssistant(contextText || 'Art history study session', userMessage);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: `[Error]: ${err.message}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button with Spring Physics */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            className="btn btn-primary"
            style={{
              position: 'fixed',
              right: '24px',
              bottom: '24px',
              borderRadius: 'var(--radius-pill)',
              height: '46px',
              padding: '0 18px',
              boxShadow: 'var(--shadow-card-hover)',
              zIndex: 998,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.84rem',
              fontWeight: 550,
            }}
            onClick={() => setIsOpen(true)}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            whileHover={{ scale: 1.04, y: -2, transition: { type: 'spring', stiffness: 400, damping: 20 } }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          >
            <Bot size={17} />
            <span>{t ? t('assistant.title', 'AI Tutor') : 'AI Tutor'}</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Chat Window with Spring Projection */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.94, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 16, scale: 0.96, filter: 'blur(4px)' }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            style={{
              position: 'fixed',
              right: '24px',
              bottom: '24px',
              width: '360px',
              height: '520px',
              backgroundColor: 'var(--bg-surface)',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-float)',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              border: '1px solid var(--border-subtle)'
            }}
          >
            {/* Header */}
            <div style={{
              padding: '12px 16px',
              backgroundColor: 'var(--bg-surface)',
              borderBottom: '1px solid var(--border-hairline)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="chip chip-neutral" style={{ padding: '3px 8px' }}>
                  <Sparkles size={10} /> {t ? t('assistant.title', 'AI Tutor') : 'AI Tutor'}
                </span>
                <span style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {t ? t('assistant.title', 'Interactive Assistant') : 'Interactive Assistant'}
                </span>
              </div>
              <motion.button
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{ background: 'transparent', border: 'none', color: 'var(--text-tertiary)', cursor: 'pointer', padding: '4px', display: 'flex', alignItems: 'center' }}
              >
                <X size={16} />
              </motion.button>
            </div>

            {/* Chat History */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              padding: '14px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              backgroundColor: 'var(--bg-main)'
            }}>
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                    maxWidth: '88%',
                    backgroundColor: msg.role === 'user' ? 'var(--accent-primary)' : 'var(--bg-surface)',
                    color: msg.role === 'user' ? 'var(--text-inverse)' : 'var(--text-primary)',
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-sm)',
                    boxShadow: 'var(--shadow-subtle)',
                    fontSize: '0.86rem',
                    lineHeight: '1.55',
                    border: msg.role === 'assistant' ? '1px solid var(--border-hairline)' : 'none',
                    whiteSpace: 'pre-wrap'
                  }}
                >
                  {msg.content}
                </motion.div>
              ))}
              {isLoading && (
                <div style={{ alignSelf: 'flex-start', padding: '8px 12px', backgroundColor: 'var(--bg-surface)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-hairline)' }}>
                  <Loader2 size={15} color="var(--text-tertiary)" className="animate-spin" />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div style={{
              padding: '10px',
              borderTop: '1px solid var(--border-hairline)',
              backgroundColor: 'var(--bg-surface)',
              display: 'flex',
              gap: '6px'
            }}>
              <input
                type="text"
                className="input-field"
                placeholder={t ? t('assistant.placeholder', 'Ask about this topic...') : 'Ask about this topic...'}
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
                style={{ flex: 1, padding: '8px 12px', fontSize: '0.86rem', height: '36px' }}
              />
              <motion.button
                className="btn btn-primary"
                style={{ padding: '0 12px', height: '36px' }}
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={14} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
