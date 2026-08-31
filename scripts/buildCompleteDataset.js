import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { artData as existingArtData } from '../src/data/artData.js';
import { architectureMovements } from './crawlArchitectureImages.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Tag existing movements with category "art"
const artMovements = existingArtData.filter(m => !['baroque-architecture', 'neoclassical-architecture', 'industrial-architecture', 'art-nouveau-architecture', 'expressionist-and-gaudi'].includes(m.id)).map(m => ({
  ...m,
  category: "art"
}));

// Tag architecture movements with category "architecture"
const archMovements = architectureMovements.map(m => ({
  ...m,
  category: "architecture"
}));

// Complete merged dataset
const mergedData = [...artMovements, ...archMovements];

// Comprehensive Quiz Question Bank (combining Art History & Architecture PDF Exams)
const completeQuizQuestions = [
  // --- Architecture Exam Questions from PDF ---
  {
    id: "arch_q1",
    category: "architecture",
    text: "The word 'echino' (海胆饰 / 垫盘) defines a part of which architectural element?",
    options: ["Column (柱身)", "Frieze (檐壁 / 额枋)", "Capital (柱头)", "Pediment (三角山花)", "Cornice (檐口)"],
    correctAnswer: 2,
    explanation: "In classical Greek Doric order, the echinus (echino) is the round, cushion-like molding directly below the abacus forming the capital."
  },
  {
    id: "arch_q2",
    category: "architecture",
    text: "Which of the following works was NOT designed by Michelangelo?",
    options: ["Dome of San Pietro", "Laurentian Library", "Porta Pia", "The Palazzo Vecchio", "Sagrestia Nuova"],
    correctAnswer: 3,
    explanation: "The Palazzo Vecchio in Florence was designed by Arnolfo di Cambio. Michelangelo designed the St. Peter's Dome, Laurentian Library, Porta Pia, and Sagrestia Nuova (New Sacristy)."
  },
  {
    id: "arch_q3",
    category: "architecture",
    text: "Palladio redesigned the Palazzo della Ragione in Vicenza, renaming it a 'basilica', in order to:",
    options: [
      "The new function of a religious cult building",
      "The overturned ship's hull roof",
      "The imposing size of the building",
      "The addition of the loggia to serlian (塞利奥式三联拱窗双层敞廊)",
      "The tripartition into naves"
    ],
    correctAnswer: 3,
    explanation: "Palladio encased the gothic structure with two-storey marble loggias featuring the famous Serlian window motif (Serliana / Palladian motif)."
  },
  {
    id: "arch_q4",
    category: "architecture",
    text: "The Domus Aurea (金宫) in ancient Rome was built as a lavish residence for which Roman Emperor?",
    options: ["Caligula", "Trajan", "Nero (尼禄)", "Vespasian", "Hadrian"],
    correctAnswer: 2,
    explanation: "The Domus Aurea was a vast landscaped palace built by Emperor Nero in the heart of Rome after the great fire of 64 AD."
  },
  {
    id: "arch_q5",
    category: "architecture",
    text: "The Palazzo dei Diamanti (钻石宫) in Ferrara took its name from:",
    options: [
      "From the square in which it is located",
      "By the designer who conceived it",
      "From the bossage (bugnato) that characterizes the external walls",
      "From the precious stones kept inside",
      "By its noble clients"
    ],
    correctAnswer: 2,
    explanation: "It is named after the 8,500 diamond-point faceted marble blocks (bugnato a punta di diamante) that cover its exterior walls."
  },
  {
    id: "arch_q6",
    category: "architecture",
    text: "To which period and century does the Tempietto of San Pietro in Montorio (by Bramante) date?",
    options: ["XV - Renaissance", "XVII - Baroque", "XVI - Renaissance (16世纪文艺复兴盛期)", "XVI - Baroque", "XVIII - Neoclassicism"],
    correctAnswer: 2,
    explanation: "Donato Bramante's Tempietto in Rome was commissioned around 1502 (early 16th century, High Renaissance)."
  },
  {
    id: "arch_q7",
    category: "architecture",
    text: "The architectural style of the Basilica di Sant'Ambrogio in Milan is:",
    options: ["Gothic", "Renaissance", "Eclectic", "Romanesque (罗马式 / 伦巴第罗曼风)", "Baroque"],
    correctAnswer: 3,
    explanation: "Sant'Ambrogio in Milan is one of the most ancient and celebrated masterpieces of Lombard Romanesque architecture."
  },
  {
    id: "arch_q8",
    category: "architecture",
    text: "What is the primary architectural style of the Milan Cathedral (Duomo di Milano)?",
    options: ["Gothic (哥特式 / 辐射状哥特)", "Renaissance", "Eclectic", "Romanesque", "Baroque"],
    correctAnswer: 0,
    explanation: "Duomo di Milano is the second-largest Catholic cathedral in the world, renowned for its flamboyant Gothic spires and pinnacles."
  },
  {
    id: "arch_q9",
    category: "architecture",
    text: "In what century did Filippo Brunelleschi, designer of the Florence Cathedral Dome, die?",
    options: ["XV (15th century, 1446)", "XIV", "XIII", "XVI", "XII"],
    correctAnswer: 0,
    explanation: "Filippo Brunelleschi died in 1446 in Florence, which is the 15th century (XV)."
  },
  {
    id: "arch_q10",
    category: "architecture",
    text: "The construction of the Parthenon on the Athenian Acropolis began in which year?",
    options: ["1444 b.c.", "447 b.c.", "823 b.c.", "1700 b.c.", "2478 b.c."],
    correctAnswer: 1,
    explanation: "Construction of the Parthenon in Athens began in 447 BC under the leadership of Pericles, by architects Ictinus and Callicrates."
  },
  {
    id: "arch_q11",
    category: "architecture",
    text: "Who designed the iconic wavy red-brick facade of Palazzo Carignano and the interlaced dome of the Chapel of the Holy Shroud in Turin?",
    options: ["Francesco Borromini", "Gian Lorenzo Bernini", "Guarino Guarini", "Luigi Vanvitelli"],
    correctAnswer: 2,
    explanation: "Guarino Guarini was the mathematical genius of Piedmontese Baroque who designed Palazzo Carignano and the Chapel of the Holy Shroud."
  },
  {
    id: "arch_q12",
    category: "architecture",
    text: "Which Belgian architect created Hôtel Tassel (1893) in Brussels, introducing the famous 'whiplash line' and visible ironwork to domestic interiors?",
    options: ["Victor Horta", "Hector Guimard", "Joseph Maria Olbrich", "Antoni Gaudí"],
    correctAnswer: 0,
    explanation: "Victor Horta's Hôtel Tassel in Brussels is universally acknowledged as the first mature Art Nouveau building."
  },
  {
    id: "arch_q13",
    category: "architecture",
    text: "Which building bears the famous motto 'Der Zeit ihre Kunst. Der Kunst ihre Freiheit' (To every age its art, to every art its freedom)?",
    options: ["Secession Building (Vienna)", "Einstein Tower", "Glass Pavilion (Cologne)", "Rotonde de la Villette"],
    correctAnswer: 0,
    explanation: "The Vienna Secession Building (1897) by Joseph Maria Olbrich bears this famous motto over its entrance."
  },
  {
    id: "arch_q14",
    category: "architecture",
    text: "Antoni Gaudí used which technique of recycled ceramic and tile mosaics in works like Sagrada Família and Casa Batlló?",
    options: ["Trencadís", "Sgraffito", "Opus sectile", "Intarsia"],
    correctAnswer: 0,
    explanation: "Trencadís is the Catalan mosaic technique created from broken tiles, dinnerware, and glass pioneered by Gaudí and Josep Maria Jujol."
  },
  {
    id: "arch_q15",
    category: "architecture",
    text: "The Crystal Palace (1851) in London was designed by which pioneer using modular prefabricated iron and plate glass?",
    options: ["Gustave Eiffel", "Joseph Paxton", "Leo von Klenze", "Claude Nicolas Ledoux"],
    correctAnswer: 1,
    explanation: "Sir Joseph Paxton drew on his greenhouse engineering experience to design the prefabricated iron and glass Crystal Palace for the 1851 Great Exhibition."
  },

  // --- Art History Core Questions ---
  {
    id: "art_q1",
    category: "art",
    text: "Which movement celebrated modern technology, industrial machinery, and velocity?",
    options: ["Futurism (未来主义)", "Dadaism (达达主义)", "Surrealism (超现实主义)", "De Stijl (风格派)"],
    correctAnswer: 0,
    explanation: "Futurism, founded by Marinetti in 1909, exalted dynamism, technology, and speed."
  },
  {
    id: "art_q2",
    category: "art",
    text: "Who created the famous 'Readymade' titled 'Fountain' by signing a porcelain urinal 'R. Mutt 1917'?",
    options: ["Man Ray", "Marcel Duchamp", "Salvador Dalí", "Piet Mondrian"],
    correctAnswer: 1,
    explanation: "Marcel Duchamp submitted Fountain in 1917, sparking the modern conceptual art revolution."
  },
  {
    id: "art_q3",
    category: "art",
    text: "Which painting by René Magritte features a pipe with the text 'Ceci n'est pas une pipe'?",
    options: ["The Son of Man", "The Lovers", "The Treachery of Images", "Golconda"],
    correctAnswer: 2,
    explanation: "The Treachery of Images (1929) highlights the semiotic separation between a physical object and its visual representation."
  },
  {
    id: "art_q4",
    category: "art",
    text: "Which artist slashed canvases with a razor blade to explore 3D space in Spatialism?",
    options: ["Jackson Pollock", "Lucio Fontana", "Piero Manzoni", "Umberto Boccioni"],
    correctAnswer: 1,
    explanation: "Lucio Fontana's 'Concetto Spaziale: Attese' series featured deliberate cuts into monochrome canvases to transcend 2D surface limitations."
  },
  {
    id: "art_q5",
    category: "art",
    text: "What technique did Jackson Pollock pioneer by dripping enamel paint on canvases laid flat on the floor?",
    options: ["Ben-Day Dots", "Silkscreen Printing", "Action Painting / Drip Technique", "Photomontage"],
    correctAnswer: 2,
    explanation: "Pollock used drip technique and action painting to express rhythmic, physical unconscious energy across large canvases."
  }
];

