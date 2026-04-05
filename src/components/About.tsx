import { motion } from 'framer-motion';
import { CalendarIcon, MoonIcon, TagIcon, RadioIcon, BarChartIcon, SearchIcon, BrainIcon, SparklesIcon } from './Icons';
import './About.css';

const features = [
  {
    id: 'month',
    icon: CalendarIcon,
    title: '月份牌',
    desc: '基于每月归还数据与借阅频次统计，筛选出当月被归还但借阅次数适中的图书，发现长尾价值。',
  },
  {
    id: 'sleeping',
    icon: MoonIcon,
    title: '睡美人',
    desc: '从验收数据中筛选零借阅的新书，这些"未被发现的宝藏"值得被更多读者看到。',
  },
  {
    id: 'subject',
    icon: TagIcon,
    title: '主题卡',
    desc: '基于 RSS 订阅与向量检索的主题化书目推荐，让相似主题的书籍触手可及。',
  },
  {
    id: 'literature',
    icon: RadioIcon,
    title: '文学 FM',
    desc: '类似电台节目的主题化推荐，基于图书元数据与向量检索，打造沉浸式阅读体验。',
  },
];

export default function About() {
  const values = [
    { icon: BarChartIcon, title: '数据驱动', desc: '基于真实读者的借阅行为数据' },
    { icon: SearchIcon, title: '发掘沉淀', desc: '避开热门榜单，寻找长尾精品' },
    { icon: BrainIcon, title: 'AI 评选', desc: '大模型三阶段评选机制' },
    { icon: SparklesIcon, title: '持续焕新', desc: '每月更新，保持内容常新' },
  ];

  return (
    <section className="about section-alt">
      <div className="about-container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="about-title">关于书海回响</h2>
          <p className="about-desc">
            我们相信，真正的好书往往在热闹的借阅榜单之外。基于真实读者的归还数据，
            我们发现那些被时间沉淀但依然值得推荐的"遗珠"图书。
          </p>
        </motion.div>

        <div className="about-values">
          {values.map((item, index) => (
            <motion.div 
              key={item.title}
              className="about-value"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <item.icon size={24} />
              <h3 className="about-value-title">{item.title}</h3>
              <p className="about-value-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="about-features"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="about-features-title">核心功能</h3>
          <div className="about-features-grid">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.id}
                className="about-feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <feature.icon size={24} />
                <h4 className="about-feature-title">{feature.title}</h4>
                <p className="about-feature-desc">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
