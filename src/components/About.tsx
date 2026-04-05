import { motion } from 'framer-motion';
import { CalendarIcon, MoonIcon, TagIcon, RadioIcon, BarChartIcon, SearchIcon, BrainIcon, SparklesIcon } from './Icons';
import './About.css';

const features = [
  { id: 'month', icon: CalendarIcon, title: '月份牌', desc: '按时序索引' },
  { id: 'sleeping', icon: MoonIcon, title: '睡美人', desc: '冷门文献追踪' },
  { id: 'subject', icon: TagIcon, title: '主题卡', desc: '向量化知识关联' },
  { id: 'literature', icon: RadioIcon, title: '文学 FM', desc: '随机频段推荐' },
];

export default function About() {
  const values = [
    { id: '001', icon: BarChartIcon, title: 'DATA ARCHIVE', desc: '基于系统级真实流通数据的采集与分析' },
    { id: '002', icon: SearchIcon, title: 'DEEP DISCOVERY', desc: '规避从众现象，挖掘深藏底层的长尾文本' },
    { id: '003', icon: BrainIcon, title: 'AI EVALUATION', desc: '多代理协同一阶、二阶评注反馈机制' },
    { id: '004', icon: SparklesIcon, title: 'CHRONO SYNC', desc: '持续追踪周期性变化，维持数据鲜活' },
  ];

  return (
    <section className="about" id="about">
      <div className="container about-container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">THEORY //</div>
          <h2 className="section-title">策展理念</h2>
          <p className="section-desc">
            我们拒绝随波逐流的畅销书单模式。通过对基层借阅日志档案的深度分析，
            结合 AI 策展代理，打捞那些落满灰尘却依旧闪耀的隐秘经典。
          </p>
        </motion.div>

        <div className="about-values">
          {values.map((item, index) => (
            <motion.div
              key={item.id}
              className="about-value-plaque"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="value-header">
                <span className="value-id">ID {item.id}</span>
                <item.icon size={18} className="value-icon" />
              </div>
              <h3 className="value-title">{item.title}</h3>
              <p className="value-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="about-features corner-accents"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="features-grid-mini">
            {features.map((feature) => (
              <div key={feature.id} className="feature-mini-item">
                <feature.icon size={24} className="feature-mini-icon" />
                <div className="feature-mini-content">
                  <h4 className="feature-mini-title">{feature.title}</h4>
                  <p className="feature-mini-desc">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
