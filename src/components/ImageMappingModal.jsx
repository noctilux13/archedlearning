import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Save, Image as ImageIcon, Search } from 'lucide-react';

const IMAGES_ROOT = [
  "img_p10_1.png", "img_p11_1.png", "img_p12_1.png", "img_p13_1.png", "img_p14_1.png", "img_p15_1.png", "img_p16_1.png", "img_p17_1.png", "img_p18_1.png", "img_p19_1.png", "img_p1_2.png", "img_p1_3.png", "img_p1_4.png", "img_p1_5.png", "img_p20_1.png", "img_p21_1.png", "img_p22_1.png", "img_p23_1.png", "img_p25_1.png", "img_p26_1.png", "img_p27_1.png", "img_p28_1.png", "img_p29_1.png", "img_p2_4.png", "img_p30_1.png", "img_p31_1.png", "img_p32_1.png", "img_p33_1.png", "img_p34_1.png", "img_p35_1.png", "img_p36_1.png", "img_p37_1.png", "img_p38_1.png", "img_p39_1.png", "img_p3_1.png", "img_p40_1.png", "img_p41_1.png", "img_p42_1.png", "img_p43_1.png", "img_p44_1.png", "img_p45_1.png", "img_p46_1.png", "img_p47_1.png", "img_p4_1.png", "img_p5_1.png", "img_p6_1.png", "img_p6_2.png", "img_p6_3.png", "img_p6_4.png", "img_p7_1.png", "img_p8_1.png", "img_p9_1.png"
];

const IMAGES_PDF1 = [
  "g_d0_img_p1_1.png", "g_d0_img_p2_1.png", "g_d0_img_p2_2.png", "g_d0_img_p2_3.png", "g_d0_img_p8_1.png", "img_p10_1.png", "img_p11_1.png", "img_p12_1.png", "img_p13_1.png", "img_p13_2.png", "img_p13_3.png", "img_p13_4.png", "img_p13_5.png", "img_p14_1.png", "img_p15_1.png", "img_p17_1.png", "img_p18_1.png", "img_p18_2.png", "img_p18_3.png", "img_p18_4.png", "img_p19_1.png", "img_p1_2.png", "img_p1_3.png", "img_p1_4.png", "img_p1_5.png", "img_p20_1.png", "img_p21_1.png", "img_p22_1.png", "img_p23_1.png", "img_p24_1.png", "img_p25_1.png", "img_p27_1.png", "img_p28_1.png", "img_p29_1.png", "img_p2_4.png", "img_p30_1.png", "img_p31_1.png", "img_p32_1.png", "img_p33_1.png", "img_p34_1.png", "img_p3_1.png", "img_p4_1.png", "img_p5_1.png", "img_p6_1.png", "img_p7_1.png", "img_p9_1.png"
];

const IMAGES_PDF2 = [
  "g_d0_img_p15_1.png", "g_d0_img_p1_1.png", "g_d0_img_p2_1.png", "g_d0_img_p2_2.png", "g_d0_img_p2_3.png", "img_p10_1.png", "img_p11_1.png", "img_p12_1.png", "img_p13_1.png", "img_p14_1.png", "img_p16_1.png", "img_p17_1.png", "img_p17_2.png", "img_p18_1.png", "img_p19_1.png", "img_p1_2.png", "img_p1_3.png", "img_p1_4.png", "img_p1_5.png", "img_p20_1.png", "img_p21_1.png", "img_p22_1.png", "img_p23_1.png", "img_p25_1.png", "img_p26_1.png", "img_p27_1.png", "img_p28_1.png", "img_p29_1.png", "img_p2_4.png", "img_p30_1.png", "img_p31_1.png", "img_p32_1.png", "img_p33_1.png", "img_p34_1.png", "img_p35_1.png", "img_p36_1.png", "img_p37_1.png", "img_p38_1.png", "img_p39_1.png", "img_p3_1.png", "img_p40_1.png", "img_p41_1.png", "img_p42_1.png", "img_p43_1.png", "img_p44_1.png", "img_p45_1.png", "img_p46_1.png", "img_p47_1.png", "img_p4_1.png", "img_p5_1.png", "img_p6_1.png", "img_p6_2.png", "img_p6_3.png", "img_p6_4.png", "img_p7_1.png", "img_p8_1.png", "img_p9_1.png"
];

