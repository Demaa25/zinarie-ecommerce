// src/pages/Home/HomePage.tsx
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

// ✅ Change #2: real icons (react-icons)
import { FiShield, FiTruck, FiLock } from "react-icons/fi";

/**
 * IMPORTANT:
 * Put these exact .png assets inside: public/assets/
 * - home-hero-clean.png   (hero image WITHOUT words/button)
 * - home-cat-01.png, home-cat-02.png, home-cat-03.png (the 3 circle category images)
 * - home-collection-01.png ... home-collection-04.png (Explore Our Collection cards)
 * - customer-favorite-01.png ... customer-favorite-05.png
 */

const heroImg = "/assets/home-hero-clean.png";

const categories = [
  { title: "Bold Prints", img: "/assets/home-cat-01.png", href: "/shop?cat=bold" },
  { title: "New Arrivals", img: "/assets/home-cat-02.png", href: "/shop?sort=new" },
  { title: "Best Sellers", img: "/assets/home-cat-03.png", href: "/shop?sort=best" },
];

const collections = [
  { title: "Floral Ankara", price: "From $19.99", img: "/assets/home-collection-01.png", href: "/shop?cat=floral" },
  { title: "Tribal Patterns", price: "From $19.99", img: "/assets/home-collection-02.png", href: "/shop?cat=tribal" },
  { title: "Geometric Designs", price: "From $19.99", img: "/assets/home-collection-03.png", href: "/shop?cat=geometric" },
  { title: "Abstract Prints", price: "From $19.99", img: "/assets/home-collection-04.png", href: "/shop?cat=abstract" },
];

const favorites = [
  "/assets/customer-favorite-01.png",
  "/assets/customer-favorite-02.png",
  "/assets/customer-favorite-03.png",
  "/assets/customer-favorite-04.png",
  "/assets/customer-favorite-05.png",
];

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className={styles.hero} style={{ backgroundImage: `url(${heroImg})` }}>
        <div className={`${styles.heroInner} container`}>
          <div className={styles.heroLeft}>
            <h1 className={styles.h1}>
              Discover the Beauty <span className={styles.of}>of</span>{" "}
              <span className={styles.ankara}>Ankara</span>
            </h1>
            <p className={styles.heroSub}>Unique & Vibrant African Fabrics</p>

            <Link to="/shop" className="btnPrimary">
              Shop Now
            </Link>
          </div>
        </div>

        {/* white wave divider (as in design) */}
        <div className={styles.wave} />

        {/* category circles sit on the wave */}
        <div className={styles.catsWrap}>
          <div className={`${styles.cats} container`}>
            {categories.map((c) => (
              <Link key={c.title} to={c.href} className={styles.cat}>
                <div className={styles.catCircle}>
                  <img className={styles.catImg} src={c.img} alt={c.title} />
                </div>
                <div className={styles.catTitle}>{c.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EXPLORE */}
      <section className={`${styles.section} container`}>
        <div className={styles.titleRow}>
          <div className={styles.hr} />
          <div className={styles.titleStack}>
            <h2 className={styles.sectionTitle}>Explore Our Collection</h2>
            <p className={styles.sectionSub}>Stunning Ankara Fabrics for Every Style</p>
          </div>
          <div className={styles.hr} />
        </div>

        <div className={styles.collectionGrid}>
          {collections.map((c) => (
            <div key={c.title} className={styles.collectionCard}>
              <div className={styles.collectionImgWrap}>
                <img className={styles.collectionImg} src={c.img} alt={c.title} />
                <div className={styles.collectionOverlay} />
              </div>

              <div className={styles.collectionMeta}>
                <div className={styles.collectionTitle}>{c.title}</div>
                <div className={styles.collectionPrice}>{c.price}</div>
                <Link to={c.href} className={styles.collectionLink}>
                  View More »
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className={`${styles.why} container`}>
        <div className={styles.titleRow}>
          <div className={styles.hr} />
          <div className={styles.titleStack}>
            <h2 className={styles.sectionTitle}>
              Why Choose <span className={styles.zinarieAccent}>Zinarie</span>?
            </h2>
          </div>
          <div className={styles.hr} />
        </div>

        <div className={styles.whyGrid}>
          <div className={styles.whyCard}>
            <div className={styles.whyIconWrap}>
              <FiShield className={styles.whyIcon} aria-hidden />
            </div>
            <div className={styles.whyTitle}>High Quality Fabrics</div>
            <div className={styles.whySub}>Premium & Authentic Textiles</div>
          </div>

          <div className={styles.whyDivider} aria-hidden />

          <div className={styles.whyCard}>
            <div className={styles.whyIconWrap}>
              <FiTruck className={styles.whyIcon} aria-hidden />
            </div>
            <div className={styles.whyTitle}>Fast Shipping</div>
            <div className={styles.whySub}>Quick & Reliable Delivery</div>
          </div>

          <div className={styles.whyDivider} aria-hidden />

          <div className={styles.whyCard}>
            <div className={styles.whyIconWrap}>
              <FiLock className={styles.whyIcon} aria-hidden />
            </div>
            <div className={styles.whyTitle}>Secure Shopping</div>
            <div className={styles.whySub}>Safe & Easy Checkout</div>
          </div>
        </div>
      </section>

      {/* CUSTOMER FAVORITES */}
      <section className={`${styles.favs} container`}>
        <div className={styles.titleRow}>
          <div className={styles.hr} />
          <div className={styles.titleStack}>
            <h2 className={styles.sectionTitle}>Customer Favorites</h2>
          </div>
          <div className={styles.hr} />
        </div>

        <div className={styles.favRow}>
          {favorites.map((src, idx) => (
            <div key={idx} className={styles.favCard}>
              <img className={styles.favImg} src={src} alt={`Customer favorite ${idx + 1}`} />
            </div>
          ))}
        </div>

        <div className={styles.favCta}>
          <Link to="/shop" className="btnPrimary">
            Shop Now
          </Link>
        </div>
      </section>
    </main>
  );
}
