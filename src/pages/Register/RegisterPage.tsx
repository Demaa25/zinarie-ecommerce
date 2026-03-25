// src/pages/Register/RegisterPage.tsx
import { Link } from "react-router-dom";
import styles from "./RegisterPage.module.css";

export default function RegisterPage() {
  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <h1>Create Account</h1>
          <p>
            Join <span className={styles.highlight}>Zinarie</span> and experience premium African fabrics
          </p>
        </div>
      </section>

      <div className="container">
        <div className={styles.breadcrumb}>
          Home <span>›</span> Register
        </div>

        <div className={styles.wrapper}>
          <div className={styles.card}>
            <h2>Register</h2>

            <p className={styles.subtitle}>
              Join Zinarie and experience premium African fabrics
            </p>

            <form className={styles.form}>
              
              {/* NAME ROW */}
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="First name"
                    required
                    autoComplete="given-name"
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Last name"
                    required
                    autoComplete="family-name"
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div className={styles.field}>
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  autoComplete="email"
                />
              </div>

              {/* PASSWORD */}
              <div className={styles.field}>
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                  autoComplete="new-password"
                />
              </div>

              {/* CONFIRM PASSWORD */}
              <div className={styles.field}>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                  required
                  autoComplete="new-password"
                />
              </div>

              <button type="submit" className={styles.registerBtn}>
                Create Account
              </button>
            </form>

            <div className={styles.footer}>
              Already have an account?
              <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}