const TABS = [
  { id: 'root', label: 'Root', prefix: '/images/', images: IMAGES_ROOT },
  { id: 'pdf1', label: 'PDF1', prefix: '/images/pdf1/', images: IMAGES_PDF1 },
  { id: 'pdf2', label: 'PDF2', prefix: '/images/pdf2/', images: IMAGES_PDF2 }
];

export default function ImageMappingModal({ isOpen, onClose, artwork, currentImage, onSave }) {
  const [selectedUrl, setSelectedUrl] = useState('');
  const [activeTab, setActiveTab] = useState('root');

  useEffect(() => {
    if (isOpen) {
      setSelectedUrl(currentImage || (artwork && artwork.image) || '');
    }
  }, [isOpen, currentImage, artwork]);

  if (!isOpen) return null;

  const currentTabData = TABS.find(t => t.id === activeTab);
  const activeImages = currentTabData.images.map(img => currentTabData.prefix + img);

  const handleSave = () => {
    onSave(selectedUrl);
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,0.5)' }}
        onClick={onClose}
      >
        <motion.div
          className="modal-content card"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          style={{ width: '100%', maxWidth: '900px', height: '80vh', display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{ padding: '16px 24px', borderBottom: '1px solid var(--border-color, #eee)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ImageIcon size={24} />
              Select Image for {artwork?.title || 'Artwork'}
            </h2>
            <button className="btn" onClick={onClose} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}><X size={24} /></button>
          </div>
          
          <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
            {/* Left side: Current Artwork Info */}
            <div style={{ width: '30%', padding: '24px', borderRight: '1px solid var(--border-color, #eee)', display: 'flex', flexDirection: 'column', gap: '16px', background: 'var(--card-bg, #fff)' }}>
              <h3>Current Image</h3>
              {selectedUrl ? (
                <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color, #ddd)' }}>
                  <img src={selectedUrl} alt={artwork?.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
              ) : (
                <div style={{ padding: '24px', textAlign: 'center', background: '#f5f5f5', borderRadius: '8px', color: '#888' }}>
                  No image selected
                </div>
              )}
              <div style={{ marginTop: 'auto' }}>
                <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>Manual URL:</p>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input
                    type="text"
                    className="input-field"
                    value={selectedUrl}
                    onChange={(e) => setSelectedUrl(e.target.value)}
                    placeholder="Enter image URL..."
                    style={{ flex: 1, padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                  />
                </div>
              </div>
            </div>

            {/* Right side: Gallery */}
            <div style={{ width: '70%', display: 'flex', flexDirection: 'column', background: 'var(--bg-color, #fafafa)' }}>
              <div style={{ display: 'flex', gap: '8px', padding: '16px', borderBottom: '1px solid var(--border-color, #eee)', background: 'var(--card-bg, #fff)' }}>
                {TABS.map(tab => (
                  <button
                    key={tab.id}
                    className={`btn ${activeTab === tab.id ? 'btn-primary' : 'btn-outline'}`}
                    onClick={() => setActiveTab(tab.id)}
                    style={{ padding: '6px 12px', cursor: 'pointer' }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              
              <div style={{ flex: 1, overflowY: 'auto', padding: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', gap: '12px' }}>
                  {activeImages.map((imgPath) => (
                    <div
                      key={imgPath}
                      onClick={() => setSelectedUrl(imgPath)}
                      style={{
                        width: '100%',
                        aspectRatio: '1',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        border: selectedUrl === imgPath ? '3px solid var(--highlight-red, #ff4d4f)' : '1px solid var(--border-color, #ddd)',
                        boxShadow: selectedUrl === imgPath ? '0 0 0 2px rgba(255, 77, 79, 0.2)' : 'none',
                        transition: 'all 0.2s',
                        background: '#fff'
                      }}
                    >
                      <img 
                        src={imgPath} 
                        alt="gallery item" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ padding: '16px 24px', borderTop: '1px solid var(--border-color, #eee)', display: 'flex', justifyContent: 'flex-end', gap: '12px', background: 'var(--card-bg, #fff)' }}>
            <button className="btn btn-outline" onClick={onClose} style={{ padding: '8px 16px', cursor: 'pointer' }}>Cancel</button>
            <button className="btn btn-primary" onClick={handleSave} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', cursor: 'pointer' }}>
              <Save size={16} /> Save Changes
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
