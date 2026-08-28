/**
 * AI Service for Groq Integration
 * Supports Vite Proxy (/api/groq), Cloudflare Worker proxy, or direct fetch.
 */

export const getGroqApiKey = () => {
  return localStorage.getItem('groqApiKey') || '';
};

export const getCloudflareWorkerUrl = () => {
  return localStorage.getItem('cfWorkerUrl') || '';
};

/**
 * Sends a chat completion prompt to Groq API.
 */
export async function callGroqAi({ prompt, systemPrompt = '', jsonFormat = false }) {
  const apiKey = getGroqApiKey();
  const cfWorkerUrl = getCloudflareWorkerUrl();

  if (!apiKey && !cfWorkerUrl) {
    throw new Error('未配置 API Key。请前往“系统设置”页面配置 Groq API Key。');
  }

  const messages = [];
  if (systemPrompt) {
    messages.push({ role: 'system', content: systemPrompt });
  }
  messages.push({ role: 'user', content: prompt });

  const payload = {
    model: 'llama-3.3-70b-versatile',
    messages,
    temperature: 0.7,
    max_tokens: 1500,
  };

  if (jsonFormat) {
    payload.response_format = { type: 'json_object' };
  }

  let endpoint = '/api/groq/chat/completions';
  let headers = {
    'Content-Type': 'application/json',
  };

  if (cfWorkerUrl) {
    endpoint = cfWorkerUrl;
    if (apiKey) headers['Authorization'] = `Bearer ${apiKey}`;
  } else {
    // Local dev or Vite Proxy
    headers['Authorization'] = `Bearer ${apiKey}`;
  }

  try {
    let response = await fetch(endpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
    });

    // Fallback if proxy fails
    if (!response.ok && endpoint.startsWith('/api/groq')) {
      response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify(payload),
      });
    }

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`API 请求失败 [${response.status}]: ${errText}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (err) {
    console.error('Groq AI Call Error:', err);
    throw err;
  }
}

/**
 * Generate AI Quiz in English
 */
export async function generateAiQuizFromContent(movementName, count = 3) {
  const systemPrompt = `You are an expert art history professor. Generate multiple-choice quiz questions in English based on 20th-century art movements, painters, and masterpieces. Return JSON format only.`;
  
  const prompt = `Generate ${count} challenging multiple-choice quiz questions about "${movementName || '20th Century Modern Art movements like Futurism, Dadaism, Surrealism, De Stijl, Pop Art, Contemporary Art'}".
Format as JSON object with key "questions":
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

  const jsonString = await callGroqAi({ prompt, systemPrompt, jsonFormat: true });
  const parsed = JSON.parse(jsonString);
  return parsed.questions || parsed;
}

/**
 * Generate Deep Explanation for Artwork in Chinese
 */
export async function generateArtworkDeepDive(artworkTitle, artistName, movementName, knowledgePoints = []) {
  const systemPrompt = `你是一位顶尖艺术史学家和评论家。请用优雅、专业的中文对指定的艺术作品进行深度的艺术赏析、时代背景解读和视觉语言剖析。`;

  const prompt = `请针对以下艺术作品生成一份深度解析报告：
- 画作名称：${artworkTitle}
- 画家：${artistName}
- 艺术流派：${movementName}
- 核心知识点：${knowledgePoints.join('；')}

请包含以下结构：
1. 【艺术背景与创作时代】（介绍该流派及时代的思想背景）
2. 【画面视觉语言与技法解析】（分析色彩、构图、线条、意象）
3. 【艺术史地位与核心考查要点】（总结对后世的影响与考试常考要点）`;

  return await callGroqAi({ prompt, systemPrompt });
}

/**
 * Generate Comprehensive Study Report in Chinese
 */
export async function generateStudyReport(progressData) {
  const systemPrompt = `你是一位严谨的艺术史复习导师。请根据用户的学习进度和测验成绩，使用中文生成一份结构化的学习归纳与复习建议报告。`;

  const prompt = `请根据以下用户的学习数据生成复习归纳报告：
- 已学习作品数：${progressData.viewedArtworks.length} 件
- 答题平均掌握度：${Math.round(progressData.masteryLevel || 0)}%
- 测验记录数：${progressData.quizScores.length} 次

请包含：
1. 【整体学习总结与能力评估】
2. 【知识盲区与重点流派强化建议】
3. 【艺术史考点速记口诀/三步记忆法】`;

  return await callGroqAi({ prompt, systemPrompt });
}

/**
 * Conversational AI Assistant
 */
export async function chatWithFloatingAssistant(context, userMessage) {
  const systemPrompt = `你是一位专注且风趣的西方现代艺术史导师。请根据下方提供的【当前知识点背景】，解答用户的提问。如果用户的提问与艺术史无关，请礼貌地将其引导回艺术史主题。\n\n【当前知识点背景】:\n${context}`;
  
  return await callGroqAi({ prompt: userMessage, systemPrompt });
}
