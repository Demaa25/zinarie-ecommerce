// src/components/Navbar/Navbar.tsx
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

// ✅ React Icons (closest match to UI style)
import { FiSearch, FiUser, FiHeart, FiShoppingBag } from "react-icons/fi";

function IconButton({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button className={styles.iconBtn} type="button" aria-label={label} title={label}>
      <span className={styles.iconImg} aria-hidden="true">
        {children}
      </span>
    </button>
  );
}

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={`${styles.inner} container`}>
        <div className={styles.brand}>Zinarie</div>

        <nav className={styles.nav}>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : styles.link)}>
            Home
          </NavLink>
          <NavLink to="/shop" className={({ isActive }) => (isActive ? styles.active : styles.link)}>
            Shop
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : styles.link)}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? styles.active : styles.link)}>
            Contact
          </NavLink>
          <NavLink to="/faqs" className={({ isActive }) => (isActive ? styles.active : styles.link)}>
            FAQs
          </NavLink>
        </nav>

        <div className={styles.actions} aria-label="utility-actions">
          <IconButton label="Search">
            <FiSearch />
          </IconButton>
          <IconButton label="Account">
            <FiUser />
          </IconButton>
          <IconButton label="Wishlist">
            <FiHeart />
          </IconButton>
          <IconButton label="Cart">
            <FiShoppingBag />
          </IconButton>
        </div>
      </div>
    </header>
  );
}
