import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';
import { callGroqAi } from '../services/aiService';
import MouseSpotlight from '../components/MouseSpotlight';
import { Settings as SettingsIcon, Key, Globe, CheckCircle2, AlertCircle, Loader2, Sparkles, Server } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1];

export default function Settings() {
  const { apiKey, setApiKey, cfWorkerUrl, setCfWorkerUrl } = useContext(AppContext);

  const [inputKey, setInputKey] = useState(apiKey);
  const [inputWorkerUrl, setInputWorkerUrl] = useState(cfWorkerUrl);
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState(null);

  const handleSave = (e) => {
    e.preventDefault();
    setApiKey(inputKey.trim());
    setCfWorkerUrl(inputWorkerUrl.trim());
    setTestResult({ success: true, message: 'Settings saved successfully!' });
  };

  const handleTestApi = async () => {
    setTesting(true);
    setTestResult(null);
    try {
      setApiKey(inputKey.trim());
      setCfWorkerUrl(inputWorkerUrl.trim());

      const response = await callGroqAi({
        prompt: 'Say "Hello, API connection successful!" in 5 words.',
      });

      setTestResult({
        success: true,
        message: `Connection successful: "${response.trim()}"`
      });
    } catch (err) {
      setTestResult({
        success: false,
        message: `Connection test failed: ${err.message}`
      });
    } finally {
      setTesting(false);
    }
  };

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
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="chip chip-neutral" style={{ marginBottom: '0.75rem' }}>
            <SettingsIcon size={11} /> Settings
          </div>
          <h1 style={{ marginBottom: '0.35rem' }}>AI & Network</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
            Configure Groq API key and optional proxy to enable AI tutoring, quiz generation, and deep-dive analysis.
          </p>
        </div>

        {/* API Form Card */}
        <motion.div
          className="card-editorial"
          style={{ marginBottom: '2rem' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1, ease: EASE }}
        >
          <form onSubmit={handleSave}>
            {/* Groq API Key Input */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 550, fontSize: '0.9rem', marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
                <Key size={14} />
                Groq API Key
              </label>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', marginBottom: '0.6rem' }}>
                Stored locally in browser (localStorage). Enter your key starting with <code>gsk_...</code>
              </p>
              <input
                type="password"
                className="input-field"
                placeholder="gsk_..."
                value={inputKey}
                onChange={(e) => setInputKey(e.target.value)}
              />
            </div>

            {/* Cloudflare Worker Proxy URL Input */}
            <div style={{ marginBottom: '1.75rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 550, fontSize: '0.9rem', marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
                <Globe size={14} />
                Custom Proxy URL (Optional)
              </label>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', marginBottom: '0.6rem' }}>
                Optional Cloudflare Worker or reverse proxy URL if direct access to Groq API is restricted.
              </p>
              <input
                type="text"
                className="input-field"
                placeholder="https://my-groq-proxy.workers.dev"
                value={inputWorkerUrl}
                onChange={(e) => setInputWorkerUrl(e.target.value)}
              />
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <motion.button
                type="submit"
                className="btn btn-primary"
                style={{ flex: 1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Save Settings
              </motion.button>
              <motion.button
                type="button"
                className="btn btn-outline"
                onClick={handleTestApi}
                disabled={testing}
                style={{ flex: 1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {testing ? (
                  <>
                    <Loader2 size={13} className="animate-spin" />
                    <span>Testing...</span>
                  </>
                ) : (
                  <>
                    <Server size={13} />
                    <span>Test Connection</span>
                  </>
                )}
              </motion.button>
            </div>
          </form>

          {/* Test Status Result */}
          {testResult && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                marginTop: '1.25rem',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.85rem',
                backgroundColor: testResult.success ? 'var(--accent-emerald-subtle)' : 'var(--accent-red-subtle)',
                color: testResult.success ? 'var(--accent-emerald)' : 'var(--accent-red)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                border: `1px solid ${testResult.success ? 'rgba(5, 150, 105, 0.2)' : 'rgba(225, 29, 72, 0.2)'}`
              }}
            >
              {testResult.success ? <CheckCircle2 size={15} /> : <AlertCircle size={15} />}
              {testResult.message}
            </motion.div>
          )}
        </motion.div>

        {/* Cloudflare Worker Deployment Guide */}
        <motion.div
          style={{ backgroundColor: 'var(--bg-subtle)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-hairline)' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2, ease: EASE }}
        >
          <h3 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-serif)' }}>
            <Server size={14} /> Cloudflare Worker Proxy Template
          </h3>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '0.75rem' }}>
            Paste the following code into a Cloudflare Worker to deploy a free CORS reverse proxy:
          </p>
          <div style={{ backgroundColor: 'var(--bg-surface)', padding: '0.85rem', borderRadius: 'var(--radius-sm)', fontSize: '0.76rem', fontFamily: 'var(--font-mono)', overflowX: 'auto', border: '1px solid var(--border-hairline)' }}>
            <pre style={{ margin: 0, color: 'var(--text-primary)' }}>{`export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization"
        }
      });
    }
    const url = new URL(request.url);
    const targetUrl = "https://api.groq.com/openai/v1" + url.pathname;
    const response = await fetch(targetUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body
    });
    const newHeaders = new Headers(response.headers);
    newHeaders.set("Access-Control-Allow-Origin", "*");
    return new Response(response.body, {
      status: response.status,
      headers: newHeaders
    });
  }
};`}</pre>
          </div>
        </motion.div>
      </motion.div>
    </MouseSpotlight>
  );
}
