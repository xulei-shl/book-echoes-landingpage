import { useState, useEffect } from 'react';
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
        
        <nav className="header-nav">
          <a href="#about" className="header-link">理念</a>
          <a href="#features" className="header-link">功能</a>
          <a href="#flow" className="header-link">流程</a>
        </nav>

      </div>
    </header>
  );
}
