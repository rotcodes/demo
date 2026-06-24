import { Package, ArrowUpRight } from 'lucide-react'
import { FaLinkedinIn, FaXTwitter, FaFacebookF } from 'react-icons/fa6'

const footerLinks = {
  Company: ['About Us', 'Careers', 'Press', 'Blog'],
  Services: ['Procurement', 'Warehousing', 'Distribution', 'Analytics'],
  Industries: ['Retail', 'Food & Bev', 'Healthcare', 'Electronics'],
  Support: ['Contact', 'FAQ', 'Docs', 'API'],
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#" className="footer__logo">
              <div className="footer__logo-icon">
                <Package size={18} strokeWidth={2.5} />
              </div>
              <span>Global<span className="footer__logo-accent">Trade</span></span>
            </a>
            <p className="footer__tagline">
              Powering global wholesale distribution with speed, reliability, and precision since 2009.
            </p>
            <div className="footer__socials">
              <a href="#" className="footer__social" aria-label="LinkedIn"><FaLinkedinIn size={15} /></a>
              <a href="#" className="footer__social" aria-label="X"><FaXTwitter size={15} /></a>
              <a href="#" className="footer__social" aria-label="Facebook"><FaFacebookF size={15} /></a>
            </div>
          </div>

          <div className="footer__cols">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="footer__col">
                <h4 className="footer__col-title">{title}</h4>
                <ul>
                  {links.map(link => (
                    <li key={link}>
                      <a href="#" className="footer__link">
                        {link}
                        <ArrowUpRight size={11} className="footer__link-arrow" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} GlobalTrade Distributors. All rights reserved.</p>
          <div className="footer__legal">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
