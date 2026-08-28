/**
 * Resolves static asset path (e.g. /images/... or /data/...)
 * ensuring compatibility with GitHub Pages subpath deployments.
 */
export function getAssetUrl(path) {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const cleanPath = path.replace(/^\//, '');
  const base = import.meta.env.BASE_URL || './';
  if (base.endsWith('/')) {
    return `${base}${cleanPath}`;
  }
  return `${base}/${cleanPath}`;
}
