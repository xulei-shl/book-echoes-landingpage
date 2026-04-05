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
    desc: '提供数据导入、图书管理、推荐算法配置等完整的运营管理后台。采用严格的访问控制与流水线般的编排。',
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
    desc: '精美的书目展示界面，支持按月份、主题浏览推荐图书，右侧固定辅助展板显示书籍详情与文献来源。',
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
    desc: '基于大模型的智能问答系统，作为私人策展人，为读者提供不仅限于推荐的、充满个性化的咨询服务。',
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
    desc: '常驻浏览器的悬浮扩展程序，随时随心访问馆藏资源与推荐列表，在浩瀚网页中为您保留一处理想书房。',
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
          <h2 className="section-title">核心馆藏功能</h2>
          <p className="section-desc">
            多种展陈与发现渠道，不仅满足检索需求，更致力于在静谧中提供长效阅读指引。
          </p>
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
