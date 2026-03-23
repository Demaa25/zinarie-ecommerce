// src/pages/Contact/ContactPage.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ContactPage.module.css";

import { FiMail, FiPhone, FiMapPin, FiClock, FiPlus } from "react-icons/fi";

const heroImg = "/assets/contact-hero.png";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert(`Message sent!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <main>
      {/* HERO */}
      <section className={styles.hero} style={{ backgroundImage: `url(${heroImg})` }}>
        <div className={`${styles.heroInner} container`}>
          <div className={styles.heroLeft}>
            <h1 className={styles.h1}>Contact Us</h1>
            <p className={styles.sub}>
              We’re Here to Help,
              <br />
              Get in Touch with <span className={styles.brandInline}>Zinarie</span>
            </p>
          </div>
        </div>
        <div className={styles.wave} />
      </section>

      <section className={`${styles.body} container`}>
        {/* breadcrumb (UI) */}
        <div className={styles.breadcrumb}>Home &nbsp;›&nbsp; Contact</div>

        <div className={styles.grid}>
          {/* ✅ LEFT COLUMN: form + Visit Our Shop (to match UI positioning) */}
          <div className={styles.leftCol}>
            {/* LEFT: FORM */}
            <form className={styles.form} onSubmit={onSubmit}>
              <div className={styles.formHead}>
                <h2 className={styles.h2}>Get in Touch</h2>
                <p className={styles.formSub}>
                  Have questions or need assistance? Feel free to reach out to us. We’re here to help!
                </p>
              </div>

              <label className={styles.label}>
                Your Name
                <input className={styles.input} value={name} onChange={(e) => setName(e.target.value)} required />
              </label>

              <label className={styles.label}>
                Your Email
                <input
                  className={styles.input}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>

              <label className={styles.label}>
                Your Message <span className={styles.optional}>(Optional)</span>
                <textarea
                  className={styles.textarea}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your Message"
                />
              </label>

              <button className={styles.sendBtn} type="submit">
                Send Message
              </button>
            </form>

            {/* ✅ MOVED HERE: Visit Our Shop (left column, below form) */}
            <div className={styles.visitCard}>
              <div className={styles.cardTitle}>Visit Our Shop</div>
              <div className={styles.visitDesc}>
                We’d love to see you! Stop by our store and explore our beautiful collection of Ankara fabrics in person.
              </div>

              <Link className={styles.moreFaqs} to="/shop">
                View Our Shop &nbsp;›
              </Link>
            </div>
          </div>

          {/* RIGHT: INFO + FAQ PREVIEW */}
          <aside className={styles.info}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Contact Information</div>
              <div className={styles.cardDesc}>Reach out to us and we’ll get back to you as soon as possible.</div>

              <div className={styles.infoItem}>
                <span className={styles.infoIcon} aria-hidden>
                  <FiMail />
                </span>
                <div className={styles.infoText}>
                  <div className={styles.infoK}>Email</div>
                  <div className={styles.infoV}>support@zinarie.com</div>
                </div>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoIcon} aria-hidden>
                  <FiPhone />
                </span>
                <div className={styles.infoText}>
                  <div className={styles.infoK}>Call Us</div>
                  <div className={styles.infoV}>+1 (800) 123-4567</div>
                </div>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoIcon} aria-hidden>
                  <FiMapPin />
                </span>
                <div className={styles.infoText}>
                  <div className={styles.infoK}>Visit Us</div>
                  <div className={styles.infoV}>13 Egin Street, Ojodu, Lagos, Nigeria</div>
                </div>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoIcon} aria-hidden>
                  <FiClock />
                </span>
                <div className={styles.infoText}>
                  <div className={styles.infoK}>Office Hours</div>
                  <div className={styles.infoV}>Monday–Friday: 9:00 AM – 6:00 PM</div>
                </div>
              </div>
            </div>

            <div className={styles.faqCard}>
              <div className={styles.cardTitle}>Frequently Asked Questions</div>

              <button className={styles.faqRow} type="button">
                <span>How long does shipping take?</span>
                <span className={styles.faqPlus} aria-hidden>
                  <FiPlus />
                </span>
              </button>

              <button className={styles.faqRow} type="button">
                <span>What is your return policy?</span>
                <span className={styles.faqPlus} aria-hidden>
                  <FiPlus />
                </span>
              </button>

              <button className={styles.faqRow} type="button">
                <span>Do you restock sold-out fabrics?</span>
                <span className={styles.faqPlus} aria-hidden>
                  <FiPlus />
                </span>
              </button>

              <button className={styles.faqRow} type="button">
                <span>Can I place a custom order?</span>
                <span className={styles.faqPlus} aria-hidden>
                  <FiPlus />
                </span>
              </button>

              <button className={styles.faqRow} type="button">
                <span>What payment methods do you accept?</span>
                <span className={styles.faqPlus} aria-hidden>
                  <FiPlus />
                </span>
              </button>

              <Link className={styles.moreFaqs} to="/faqs">
                View More FAQs &nbsp;›
              </Link>
            </div>
          </aside>
        </div>

        {/* MAP (full width like UI) */}
        <div className={styles.mapWrap} aria-label="Map section">
          <div className={styles.map}>
            <iframe
              title="Zinarie Location Map"
              src="https://www.google.com/maps?q=13%20Egin%20Street%20Ojodu,%20Lagos,%20Nigeria&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
