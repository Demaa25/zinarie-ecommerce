import styles from "./WishlistPage.module.css";

export default function WishlistPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <h1>Wishlist</h1>
          <p>Your saved Ankara favorites</p>
        </div>
      </section>

      <div className="container">
        <div className={styles.breadcrumb}>
          Home <span>›</span> Wishlist
        </div>

        <div className={styles.grid}>
          {[1,2,3,4].map((item) => (
            <div className={styles.card} key={item}>
              <div className={styles.image} />

              <h4>Floral Ankara</h4>
              <p>From $15.99</p>

              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}