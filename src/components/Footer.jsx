import { Package, ArrowUpRight } from 'lucide-react'
import { FaLinkedinIn, FaXTwitter, FaFacebookF } from 'react-icons/fa6'

const footerLinks = {
  Company: ['About Us', 'Careers', 'Press', 'Blog'],
  Services: ['Bulk Procurement', 'Warehousing', 'Fleet Distribution', 'Analytics'],
  Industries: ['Retail', 'Food & Beverage', 'Healthcare', 'Electronics'],
  Support: ['Contact', 'FAQ', 'Documentation', 'API'],
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#" className="footer__logo">
              <div className="footer__logo-icon">
                <Package size={20} strokeWidth={2.5} />
              </div>
              <span className="footer__logo-text">
                Global<span className="footer__logo-accent">Trade</span>
              </span>
            </a>
            <p className="footer__tagline">
              Powering global wholesale distribution with speed, reliability, and precision since 2009.
            </p>
            <div className="footer__socials">
              <a href="#" className="footer__social" aria-label="LinkedIn"><FaLinkedinIn size={16} /></a>
              <a href="#" className="footer__social" aria-label="X"><FaXTwitter size={16} /></a>
              <a href="#" className="footer__social" aria-label="Facebook"><FaFacebookF size={16} /></a>
            </div>
          </div>

          <div className="footer__columns">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="footer__column">
                <h4 className="footer__column-title">{title}</h4>
                <ul className="footer__list">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="footer__link">
                        {link} <ArrowUpRight size={12} className="footer__link-arrow" />
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
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
