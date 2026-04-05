import { motion } from 'framer-motion';
import { BookIcon } from './Icons';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="hero-title">
            书海回响
          </h1>
          <p className="hero-subtitle">
            每一本归还的图书，都是一次无声的推荐<br/>
            倾听书海的回响，发现那些沉淀下来的智慧遗珠
          </p>
          <div className="hero-buttons">
            <a href="[Demo URL]" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              开始使用
            </a>
            <a href="https://github.com/[GitHub URL]" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              查看 GitHub
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="image-placeholder">
            <div>
              <BookIcon size={48} />
              <p>Hero 装饰插图</p>
              <p style={{ fontSize: '12px', marginTop: '8px', color: 'var(--color-gray-300)' }}>
                规格: 600x400px<br/>
                建议: 书本/海浪意象插图
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