const targetFile = path.join(__dirname, '../src/data/artData.js');
const fileContent = `// 20世纪西方现代艺术史与欧洲经典建筑史权威知识库
// 涵盖 13 大流派阶段（8大现代艺术流派 + 5大核心建筑史阶段）、35 位大师巨匠与 90 件传世作品/地标

export const artData = ${JSON.stringify(mergedData, null, 2)};

export const quizQuestions = ${JSON.stringify(completeQuizQuestions, null, 2)};

export const getQuizQuestions = (filterCategory) => {
  let pool = [...quizQuestions];
  if (filterCategory && filterCategory !== 'all') {
    pool = pool.filter(q => q.category === filterCategory);
  }
  return pool.sort(() => Math.random() - 0.5);
};
`;

fs.writeFileSync(targetFile, fileContent, 'utf-8');

console.log("================================================");
console.log(`成功整合艺术史与建筑史完整知识库！`);
console.log(`- 总流派阶段数: ${mergedData.length} 个 (现代艺术 8 + 经典建筑 5)`);
console.log(`- 大师总人数: ${mergedData.reduce((acc, m) => acc + m.artists.length, 0)} 位`);
console.log(`- 作品/地标总数: ${mergedData.reduce((acc, m) => acc + m.artists.reduce((a, art) => a + art.artworks.length, 0), 0)} 件`);
console.log(`- 题库真题总数: ${completeQuizQuestions.length} 道`);
console.log("================================================");
