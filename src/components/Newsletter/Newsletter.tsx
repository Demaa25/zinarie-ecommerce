// src/components/Newsletter/Newsletter.tsx
import { useState } from "react";
import styles from "./Newsletter.module.css";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder: wire to backend later
    alert(`Subscribed: ${email}`);
    setEmail("");
  }

  return (
    <section className={styles.wrap}>
      <div className={`${styles.inner} container`}>
        <div className={styles.left}>
          <div className={styles.title}>Join Our Newsletter</div>
          <div className={styles.sub}>Get the latest updates & exclusive offers</div>
        </div>

        <form className={styles.form} onSubmit={onSubmit}>
          <input
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            type="email"
            required
          />
          <button className={styles.btn} type="submit">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
