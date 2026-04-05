import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './Hero.css';

interface BookRecord {
  id: string;
  title: string;
  sourceId: string;
  month: string;
  thumbnailUrl: string;
  imageUrl: string;
}

export default function Hero() {
  const [bgImage, setBgImage] = useState<string>('');

  useEffect(() => {
    fetch('/content/random_index.json')
      .then(res => res.json())
      .then((data: BookRecord[]) => {
        if (data && data.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.length);
          setBgImage(data[randomIndex].imageUrl || data[randomIndex].thumbnailUrl);
        }
      })
      .catch(err => console.error("Failed to fetch random background", err));
  }, []);

  return (
    <section
      className="hero"
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : undefined}
    >
      <div className="hero-overlay"></div>

      <div className="container hero-container text-center">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-meta-label">
            <span className="dot pulse"></span>
            NO. 2509 / SHANGHAI LIBRARY // BOOK ECHOES
          </div>
          <h1 className="hero-title">
            <span className="title-line">书海</span>
            <span className="title-line text-gold">回响</span>
          </h1>
          <p className="hero-subtitle">
            每一本归还的图书，都是一次无声的推荐<br />
            倾听书海的回响，发现那些沉淀下来的智慧遗珠
          </p>
          <div className="hero-buttons">
            <a href="https://be.xulei-shl.asia" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
              进入展厅 / ENTER ARCHIVE
            </a>
            <a href="https://github.com/xulei-shl/book-echoes-aibot" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-large glass-btn">
              系统源码 / SOURCE CODE
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
