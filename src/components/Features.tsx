import { motion } from 'framer-motion';
import { SettingsIcon, DesktopIcon, BotIcon, PlugIcon } from './Icons';
import './Features.css';

const features = [
  {
    id: 'admin',
    icon: SettingsIcon,
    title: '后台管理',
    desc: '提供数据导入、图书管理、推荐算法配置等完整的运营管理后台。',
    imageNote: '后台管理功能示意图 (400x300)',
  },
  {
    id: 'frontend',
    icon: DesktopIcon,
    title: '前端展示',
    desc: '精美的书目展示界面，支持按月份、主题浏览推荐图书，右侧 InfoPanel 显示书籍详情。',
    imageNote: '前端展示功能示意图 (400x300)',
  },
  {
    id: 'aibot',
    icon: BotIcon,
    title: 'AIBot',
    desc: '基于大模型的智能问答系统，为读者提供个性化的图书推荐与咨询服务。',
    imageNote: 'AIBot功能示意图 (400x300)',
  },
  {
    id: 'extension',
    icon: PlugIcon,
    title: '浏览器插件',
    desc: '浏览器扩展程序，快速访问书目推荐结果，在浏览网页时随时查看推荐图书。',
    imageNote: '浏览器插件功能示意图 (400x300)',
  },
];

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="features-container">
        <motion.div 
          className="features-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="features-title">核心功能</h2>
          <p className="features-desc">
            多种书目筛选与推荐机制，满足不同场景的阅读发现需求
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.id}
              className="feature-card card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="feature-image">
                <div className="image-placeholder">
                  <div>
                    <feature.icon size={32} />
                    <p style={{ marginTop: '8px' }}>{feature.imageNote}</p>
                  </div>
                </div>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
