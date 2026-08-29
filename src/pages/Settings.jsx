import React, { useContext, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';
import { callGroqAi } from '../services/aiService';
import MouseSpotlight from '../components/MouseSpotlight';
import { Settings as SettingsIcon, Key, Globe, CheckCircle2, AlertCircle, Loader2, Sparkles, Server, Image as ImageIcon, Trash2, Download, Upload, RotateCcw } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1];

export default function Settings() {
  const {
    apiKey,
    setApiKey,
    cfWorkerUrl,
    setCfWorkerUrl,
    customImages,
    removeCustomImage,
    clearAllOverrides,
    setCustomImage
  } = useContext(AppContext);

  const [inputKey, setInputKey] = useState(apiKey);
  const [inputWorkerUrl, setInputWorkerUrl] = useState(cfWorkerUrl);
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState(null);
  const importFileRef = useRef(null);

  const customList = Object.values(customImages || {});

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

  // Export custom images as a JSON file
  const handleExportBackup = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(customImages, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `art_learning_custom_images_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Import custom images from JSON file
  const handleImportBackup = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        if (typeof parsed === 'object' && parsed !== null) {
          for (const [key, val] of Object.entries(parsed)) {
            if (val && (val.dataUrl || typeof val === 'string')) {
              const dataUrl = val.dataUrl || val;
              await setCustomImage(key, dataUrl, {
                title: val.title || key,
                targetType: val.targetType || (key.startsWith('artist:') ? 'artist' : 'artwork')
              });
            }
          }
          alert(`成功导入 ${Object.keys(parsed).length} 项自定义图片配置！`);
        }
      } catch (err) {
        alert('导入失败：文件格式不正确 (' + err.message + ')');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  return (
    <MouseSpotlight>
      <motion.div
        initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.5, ease: EASE }}
        className="container"
        style={{ maxWidth: '780px' }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="chip chip-neutral" style={{ marginBottom: '0.75rem' }}>
            <SettingsIcon size={11} /> Settings
          </div>
          <h1 style={{ marginBottom: '0.35rem' }}>Preferences & Configuration</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
            Configure AI API key, network proxy, and manage custom image replacements.
          </p>
        </div>

        {/* Custom Image Overrides Section */}
        <motion.div
          className="card-editorial"
          style={{ marginBottom: '2.5rem' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05, ease: EASE }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ImageIcon size={18} style={{ color: 'var(--text-primary)' }} />
                <h2 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-serif)', margin: 0 }}>
                  自定义图片管理 ({customList.length})
                </h2>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', margin: '0.25rem 0 0 0' }}>
                您手动上传或更换的艺术家肖像与作品图片（保存在本地浏览器中）
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <input
                ref={importFileRef}
                type="file"
                accept=".json"
                onChange={handleImportBackup}
                style={{ display: 'none' }}
              />
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => importFileRef.current?.click()}
                style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
                title="导入之前导出的图片配置 JSON"
              >
                <Upload size={12} /> 导入配置
              </button>

              {customList.length > 0 && (
                <>
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={handleExportBackup}
                    style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
                    title="备份所有自定义图片配置为 JSON 文件"
                  >
                    <Download size={12} /> 导出备份
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => { if (window.confirm('确认清空所有自定义替换的图片？')) clearAllOverrides(); }}
                    style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem', color: 'var(--accent-red)' }}
                  >
                    <RotateCcw size={12} /> 清空全部
                  </button>
                </>
              )}
            </div>
          </div>

          {customList.length === 0 ? (
            <div style={{
              padding: '2rem 1rem',
              backgroundColor: 'var(--bg-subtle)',
              borderRadius: 'var(--radius-sm)',
              textAlign: 'center',
              color: 'var(--text-tertiary)',
              fontSize: '0.86rem'
            }}>
              暂无自定义替换的图片。您可以在任何艺术家或作品详情页点击「更换图片」手动上传修正！
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.85rem' }}>
              {customList.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px 10px',
                    backgroundColor: 'var(--bg-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-hairline)'
                  }}
                >
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: item.targetType === 'artist' ? '50%' : 'var(--radius-xs)',
                    overflow: 'hidden',
                    backgroundColor: 'var(--bg-surface)',
                    flexShrink: 0,
                    border: '1px solid var(--border-hairline)'
                  }}>
                    <img
                      src={item.dataUrl}
                      alt={item.title || item.id}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontSize: '0.82rem',
                      fontWeight: 550,
                      color: 'var(--text-primary)',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      {item.title || item.id}
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>
                      {item.targetType === 'artist' ? '艺术家肖像' : '作品图片'}
                    </div>
                  </div>

                  <button
                    onClick={() => removeCustomImage(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-tertiary)',
                      cursor: 'pointer',
                      padding: '4px',
                      borderRadius: 'var(--radius-xs)',
                      transition: 'color 0.2s ease'
                    }}
                    title="恢复为默认图片"
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-red)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-tertiary)'}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </motion.div>

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
