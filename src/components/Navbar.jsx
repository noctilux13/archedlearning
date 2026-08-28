import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass, Layers, Brain, Award, Settings as SettingsIcon } from 'lucide-react';

const NAV_ITEMS = [
  { to: '/', label: '全景', icon: Compass, end: true },
  { to: '/flashcards', label: '卡片', icon: Layers },
  { to: '/quiz', label: '测验', icon: Brain },
  { to: '/dashboard', label: '看板', icon: Award },
  { to: '/settings', label: '设置', icon: SettingsIcon },
];

export default function Navbar() {
  const location = useLocation();

  // Determine which nav item is active
  const activeIndex = NAV_ITEMS.findIndex(item => {
    if (item.end) return location.pathname === item.to;
    return location.pathname.startsWith(item.to);
  });

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-brand">
        <span className="nav-brand-badge"></span>
        <span>Art & Architecture</span>
      </NavLink>

      <div className="nav-links">
        {NAV_ITEMS.map((item, idx) => {
          const Icon = item.icon;
          const isActive = activeIndex === idx;

          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className="nav-link"
              style={{
                color: isActive ? 'var(--text-primary)' : undefined,
                fontWeight: isActive ? 550 : undefined,
              }}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-active-indicator"
                  className="nav-indicator"
                  transition={{ type: 'spring', bounce: 0.18, duration: 0.45 }}
                />
              )}
              <Icon size={14} style={{ position: 'relative', zIndex: 1 }} />
              <span style={{ position: 'relative', zIndex: 1 }}>{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
