// src/pages/About/AboutPage.tsx
import { Link } from "react-router-dom";
import styles from "./AboutPage.module.css";
import { FiTruck, FiShield } from "react-icons/fi";
import { PiYarn } from "react-icons/pi";

const heroImg = "/assets/about-hero.png";
const ourStoryImg = "/assets/about-our-story.png";

const team = [
  { name: "Uche", role: "Founder & CEO", img: "/assets/team-uche.png" },
  { name: "Sarah", role: "Creative Director", img: "/assets/team-sarah.png" },
  { name: "Tunde", role: "Operations Manager", img: "/assets/team-tunde.png" },
  { name: "Amina", role: "Customer Support", img: "/assets/team-amina.png" },
];

export default function AboutPage() {
  return (
    <main>
      {/* HERO */}
      <section className={styles.hero} style={{ backgroundImage: `url(${heroImg})` }}>
        <div className={`${styles.heroInner} container`}>
          <div className={styles.heroLeft}>
            <h1 className={styles.h1}>About Us</h1>
            <p className={styles.sub}>
              Celebrate the Richness of <br />
              African Culture with <span className={styles.brandInline}>Zinarie</span>
            </p>
          </div>
        </div>
        <div className={styles.wave} />
      </section>

      <section className={`${styles.body} container`}>
        <div className={styles.breadcrumb}>Home &nbsp;›&nbsp; About</div>

        {/* OUR STORY */}
        <div className={styles.storyHeader}>
          <h2 className={styles.h2}>Our Story</h2>
          <div className={styles.storyLine} />
        </div>

        <section className={styles.story}>
          <div className={styles.storyGrid}>
            <div className={styles.storyImgWrap}>
              <img className={styles.storyImg} src={ourStoryImg} alt="Our story" />
            </div>

            <div className={styles.storyText}>
              <div className={styles.storyTitle}>Welcome to Zinarie!</div>
              <p className={styles.p}>
                We're a passionate team dedicated to bringing the vibrant beauty of African Ankara fabrics to the world.
              </p>
              <p className={styles.p}>
                Founded with love and a deep appreciation for African culture, Zinarie was established to share the
                unique and intricate textile art of Ankara fabric.
              </p>
              <p className={styles.p}>
                Our mission is to celebrate African heritage by offering high-quality, authentic Ankara fabrics that
                inspire creativity and style.
              </p>

              <Link to="/shop" className={styles.shopBtn}>
                Shop Our Collection
              </Link>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className={styles.why}>
          <div className={styles.titleRow}>
            <div className={styles.hr} />
            <h2 className={styles.whyTitle}>
              Why Choose <span className={styles.zinarieAccent}>Zinarie</span>?
            </h2>
            <div className={styles.hr} />
          </div>

          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <div className={styles.whyIconWrap}>
                <PiYarn className={styles.whyIcon} aria-hidden />
              </div>
              <div className={styles.whyCardTitle}>Premium Quality Fabrics</div>
              <div className={styles.whyCardSub}>Authentic, vibrant, & durable textiles</div>
            </div>

            <div className={styles.whyCard}>
              <div className={styles.whyIconWrap}>
                <FiTruck className={styles.whyIcon} aria-hidden />
              </div>
              <div className={styles.whyCardTitle}>Fast & Reliable Shipping</div>
              <div className={styles.whyCardSub}>Quick delivery to your doorstep</div>
            </div>

            <div className={styles.whyCard}>
              <div className={styles.whyIconWrap}>
                <FiShield className={styles.whyIcon} aria-hidden />
              </div>
              <div className={styles.whyCardTitle}>Excellent Customer Service</div>
              <div className={styles.whyCardSub}>Dedicated support & hassle-free returns</div>
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section className={styles.team}>
          <div className={styles.teamTitleRow}>
            <h2 className={styles.teamTitle}>
              Meet Our Team: <span className={styles.teamSubTitle}>The Faces Behind</span>{" "}
              <span className={styles.zinarieAccent}>Zinarie</span>
            </h2>
          </div>

          <div className={styles.teamRow}>
            {team.map((m) => (
              <div key={m.name} className={styles.member}>
                <div className={styles.avatarWrap}>
                  <img className={styles.avatarImg} src={m.img} alt={m.name} />
                </div>
                <div className={styles.memberName}>{m.name}</div>
                <div className={styles.memberRole}>{m.role}</div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
