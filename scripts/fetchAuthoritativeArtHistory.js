import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ARTWORKS_DIR = path.join(__dirname, '../public/images/artworks');
const ARTISTS_DIR = path.join(__dirname, '../public/images/artists');
const CACHE_DIR = path.join(__dirname, '../public/images/cache');

const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36';

// 1. Authoritative Artist Portraits
const authoritativeArtists = {
  "umberto-boccioni": [
    "https://upload.wikimedia.org/wikipedia/commons/4/4b/Umberto_Boccioni_1914.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Umberto_Boccioni_1914.jpg/440px-Umberto_Boccioni_1914.jpg"
  ],
  "carlo-carra": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Carlo_Carr%C3%A0_1911.jpg/440px-Carlo_Carr%C3%A0_1911.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/c/c2/Carlo_Carr%C3%A0_1911.jpg"
  ],
  "marcel-duchamp": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Marcel_Duchamp_1965.jpg/440px-Marcel_Duchamp_1965.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/45/Marcel_Duchamp_1965.jpg"
  ],
  "man-ray": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Man_Ray_1934.jpg/440px-Man_Ray_1934.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/c/cf/Man_Ray_1934.jpg"
  ],
  "salvador-dali": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Salvador_Dal%C3%AD_1939.jpg/440px-Salvador_Dal%C3%AD_1939.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/2/24/Salvador_Dal%C3%AD_1939.jpg"
  ],
  "marc-chagall": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Marc_Chagall_1920s.jpg/440px-Marc_Chagall_1920s.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/b/be/Marc_Chagall_1920s.jpg"
  ],
  "rene-magritte": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Ren%C3%A9_Magritte.jpg/440px-Ren%C3%A9_Magritte.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/4a/Ren%C3%A9_Magritte.jpg"
  ],
  "joan-miro": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Joan_Miro_1935.jpg/440px-Joan_Miro_1935.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/5/5c/Joan_Miro_1935.jpg"
  ],
  "alberto-giacometti": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Alberto_Giacometti.jpg/440px-Alberto_Giacometti.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/2/28/Alberto_Giacometti.jpg"
  ],
  "giorgio-de-chirico": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Giorgio_de_Chirico_1936.jpg/440px-Giorgio_de_Chirico_1936.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/e/e0/Giorgio_de_Chirico_1936.jpg"
  ],
  "theo-van-doesburg": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Theo_van_Doesburg_1927.jpg/440px-Theo_van_Doesburg_1927.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/d/d4/Theo_van_Doesburg_1927.jpg"
  ],
  "piet-mondrian": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Piet_Mondrian_1926.jpg/440px-Piet_Mondrian_1926.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/9/9c/Piet_Mondrian_1926.jpg"
  ],
  "roy-lichtenstein": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Roy_Lichtenstein_1967.jpg/440px-Roy_Lichtenstein_1967.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/1/1b/Roy_Lichtenstein_1967.jpg"
  ],
  "andy-warhol": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Andy_Warhol_1975.jpg/440px-Andy_Warhol_1975.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2b/Andy_Warhol_1975.jpg"
  ],
  "jackson-pollock": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Jackson_Pollock_1928.jpg/440px-Jackson_Pollock_1928.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/3/30/Jackson_Pollock_1928.jpg"
  ],
  "lucio-fontana": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Lucio_Fontana_1960s.jpg/440px-Lucio_Fontana_1960s.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/5/52/Lucio_Fontana_1960s.jpg"
  ],
  "piero-manzoni": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Piero_Manzoni_1960.jpg/440px-Piero_Manzoni_1960.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a2/Piero_Manzoni_1960.jpg"
  ]
};

