import styles from "./CartPage.module.css";

export default function CartPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <h1>Shopping Cart</h1>
          <p>Review your selected fabrics</p>
        </div>
      </section>

      <div className="container">
        <div className={styles.breadcrumb}>
          Home <span>›</span> Cart
        </div>

        <div className={styles.layout}>
          {/* CART ITEMS */}
          <div className={styles.items}>
            {[1,2].map((item)=>(
              <div className={styles.item} key={item}>
                <div className={styles.image}></div>

                <div className={styles.info}>
                  <h4>Floral Ankara</h4>
                  <p>$15.99</p>
                </div>

                <input type="number" defaultValue={1} />

                <div className={styles.price}>
                  $15.99
                </div>
              </div>
            ))}
          </div>

          {/* SUMMARY */}
          <div className={styles.summary}>
            <h3>Order Summary</h3>

            <div className={styles.row}>
              <span>Subtotal</span>
              <span>$31.98</span>
            </div>

            <div className={styles.row}>
              <span>Shipping</span>
              <span>$5.00</span>
            </div>

            <div className={styles.total}>
              <span>Total</span>
              <span>$36.98</span>
            </div>

            <button className={styles.checkout}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}