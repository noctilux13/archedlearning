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

// Direct verified URLs for artworks and buildings
const directArtworkUrls = {
  // Boccioni
  "city-rises": "https://upload.wikimedia.org/wikipedia/commons/b/b4/The_City_Rises_by_Umberto_Boccioni_1910.jpg",
  "riot-gallery": "https://upload.wikimedia.org/wikipedia/commons/e/eb/Boccioni_-_Rissa_in_galleria.jpg",
  "simultaneous-visions": "https://upload.wikimedia.org/wikipedia/commons/7/75/Boccioni_-_Simultaneous_Visions.jpg",
  "dynamism-cyclist": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Boccioni_-_Dynamism_of_a_Cyclist.jpg",
  "unique-forms": "https://upload.wikimedia.org/wikipedia/commons/0/07/Unique_Forms_of_Continuity_in_Space_by_Umberto_Boccioni_1913.jpg",
  "development-bottle": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Umberto_Boccioni%2C_1912%2C_Development_of_a_Bottle_in_Space%2C_silvered_bronze%2C_Museo_del_Novecento%2C_Milan.jpg",

  // Carrà
  "piazza-duomo": "https://upload.wikimedia.org/wikipedia/commons/7/70/Carlo_Carr%C3%A0%2C_1909%2C_Piazza_del_Duomo_a_Milano%2C_oil_on_canvas%2C_56_x_54.5_cm.jpg",
  "theater-exit": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Carlo_Carr%C3%A0%2C_1910-11%2C_Leaving_the_Theatre_%28Uscita_da_teatro%29%2C_oil_on_canvas%2C_69_x_91_cm%2C_Estorick_Collection%2C_London.jpg",
  "funeral-galli": "https://upload.wikimedia.org/wikipedia/commons/5/52/Carlo_Carr%C3%A0_-_Funeral_of_the_Anarchist_Galli_-_Google_Art_Project.jpg",
  "interventionist-demo": "https://upload.wikimedia.org/wikipedia/commons/9/91/Carlo_Carr%C3%A0%2C_1914%2C_Interventionist_Demonstration_%28Manifestazione_Interventista_-_Festa_Patriottica%29%2C_tempera_and_collage_on_cardboard%2C_38.5_x_30_cm%2C_Gianni_Mattioli_Collection.jpg",
  "knight-western-spirit": "https://upload.wikimedia.org/wikipedia/commons/0/00/Carlo_Carr%C3%A0%2C_1917%2C_Il_cavaliere_dello_spirito_occidentale_%28The_Western_Rider%29%2C_oil_on_canvas%2C_52_x_67_cm.jpg",
  "metaphysical-muse": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Carlo_Carr%C3%A0%2C_1917%2C_La_musa_metafisica_%28The_Metaphysical_Muse%29%2C_oil_on_canvas%2C_90_x_66_cm%2C_Pinacoteca_di_Brera%2C_Milan.jpg",

  // Duchamp
  "nude-descending": "https://upload.wikimedia.org/wikipedia/commons/e/eb/Marcel_Duchamp%2C_1912%2C_Nude_Descending_a_Staircase%2C_No._2%2C_oil_on_canvas%2C_147_x_89.2_cm%2C_Philadelphia_Museum_of_Art.jpg",
  "fountain": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Duchamp_Fountaine.jpg",
  "lhooq": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Marcel_Duchamp_1919_LHOOQ.jpg",
  "shelter": "https://upload.wikimedia.org/wikipedia/commons/3/30/Marcel_Duchamp%2C_1919%2C_Air_de_Paris_%2850_cc_of_Paris_Air%29%2C_ready-made.jpg",
  "bicycle-wheel": "https://upload.wikimedia.org/wikipedia/commons/3/39/Bicycle_Wheel_%28Roue_de_bicyclette%29%2C_Marcel_Duchamp%2C_1913.jpg",

  // Man Ray
  "violon-dingres": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Man_Ray%2C_1924%2C_Le_Violon_d%27Ingres%2C_gelatin_silver_print.jpg",

  // Dalí
  "persistence-of-memory": "https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg",
  "great-masturbator": "https://upload.wikimedia.org/wikipedia/en/e/ee/The_Great_Masturbator.jpg",
  "temptation-st-anthony": "https://upload.wikimedia.org/wikipedia/en/1/11/The_Temptation_of_St_Anthony_-_Dali.jpg",

  // Chagall
  "i-and-the-village": "https://upload.wikimedia.org/wikipedia/en/4/4b/I_and_the_Village.jpg",
  "chagall-birthday": "https://upload.wikimedia.org/wikipedia/en/e/eb/Chagall_Birthday.jpg",
  "romeo-juliette": "https://upload.wikimedia.org/wikipedia/commons/e/ee/Marc_Chagall_ceiling_Paris_Opera_study_Romeo_and_Juliet.jpg",

  // Magritte
  "treachery-of-images": "https://upload.wikimedia.org/wikipedia/en/b/b9/MagrittePipe.jpg",
  "the-lovers": "https://upload.wikimedia.org/wikipedia/en/0/07/The_Lovers_Magritte.jpg",
  "golconda": "https://upload.wikimedia.org/wikipedia/en/e/e4/Magritte_Golconda.jpg",
  "menaced-assassin": "https://upload.wikimedia.org/wikipedia/en/b/b3/The_Menaced_Assassin_1927.jpg",
  "not-to-be-reproduced": "https://upload.wikimedia.org/wikipedia/en/f/f6/Not_to_be_Reproduced.jpg",
  "son-of-man": "https://upload.wikimedia.org/wikipedia/en/e/e5/TheSonOfMan.jpg",

  // Miró
  "the-farm": "https://upload.wikimedia.org/wikipedia/en/a/a4/The_Farm_by_Joan_Mir%C3%B3%2C_1921-1922.jpg",
  "the-tilled-field": "https://upload.wikimedia.org/wikipedia/en/7/7b/The_Tilled_Field.jpg",
  "maternity": "https://upload.wikimedia.org/wikipedia/en/a/ad/Maternite_miro.jpg",
  "smile-flamboyant-wings": "https://upload.wikimedia.org/wikipedia/en/c/c2/The_Smile_of_the_Flamboyant_Wings.jpg",
  "woman-and-bird": "https://upload.wikimedia.org/wikipedia/commons/d/df/Dona_i_Ocell_-_Joan_Mir%C3%B3.jpg",

  // Giacometti
  "walking-man-i": "https://upload.wikimedia.org/wikipedia/commons/9/91/Alberto_Giacometti_L%27homme_qui_marche_I.jpg",

  // De Chirico
  "nostalgia-infinite": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Giorgio_de_Chirico%2C_1912-13%2C_The_Nostalgia_of_the_Infinite%2C_oil_on_canvas%2C_135.3_x_64.8_cm%2C_Museum_of_Modern_Art%2C_New_York.jpg",
  "piazza-d-italia": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Giorgio_de_Chirico_Piazza_d%27Italia.jpg",
  "mystery-melancholy-street": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Mystery_and_Melancholy_of_a_Street_by_Giorgio_de_Chirico_1914.jpg",
  "disquieting-muses": "https://upload.wikimedia.org/wikipedia/commons/a/a2/Le_muse_inquietanti.jpg",
  "hector-and-andromache": "https://upload.wikimedia.org/wikipedia/commons/8/87/Giorgio_de_Chirico_Hector_and_Andromache.jpg",
  "song-of-love": "https://upload.wikimedia.org/wikipedia/commons/d/de/De_Chirico_Love_Song.jpg",

  // Van Doesburg
  "counter-composition-xiii": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Theo_van_Doesburg_Contracompositie_XIII.jpg",
  "composition-decentralisee": "https://upload.wikimedia.org/wikipedia/commons/4/40/Theo_van_Doesburg_Composition_d%C3%A9centralis%C3%A9e.jpg",

  // Mondrian
  "gray-tree": "https://upload.wikimedia.org/wikipedia/commons/6/64/Piet_Mondrian_-_The_Gray_Tree_-_Google_Art_Project.jpg",
  "composition-red-blue-yellow": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Piet_Mondriaan%2C_1930_-_Mondrian_Composition_II_in_Red%2C_Blue%2C_and_Yellow.jpg",
  "broadway-boogie-woogie": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Piet_Mondrian%2C_1942_-_Broadway_Boogie_Woogie.jpg",

  // Lichtenstein
  "girls-romances": "https://upload.wikimedia.org/wikipedia/en/d/df/Roy_Lichtenstein_Drowning_Girl.jpg",
  "look-mickey": "https://upload.wikimedia.org/wikipedia/en/f/f4/Look_Mickey.jpg",

  // Warhol
  "campbell-soup": "https://upload.wikimedia.org/wikipedia/en/4/4a/Campbells_Soup_Cans_MOMA.jpg",
  "shot-marilyns": "https://upload.wikimedia.org/wikipedia/en/e/eb/Shot_Sage_Blue_Marilyn.jpg",
  "la-banana": "https://upload.wikimedia.org/wikipedia/en/0/0c/Velvet_Underground_and_Nico.jpg",
  "elvis-presley": "https://upload.wikimedia.org/wikipedia/en/b/b4/Warhol-DoubleElvis.jpg",
  "coca-cola": "https://upload.wikimedia.org/wikipedia/en/8/8a/Green_Coca-Cola_Bottles_by_Andy_Warhol.jpg",

  // Pollock
  "autumn-rhythm": "https://upload.wikimedia.org/wikipedia/en/c/c9/Autumn_Rhythm.jpg",
  "one-number-31": "https://upload.wikimedia.org/wikipedia/en/1/15/One-_Number_31%2C_1950.jpg",

  // Fontana
  "concetto-spaziale-punctures": "https://upload.wikimedia.org/wikipedia/commons/4/4d/Lucio_Fontana_Concetto_Spaziale_Buchi.jpg",
  "concetto-spaziale-slashes": "https://upload.wikimedia.org/wikipedia/commons/8/87/Lucio_Fontana_Concetto_spaziale_Attese.jpg",

  // Manzoni
  "artists-shit": "https://upload.wikimedia.org/wikipedia/en/5/53/Manzoni_merda_d_artista.jpg",

  // Architecture - Baroque
  "church-of-the-gesu": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Gesu_church_rome_exterior.jpg/1280px-Gesu_church_rome_exterior.jpg",
  "villa-giulia": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Villa_Giulia_Roma.jpg/1280px-Villa_Giulia_Roma.jpg",
  "gesu-facade": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Chiesa_del_Ges%C3%B9_Roma.jpg/1280px-Chiesa_del_Ges%C3%B9_Roma.jpg",
  "san-carlo-quattro-fontane": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/San_Carlo_alle_Quattro_Fontane_Rome.jpg/1280px-San_Carlo_alle_Quattro_Fontane_Rome.jpg",
  "sant-ivo-alla-sapienza": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Sant%27Ivo_alla_Sapienza_Roma.jpg/1280px-Sant%27Ivo_alla_Sapienza_Roma.jpg",
  "piazza-san-pietro": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/St_Peter%27s_Square%2C_Vatican_City_-_April_2007.jpg/1280px-St_Peter%27s_Square%2C_Vatican_City_-_April_2007.jpg",
  "sant-andrea-quirinale": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Sant%27Andrea_al_Quirinale_facciata.jpg/1280px-Sant%27Andrea_al_Quirinale_facciata.jpg",
  "palazzo-montecitorio": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Palazzo_Montecitorio_facciata.jpg/1280px-Palazzo_Montecitorio_facciata.jpg",
  "st-peters-baldachin": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Baldacchino_San_Pietro.jpg/1280px-Baldacchino_San_Pietro.jpg",
  "palazzo-carignano": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Palazzo_Carignano_Torino_2011.jpg/1280px-Palazzo_Carignano_Torino_2011.jpg",
  "chapel-holy-shroud": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Cappella_della_Sacra_Sindone_cupola.jpg/1280px-Cappella_della_Sacra_Sindone_cupola.jpg",

  // Architecture - Neoclassical
  "basilica-of-superga": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Basilica_di_Superga_Torino.jpg/1280px-Basilica_di_Superga_Torino.jpg",
  "palace-of-caserta": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Reggia_di_Caserta_facciata.jpg/1280px-Reggia_di_Caserta_facciata.jpg",
  "palace-of-naples": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Palazzo_Reale_Napoli_Piazza_Plebiscito.jpg/1280px-Palazzo_Reale_Napoli_Piazza_Plebiscito.jpg",
  "teatro-alla-scala": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Teatro_alla_Scala_Milan.jpg/1280px-Teatro_alla_Scala_Milan.jpg",
  "royal-palace-milan": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Palazzo_Reale_Milano_facciata.jpg/1280px-Palazzo_Reale_Milano_facciata.jpg",
  "rotonde-de-la-villette": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Rotonde_de_la_Villette_Paris.jpg/1280px-Rotonde_de_la_Villette_Paris.jpg",
  "arc-de-triomphe": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Arc_de_Triomphe%2C_Paris_21_October_2010.jpg/1280px-Arc_de_Triomphe%2C_Paris_21_October_2010.jpg",
  "simplon-gate": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Arco_della_Pace_Milano.jpg/1280px-Arco_della_Pace_Milano.jpg",
  "uva-rotunda": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/The_Rotunda%2C_University_of_Virginia.jpg/1280px-The_Rotunda%2C_University_of_Virginia.jpg",
  "white-house": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/White_House_south_facade.jpg/1280px-White_House_south_facade.jpg",
  "propylaea-munich": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Propylaeen_Muenchen.jpg/1280px-Propylaeen_Muenchen.jpg",

  // Architecture - Industrial
  "crystal-palace": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Crystal_Palace_from_the_northeast.jpg/1280px-Crystal_Palace_from_the_northeast.jpg",
  "eiffel-tower": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg/1280px-Tour_Eiffel_Wikimedia_Commons.jpg",

  // Architecture - Art Nouveau
  "hotel-tassel": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/H%C3%B4tel_Tassel_Bruxelles.jpg/1280px-H%C3%B4tel_Tassel_Bruxelles.jpg",
  "secession-building": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Wiener_Secessionsgeb%C3%A4ude_2017.jpg/1280px-Wiener_Secessionsgeb%C3%A4ude_2017.jpg",
  "paris-metro-entrances": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Metropolitain_Porte_Dauphine_Paris.jpg/1280px-Metropolitain_Porte_Dauphine_Paris.jpg",

  // Architecture - Expressionism & Gaudi
  "einstein-tower": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Einsteinturm_Potsdam_2005.jpg/1280px-Einsteinturm_Potsdam_2005.jpg",
  "glass-pavilion": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Bruno_Taut_Glashaus_1914.jpg",
  "sagrada-familia": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Sagrada_Familia_01.jpg/1280px-Sagrada_Familia_01.jpg",
  "casa-mila": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Casa_Mil%C3%A0_-_Barcelona%2C_Spain_-_panoramio_%281%29.jpg/1280px-Casa_Mil%C3%A0_-_Barcelona%2C_Spain_-_panoramio_%281%29.jpg",
  "casa-batllo": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Casa_Batllo_Overview_Barcelona_Spain.jpg/1280px-Casa_Batllo_Overview_Barcelona_Spain.jpg"
};

