import { motion } from 'framer-motion';
import { RefreshIcon } from './Icons';
import './Flow.css';

const steps = [
  { id: 1, title: '数据输入', desc: '上传借阅数据 Excel' },
  { id: 2, title: '智能筛选', desc: '过滤热门，保留长尾' },
  { id: 3, title: 'AI 评选', desc: '大模型三阶段评选' },
  { id: 4, title: '卡片生成', desc: '生成社交分享卡片' },
];

export default function Flow() {
  return (
    <section className="flow section-alt" id="flow">
      <div className="flow-container">
        <motion.div 
          className="flow-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flow-title">数据处理流程</h2>
          <p className="flow-desc">
            从原始借阅数据到精美推荐卡片的完整 pipeline
          </p>
        </motion.div>

        <motion.div 
          className="flow-diagram"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flow-steps">
            {steps.map((step, index) => (
              <div key={step.id} className="flow-step">
                <div className="flow-step-number">{step.id}</div>
                <h3 className="flow-step-title">{step.title}</h3>
                <p className="flow-step-desc">{step.desc}</p>
                {index < steps.length - 1 && (
                  <div className="flow-arrow">→</div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="flow-detail"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flow-image">
            <div className="image-placeholder" style={{ minHeight: '300px' }}>
              <div>
                <RefreshIcon size={32} />
                <p>数据处理流程图示</p>
                <p style={{ fontSize: '12px', marginTop: '8px', color: 'var(--color-gray-300)' }}>
                  规格: 800x400px<br/>
                  描述: 展示借阅→筛选→AI评选→卡片的完整流程
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
