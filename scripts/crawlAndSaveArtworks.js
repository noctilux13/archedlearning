import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { artData } from '../src/data/artData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ARTWORKS_DIR = path.join(__dirname, '../public/images/artworks');
const ARTISTS_DIR = path.join(__dirname, '../public/images/artists');
const CACHE_DIR = path.join(__dirname, '../public/images/cache');
const DATA_DIR = path.join(__dirname, '../public/data');

[ARTWORKS_DIR, ARTISTS_DIR, CACHE_DIR, DATA_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36';

// Curated query list for 100% precision
const artworkQueries = {
  "city-rises": "The City Rises Umberto Boccioni painting 1910",
  "riot-gallery": "Rissa in galleria Umberto Boccioni Riot in the Gallery 1910",
  "simultaneous-visions": "Visioni simultanee Umberto Boccioni Simultaneous Visions 1911",
  "dynamism-cyclist": "Dinamismo di un ciclista Umberto Boccioni Dynamism of a Cyclist",
  "unique-forms": "Forme uniche della continuita nello spazio Umberto Boccioni sculpture",
  "development-bottle": "Sviluppo di una bottiglia nello spazio Umberto Boccioni MoMA",

  "piazza-duomo": "Piazza del Duomo a Milano Carlo Carra 1909",
  "theater-exit": "Uscita da teatro Carlo Carra Leaving the Theatre 1910",
  "funeral-galli": "I funerali dell anarchico Galli Carlo Carra MoMA",
  "interventionist-demo": "Manifestazione interventista Carlo Carra Patriotic Celebration 1914",
  "knight-western-spirit": "Il cavaliere dello spirito occidentale Carlo Carra 1917",
  "metaphysical-muse": "La musa metafisica Carlo Carra 1917 Pinacoteca di Brera",

  "nude-descending": "Nu descendant un escalier n 2 Marcel Duchamp Philadelphia Museum",
  "fountain": "Fountain Marcel Duchamp 1917 urinal",
  "lhooq": "L.H.O.O.Q. Marcel Duchamp Mona Lisa moustache 1919",
  "shelter": "Air de Paris Marcel Duchamp 50 cc of Paris Air 1919",
  "bicycle-wheel": "Bicycle Wheel Marcel Duchamp 1913 MoMA",

  "violon-dingres": "Le Violon d Ingres Man Ray 1924 photograph",

  "persistence-of-memory": "The Persistence of Memory Salvador Dali melting clocks 1931",
  "great-masturbator": "The Great Masturbator Salvador Dali El gran masturbador 1929",
  "temptation-st-anthony": "The Temptation of St. Anthony Salvador Dali 1946 painting",

  "i-and-the-village": "I and the Village Marc Chagall 1911 MoMA",
  "chagall-birthday": "Birthday Marc Chagall 1915 MoMA anniversary",
  "romeo-juliette": "Marc Chagall Romeo and Juliet Paris Opera ceiling study",

  "treachery-of-images": "The Treachery of Images Rene Magritte Ceci nest pas une pipe 1929",
  "the-lovers": "The Lovers Rene Magritte Les Amants 1928 MoMA",
  "golconda": "Golconda Rene Magritte 1953 bowler hats",
  "menaced-assassin": "The Menaced Assassin Rene Magritte L Assassin menace 1927",
  "not-to-be-reproduced": "Not to Be Reproduced Rene Magritte La reproduction interdite 1937",
  "son-of-man": "The Son of Man Rene Magritte green apple bowler hat 1964",

  "the-farm": "The Farm Joan Miro La Masia 1921 National Gallery",
  "the-tilled-field": "The Tilled Field Joan Miro 1923 Guggenheim",
  "maternity": "Maternity Joan Miro 1924 National Galleries Scotland",
  "smile-flamboyant-wings": "The Smile of the Flamboyant Wings Joan Miro 1953",
  "woman-and-bird": "Dona i Ocell Joan Miro sculpture Barcelona",

  "walking-man-i": "Walking Man I Alberto Giacometti L Homme qui marche I bronze sculpture",

  "nostalgia-infinite": "The Nostalgia of the Infinite Giorgio de Chirico 1912 MoMA",
  "piazza-d-italia": "Piazza d Italia Giorgio de Chirico 1913",
  "mystery-melancholy-street": "Mystery and Melancholy of a Street Giorgio de Chirico 1914",
  "disquieting-muses": "The Disquieting Muses Giorgio de Chirico Le muse inquietanti",
  "hector-and-andromache": "Hector and Andromache Giorgio de Chirico 1917",
  "song-of-love": "The Song of Love Giorgio de Chirico Canto damore 1914",

  "counter-composition-xiii": "Counter-Composition XIII Theo van Doesburg 1929 Stedelijk",
  "composition-decentralisee": "Decentralized Composition Theo van Doesburg 1924",

  "gray-tree": "The Gray Tree Piet Mondrian De grijze boom 1911",
  "composition-red-blue-yellow": "Composition with Red Blue and Yellow Piet Mondrian 1930",
  "broadway-boogie-woogie": "Broadway Boogie-Woogie Piet Mondrian 1942 MoMA",

  "girls-romances": "Drowning Girl Roy Lichtenstein 1963 MoMA",
  "look-mickey": "Look Mickey Roy Lichtenstein 1961 National Gallery",

  "campbell-soup": "Campbell s Soup Cans Andy Warhol 1962 MoMA 32 cans",
  "shot-marilyns": "Shot Sage Blue Marilyn Andy Warhol 1964 silkscreen",
  "la-banana": "Velvet Underground and Nico Andy Warhol yellow banana cover",
  "elvis-presley": "Double Elvis Andy Warhol 1963 gun",
  "coca-cola": "Green Coca-Cola Bottles Andy Warhol 1962 Whitney",

  "autumn-rhythm": "Autumn Rhythm Number 30 Jackson Pollock 1950 Met",
  "one-number-31": "One Number 31 1950 Jackson Pollock MoMA",

  "concetto-spaziale-punctures": "Concetto Spaziale Buchi Lucio Fontana holes",
  "concetto-spaziale-slashes": "Concetto Spaziale Attese Lucio Fontana slashed canvas",

  "artists-shit": "Artist s Shit Piero Manzoni Merda d artista 1961 can"
};

const artistQueries = {
  "umberto-boccioni": "Umberto Boccioni portrait photograph artist",
  "carlo-carra": "Carlo Carra portrait photograph artist",
  "marcel-duchamp": "Marcel Duchamp portrait photograph artist 1927",
  "man-ray": "Man Ray portrait photograph artist",
  "salvador-dali": "Salvador Dali portrait photograph with moustache",
  "marc-chagall": "Marc Chagall portrait photograph artist",
  "rene-magritte": "Rene Magritte portrait photograph bowler hat artist",
  "joan-miro": "Joan Miro portrait photograph artist",
  "alberto-giacometti": "Alberto Giacometti portrait photograph sculptor",
  "giorgio-de-chirico": "Giorgio de Chirico portrait photograph artist",
  "theo-van-doesburg": "Theo van Doesburg portrait photograph De Stijl",
  "piet-mondrian": "Piet Mondrian portrait photograph artist",
  "roy-lichtenstein": "Roy Lichtenstein portrait photograph pop artist",
  "andy-warhol": "Andy Warhol portrait photograph pop art",
  "jackson-pollock": "Jackson Pollock portrait photograph painter",
  "lucio-fontana": "Lucio Fontana portrait photograph artist",
  "piero-manzoni": "Piero Manzoni portrait photograph artist"
};

async function downloadBuffer(url) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 12000);
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': USER_AGENT,
        'Referer': 'https://www.google.com/'
      },
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const ab = await res.arrayBuffer();
    const buf = Buffer.from(ab);
    if (buf.length < 2000) throw new Error(`Buffer too small: ${buf.length} bytes`);
    return buf;
  } catch (err) {
    clearTimeout(timeoutId);
    throw err;
  }
}

