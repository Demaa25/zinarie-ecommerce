// src/pages/Faqs/FaqsPage.tsx
import { useMemo, useState } from "react";
import styles from "./FaqsPage.module.css";

// ✅ icons (UI-like)
import { FiSearch } from "react-icons/fi";
import { FiTruck, FiRotateCcw, FiBox, FiCreditCard } from "react-icons/fi";

const heroImg = "/assets/faqs-hero.png";

type Faq = { q: string; a: string; category: string };

const FAQS: Faq[] = [
  {
    category: "Orders & Shipping",
    q: "How long does shipping take?",
    a: "Orders are typically processed and shipped within 1–2 business days. Delivery within Nigeria usually takes 3–5 business days. International shipping delivery times vary depending on the destination, usually within 9–14 business days. You’ll receive a confirmation email with tracking information once your order has been shipped.",
  },
  { category: "Orders & Shipping", q: "How much does shipping cost?", a: "Shipping costs are calculated at checkout based on location and order size." },
  { category: "Orders & Shipping", q: "Do you ship internationally?", a: "Yes. International delivery times vary by location." },
  { category: "Orders & Shipping", q: "Can I track my order?", a: "Yes. Once shipped, you’ll receive tracking information via email." },
  { category: "Orders & Shipping", q: "What should I do if I haven’t received my order?", a: "Contact support with your order number and we’ll help immediately." },

  { category: "Returns & Refunds", q: "What is your return policy?", a: "Returns are accepted within 7 days of delivery if unused." },
  { category: "Returns & Refunds", q: "When will I get my refund?", a: "Refunds are processed within 3–5 business days after inspection." },

  { category: "Payments & Account", q: "Which payment methods are accepted?", a: "We support card payments and other options (to be finalized)." },
  { category: "Products & Stock", q: "Will an item restock?", a: "Some items restock. Limited prints may not return." },
];

const CATEGORIES = ["Orders & Shipping", "Returns & Refunds", "Products & Stock", "Payments & Account"] as const;

const CAT_META: Record<(typeof CATEGORIES)[number], { icon: JSX.Element; tone: "orange" | "green" }> = {
  "Orders & Shipping": { icon: <FiTruck />, tone: "orange" },
  "Returns & Refunds": { icon: <FiRotateCcw />, tone: "green" },
  "Products & Stock": { icon: <FiBox />, tone: "orange" },
  "Payments & Account": { icon: <FiCreditCard />, tone: "green" },
};

export default function FaqsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("Orders & Shipping");
  const [openKey, setOpenKey] = useState<string | null>("How long does shipping take?");

  const filtered = useMemo(() => {
    let list = [...FAQS].filter((f) => f.category === cat);
    const query = q.trim().toLowerCase();
    if (query) list = list.filter((f) => f.q.toLowerCase().includes(query) || f.a.toLowerCase().includes(query));
    return list;
  }, [q, cat]);

  return (
    <main>
      {/* ✅ HERO matches UI: smaller, text dark on image, correct crop */}
      <section className={styles.hero} style={{ backgroundImage: `url(${heroImg})` }}>
        <div className={`${styles.heroInner} container`}>
          <div className={styles.heroLeft}>
            <h1 className={styles.h1}>Frequently Asked Questions</h1>
            <p className={styles.sub}>
              Find Answers to Your Questions <br />
              About Shopping with <span className={styles.brandInline}>Zinarie</span>
            </p>
          </div>
        </div>
        <div className={styles.wave} />
      </section>

      <section className={`${styles.body} container`}>
        {/* ✅ breadcrumb + search input with button (UI-like) */}
        <div className={styles.breadcrumb}>Home &nbsp;›&nbsp; FAQs</div>

        <div className={styles.searchRow}>
          <div className={styles.searchWrap}>
            <input
              className={styles.search}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search for questions..."
              aria-label="Search FAQs"
            />
            <button className={styles.searchBtn} type="button" aria-label="Search">
              <FiSearch />
            </button>
          </div>
        </div>

        <div className={styles.grid}>
          {/* ✅ Topics */}
          <aside className={styles.sidebar}>
            <div className={styles.sideTitle}>Topics</div>
            <div className={styles.sideList}>
              {CATEGORIES.map((c) => {
                const active = cat === c;
                const meta = CAT_META[c];
                return (
                  <button
                    key={c}
                    type="button"
                    className={`${styles.sideBtn} ${active ? styles.sideActive : ""}`}
                    onClick={() => setCat(c)}
                  >
                    <span className={`${styles.sideIcon} ${meta.tone === "orange" ? styles.toneOrange : styles.toneGreen}`}>
                      {meta.icon}
                    </span>
                    <span className={styles.sideText}>{c}</span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* ✅ Accordion panel */}
          <div className={styles.panel}>
            <div className={styles.panelTitle}>{cat}</div>

            {filtered.map((f) => {
              const isOpen = openKey === f.q;
              return (
                <div key={f.q} className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}>
                  <button
                    type="button"
                    className={styles.question}
                    onClick={() => setOpenKey(isOpen ? null : f.q)}
                    aria-expanded={isOpen}
                  >
                    <span>{f.q}</span>
                    <span className={styles.chev}>{isOpen ? "▴" : "▾"}</span>
                  </button>

                  {isOpen && <div className={styles.answer}>{f.a}</div>}
                </div>
              );
            })}

            <div className={styles.ctaWrap}>
              <div className={styles.ctaTitle}>Still Have Questions?</div>
              <div className={styles.ctaSub}>Contact us directly for further assistance. We’re here to help!</div>
              <a className={styles.ctaBtn} href="/contact">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
