// src/pages/Login/LoginPage.tsx
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <h1>My Account</h1>
          <p>Login to continue shopping with <span>Zinarie</span></p>
        </div>
      </section>

      <div className="container">
        <div className={styles.breadcrumb}>
          Home <span>›</span> Account
        </div>

        <div className={styles.wrapper}>
          <div className={styles.card}>
            <h2>Login</h2>

            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />

            <label>Password</label>
            <input type="password" placeholder="Enter your password" />

            <button className={styles.loginBtn}>
              Sign In
            </button>

            <div className={styles.footer}>
              Don't have an account? <a href="/register"><span>Create account</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}