import { motion } from 'framer-motion';
import './Flow.css';

const steps = [
  { id: '01', title: 'IMPORT', desc: '数据输入 - 接入流通日志档案' },
  { id: '02', title: 'FILTER', desc: '智能筛选 - 排除噪声与显性高频词' },
  { id: '03', title: 'EVALUATE', desc: 'AI 策展 - 三阶大模型深度评注' },
  { id: '04', title: 'MANIFEST', desc: '展陈生成 - 输出归档索引卡片' },
];

export default function Flow() {
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
          <h2 className="section-title">策展流水线</h2>
          <p className="section-desc">
            从结构化流通日志到具备阅读引导价值的沉淀档案。
          </p>
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
            <div className="image-placeholder flow-terminal">
              <div className="terminal-header">
                <span className="terminal-dot"></span>
                <span className="terminal-dot"></span>
                <span className="terminal-dot"></span>
                <span className="terminal-title">book-echoes-pipeline.sh</span>
              </div>
              <div className="terminal-body flow-images">
                <img src="https://xulei-pic-1258542021.cos.ap-shanghai.myqcloud.com/mdpic/image-flow.png" alt="Data Flow" className="flow-img" loading="lazy" />
                <img src="https://xulei-pic-1258542021.cos.ap-shanghai.myqcloud.com/mdpic/image%20(1).png" alt="Process View" className="flow-img" loading="lazy" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
