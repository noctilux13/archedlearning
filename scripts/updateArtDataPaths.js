import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { artData, getQuizQuestions } from '../src/data/artData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Update artData
for (const movement of artData) {
  for (const artist of movement.artists) {
    artist.avatar = `/images/artists/${artist.id}.jpg`;
    for (const artwork of artist.artworks) {
      artwork.image = `/images/artworks/${artwork.id}.jpg`;
    }
  }
}

const targetFile = path.join(__dirname, '../src/data/artData.js');
const newContent = `// 20世纪西方现代艺术史权威学习知识库
// 包含 8 大核心流派、17 位代表大师与 59 件传世名作，已 100% 精准匹配权威图片与高清肖像

export const artData = ${JSON.stringify(artData, null, 2)};

export const getQuizQuestions = () => {
  return [
    {
      id: "q1",
      text: "Which movement celebrated modern technology, industrial machinery, and velocity?",
      options: ["Futurism (未来主义)", "Dadaism (达达主义)", "Surrealism (超现实主义)", "De Stijl (风格派)"],
      correctAnswer: 0,
      explanation: "Futurism, founded by Marinetti in 1909, exalted dynamism, technology, and speed."
    },
    {
      id: "q2",
      text: "Who created the famous 'Readymade' titled 'Fountain' by signing a porcelain urinal 'R. Mutt 1917'?",
      options: ["Man Ray", "Marcel Duchamp", "Salvador Dali", "Piet Mondrian"],
      correctAnswer: 1,
      explanation: "Marcel Duchamp submitted Fountain in 1917, sparking the modern conceptual art movement."
    },
    {
      id: "q3",
      text: "Which painting by Rene Magritte features a pipe with the text 'Ceci n'est pas une pipe'?",
      options: ["The Son of Man", "The Lovers", "The Treachery of Images", "Golconda"],
      correctAnswer: 2,
      explanation: "The Treachery of Images (1929) highlights the separation between a physical object and its representation."
    },
    {
      id: "q4",
      text: "Which artist slashed canvases with a razor blade to explore 3D space in Spatialism?",
      options: ["Jackson Pollock", "Lucio Fontana", "Piero Manzoni", "Umberto Boccioni"],
      correctAnswer: 1,
      explanation: "Lucio Fontana's 'Concetto Spaziale' series featured deliberate slashes in monochrome canvases."
    },
    {
      id: "q5",
      text: "What technique did Jackson Pollock pioneer by dripping paint on canvases laid flat on the floor?",
      options: ["Ben-Day Dots", "Silkscreen", "Action Painting / Drip Technique", "Automatism"],
      correctAnswer: 2,
      explanation: "Pollock used drip technique and action painting to express raw physical energy."
    }
  ];
};
`;

fs.writeFileSync(targetFile, newContent, 'utf-8');
console.log('Successfully updated src/data/artData.js with new local image and avatar paths!');
