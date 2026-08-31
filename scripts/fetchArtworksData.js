import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import http from 'http';
import { artData } from '../src/data/artData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getCleanEnglishTitle(title) {
  const match = title.match(/\((.*?)\)/);
  if (match && match[1]) {
    let eng = match[1].split('-')[0].trim();
    eng = eng.replace(/[\u4e00-\u9fa5]/g, '').trim();
    if (eng.length > 0) return eng;
  }
  const parts = title.split('/');
  if (parts.length > 1) {
     let lastPart = parts[parts.length - 1].replace(/[\u4e00-\u9fa5()]/g, '').trim();
     if(lastPart.length > 0) return lastPart;
  }
  return title.replace(/[\u4e00-\u9fa5()]/g, '').trim();
}

async function searchBingImages(artist, title) {
  const query = `${title} artwork painting ${artist}`;
  const url = `https://www.bing.com/images/search?q=${encodeURIComponent(query)}&form=HDRSC2`;
  
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    const html = await res.text();
    const match = html.match(/murl&quot;:&quot;(.*?)&quot;/);
    if (match && match[1]) {
      return {
        image_url: match[1],
        source_url: url,
        source_id: 'bing',
        status: 'verified'
      };
    }
  } catch (err) {
    console.error(`Error fetching for ${query}:`, err.message);
  }
  
  return {
    image_url: null,
    source_url: null,
    source_id: null,
    status: 'needs_review'
  };
}

async function downloadImage(url, destPath) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        'Referer': 'https://www.google.com/'
      }
    }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadImage(res.headers.location, destPath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status Code: ${res.statusCode}`));
      }
      const file = fs.createWriteStream(destPath);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(true);
      });
      file.on('error', (err) => {
        fs.unlink(destPath, () => reject(err));
      });
    });
    req.on('error', (err) => {
      reject(err);
    });
    req.setTimeout(5000, () => {
      req.abort();
      reject(new Error('Timeout'));
    });
  });
}

async function main() {
  const cacheMap = {};
  let total = 0;
  let verified = 0;
  
  const publicDir = path.join(__dirname, '../public/data');
  const imagesDir = path.join(__dirname, '../public/images/cache');
  
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
  if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });
  
  for (const movement of artData) {
    for (const artist of movement.artists || []) {
      for (const artwork of artist.artworks || []) {
        total++;
        const cleanTitle = getCleanEnglishTitle(artwork.title);
        const searchArtist = artist.englishName || artist.name;
        
        console.log(`Processing: ${cleanTitle} by ${searchArtist}...`);
        
        let result = await searchBingImages(searchArtist, cleanTitle);
        let finalImageUrl = null;
        
        if (result.status === 'verified' && result.image_url) {
          const ext = result.image_url.split('.').pop().split('?')[0].toLowerCase() || 'jpg';
          const validExt = ['jpg', 'jpeg', 'png', 'webp', 'gif'].includes(ext) ? ext : 'jpg';
          const fileName = `${artwork.id}.${validExt}`;
          const destPath = path.join(imagesDir, fileName);
          
          try {
            await downloadImage(result.image_url, destPath);
            finalImageUrl = `/images/cache/${fileName}`;
            verified++;
            console.log(` -> Downloaded successfully!`);
          } catch (e) {
            console.error(` -> Failed to download image: ${e.message}`);
            result.status = 'needs_review';
          }
        }
        
        cacheMap[artwork.id] = {
          id: artwork.id,
          artist: searchArtist,
          title: cleanTitle,
          original_title: artwork.title,
          ...result,
          image_url: finalImageUrl
        };
      }
    }
  }
  
  const cachePath = path.join(publicDir, 'artworksCache.json');
  fs.writeFileSync(cachePath, JSON.stringify(cacheMap, null, 2), 'utf-8');
  console.log(`\nSuccessfully generated cache at ${cachePath}`);
  console.log(`Verified & Downloaded ${verified}/${total} artworks.`);
}

main();
