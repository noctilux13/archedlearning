import React, { useState, useEffect, useContext } from 'react';
import { ImageOff, ExternalLink, CheckCircle2 } from 'lucide-react';
import { getAssetUrl } from '../utils/assetUrl';
import { AppContext } from '../context/AppContext';
import embeddedArtworksCache from '../data/artworksCache.json';

export const ArtworkImage = ({ 
  artworkId, 
  alt, 
  className = '', 
  imageClassName = '',
  fit = 'cover', // 'cover' | 'contain' | 'auto'
  style = {},
  imageStyle = {},
  showMetaBadge = false
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const { resolveArtworkUrl } = useContext(AppContext) || {};

  const data = embeddedArtworksCache?.[artworkId];
  const rawUrl = data?.image_url || (artworkId ? `/images/artworks/${artworkId}.jpg` : '');
  const defaultUrl = rawUrl ? getAssetUrl(rawUrl) : '';
  const finalImageUrl = resolveArtworkUrl ? resolveArtworkUrl(artworkId, defaultUrl) : defaultUrl;

  // Crucial fix: Reset error & loading state whenever image URL or artworkId changes!
  useEffect(() => {
    setError(false);
    setLoaded(false);
  }, [finalImageUrl, artworkId]);

  if (!finalImageUrl || error) {
    return (
      <div 
        className={`flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 rounded-md text-zinc-400 p-4 text-center ${className}`}
        style={{ width: '100%', height: '100%', minHeight: '140px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', ...style }}
      >
        <ImageOff className="w-8 h-8 mb-2 opacity-40 text-zinc-400" />
        <span className="text-xs font-medium text-zinc-500">经典名作 / 建筑地标</span>
        {data?.titleZh && (
          <span className="text-[11px] text-zinc-400 mt-1">{data.titleZh}</span>
        )}
      </div>
    );
  }

  const resolvedFit = className.includes('object-contain') ? 'contain' : (className.includes('object-cover') ? 'cover' : fit);

  return (
    <div 
      className={`relative group overflow-hidden ${!loaded ? 'image-shimmer' : ''} ${className}`}
      style={{ 
        width: '100%', 
        height: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: 'var(--bg-subtle)',
        ...style 
      }}
    >
      <img
        src={finalImageUrl}
        alt={alt || data?.title || 'Artwork'}
        className={`${imageClassName} transition-all duration-500 ease-out`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: resolvedFit,
          objectPosition: 'center',
          display: 'block',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'scale(1)' : 'scale(0.98)',
          transition: 'opacity 0.35s ease, transform 0.35s ease',
          ...imageStyle
        }}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        loading="lazy"
        decoding="async"
      />
      
      {showMetaBadge && data?.source_url && (
        <div 
          style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            zIndex: 2,
            transition: 'opacity 0.2s ease'
          }}
          className="opacity-0 group-hover:opacity-100"
        >
          <a
            href={data.source_url}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '4px 10px',
              borderRadius: 'var(--radius-pill)',
              backgroundColor: 'rgba(0,0,0,0.7)',
              backdropFilter: 'blur(8px)',
              color: '#fff',
              fontSize: '0.72rem',
              fontWeight: 500,
              textDecoration: 'none'
            }}
            onClick={(e) => e.stopPropagation()}
            title="查看公有领域/博物馆高清数据源"
          >
            <CheckCircle2 size={12} style={{ color: '#34d399' }} />
            <span>权威源</span>
            <ExternalLink size={10} style={{ opacity: 0.7 }} />
          </a>
        </div>
      )}
    </div>
  );
};
