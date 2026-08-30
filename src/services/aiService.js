/**
 * Universal Multi-Provider AI Service
 * Supports DeepSeek, Claude, OpenAI, Groq, OpenRouter, and Custom OpenAI-compatible endpoints.
 * Includes intelligent key prefix detection and auto-routing.
 */

export const getAiApiKey = () => {
  return localStorage.getItem('aiApiKey') || localStorage.getItem('groqApiKey') || '';
};

export const getAiApiEndpoint = () => {
  return localStorage.getItem('aiApiEndpoint') || 'https://api.deepseek.com/v1';
};

export const getAiApiModel = () => {
  return localStorage.getItem('aiApiModel') || 'deepseek-chat';
};

export const getCloudflareWorkerUrl = () => {
  return localStorage.getItem('cfWorkerUrl') || '';
};

// Aliases for backward compatibility
export const getGroqApiKey = getAiApiKey;

/**
 * Clean reasoning/thinking tags from response if present
 */
function cleanAiContent(text) {
  if (!text) return '';
  return text.replace(/<think>[\s\S]*?<\/think>\s*/gi, '').trim();
}

/**
 * Universal AI caller supporting OpenAI-compatible and Anthropic endpoints
 */
export async function callAiService({ prompt, systemPrompt = '', jsonFormat = false }) {
  const rawKey = getAiApiKey().trim();
  let rawEndpoint = getAiApiEndpoint().trim() || 'https://api.deepseek.com/v1';
  let model = getAiApiModel().trim() || 'deepseek-chat';
  const cfWorkerUrl = getCloudflareWorkerUrl().trim();

  if (!rawKey && !cfWorkerUrl) {
    throw new Error('未检测到有效 API Key。请前往「系统设置」配置您的 AI 接口密钥。');
  }

  // ── Auto-Detect Provider by API Key Prefix ──
  if (rawKey.startsWith('gsk_')) {
    // Groq API Key detected
    if (rawEndpoint.includes('deepseek.com') || !rawEndpoint) {
      rawEndpoint = 'https://api.groq.com/openai/v1';
    }
    // Auto-update deprecated or non-groq models (preserving qwen3.8 and gpt-oss)
    if (
      model === 'deepseek-chat' ||
      model.includes('llama3') ||
      model.includes('llama-3.3') ||
      model.includes('llama-3.1') ||
      model.includes('mixtral') ||
      model.includes('gemma')
    ) {
      model = 'qwen/qwen3.8-27b';
    }
  } else if (rawKey.startsWith('sk-ant-')) {
    // Anthropic Claude Key detected
    if (!rawEndpoint.includes('anthropic.com')) {
      rawEndpoint = 'https://api.anthropic.com/v1';
      model = 'claude-3-5-sonnet-20241022';
    }
  } else if (rawKey.startsWith('sk-or-')) {
    // OpenRouter Key detected
    if (rawEndpoint.includes('deepseek.com')) {
      rawEndpoint = 'https://openrouter.ai/api/v1';
      model = 'deepseek/deepseek-r1';
    }
  }

  // 1. Anthropic Claude Direct API
  if (rawEndpoint.includes('api.anthropic.com')) {
    let endpoint = rawEndpoint;
    if (!endpoint.endsWith('/messages')) {
      endpoint = endpoint.replace(/\/+$/, '') + '/messages';
    }
    const headers = {
      'Content-Type': 'application/json',
      'x-api-key': rawKey,
      'anthropic-version': '2023-06-01',
      'dangerously-allow-browser': 'true'
    };

    const payload = {
      model: model || 'claude-3-5-sonnet-20241022',
      max_tokens: 2000,
      messages: [{ role: 'user', content: prompt }]
    };
    if (systemPrompt) payload.system = systemPrompt;

    const response = await fetch(endpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Claude API [${response.status}]: ${errText}`);
    }

    const data = await response.json();
    const rawText = data.content?.[0]?.text || '';
    return cleanAiContent(rawText);
  }

  // 2. Standard OpenAI-Compatible Endpoints (DeepSeek, OpenAI, Groq, OpenRouter, Moonshot, SiliconFlow, Ollama)
  const messages = [];
  if (systemPrompt) {
    messages.push({ role: 'system', content: systemPrompt });
  }
  messages.push({ role: 'user', content: prompt });

  const payload = {
    model: model || 'deepseek-chat',
    messages,
    temperature: 0.6,
    max_tokens: 2000,
  };

  if (jsonFormat) {
    payload.response_format = { type: 'json_object' };
  }

  let endpoint = rawEndpoint;
  if (!endpoint.includes('/chat/completions')) {
    endpoint = endpoint.replace(/\/+$/, '') + '/chat/completions';
  }

  const headers = {
    'Content-Type': 'application/json',
  };

  if (cfWorkerUrl) {
    endpoint = cfWorkerUrl;
    if (rawKey) headers['Authorization'] = `Bearer ${rawKey}`;
  } else if (rawKey) {
    headers['Authorization'] = `Bearer ${rawKey}`;
  }

  try {
    let response = await fetch(endpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
    });

    // If 429 Rate Limited on Groq with 120b, auto-fallback to lightweight 20b model
    if (response.status === 429 && endpoint.includes('groq.com') && payload.model === 'openai/gpt-oss-120b') {
      console.warn('Groq 120b rate limited, auto-falling back to openai/gpt-oss-20b...');
      const fallbackPayload = { ...payload, model: 'openai/gpt-oss-20b' };
      response = await fetch(endpoint, {
        method: 'POST',
        headers,
        body: JSON.stringify(fallbackPayload),
      });
    }

    if (!response.ok) {
      const errText = await response.text();
      let errorMsg = errText;
      try {
        const parsed = JSON.parse(errText);
        errorMsg = parsed.error?.message || errText;
      } catch (e) {}
      throw new Error(`API 响应异常 [${response.status}] (${payload.model}): ${errorMsg}`);
    }

    const data = await response.json();
    const rawText = data.choices?.[0]?.message?.content || '';
    return cleanAiContent(rawText);
  } catch (err) {
    console.error('AI Service Call Error:', err);
    throw err;
  }
}

// Backward compatible export
export const callGroqAi = callAiService;

/**
 * Generate AI Quiz
 */
export async function generateAiQuizFromContent(movementName, count = 3) {
  const systemPrompt = `You are an expert art history professor. Return valid JSON only with a "questions" array.`;
  
  const prompt = `Generate ${count} multiple-choice quiz questions about "${movementName || '20th Century Modern Art movements like Futurism, Dadaism, Surrealism, De Stijl, Pop Art, and European Architecture'}".
Format strictly as a JSON object:
{
  "questions": [
    {
      "id": "q1",
      "text": "Question text here?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctAnswer": 0,
      "explanation": "Brief explanation of why this answer is correct."
    }
  ]
}`;

  const jsonString = await callAiService({ prompt, systemPrompt, jsonFormat: true });
  try {
    const parsed = JSON.parse(jsonString);
    return parsed.questions || parsed;
  } catch (e) {
    // If wrapped in markdown code fence
    const match = jsonString.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
    if (match) {
      const parsed = JSON.parse(match[1]);
      return parsed.questions || parsed;
    }
    throw e;
  }
}

/**
 * Generate Deep Explanation for Artwork
 */
export async function generateArtworkDeepDive(artworkTitle, artistName, movementName, knowledgePoints = []) {
  const systemPrompt = `你是一位严谨的艺术史学者与策展人。请对指定的艺术作品进行学术级的形式分析、时代背景考据与视觉语言剖析。`;

  const prompt = `请针对以下艺术作品生成学术解析报告：
- 作品名称：${artworkTitle}
- 艺术家/建筑师：${artistName}
- 艺术流派：${movementName}
- 核心要点：${knowledgePoints.join('；')}

请按以下结构阐述：
1. 【历史背景与时代语境】（阐释该时期的文化与思想源流）
2. 【画面形式与视觉语言分析】（深入剖析构图法则、色彩配置、线条动势或空间力学结构）
3. 【艺术史定位与考点要义】（客观归纳在艺术史谱系中的地位及学术考查重点）`;

  return await callAiService({ prompt, systemPrompt });
}

/**
 * Generate Comprehensive Study Report
 */
export async function generateStudyReport(progressData) {
  const systemPrompt = `你是一位严谨的艺术史教学导师。请根据用户的研读进度和测验成绩，生成客观结构化的学习归纳与复习建议报告。`;

  const prompt = `请根据以下学习数据生成复习归纳报告：
- 已研读作品数：${progressData.viewedArtworks.length} 件
- 平均掌握度：${Math.round(progressData.masteryLevel || 0)}%
- 测验轮次：${progressData.quizScores.length} 次

请包含：
1. 【研读进展客观评估】
2. 【重点流派与考点巩固建议】
3. 【艺术史脉络梳理要领】`;

  return await callAiService({ prompt, systemPrompt });
}

/**
 * Interactive Assistant Chat Response
 */
export async function generateAssistantChatResponse(userMessage, context = {}) {
  const systemPrompt = `你是一位精通西方艺术史与欧洲经典建筑的随身 AI 研学助手。请以严谨、优雅且沉稳的学术口吻解答用户的艺术史疑问。`;
  return await callAiService({ prompt: userMessage, systemPrompt });
}

export async function chatWithFloatingAssistant(contextText, userMessage) {
  const systemPrompt = `你是一位精通西方艺术史与欧洲经典建筑的随身 AI 研学助手。当前学习语境：${contextText}。请以严谨、优雅且沉稳的学术口吻解答用户的艺术史疑问。`;
  return await callAiService({ prompt: userMessage, systemPrompt });
}
