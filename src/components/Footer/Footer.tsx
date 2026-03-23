// src/components/Footer/Footer.tsx
import { Link } from "react-router-dom";
import Newsletter from "../Newsletter/Newsletter";
import styles from "./Footer.module.css";

// ✅ React Icons (social)
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Newsletter />

      <div className={`${styles.bottom} container`}>
        <div className={styles.cols}>
          <div className={styles.col}>
            <div className={styles.head}>Quick Links</div>
            <Link to="/" className={styles.a}>Home</Link>
            <Link to="/shop" className={styles.a}>Shop</Link>
            <Link to="/about" className={styles.a}>About</Link>
            <Link to="/contact" className={styles.a}>Contact</Link>
          </div>

          <div className={styles.col}>
            <div className={styles.head}>Customer Service</div>
            <Link to="/faqs" className={styles.a}>FAQ</Link>
            <a className={styles.a} href="#" onClick={(e) => e.preventDefault()}>
              Shipping info
            </a>
            <a className={styles.a} href="#" onClick={(e) => e.preventDefault()}>
              Returns
            </a>
          </div>

          <div className={styles.col}>
            <div className={styles.head}>Follow Us</div>
            <div className={styles.social}>
              <button className={styles.icon} aria-label="Facebook" title="Facebook" type="button">
                <span className={styles.iconInner} aria-hidden="true">
                  <FaFacebookF />
                </span>
              </button>

              <button className={styles.icon} aria-label="Instagram" title="Instagram" type="button">
                <span className={styles.iconInner} aria-hidden="true">
                  <FaInstagram />
                </span>
              </button>

              <button className={styles.icon} aria-label="Pinterest" title="Pinterest" type="button">
                <span className={styles.iconInner} aria-hidden="true">
                  <FaPinterestP />
                </span>
              </button>

              <button className={styles.icon} aria-label="X (Twitter)" title="X (Twitter)" type="button">
                <span className={styles.iconInner} aria-hidden="true">
                  <FaXTwitter />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className={styles.copy}>© {new Date().getFullYear()} Zinarie. All Rights Reserved.</div>
      </div>
    </footer>
  );
}
