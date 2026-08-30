import React, { useContext, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';
import { callAiService } from '../services/aiService';
import MouseSpotlight from '../components/MouseSpotlight';
import {
  Settings as SettingsIcon,
  Key,
  Globe,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Image as ImageIcon,
  Trash2,
  Download,
  Upload,
  RotateCcw,
  Languages,
  Check,
  Cpu,
  Server,
  Sparkles
} from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1];

const PROVIDER_PRESETS = [
  {
    name: 'Groq (Qwen 3.8)',
    endpoint: 'https://api.groq.com/openai/v1',
    model: 'qwen/qwen3.8-27b',
    hint: 'gsk_... (qwen/qwen3.8-27b 旗舰中文解析)'
  },
  {
    name: 'Groq (GPT-OSS 120B)',
    endpoint: 'https://api.groq.com/openai/v1',
    model: 'openai/gpt-oss-120b',
    hint: 'gsk_... (openai/gpt-oss-120b / openai/gpt-oss-20b)'
  },
  {
    name: 'DeepSeek',
    endpoint: 'https://api.deepseek.com/v1',
    model: 'deepseek-chat',
    hint: 'sk-... (deepseek-chat / deepseek-reasoner)'
  },
  {
    name: 'Claude',
    endpoint: 'https://api.anthropic.com/v1',
    model: 'claude-3-5-sonnet-20241022',
    hint: 'sk-ant-... (claude-3-5-sonnet-20241022)'
  },
  {
    name: 'OpenAI',
    endpoint: 'https://api.openai.com/v1',
    model: 'gpt-4o-mini',
    hint: 'sk-... (gpt-4o / gpt-4o-mini)'
  },
  {
    name: 'OpenRouter',
    endpoint: 'https://openrouter.ai/api/v1',
    model: 'deepseek/deepseek-r1',
    hint: 'sk-or-... (deepseek/deepseek-r1)'
  }
];

