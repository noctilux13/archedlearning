import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

console.log('📦 Starting Single-File HTML packaging...');

const distHtmlPath = path.join(distDir, 'index.html');
if (!fs.existsSync(distHtmlPath)) {
  console.error('❌ dist/index.html not found! Please run npm run build first.');
  process.exit(1);
}

let html = fs.readFileSync(distHtmlPath, 'utf-8');

// 1. Inline CSS links: <link rel="stylesheet" crossorigin href="./assets/index-xxx.css">
html = html.replace(/<link[^>]+rel=["']stylesheet["'][^>]+href=["']\.\/assets\/([^"']+)["'][^>]*>/gi, (match, cssFile) => {
  const cssPath = path.join(distDir, 'assets', cssFile);
  if (fs.existsSync(cssPath)) {
    const cssContent = fs.readFileSync(cssPath, 'utf-8');
    console.log(`✅ Inlined CSS: ${cssFile} (${(cssContent.length / 1024).toFixed(1)} KB)`);
    return `<style>\n${cssContent}\n</style>`;
  }
  return match;
});

// 2. Inline JS scripts: <script type="module" crossorigin src="./assets/index-xxx.js"></script>
html = html.replace(/<script[^>]+src=["']\.\/assets\/([^"']+)["'][^>]*><\/script>/gi, (match, jsFile) => {
  const jsPath = path.join(distDir, 'assets', jsFile);
  if (fs.existsSync(jsPath)) {
    const jsContent = fs.readFileSync(jsPath, 'utf-8');
    console.log(`✅ Inlined JS: ${jsFile} (${(jsContent.length / 1024).toFixed(1)} KB)`);
    return `<script type="module">\n${jsContent}\n</script>`;
  }
  return match;
});

// 3. Save outputs
const outTargets = [
  path.join(distDir, 'index_singlefile.html'),
  path.join(distDir, 'standalone.html'),
  path.join(rootDir, '艺术与建筑史研考平台_单文件离线版.html'),
  path.join(rootDir, 'art_learning_platform_portable.html')
];

for (const target of outTargets) {
  fs.writeFileSync(target, html, 'utf-8');
  console.log(`🎉 Packaged single-file HTML saved to: ${target}`);
}

// Copy dist/index.html to dist/404.html for GitHub Pages SPA support
fs.copyFileSync(distHtmlPath, path.join(distDir, '404.html'));
console.log('✅ Created dist/404.html for GitHub Pages SPA routing');

console.log('✨ All single-file HTML versions packaged successfully!');
