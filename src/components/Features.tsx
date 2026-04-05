import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SettingsIcon, DesktopIcon, BotIcon, PlugIcon } from './Icons';
import './Features.css';

const features = [
  {
    id: 'admin',
    icon: SettingsIcon,
    number: '01',
    title: '后台管理',
    desc: '提供数据导入、过滤参数配置、大模型与提示词管理、流程执行等运营管理后台',
    images: [
      'https://xulei-pic-1258542021.cos.ap-shanghai.myqcloud.com/mdpic/20260405211532579.png',
      'https://xulei-pic-1258542021.cos.ap-shanghai.myqcloud.com/mdpic/20260405211622032.png'
    ]
  },
  {
    id: 'frontend',
    icon: DesktopIcon,
    number: '02',
    title: '前端展示',
    desc: '精美的书目展示界面，支持按月份、主题浏览推荐图书',
    images: [
      'https://xulei-pic-1258542021.cos.ap-shanghai.myqcloud.com/mdpic/20260405204654842.png',
      'https://xulei-pic-1258542021.cos.ap-shanghai.myqcloud.com/mdpic/20260405204759130.png',
      'https://xulei-pic-1258542021.cos.ap-shanghai.myqcloud.com/mdpic/20260405204849773.png',
      'https://xulei-pic-1258542021.cos.ap-shanghai.myqcloud.com/mdpic/20260405205153687.png'
    ]
  },
  {
    id: 'aibot',
    icon: BotIcon,
    number: '03',
    title: 'AIBot',
    desc: 'LLM 书目语义检索，辅助馆员主题书目推荐。支持简单、深度、文档三种模式',
    images: [
      'https://xulei-pic-1258542021.cos.ap-shanghai.myqcloud.com/mdpic/AIBot.png',
      'https://xulei-pic-1258542021.cos.ap-shanghai.myqcloud.com/mdpic/AIBot-2.png'
    ]
  },
  {
    id: 'extension',
    icon: PlugIcon,
    number: '04',
    title: '浏览器插件',
    desc: '在阅读网络文章（类似 AIBot 的文档模式）时，可检索与此文主题相近的馆藏书目',
    images: [
      'https://xulei-pic-1258542021.cos.ap-shanghai.myqcloud.com/mdpic/image.png'
    ]
  },
];

function FeatureCard({ feature }: { feature: typeof features[0] }) {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  return (
    <div className="feature-plaque">
      <div className="feature-meta">
        <div className="feature-number">{feature.number} /</div>
        <div className="feature-meta-line"></div>
        <feature.icon size={20} />
      </div>

      <div className="feature-content">
        <h3 className="feature-title">{feature.title}</h3>
        <p className="feature-desc">{feature.desc}</p>

        <div className="feature-image-exhibit corner-accents">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeImgIndex}
              className="image-placeholder"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={feature.images[activeImgIndex]}
                alt={`${feature.title}展示`}
                className="feature-img"
                loading="lazy"
              />
            </motion.div>
          </AnimatePresence>

          {feature.images.length > 1 && (
            <div className="feature-gallery-controls">
              {feature.images.map((_, idx) => (
                <button
                  key={idx}
                  className={`gallery-dot ${idx === activeImgIndex ? 'active' : ''}`}
                  onClick={() => setActiveImgIndex(idx)}
                  aria-label={`Show image ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container features-container">
        <motion.div
          className="features-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">EXHIBITIONS //</div>
          <h2 className="section-title">核心功能</h2>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <FeatureCard feature={feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