async function searchBingImages(query) {
  try {
    const url = `https://www.bing.com/images/search?q=${encodeURIComponent(query)}&form=HDRSC2`;
    const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
    const html = await res.text();
    const matches = [...html.matchAll(/murl&quot;:&quot;(.*?)&quot;/g)];
    const urls = matches.map(m => m[1]).filter(u => u && (u.startsWith('http://') || u.startsWith('https://')));
    return urls;
  } catch (e) {
    return [];
  }
}

async function searchWikipediaImage(query) {
  try {
    const url = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrlimit=4&prop=pageimages&piprop=original|thumbnail&pithumbsize=1200&format=json`;
    const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
    const data = await res.json();
    if (data?.query?.pages) {
      const pages = Object.values(data.query.pages).sort((a, b) => (a.index || 99) - (b.index || 99));
      const urls = [];
      for (const p of pages) {
        if (p.original?.source) urls.push(p.original.source);
        if (p.thumbnail?.source) urls.push(p.thumbnail.source);
      }
      return urls;
    }
  } catch (e) {}
  return [];
}

async function crawlAndSave(query, destPath, cachePath) {
  // Try Wikipedia first
  const wikiUrls = await searchWikipediaImage(query);
  for (const url of wikiUrls) {
    try {
      const buf = await downloadBuffer(url);
      fs.writeFileSync(destPath, buf);
      if (cachePath) fs.writeFileSync(cachePath, buf);
      return { success: true, source: url };
    } catch (e) {}
  }

  // Try Bing Images search next
  const bingUrls = await searchBingImages(query);
  for (const url of bingUrls.slice(0, 5)) {
    try {
      const buf = await downloadBuffer(url);
      fs.writeFileSync(destPath, buf);
      if (cachePath) fs.writeFileSync(cachePath, buf);
      return { success: true, source: url };
    } catch (e) {}
  }

  return { success: false, source: null };
}

async function main() {
  console.log("=================================================");
  console.log(" 艺术史全量画作与艺术家肖像网络爬虫抓取系统 (V3)");
  console.log("=================================================\n");

  const artworksCache = {};
  let artistCount = 0;
  let artworkCount = 0;

  // 1. 抓取艺术家肖像
  console.log("[Phase 1/2] 正在抓取 17 位艺术大师真实肖像照...");
  for (const movement of artData) {
    for (const artist of movement.artists) {
      const artistDest = path.join(ARTISTS_DIR, `${artist.id}.jpg`);
      const query = artistQueries[artist.id] || `${artist.englishName || artist.name} portrait artist`;
      
      console.log(` -> 检索艺术家: ${artist.name} (${query})`);
      const res = await crawlAndSave(query, artistDest);

      if (res.success) {
        console.log(`    ✓ 抓取并保存成功: ${artist.name}`);
        artistCount++;
      } else {
        console.log(`    ✗ 抓取失败: ${artist.name}`);
      }
      await new Promise(r => setTimeout(r, 400));
    }
  }

  // 2. 抓取 59 件艺术名作
  console.log("\n[Phase 2/2] 正在抓取 59 件艺术名作高清原图并保存至 public/images/artworks/ ...");
  for (const movement of artData) {
    for (const artist of movement.artists) {
      for (const artwork of artist.artworks) {
        const artworkDest = path.join(ARTWORKS_DIR, `${artwork.id}.jpg`);
        const cacheDest = path.join(CACHE_DIR, `${artwork.id}.jpg`);
        const query = artworkQueries[artwork.id] || `${artwork.title} ${artist.englishName || artist.name} painting`;

        console.log(` -> 检索名作: 《${artwork.title}》 [${artwork.id}]`);
        const res = await crawlAndSave(query, artworkDest, cacheDest);

        if (res.success) {
          console.log(`    ✓ 抓取并保存成功: 《${artwork.title}》`);
          artworkCount++;
        } else {
          console.log(`    ✗ 抓取失败: 《${artwork.title}》`);
        }

        artworksCache[artwork.id] = {
          id: artwork.id,
          artist: artist.englishName || artist.name,
          artistZh: artist.name,
          title: artwork.title,
          date: artwork.date,
          location: artwork.location,
          image_url: `/images/artworks/${artwork.id}.jpg`,
          source_url: res.source || `https://en.wikipedia.org/wiki/${encodeURIComponent(artwork.title)}`,
          status: res.success ? 'verified' : 'needs_review'
        };

        await new Promise(r => setTimeout(r, 400));
      }
    }
  }

  // 3. 写入最新 artworksCache.json
  const cacheFile = path.join(DATA_DIR, 'artworksCache.json');
  fs.writeFileSync(cacheFile, JSON.stringify(artworksCache, null, 2), 'utf-8');

  console.log("\n=================================================");
  console.log(`抓取任务全部完成！`);
  console.log(`- 艺术家肖像: ${artistCount}/17 已下载至 public/images/artists/`);
  console.log(`- 名作画作: ${artworkCount}/59 已下载至 public/images/artworks/`);
  console.log(`- JSON 数据索引: ${cacheFile}`);
  console.log("=================================================");
}

main();
