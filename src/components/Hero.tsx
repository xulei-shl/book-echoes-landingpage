import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-meta-label">NO. 0001 / ARCHIVE //</div>
          <h1 className="hero-title">
            书海<br /><span className="text-gold">回响</span>
          </h1>
          <p className="hero-subtitle">
            每一本归还的图书，都是一次无声的推荐。<br />
            倾听书海的回响，发现那些沉淀下来的智慧遗珠。
          </p>
          <div className="hero-buttons">
            <a href="https://be.xulei-shl.asia" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              进入展厅 / ENTER
            </a>
            <a href="https://github.com/xulei-shl/book-echoes-aibot" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              系统源码 / GITHUB
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-exhibit"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="exhibit-frame corner-accents">
            <div className="hero-exhibit-inner">
              <img
                src="https://xulei-pic-1258542021.cos.ap-shanghai.myqcloud.com/mdpic/20260405204018066.png"
                alt="Archive Manifestation"
                className="hero-exhibit-image"
                loading="lazy"
              />
            </div>

            <div className="exhibit-tag">
              <span className="dot pulse"></span>
              SYSTEM ONLINE
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
