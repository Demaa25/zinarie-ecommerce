// src/components/Navbar/Navbar.tsx
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./Navbar.module.css";

import { FiSearch, FiUser, FiHeart, FiShoppingBag, FiX } from "react-icons/fi";

function IconButton({
  label,
  children,
  onClick,
}: {
  label: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      className={styles.iconBtn}
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
    >
      <span className={styles.iconImg} aria-hidden="true">
        {children}
      </span>
    </button>
  );
}

export default function Navbar() {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.inner} container`}>
          
          {/* BRAND → HOME */}
          <div
            className={styles.brand}
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            Zinarie
          </div>

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
            
            {/* SEARCH */}
            <IconButton label="Search" onClick={() => setShowSearch(true)}>
              <FiSearch />
            </IconButton>

            {/* ACCOUNT */}
            <IconButton label="Account" onClick={() => navigate("/login")}>
              <FiUser />
            </IconButton>

            {/* WISHLIST */}
            <IconButton label="Wishlist" onClick={() => navigate("/wishlist")}>
              <FiHeart />
            </IconButton>

            {/* CART */}
            <IconButton label="Cart" onClick={() => navigate("/cart")}>
              <FiShoppingBag />
            </IconButton>

          </div>
        </div>
      </header>

      {/* SEARCH BAR */}
      {showSearch && (
        <div className={styles.searchOverlay}>
          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="Search Ankara fabrics..."
              className={styles.searchInput}
              autoFocus
            />

            <button
              className={styles.searchClose}
              onClick={() => setShowSearch(false)}
            >
              <FiX />
            </button>
          </div>
        </div>
      )}
    </>
  );
}