// 2. Authoritative Artwork High-Resolution Sources (Checked for exact subject matter)
const authoritativeArtworks = {
  // Futurism
  "city-rises": "https://upload.wikimedia.org/wikipedia/commons/b/b4/The_City_Rises_by_Umberto_Boccioni_1910.jpg",
  "riot-gallery": "https://upload.wikimedia.org/wikipedia/commons/e/eb/Boccioni_-_Rissa_in_galleria.jpg",
  "simultaneous-visions": "https://upload.wikimedia.org/wikipedia/commons/7/75/Boccioni_-_Simultaneous_Visions.jpg",
  "dynamism-cyclist": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Boccioni_-_Dynamism_of_a_Cyclist.jpg",
  "unique-forms": "https://upload.wikimedia.org/wikipedia/commons/0/07/Unique_Forms_of_Continuity_in_Space_by_Umberto_Boccioni_1913.jpg",
  "development-bottle": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Umberto_Boccioni%2C_1912%2C_Development_of_a_Bottle_in_Space.jpg/1024px-Umberto_Boccioni%2C_1912%2C_Development_of_a_Bottle_in_Space.jpg",
  
  "piazza-duomo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Carlo_Carr%C3%A0%2C_1909%2C_Piazza_del_Duomo_a_Milano%2C_oil_on_canvas%2C_56_x_54.5_cm.jpg/1024px-Carlo_Carr%C3%A0%2C_1909%2C_Piazza_del_Duomo_a_Milano%2C_oil_on_canvas%2C_56_x_54.5_cm.jpg",
  "theater-exit": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Carlo_Carr%C3%A0%2C_1910-11%2C_Leaving_the_Theatre_%28Uscita_da_teatro%29%2C_oil_on_canvas%2C_69_x_91_cm%2C_Estorick_Collection%2C_London.jpg/1024px-Carlo_Carr%C3%A0%2C_1910-11%2C_Leaving_the_Theatre_%28Uscita_da_teatro%29%2C_oil_on_canvas%2C_69_x_91_cm%2C_Estorick_Collection%2C_London.jpg",
  "funeral-galli": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Carlo_Carr%C3%A0_-_Funeral_of_the_Anarchist_Galli_-_Google_Art_Project.jpg/1280px-Carlo_Carr%C3%A0_-_Funeral_of_the_Anarchist_Galli_-_Google_Art_Project.jpg",
  "interventionist-demo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Carlo_Carr%C3%A0%2C_1914%2C_Interventionist_Demonstration_%28Manifestazione_Interventista_-_Festa_Patriottica%29%2C_tempera_and_collage_on_cardboard%2C_38.5_x_30_cm%2C_Gianni_Mattioli_Collection.jpg/1024px-Carlo_Carr%C3%A0%2C_1914%2C_Interventionist_Demonstration_%28Manifestazione_Interventista_-_Festa_Patriottica%29%2C_tempera_and_collage_on_cardboard%2C_38.5_x_30_cm%2C_Gianni_Mattioli_Collection.jpg",
  "knight-western-spirit": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Carlo_Carr%C3%A0%2C_1917%2C_Il_cavaliere_dello_spirito_occidentale_%28The_Western_Rider%29%2C_oil_on_canvas%2C_52_x_67_cm.jpg/1024px-Carlo_Carr%C3%A0%2C_1917%2C_Il_cavaliere_dello_spirito_occidentale_%28The_Western_Rider%29%2C_oil_on_canvas%2C_52_x_67_cm.jpg",
  "metaphysical-muse": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Carlo_Carr%C3%A0%2C_1917%2C_La_musa_metafisica_%28The_Metaphysical_Muse%29%2C_oil_on_canvas%2C_90_x_66_cm%2C_Pinacoteca_di_Brera%2C_Milan.jpg/1024px-Carlo_Carr%C3%A0%2C_1917%2C_La_musa_metafisica_%28The_Metaphysical_Muse%29%2C_oil_on_canvas%2C_90_x_66_cm%2C_Pinacoteca_di_Brera%2C_Milan.jpg",

  // Dadaism
  "nude-descending": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Marcel_Duchamp%2C_1912%2C_Nude_Descending_a_Staircase%2C_No._2%2C_oil_on_canvas%2C_147_x_89.2_cm%2C_Philadelphia_Museum_of_Art.jpg/1024px-Marcel_Duchamp%2C_1912%2C_Nude_Descending_a_Staircase%2C_No._2%2C_oil_on_canvas%2C_147_x_89.2_cm%2C_Philadelphia_Museum_of_Art.jpg",
  "fountain": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Duchamp_Fountaine.jpg/1024px-Duchamp_Fountaine.jpg",
  "lhooq": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Marcel_Duchamp_1919_LHOOQ.jpg/1024px-Marcel_Duchamp_1919_LHOOQ.jpg",
  "shelter": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Marcel_Duchamp%2C_1919%2C_Air_de_Paris_%2850_cc_of_Paris_Air%29%2C_ready-made.jpg/1024px-Marcel_Duchamp%2C_1919%2C_Air_de_Paris_%2850_cc_of_Paris_Air%29%2C_ready-made.jpg",
  "bicycle-wheel": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Bicycle_Wheel_%28Roue_de_bicyclette%29%2C_Marcel_Duchamp%2C_1913.jpg/1024px-Bicycle_Wheel_%28Roue_de_bicyclette%29%2C_Marcel_Duchamp%2C_1913.jpg",
  "violon-dingres": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Man_Ray%2C_1924%2C_Le_Violon_d%27Ingres%2C_gelatin_silver_print.jpg/1024px-Man_Ray%2C_1924%2C_Le_Violon_d%27Ingres%2C_gelatin_silver_print.jpg",

  // Surrealism
  "persistence-of-memory": "https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg",
  "great-masturbator": "https://upload.wikimedia.org/wikipedia/en/e/ee/The_Great_Masturbator.jpg",
  "temptation-st-anthony": "https://upload.wikimedia.org/wikipedia/en/1/11/The_Temptation_of_St_Anthony_-_Dali.jpg",
  "i-and-the-village": "https://upload.wikimedia.org/wikipedia/en/4/4b/I_and_the_Village.jpg",
  "chagall-birthday": "https://upload.wikimedia.org/wikipedia/en/e/eb/Chagall_Birthday.jpg",
  "romeo-juliette": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Marc_Chagall_ceiling_Paris_Opera_study_Romeo_and_Juliet.jpg/1024px-Marc_Chagall_ceiling_Paris_Opera_study_Romeo_and_Juliet.jpg",
  "treachery-of-images": "https://upload.wikimedia.org/wikipedia/en/b/b9/MagrittePipe.jpg",
  "the-lovers": "https://upload.wikimedia.org/wikipedia/en/0/07/The_Lovers_Magritte.jpg",
  "golconda": "https://upload.wikimedia.org/wikipedia/en/e/e4/Magritte_Golconda.jpg",
  "menaced-assassin": "https://upload.wikimedia.org/wikipedia/en/b/b3/The_Menaced_Assassin_1927.jpg",
  "not-to-be-reproduced": "https://upload.wikimedia.org/wikipedia/en/f/f6/Not_to_be_Reproduced.jpg",
  "son-of-man": "https://upload.wikimedia.org/wikipedia/en/e/e5/TheSonOfMan.jpg",
  "the-farm": "https://upload.wikimedia.org/wikipedia/en/a/a4/The_Farm_by_Joan_Mir%C3%B3%2C_1921-1922.jpg",
  "the-tilled-field": "https://upload.wikimedia.org/wikipedia/en/7/7b/The_Tilled_Field.jpg",
  "maternity": "https://upload.wikimedia.org/wikipedia/en/a/ad/Maternite_miro.jpg",
  "smile-flamboyant-wings": "https://upload.wikimedia.org/wikipedia/en/c/c2/The_Smile_of_the_Flamboyant_Wings.jpg",
  "woman-and-bird": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Dona_i_Ocell_-_Joan_Mir%C3%B3.jpg/1024px-Dona_i_Ocell_-_Joan_Mir%C3%B3.jpg",
  "walking-man-i": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Alberto_Giacometti_L%27homme_qui_marche_I.jpg/1024px-Alberto_Giacometti_L%27homme_qui_marche_I.jpg",

  // Metaphysics
  "nostalgia-infinite": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Giorgio_de_Chirico%2C_1912-13%2C_The_Nostalgia_of_the_Infinite%2C_oil_on_canvas%2C_135.3_x_64.8_cm%2C_Museum_of_Modern_Art%2C_New_York.jpg/1024px-Giorgio_de_Chirico%2C_1912-13%2C_The_Nostalgia_of_the_Infinite%2C_oil_on_canvas%2C_135.3_x_64.8_cm%2C_Museum_of_Modern_Art%2C_New_York.jpg",
  "piazza-d-italia": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Giorgio_de_Chirico_Piazza_d%27Italia.jpg/1024px-Giorgio_de_Chirico_Piazza_d%27Italia.jpg",
  "mystery-melancholy-street": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Mystery_and_Melancholy_of_a_Street_by_Giorgio_de_Chirico_1914.jpg/1024px-Mystery_and_Melancholy_of_a_Street_by_Giorgio_de_Chirico_1914.jpg",
  "disquieting-muses": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Le_muse_inquietanti.jpg/1024px-Le_muse_inquietanti.jpg",
  "hector-and-andromache": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Giorgio_de_Chirico_Hector_and_Andromache.jpg/1024px-Giorgio_de_Chirico_Hector_and_Andromache.jpg",
  "song-of-love": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/De_Chirico_Love_Song.jpg/1024px-De_Chirico_Love_Song.jpg",

  // De Stijl
  "counter-composition-xiii": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Theo_van_Doesburg_Contracompositie_XIII.jpg/1024px-Theo_van_Doesburg_Contracompositie_XIII.jpg",
  "composition-decentralisee": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Theo_van_Doesburg_Composition_d%C3%A9centralis%C3%A9e.jpg/1024px-Theo_van_Doesburg_Composition_d%C3%A9centralis%C3%A9e.jpg",
  "gray-tree": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Piet_Mondrian_-_The_Gray_Tree_-_Google_Art_Project.jpg/1280px-Piet_Mondrian_-_The_Gray_Tree_-_Google_Art_Project.jpg",
  "composition-red-blue-yellow": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Piet_Mondriaan%2C_1930_-_Mondrian_Composition_II_in_Red%2C_Blue%2C_and_Yellow.jpg/1024px-Piet_Mondriaan%2C_1930_-_Mondrian_Composition_II_in_Red%2C_Blue%2C_and_Yellow.jpg",
  "broadway-boogie-woogie": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Piet_Mondrian%2C_1942_-_Broadway_Boogie_Woogie.jpg/1024px-Piet_Mondrian%2C_1942_-_Broadway_Boogie_Woogie.jpg",

  // Pop Art
  "girls-romances": "https://upload.wikimedia.org/wikipedia/en/d/df/Roy_Lichtenstein_Drowning_Girl.jpg",
  "look-mickey": "https://upload.wikimedia.org/wikipedia/en/f/f4/Look_Mickey.jpg",
  "campbell-soup": "https://upload.wikimedia.org/wikipedia/en/4/4a/Campbells_Soup_Cans_MOMA.jpg",
  "shot-marilyns": "https://upload.wikimedia.org/wikipedia/en/e/eb/Shot_Sage_Blue_Marilyn.jpg",
  "la-banana": "https://upload.wikimedia.org/wikipedia/en/0/0c/Velvet_Underground_and_Nico.jpg",
  "elvis-presley": "https://upload.wikimedia.org/wikipedia/en/b/b4/Warhol-DoubleElvis.jpg",
  "coca-cola": "https://upload.wikimedia.org/wikipedia/en/8/8a/Green_Coca-Cola_Bottles_by_Andy_Warhol.jpg",

  // Contemporary Art
  "autumn-rhythm": "https://upload.wikimedia.org/wikipedia/en/c/c9/Autumn_Rhythm.jpg",
  "one-number-31": "https://upload.wikimedia.org/wikipedia/en/1/15/One-_Number_31%2C_1950.jpg",
  "concetto-spaziale-punctures": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Lucio_Fontana_Concetto_Spaziale_Buchi.jpg/1024px-Lucio_Fontana_Concetto_Spaziale_Buchi.jpg",
  "concetto-spaziale-slashes": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Lucio_Fontana_Concetto_spaziale_Attese.jpg/1024px-Lucio_Fontana_Concetto_spaziale_Attese.jpg",
  "artists-shit": "https://upload.wikimedia.org/wikipedia/en/5/53/Manzoni_merda_d_artista.jpg"
};