export default function Settings() {
  const {
    apiKey,
    setApiKey,
    apiEndpoint,
    setApiEndpoint,
    apiModel,
    setApiModel,
    cfWorkerUrl,
    setCfWorkerUrl,
    customImages,
    removeCustomImage,
    clearAllOverrides,
    setCustomImage,
    language,
    setLanguage,
    t,
    LANGUAGES
  } = useContext(AppContext);

  const [inputKey, setInputKey] = useState(apiKey || '');
  const [inputEndpoint, setInputEndpoint] = useState(apiEndpoint || 'https://api.deepseek.com/v1');
  const [inputModel, setInputModel] = useState(apiModel || 'deepseek-chat');
  const [inputWorkerUrl, setInputWorkerUrl] = useState(cfWorkerUrl || '');
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState(null);
  const importFileRef = useRef(null);

  const customList = Object.values(customImages || {});

  const handleKeyChange = (val) => {
    setInputKey(val);
    const trimmed = val.trim();
    if (trimmed.startsWith('gsk_')) {
      if (inputEndpoint.includes('deepseek.com') || !inputEndpoint) {
        setInputEndpoint('https://api.groq.com/openai/v1');
        setInputModel('openai/gpt-oss-120b');
      }
    } else if (trimmed.startsWith('sk-ant-')) {
      if (!inputEndpoint.includes('anthropic.com')) {
        setInputEndpoint('https://api.anthropic.com/v1');
        setInputModel('claude-3-5-sonnet-20241022');
      }
    } else if (trimmed.startsWith('sk-or-')) {
      if (inputEndpoint.includes('deepseek.com')) {
        setInputEndpoint('https://openrouter.ai/api/v1');
        setInputModel('deepseek/deepseek-r1');
      }
    }
  };

  const handleApplyPreset = (preset) => {
    setInputEndpoint(preset.endpoint);
    setInputModel(preset.model);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setApiKey(inputKey.trim());
    setApiEndpoint(inputEndpoint.trim());
    setApiModel(inputModel.trim());
    setCfWorkerUrl(inputWorkerUrl.trim());
    setTestResult({
      success: true,
      message: t ? t('settings.saveSuccess', 'Settings saved successfully!') : 'Settings saved successfully!'
    });
  };

  const handleTestApi = async () => {
    setTesting(true);
    setTestResult(null);
    try {
      setApiKey(inputKey.trim());
      setApiEndpoint(inputEndpoint.trim());
      setApiModel(inputModel.trim());
      setCfWorkerUrl(inputWorkerUrl.trim());

      const response = await callAiService({
        prompt: 'Say "AI connection successful!" in under 5 words.',
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
            <SettingsIcon size={11} /> {t ? t('nav.settings', 'Settings') : 'Settings'}
          </div>
          <h1 style={{ marginBottom: '0.35rem' }}>{t ? t('settings.title', 'Preferences & Configuration') : 'Preferences & Configuration'}</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
            {t ? t('settings.subtitle', 'Configure language, AI model endpoints, API keys, and custom image overrides.') : 'Configure language, AI model endpoints, API keys, and custom image overrides.'}
          </p>
        </div>

        {/* ── Language Preference Card ── */}
        <motion.div
          className="card-editorial"
          style={{ marginBottom: '2rem' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05, ease: EASE }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.35rem' }}>
            <Languages size={18} style={{ color: 'var(--text-primary)' }} />
            <h2 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-serif)', margin: 0 }}>
              {t ? t('settings.languageTitle', 'Interface Language') : 'Interface Language'}
            </h2>
          </div>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-tertiary)', marginBottom: '1.25rem' }}>
            {t ? t('settings.languageDesc', 'Switch seamlessly between Chinese, English, Italian, and Spanish.') : 'Switch seamlessly between Chinese, English, Italian, and Spanish.'}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.75rem' }}>
            {LANGUAGES.map((langItem) => {
              const isSelected = language === langItem.code;
              return (
                <button
                  key={langItem.code}
                  type="button"
                  onClick={() => setLanguage(langItem.code)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: isSelected ? '2px solid var(--accent-primary, #0f172a)' : '1px solid var(--border-subtle)',
                    backgroundColor: isSelected ? 'var(--bg-subtle)' : 'var(--bg-surface)',
                    color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    textAlign: 'left'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '1.25rem' }}>{langItem.flag}</span>
                    <div>
                      <div style={{ fontWeight: isSelected ? 600 : 500, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                        {langItem.name}
                      </div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--text-tertiary)' }}>
                        {langItem.label}
                      </div>
                    </div>
                  </div>
                  {isSelected && <Check size={16} style={{ color: 'var(--accent-primary)' }} />}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ── Universal AI Model & API Configuration Card ── */}
        <motion.div
          className="card-editorial"
          style={{ marginBottom: '2rem' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1, ease: EASE }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.35rem' }}>
            <Cpu size={18} style={{ color: 'var(--text-primary)' }} />
            <h2 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-serif)', margin: 0 }}>
              {t ? t('settings.aiConfigTitle', 'AI Model & API Configuration') : 'AI Model & API Configuration'}
            </h2>
          </div>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-tertiary)', marginBottom: '1.25rem' }}>
            {t ? t('settings.aiConfigDesc', 'Supports DeepSeek, Claude, OpenAI, Groq, OpenRouter, and custom endpoints.') : 'Supports DeepSeek, Claude, OpenAI, Groq, OpenRouter, and custom endpoints.'}
          </p>

          {/* Quick Provider Presets */}
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ fontSize: '0.76rem', color: 'var(--text-tertiary)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600 }}>
              快速预设 / Quick Presets
            </div>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {PROVIDER_PRESETS.map((p) => {
                const isActive = inputEndpoint === p.endpoint;
                return (
                  <button
                    key={p.name}
                    type="button"
                    onClick={() => handleApplyPreset(p)}
                    style={{
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-xs)',
                      fontSize: '0.76rem',
                      border: isActive ? '1px solid var(--accent-primary)' : '1px solid var(--border-hairline)',
                      backgroundColor: isActive ? 'var(--bg-subtle)' : 'var(--bg-surface)',
                      color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                      fontWeight: isActive ? 600 : 450,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <Sparkles size={11} style={{ opacity: isActive ? 1 : 0.4 }} />
                    {p.name}
                  </button>
                );
              })}
            </div>
          </div>

          <form onSubmit={handleSave}>
            {/* API Key Input */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 550, fontSize: '0.88rem', marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
                <Key size={14} />
                {t ? t('settings.apiKeyLabel', 'API Key') : 'API Key'}
              </label>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}>
                {t ? t('settings.apiKeyHint', 'Stored locally in browser (e.g. DeepSeek sk-..., Claude sk-ant-..., OpenAI sk-...).') : 'Stored locally in browser.'}
              </p>
              <input
                type="password"
                className="input-field"
                placeholder="sk-... / gsk_..."
                value={inputKey}
                onChange={(e) => handleKeyChange(e.target.value)}
              />
              {inputKey.trim().startsWith('gsk_') && (
                <div style={{ marginTop: '0.4rem', fontSize: '0.74rem', color: 'var(--accent-emerald, #10b981)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Check size={12} />
                  <span>已自动适配 Groq 高速推理引擎 (openai/gpt-oss-120b)</span>
                </div>
              )}
              {inputKey.trim().startsWith('sk-ant-') && (
                <div style={{ marginTop: '0.4rem', fontSize: '0.74rem', color: 'var(--accent-emerald, #10b981)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Check size={12} />
                  <span>已自动适配 Anthropic Claude 接口 (claude-3-5-sonnet-20241022)</span>
                </div>
              )}
              {inputKey.trim().startsWith('sk-or-') && (
                <div style={{ marginTop: '0.4rem', fontSize: '0.74rem', color: 'var(--accent-emerald, #10b981)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Check size={12} />
                  <span>已自动适配 OpenRouter 聚合接口 (deepseek/deepseek-r1)</span>
                </div>
              )}
            </div>

            {/* API Endpoint Base URL */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 550, fontSize: '0.88rem', marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
                <Server size={14} />
                {t ? t('settings.apiEndpointLabel', 'API Endpoint (Base URL)') : 'API Endpoint (Base URL)'}
              </label>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}>
                {t ? t('settings.apiEndpointHint', 'e.g. https://api.deepseek.com/v1 or https://api.openai.com/v1') : 'Base URL of the AI provider API.'}
              </p>
              <input
                type="text"
                className="input-field"
                placeholder="https://api.deepseek.com/v1"
                value={inputEndpoint}
                onChange={(e) => setInputEndpoint(e.target.value)}
              />
            </div>

            {/* Model Name */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 550, fontSize: '0.88rem', marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
                <Cpu size={14} />
                {t ? t('settings.apiModelLabel', 'Model Name') : 'Model Name'}
              </label>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}>
                {t ? t('settings.apiModelHint', 'e.g. deepseek-chat, deepseek-reasoner, claude-3-5-sonnet-20241022, gpt-4o-mini') : 'Model identifier.'}
              </p>
              <input
                type="text"
                className="input-field"
                placeholder="deepseek-chat"
                value={inputModel}
                onChange={(e) => setInputModel(e.target.value)}
              />
            </div>

            {/* Cloudflare Worker Proxy URL Input */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 550, fontSize: '0.88rem', marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
                <Globe size={14} />
                {t ? t('settings.proxyUrlLabel', 'Custom Proxy URL (Optional)') : 'Custom Proxy URL (Optional)'}
              </label>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}>
                {t ? t('settings.proxyUrlHint', 'Optional Cloudflare Worker or reverse proxy URL if browser CORS is restricted.') : 'Optional Cloudflare Worker or reverse proxy URL if browser CORS is restricted.'}
              </p>
              <input
                type="text"
                className="input-field"
                placeholder="https://my-proxy.workers.dev"
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
                {t ? t('settings.saveSettings', 'Save Settings') : 'Save Settings'}
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
                    <Loader2 size={14} className="animate-spin" />
                    <span>{t ? t('settings.testingConnection', 'Testing connection...') : 'Testing connection...'}</span>
                  </>
                ) : (
                  <span>{t ? t('settings.testConnection', 'Test Connection') : 'Test Connection'}</span>
                )}
              </motion.button>
            </div>
          </form>

          {/* Test Status Banner */}
          {testResult && (
            <div
              style={{
                marginTop: '1.25rem',
                padding: '0.85rem 1rem',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.86rem',
                backgroundColor: testResult.success ? 'var(--accent-emerald-subtle)' : 'var(--accent-red-subtle)',
                color: testResult.success ? 'var(--accent-emerald)' : 'var(--accent-red)',
                border: `1px solid ${testResult.success ? 'rgba(5, 150, 105, 0.2)' : 'rgba(225, 29, 72, 0.2)'}`,
              }}
            >
              {testResult.success ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
              <span>{testResult.message}</span>
            </div>
          )}
        </motion.div>

        {/* ── Custom Image Overrides Section ── */}
        <motion.div
          className="card-editorial"
          style={{ marginBottom: '2rem' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15, ease: EASE }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ImageIcon size={18} style={{ color: 'var(--text-primary)' }} />
                <h2 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-serif)', margin: 0 }}>
                  {t ? t('settings.customImagesTitle', 'Custom Image Overrides') : 'Custom Image Overrides'} ({customList.length})
                </h2>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', margin: '0.25rem 0 0 0' }}>
                {t ? t('settings.customImagesDesc', 'Manually uploaded artist avatars and artwork photos.') : 'Manually uploaded artist avatars and artwork photos.'}
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
                title="导入配置"
              >
                <Upload size={12} /> {t ? t('settings.importConfig', 'Import Config') : 'Import Config'}
              </button>

              {customList.length > 0 && (
                <>
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={handleExportBackup}
                    style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
                    title="导出备份"
                  >
                    <Download size={12} /> {t ? t('settings.exportBackup', 'Export Backup') : 'Export Backup'}
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => { if (window.confirm(t ? t('settings.clearAllCustomConfirm', '确认清空所有自定义替换的图片？') : 'Clear all custom images?')) clearAllOverrides(); }}
                    style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem', color: 'var(--accent-red)' }}
                  >
                    <RotateCcw size={12} /> {t ? t('settings.clearAllCustom', 'Clear All') : 'Clear All'}
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
              {t ? t('settings.emptyCustomImages', 'No custom image overrides yet. Click "Replace" on any artist or artwork page to upload!') : 'No custom image overrides yet.'}
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
                    padding: '0.5rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-hairline)',
                    backgroundColor: 'var(--bg-surface)',
                    position: 'relative'
                  }}
                >
                  <img
                    src={item.dataUrl}
                    alt={item.title}
                    style={{ width: '42px', height: '42px', borderRadius: '4px', objectFit: 'cover', backgroundColor: 'var(--bg-subtle)' }}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '0.82rem', fontWeight: 550, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {item.title || item.id}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)' }}>
                      {item.targetType === 'artist' ? (t ? t('settings.artistAvatarType', 'Artist Avatar') : 'Artist Avatar') : (t ? t('settings.artworkImageType', 'Artwork Photo') : 'Artwork Photo')}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeCustomImage(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-tertiary)',
                      cursor: 'pointer',
                      padding: '4px'
                    }}
                    title={t ? t('settings.restoreTooltip', 'Restore default image') : 'Restore default image'}
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* ── Reverse Proxy Tutorial Card ── */}
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2, ease: EASE }}
          style={{ padding: '1.5rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
            <Globe size={16} style={{ color: 'var(--text-primary)' }} />
            <h3 style={{ fontSize: '0.95rem', fontFamily: 'var(--font-serif)', margin: 0 }}>
              {t ? t('settings.workerTemplateTitle', 'Cloudflare Worker Proxy Template') : 'Cloudflare Worker Proxy Template'}
            </h3>
          </div>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '0.75rem' }}>
            {t ? t('settings.workerTemplateDesc', 'Deploy the following snippet to Cloudflare Workers for free CORS reverse proxying:') : 'Deploy the following snippet to Cloudflare Workers for free CORS reverse proxying:'}
          </p>
          <pre
            style={{
              backgroundColor: 'var(--bg-subtle)',
              padding: '1rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.76rem',
              lineHeight: '1.5',
              overflowX: 'auto',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-mono)',
              border: '1px solid var(--border-hairline)',
              margin: 0,
            }}
          >
{`export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization, x-api-key, anthropic-version",
        }
      });
    }
    const url = new URL(request.url);
    // Forward to configured upstream (e.g., https://api.deepseek.com or https://api.openai.com)
    const upstreamHost = env.UPSTREAM_HOST || "https://api.deepseek.com";
    const targetUrl = upstreamHost + url.pathname + url.search;
    const modifiedRequest = new Request(targetUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body
    });
    const response = await fetch(modifiedRequest);
    const newHeaders = new Headers(response.headers);
    newHeaders.set("Access-Control-Allow-Origin", "*");
    return new Response(response.body, {
      status: response.status,
      headers: newHeaders
    });
  }
};`}
          </pre>
        </motion.div>
      </motion.div>
    </MouseSpotlight>
  );
}
