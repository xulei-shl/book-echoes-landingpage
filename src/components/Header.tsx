import { useState, useEffect } from 'react';
import { BookIcon } from './Icons';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <a href="/" className="header-brand">
          <BookIcon size={24} className="header-logo" />
          <span className="header-title">书海回响</span>
        </a>
        
        <nav className="header-nav">
          <a href="#features" className="header-link">功能</a>
          <a href="#flow" className="header-link">流程</a>
          <a href="#showcase" className="header-link">展示</a>
          <a href="#extension" className="header-link">插件</a>
        </nav>

        <div className="header-cta">
          <a href="https://github.com/[GitHub URL]" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            GitHub
          </a>
          <a href="[Demo URL]" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            开始使用
          </a>
        </div>
      </div>
    </header>
  );
}