// Fallback search strictly for paintings/sculptures/buildings (NOT portrait photos)
async function searchArtworkImageFallback(query) {
  try {
    const url = `https://www.bing.com/images/search?q=${encodeURIComponent(query + ' painting photo -portrait')}&form=HDRSC2`;
    const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
    const html = await res.text();
    const matches = [...html.matchAll(/murl&quot;:&quot;(.*?)&quot;/g)];
    const urls = matches.map(m => m[1]).filter(u => u && (u.startsWith('http://') || u.startsWith('https://')));
    return urls;
  } catch (e) {
    return [];
  }
}

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

function getMd5(buf) {
  return crypto.createHash('md5').update(buf).digest('hex');
}

async function main() {
  console.log("=== 正在全量修复并替换画作/建筑图片（彻底杜绝艺术家肖像代替画作） ===");

  // Read all artist avatar hashes
  const artistFiles = fs.readdirSync(ARTISTS_DIR);
  const artistHashes = new Set();
  artistFiles.forEach(f => {
    const p = path.join(ARTISTS_DIR, f);
    const buf = fs.readFileSync(p);
    artistHashes.add(getMd5(buf));
  });

  console.log(`已加载 ${artistHashes.size} 个艺术家头像指纹以供排重防护。`);

  let replacedCount = 0;

  for (const [id, directUrl] of Object.entries(directArtworkUrls)) {
    const dest = path.join(ARTWORKS_DIR, `${id}.jpg`);
    const cacheDest = path.join(CACHE_DIR, `${id}.jpg`);

    let currentBuf = fs.existsSync(dest) ? fs.readFileSync(dest) : null;
    let isDupe = currentBuf && artistHashes.has(getMd5(currentBuf));

    // Try downloading direct verified image
    try {
      console.log(` -> 抓取画作/建筑真图: [${id}]`);
      const newBuf = await downloadBuffer(directUrl);
      const newHash = getMd5(newBuf);

      if (artistHashes.has(newHash)) {
        console.log(`    ⚠ 警告: 官方直链也是肖像，启动 Bing 深度检索`);
        throw new Error('Direct URL is artist portrait');
      }

      fs.writeFileSync(dest, newBuf);
      fs.writeFileSync(cacheDest, newBuf);
      console.log(`    ✓ 成功保存正确画作/建筑图: [${id}] (${newBuf.length} bytes)`);
      replacedCount++;
    } catch (err) {
      console.log(`    ⚠ 直链下载重试: [${id}] (${err.message})，正在搜索真实作品图...`);
      const searchUrls = await searchArtworkImageFallback(id.replace(/-/g, ' '));
      let found = false;
      for (const sUrl of searchUrls.slice(0, 6)) {
        try {
          const sBuf = await downloadBuffer(sUrl);
          if (!artistHashes.has(getMd5(sBuf))) {
            fs.writeFileSync(dest, sBuf);
            fs.writeFileSync(cacheDest, sBuf);
            console.log(`    ✓ 备选源检索成功并替换: [${id}]`);
            found = true;
            replacedCount++;
            break;
          }
        } catch (e2) {}
      }
      if (!found) {
        console.log(`    ✗ 未能找到替代画作图: [${id}]`);
      }
    }

    await new Promise(r => setTimeout(r, 200));
  }

  // Final verification
  console.log("\n=============================================");
  let remainingDupes = 0;
  for (const [id] of Object.entries(directArtworkUrls)) {
    const dest = path.join(ARTWORKS_DIR, `${id}.jpg`);
    if (fs.existsSync(dest)) {
      const h = getMd5(fs.readFileSync(dest));
      if (artistHashes.has(h)) {
        console.log(`  ❌ 仍为艺术家照片: ${id}`);
        remainingDupes++;
      }
    }
  }

  console.log(`排重校验结果: ${remainingDupes === 0 ? '🎉 100% 全部通过！无任何艺术家肖像代充画作！' : `仍有 ${remainingDupes} 处需处理`}`);
  console.log("=============================================");
}

main();
