import './footer.css';
import { FOOTER_LINKS, GITHUB_SVG_ICON, EMAIL_SVG_ICON } from '@/shared/constants';

const Footer = {
  render() {
    return `
      <footer class="app-footer">
        <div class="footer-top-links">
          <a href="${FOOTER_LINKS.GITHUB_URL}" target="_blank" rel="noopener noreferrer" class="github-link">
            ${GITHUB_SVG_ICON} GitHub
          </a>
          <span class="separator">|</span>
          <a href="mailto:${FOOTER_LINKS.EMAIL_ADDRESS}" class="email-link">
            ${EMAIL_SVG_ICON} Contact
          </a>
        </div>
        <div class="footer-copyright">
          ${FOOTER_LINKS.COPYRIGHT_TEXT}
        </div>
      </footer>
    `;
  }
};

export default Footer;
