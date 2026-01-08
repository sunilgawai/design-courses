
import React from 'react';

export const Logo: React.FC = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 8V24H12V12L16 24L20 12V24H24V8H20L16 20L12 8H8Z" fill="white"/>
    <circle cx="16" cy="16" r="14" stroke="white" strokeWidth="2"/>
  </svg>
);

export const ArrowUpRight: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.33331 12.6667L12.6666 3.33334M12.6666 3.33334V12.6667M12.6666 3.33334H3.33331" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ScribbleLoop: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="140" height="60" viewBox="0 0 140 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 40C20 10 60 5 80 25C100 45 60 55 30 50C0 45 10 20 40 15" stroke="#FF5E21" strokeWidth="4" strokeLinecap="round" fill="none"/>
  </svg>
);

export const OrangeBadge: React.FC<{ className?: string, text: string }> = ({ className, text }) => (
  <div className={`flex items-center justify-center rounded-full bg-[#FF5E21] p-2 text-[8px] font-bold text-white uppercase tracking-tighter text-center ${className}`}>
    <div className="rotate-[-15deg]">{text}</div>
  </div>
);