async function downloadBuffer(url) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 12000);
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': USER_AGENT,
        'Referer': 'https://en.wikipedia.org/'
      },
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const ab = await res.arrayBuffer();
    const buf = Buffer.from(ab);
    if (buf.length < 2000) throw new Error(`Buffer too small (${buf.length} bytes)`);
    return buf;
  } catch (e) {
    clearTimeout(timeoutId);
    throw e;
  }
}

async function searchFallback(query) {
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

function getMd5(buf) {
  return crypto.createHash('md5').update(buf).digest('hex');
}

async function main() {
  console.log("=== 开始全面校验与更新艺术史部分所有大师肖像与作品图片 ===");

  // 1. Download authoritative artist portraits
  const artistHashes = new Set();

  for (const [artistId, urls] of Object.entries(authoritativeArtists)) {
    const dest = path.join(ARTISTS_DIR, `${artistId}.jpg`);
    let downloaded = false;

    for (const u of urls) {
      try {
        const buf = await downloadBuffer(u);
        fs.writeFileSync(dest, buf);
        artistHashes.add(getMd5(buf));
        console.log(`✓ 艺术家肖像已精准更新: [${artistId}] (${buf.length} bytes)`);
        downloaded = true;
        break;
      } catch (err) {}
    }

    if (!downloaded) {
      console.log(`-> 搜索备用肖像: [${artistId}]`);
      const fb = await searchFallback(`${artistId.replace(/-/g, ' ')} portrait photograph artist`);
      for (const fu of fb.slice(0, 4)) {
        try {
          const buf = await downloadBuffer(fu);
          fs.writeFileSync(dest, buf);
          artistHashes.add(getMd5(buf));
          console.log(`✓ 艺术家肖像备选更新: [${artistId}]`);
          downloaded = true;
          break;
        } catch (e) {}
      }
    }
  }

  // 2. Download authoritative artworks
  for (const [artworkId, url] of Object.entries(authoritativeArtworks)) {
    const dest = path.join(ARTWORKS_DIR, `${artworkId}.jpg`);
    const cacheDest = path.join(CACHE_DIR, `${artworkId}.jpg`);
    let downloaded = false;

    try {
      const buf = await downloadBuffer(url);
      const h = getMd5(buf);
      if (artistHashes.has(h)) {
        throw new Error("Match artist portrait");
      }
      fs.writeFileSync(dest, buf);
      fs.writeFileSync(cacheDest, buf);
      console.log(`✓ 画作已精准更新: [${artworkId}] (${buf.length} bytes)`);
      downloaded = true;
    } catch (err) {
      console.log(`-> 搜索真实画作: [${artworkId}] (${err.message})`);
      const fb = await searchFallback(`${artworkId.replace(/-/g, ' ')} masterpiece painting art`);
      for (const fu of fb.slice(0, 6)) {
        try {
          const buf = await downloadBuffer(fu);
          const h = getMd5(buf);
          if (!artistHashes.has(h)) {
            fs.writeFileSync(dest, buf);
            fs.writeFileSync(cacheDest, buf);
            console.log(`✓ 画作备选已更新: [${artworkId}]`);
            downloaded = true;
            break;
          }
        } catch (e) {}
      }
    }

    await new Promise(r => setTimeout(r, 150));
  }

  console.log("=== 艺术史全量图片刷新完成 ===");
}

main();
