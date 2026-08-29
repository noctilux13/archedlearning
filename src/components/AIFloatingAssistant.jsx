import React, { useState, useContext, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Loader2, Sparkles, Trash2, Copy, Check, CornerDownLeft, Layers, Compass } from 'lucide-react';
import { AppContext } from '../context/AppContext';
import { chatWithFloatingAssistant } from '../services/aiService';

const EASE = [0.16, 1, 0.3, 1];

export default function AIFloatingAssistant() {
  const {
    apiKey,
    t,
    language,
    isAiOpen,
    setIsAiOpen,
    aiContextData,
    setAiContextData,
    chatHistory,
    setChatHistory,
    clearChatHistory
  } = useContext(AppContext);

  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Initialize greeting if history is empty
  const defaultGreeting = t
    ? t('assistant.greeting', 'Hello! I am your AI Art & Architecture tutor. Ask me anything about movements, master biographies, techniques, or examination highlights!')
    : 'Hello! I am your AI Art & Architecture tutor. Ask me anything!';

  const displayMessages = chatHistory.length > 0 ? chatHistory : [
    {
      role: 'assistant',
      content: defaultGreeting,
      timestamp: Date.now()
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isAiOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [displayMessages, isAiOpen]);

  const handleSend = async (customPrompt = null) => {
    const textToSend = (customPrompt || inputValue).trim();
    if (!textToSend || isLoading) return;

    if (!apiKey) {
      setChatHistory(prev => [
        ...prev,
        { role: 'user', content: textToSend, timestamp: Date.now() },
        {
          role: 'assistant',
          content: t ? t('assistant.configureKey', 'Please configure your API Key in Settings first.') : 'Please configure your API Key in Settings first.',
          timestamp: Date.now()
        }
      ]);
      setInputValue('');
      return;
    }

    const contextPrefix = aiContextData
      ? `[研读对象: ${aiContextData.title || ''} (${aiContextData.artistName || ''} · ${aiContextData.movementName || ''})]`
      : '艺术史研考';

    const fullContext = `${contextPrefix} ${aiContextData?.details || ''}`;

    const newHistory = [
      ...chatHistory,
      { role: 'user', content: textToSend, timestamp: Date.now() }
    ];
    setChatHistory(newHistory);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await chatWithFloatingAssistant(fullContext, textToSend);
      setChatHistory([
        ...newHistory,
        { role: 'assistant', content: response, timestamp: Date.now() }
      ]);
    } catch (err) {
      setChatHistory([
        ...newHistory,
        { role: 'assistant', content: `[请求出错]: ${err.message}`, timestamp: Date.now() }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleClearHistory = () => {
    if (window.confirm(t ? t('assistant.clearConfirm', 'Clear all chat history?') : 'Clear all chat history?')) {
      clearChatHistory();
    }
  };

  const QUICK_PROMPTS = [
    { label: t ? t('assistant.promptComposition', '分析构图秩序与形式语言') : 'Analyze composition & formal language', icon: Compass },
    { label: t ? t('assistant.promptContext', '阐述该作品的历史时代背景') : 'Explain historical context', icon: Layers },
    { label: t ? t('assistant.promptExam', '总结该流派的研考核心要点') : 'Summarize key exam takeaways', icon: Sparkles }
  ];

  return (
    <>
      {/* Floating Launcher Button */}
      <AnimatePresence>
        {!isAiOpen && (
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
            onClick={() => setIsAiOpen(true)}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            whileHover={{ scale: 1.04, y: -2, transition: { type: 'spring', stiffness: 400, damping: 20 } }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          >
            <Bot size={17} />
            <span>{t ? t('assistant.title', 'AI Tutor') : 'AI Tutor'}</span>
            {aiContextData && (
              <span style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-emerald, #10b981)',
                marginLeft: '-2px'
              }} />
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Chat Drawer Window */}
      <AnimatePresence>
        {isAiOpen && (
          <motion.div
            style={{
              position: 'fixed',
              right: '20px',
              bottom: '20px',
              width: '420px',
              maxWidth: 'calc(100vw - 32px)',
              height: '600px',
              maxHeight: 'calc(100vh - 40px)',
              backgroundColor: 'var(--bg-surface)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              boxShadow: '0 20px 45px -10px rgba(0,0,0,0.22), 0 0 1px rgba(0,0,0,0.1)',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
            initial={{ opacity: 0, y: 30, scale: 0.94, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 20, scale: 0.94, filter: 'blur(6px)' }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            {/* Header */}
            <div
              style={{
                padding: '0.85rem 1.1rem',
                borderBottom: '1px solid var(--border-hairline)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'var(--bg-subtle)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: 'var(--radius-xs)',
                  backgroundColor: 'var(--accent-primary)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Bot size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)', fontFamily: 'var(--font-serif)' }}>
                    {t ? t('assistant.title', 'AI Tutor') : 'AI Tutor'}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>
                    {aiContextData ? `${aiContextData.title || ''}` : '艺术与建筑史研考学伴'}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                {chatHistory.length > 0 && (
                  <button
                    type="button"
                    onClick={handleClearHistory}
                    className="btn-icon"
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-tertiary)',
                      cursor: 'pointer',
                      padding: '5px',
                      borderRadius: 'var(--radius-xs)',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                    title={t ? t('assistant.clearHistory', 'Clear Chat History') : 'Clear History'}
                  >
                    <Trash2 size={14} />
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => setIsAiOpen(false)}
                  className="btn-icon"
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-secondary)',
                    cursor: 'pointer',
                    padding: '5px',
                    borderRadius: 'var(--radius-xs)',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                  title="关闭"
                >
                  <X size={17} />
                </button>
              </div>
            </div>

            {/* Context Badge Banner if prefilled */}
            {aiContextData && (
              <div style={{
                padding: '6px 12px',
                backgroundColor: 'var(--bg-subtle)',
                borderBottom: '1px solid var(--border-hairline)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.74rem',
                color: 'var(--text-secondary)'
              }}>
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  🎯 聚焦作品: <strong>{aiContextData.title}</strong> ({aiContextData.artistName})
                </span>
                <button
                  type="button"
                  onClick={() => setAiContextData(null)}
                  style={{ background: 'none', border: 'none', color: 'var(--text-tertiary)', cursor: 'pointer', fontSize: '0.72rem', textDecoration: 'underline' }}
                >
                  清除
                </button>
              </div>
            )}

            {/* Messages Scroll Area */}
            <div
              style={{
                flex: 1,
                padding: '1rem',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.9rem',
              }}
            >
              {displayMessages.map((msg, idx) => {
                const isUser = msg.role === 'user';
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: isUser ? 'flex-end' : 'flex-start',
                      position: 'relative'
                    }}
                  >
                    <div
                      style={{
                        maxWidth: '86%',
                        padding: '0.75rem 0.95rem',
                        borderRadius: isUser ? '14px 14px 2px 14px' : '14px 14px 14px 2px',
                        backgroundColor: isUser ? 'var(--accent-primary)' : 'var(--bg-subtle)',
                        color: isUser ? '#fff' : 'var(--text-primary)',
                        fontSize: '0.86rem',
                        lineHeight: '1.65',
                        border: isUser ? 'none' : '1px solid var(--border-hairline)',
                        whiteSpace: 'pre-wrap',
                        wordBreak: 'break-word',
                      }}
                    >
                      {msg.content}
                    </div>

                    {!isUser && msg.content !== defaultGreeting && (
                      <button
                        type="button"
                        onClick={() => handleCopy(msg.content, idx)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'var(--text-tertiary)',
                          fontSize: '0.68rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '3px',
                          marginTop: '3px',
                          padding: '2px 4px'
                        }}
                        title={t ? t('assistant.copy', 'Copy') : 'Copy'}
                      >
                        {copiedIndex === idx ? (
                          <>
                            <Check size={11} style={{ color: 'var(--accent-emerald)' }} />
                            <span style={{ color: 'var(--accent-emerald)' }}>{t ? t('assistant.copied', 'Copied') : 'Copied'}</span>
                          </>
                        ) : (
                          <>
                            <Copy size={11} />
                            <span>{t ? t('assistant.copy', 'Copy') : 'Copy'}</span>
                          </>
                        )}
                      </button>
                    )}
                  </motion.div>
                );
              })}

              {isLoading && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-tertiary)', fontSize: '0.8rem', padding: '0.5rem 0' }}>
                  <Loader2 size={15} className="animate-spin" />
                  <span>AI 正在深入思考中...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts Bar */}
            <div style={{
              padding: '6px 10px',
              borderTop: '1px solid var(--border-hairline)',
              backgroundColor: 'var(--bg-surface)',
              display: 'flex',
              gap: '6px',
              overflowX: 'auto',
              whiteSpace: 'nowrap'
            }}>
              {QUICK_PROMPTS.map((qp, qidx) => {
                const Icon = qp.icon;
                return (
                  <button
                    key={qidx}
                    type="button"
                    onClick={() => handleSend(qp.label)}
                    disabled={isLoading}
                    style={{
                      padding: '3px 8px',
                      borderRadius: 'var(--radius-xs)',
                      backgroundColor: 'var(--bg-subtle)',
                      border: '1px solid var(--border-hairline)',
                      color: 'var(--text-secondary)',
                      fontSize: '0.72rem',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      flexShrink: 0
                    }}
                  >
                    <Icon size={10} />
                    <span>{qp.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Input Area */}
            <div
              style={{
                padding: '0.75rem',
                borderTop: '1px solid var(--border-hairline)',
                backgroundColor: 'var(--bg-surface)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <textarea
                ref={inputRef}
                className="input-field"
                placeholder={t ? t('assistant.placeholder', 'Ask about art history, styles, works...') : 'Ask about art history...'}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
                style={{
                  flex: 1,
                  resize: 'none',
                  minHeight: '38px',
                  maxHeight: '80px',
                  padding: '8px 12px',
                  fontSize: '0.86rem',
                  lineHeight: '1.4',
                }}
              />
              <motion.button
                className="btn btn-primary"
                style={{
                  height: '38px',
                  width: '38px',
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 'var(--radius-xs)',
                  flexShrink: 0
                }}
                onClick={() => handleSend()}
                disabled={isLoading || !inputValue.trim()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="发送 (Enter)"
              >
                <Send size={15} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
