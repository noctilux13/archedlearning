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

/**
 * Generate AI Quiz
 */
export async function generateAiQuizFromContent(movementName, count = 3) {
  const systemPrompt = `You are a concise art history examination author. Return pure JSON only with a "questions" array. No preamble or markdown conversation.`;
  
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
    const match = jsonString.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
    if (match) {
      const parsed = JSON.parse(match[1]);
      return parsed.questions || parsed;
    }
    throw e;
  }
}

/**
 * Generate Deep Explanation for Artwork (Concise & Razor-Sharp)
 */
export async function generateArtworkDeepDive(artworkTitle, artistName, movementName, knowledgePoints = []) {
  const systemPrompt = `你是一位精炼严谨的艺术史学者与学术导师。
【严格输出规范】
1. 直奔核心，严禁任何问候寒暄、讲课式口癖（如“大家好”、“今天我们来分析”）或结语套话。
2. 语言高密度、精炼沉稳、学术准确，杜绝空洞铺垫与浮夸修辞。
3. 篇幅严格控制在 250–350 字之间，条理清晰、一针见血。`;

  const prompt = `请对以下艺术作品进行精炼学术解析：
- 作品名称：${artworkTitle}
- 艺术家/建筑师：${artistName}
- 艺术流派：${movementName}
${knowledgePoints && knowledgePoints.length > 0 ? `- 核心要点：${knowledgePoints.join('；')}` : ''}

请直接按以下三点精要阐述：
1. 【时代语境与思想源流】（概括历史背景与核心观念）
2. 【视觉语言与形式分析】（深入构图法则、色彩光影、线条动势或空间结构）
3. 【艺术史考点要义】（提炼该作在研考与艺术史谱系中的核心考点）`;

  return await callAiService({ prompt, systemPrompt });
}

/**
 * Generate Comprehensive Study Report (Concise & Actionable)
 */
export async function generateStudyReport(progressData) {
  const systemPrompt = `你是一位精炼严谨的艺术史教学导师。
【准则】直奔要点，杜绝客套废话，结构清晰，篇幅控制在 250 字内。`;

  const prompt = `请根据研考学习数据生成精要复习建议：
- 已研读作品数：${progressData.viewedArtworks.length} 件
- 综合掌握度：${Math.round(progressData.masteryLevel || 0)}%
- 测验轮次：${progressData.quizScores.length} 次

按三项要点精炼列出：
1. 【进度与掌握度评估】
2. 【重点查漏补缺方向】
3. 【后续高效复习建议】`;

  return await callAiService({ prompt, systemPrompt });
}

/**
 * Interactive Assistant Chat Response (Concise & Direct)
 */
export async function generateAssistantChatResponse(userMessage, context = {}) {
  const systemPrompt = `你是一位精练严谨的艺术史随身学术助教。
【严格准则】
1. 直截了当回答问题，严禁寒暄问候、自我介绍或多余客套。
2. 语言精炼高密、论述客观，紧扣艺术史事实、形式语言与考点逻辑。
3. 篇幅适度精简（通常 150–250 字），重点明确，拒绝冗长车轱辘话。`;
  return await callAiService({ prompt: userMessage, systemPrompt });
}

export async function chatWithFloatingAssistant(contextText, userMessage) {
  const systemPrompt = `你是一位精练严谨的艺术史随身学术助教。当前研学语境：${contextText}。
【严格准则】
1. 直截了当回答问题，严禁任何寒暄问候（如“你好”、“很高兴解答”）、自我介绍或讲课式口吻。
2. 语言精炼高密、论述客观，紧扣艺术史事实、形式语言与考点逻辑。
3. 篇幅适度精简（通常 150–250 字），直击要害，避免冗长铺垫。`;
  return await callAiService({ prompt: userMessage, systemPrompt });
}
