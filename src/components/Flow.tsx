import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Flow.css';

const flowImages = [
  'https://xulei-pic-1258542021.cos.ap-shanghai.myqcloud.com/mdpic/image-flow.png',
  'https://xulei-pic-1258542021.cos.ap-shanghai.myqcloud.com/mdpic/image%20(1).png'
];

const steps = [
  { id: '01', title: 'IMPORT', desc: '数据输入 - 归还借阅数据分析' },
  { id: '02', title: 'FILTER', desc: '数据筛选 - 过滤热门，保留长尾' },
  { id: '03', title: 'EVALUATE', desc: 'AI 评选 - 大模型三阶深度筛选' },
  { id: '04', title: 'MANIFEST', desc: '展陈生成 - 生成社交分享卡片' },
];

export default function Flow() {
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  return (
    <section className="flow" id="flow">
      <div className="container flow-container">
        <motion.div
          className="flow-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">PIPELINE //</div>
          <h2 className="section-title">数据处理流程</h2>
        </motion.div>

        <div className="flow-content">
          <motion.div
            className="flow-diagram"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flow-steps">
              {steps.map((step) => (
                <div key={step.id} className="flow-step">
                  <div className="flow-step-meta">
                    <span className="flow-step-id">{step.id} </span>
                    <span className="flow-step-title">{step.title}</span>
                  </div>
                  <p className="flow-step-desc">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="flow-axis"></div>
          </motion.div>

          <motion.div
            className="flow-detail corner-accents"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="feature-image-exhibit">
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
                      src={flowImages[activeImgIndex]}
                      alt="Data Flow"
                      className="feature-img"
                      loading="lazy"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="feature-gallery-controls">
                  {flowImages.map((_, idx) => (
                    <button
                      key={idx}
                      className={`gallery-dot ${idx === activeImgIndex ? 'active' : ''}`}
                      onClick={() => setActiveImgIndex(idx)}
                      aria-label={`Show image ${idx + 1}`}
                    />
                  ))}
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
