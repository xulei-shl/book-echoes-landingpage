import { BookIcon } from './Icons';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <BookIcon size={24} className="footer-logo" />
          <span className="footer-title">书海回响</span>
          <p className="footer-desc">每一本归还的图书，都是一次无声的推荐</p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>产品</h4>
            <a href="#features">核心功能</a>
            <a href="#flow">数据流程</a>
            <a href="#showcase">展示前端</a>
            <a href="#extension">浏览器插件</a>
          </div>
          <div className="footer-col">
            <h4>链接</h4>
            <a href="https://github.com/[GitHub URL]" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="[Demo URL]" target="_blank" rel="noopener noreferrer">在线演示</a>
          </div>
          <div className="footer-col">
            <h4>联系</h4>
            <a href="mailto:[Contact Email]">联系邮箱</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 书海回响. 基于数据驱动与 AI 评选的书目推荐系统.</p>
      </div>
    </footer>
  );
}
