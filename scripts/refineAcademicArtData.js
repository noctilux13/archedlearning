import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { artData, quizQuestions } from '../src/data/artData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to clean bombastic words from text
function cleanAcademicText(str) {
  if (!str) return str;
  return str
    .replace(/旷世巨构|旷世巨作|神作|神级|无上丰碑|炸弹般的名作|令人惊叹|惊人奇迹|开山祖师之作|终极形态|终极典范|终极杰作/g, '代表作')
    .replace(/令人称奇的/g, '具有探索性的')
    .replace(/令人敬畏的/g, '宏大的')
    .replace(/前无古人的/g, '独具特色的')
    .replace(/绝无仅有/g, '少见')
    .replace(/神圣天光/g, '漫射光线')
    .replace(/不朽奇迹/g, '代表性建筑')
    .replace(/人类建筑史上的不朽奇迹/g, '西班牙现代主义代表性建筑');
}

// Format artworks & artists with English primary and Chinese secondary
const refinedData = artData.map(movement => {
  return {
    ...movement,
    displayName: `${movement.englishName} (${movement.name})`,
    description: cleanAcademicText(movement.description),
    historicalContext: cleanAcademicText(movement.historicalContext),
    artists: movement.artists.map(artist => {
      // Extract clean English name & Chinese translation
      let englishName = artist.englishName || artist.name;
      let zhName = artist.name;
      if (zhName.includes('(')) {
        zhName = zhName.split('(')[1].replace(')', '').trim();
      }

      return {
        ...artist,
        displayName: `${englishName} (${zhName})`,
        bio: cleanAcademicText(artist.bio),
        artworks: artist.artworks.map(work => {
          let rawTitle = work.title;
          let enTitle = rawTitle;
          let zhTitle = '';

          // Parse various formats like "La città che sale / 崛起中的城市 (The City Rises)"
          if (rawTitle.includes(' / ')) {
            const parts = rawTitle.split(' / ');
            const p1 = parts[0].trim();
            const p2 = parts[1].trim();

            if (p2.includes('(') && p2.includes(')')) {
              const inside = p2.match(/\((.*?)\)/)?.[1] || '';
              const outside = p2.replace(/\(.*?\)/, '').trim();
              enTitle = inside || p1;
              zhTitle = outside || p1;
            } else {
              enTitle = p1;
              zhTitle = p2;
            }
          } else if (rawTitle.includes('(') && rawTitle.includes(')')) {
            const inside = rawTitle.match(/\((.*?)\)/)?.[1] || '';
            const outside = rawTitle.replace(/\(.*?\)/, '').trim();
            if (/[\u4e00-\u9fa5]/.test(outside)) {
              zhTitle = outside;
              enTitle = inside;
            } else {
              enTitle = outside;
              zhTitle = inside;
            }
          }

          // Clean up titles
          enTitle = enTitle.replace(/^《|》$/g, '').trim();
          zhTitle = zhTitle.replace(/^《|》$/g, '').trim();

          const formattedTitle = zhTitle ? `${enTitle} (${zhTitle})` : enTitle;

          return {
            ...work,
            title: formattedTitle,
            titleEn: enTitle,
            titleZh: zhTitle,
            notes: cleanAcademicText(work.notes),
            knowledgePoints: (work.knowledgePoints || []).map(kp => cleanAcademicText(kp))
          };
        })
      };
    })
  };
});

const targetFile = path.join(__dirname, '../src/data/artData.js');
const output = `// 20世纪西方现代艺术史与欧洲经典建筑史权威知识库
// 涵盖 12 大流派阶段、35 位大师与 91 件代表作品/地标
// 遵循学术客观原则：英文为主，中文释义并列

export const artData = ${JSON.stringify(refinedData, null, 2)};

export const quizQuestions = ${JSON.stringify(quizQuestions, null, 2)};

export const getQuizQuestions = (filterCategory) => {
  let pool = [...quizQuestions];
  if (filterCategory && filterCategory !== 'all') {
    pool = pool.filter(q => q.category === filterCategory);
  }
  return pool.sort(() => Math.random() - 0.5);
};
`;

fs.writeFileSync(targetFile, output, 'utf-8');
console.log("Successfully refined artData.js with English-first titles and clean academic text!");
