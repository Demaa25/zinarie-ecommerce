// src/pages/Shop/ShopPage.tsx
import { useMemo, useState } from "react";
import styles from "./ShopPage.module.css";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";

type Product = {
  id: string;
  name: string;
  priceFrom: number;
  tag?: "New" | "Best Seller";
  image: string; // /assets/*.png
  group: "Floral" | "Geometric" | "Tribal" | "Abstract";
};

const heroImg = "/assets/shop-hero.png";

// NOTE: Replace these with your exact .png assets (the ones you extracted)
const PRODUCTS: Product[] = [
  { id: "p1", name: "Floral Ankara", priceFrom: 15.99, image: "/assets/shop-grid-01.png", group: "Floral" },
  { id: "p2", name: "Tribal Ankara", priceFrom: 15.99, tag: "New", image: "/assets/shop-grid-02.png", group: "Tribal" },
  { id: "p3", name: "Geometric Ankara", priceFrom: 15.99, tag: "Best Seller", image: "/assets/shop-grid-03.png", group: "Geometric" },

  { id: "p4", name: "Floral Ankara", priceFrom: 15.99, image: "/assets/shop-grid-04.png", group: "Floral" },
  { id: "p5", name: "Geometric Ankara", priceFrom: 15.99, image: "/assets/shop-grid-05.png", group: "Geometric" },
  { id: "p6", name: "Abstract Ankara", priceFrom: 15.99, image: "/assets/shop-grid-06.png", group: "Abstract" },

  { id: "p7", name: "Floral Ankara", priceFrom: 15.99, image: "/assets/shop-grid-07.png", group: "Floral" },
  { id: "p8", name: "Geometric Ankara", priceFrom: 15.99, tag: "New", image: "/assets/shop-grid-08.png", group: "Geometric" },
  { id: "p9", name: "Tribal Ankara", priceFrom: 15.99, tag: "New", image: "/assets/shop-grid-09.png", group: "Tribal" },
  { id: "p10", name: "Abstract Ankara", priceFrom: 15.99, image: "/assets/shop-grid-10.png", group: "Abstract" },
  { id: "p11", name: "Tribal Ankara", priceFrom: 15.99, image: "/assets/shop-grid-11.png", group: "Tribal" },
  { id: "p12", name: "Abstract Ankara", priceFrom: 15.99, image: "/assets/shop-grid-12.png", group: "Abstract" },
];

type UiCategory = "All Fabrics" | "Bold Prints" | "Tribal Patterns" | "Geometric Designs" | "Abstract Prints";
type SortKey = "recommended" | "price_low" | "price_high";

const PAGE_SIZE = 9;

export default function ShopPage() {
  const [cat, setCat] = useState<UiCategory>("All Fabrics");
  const [sort, setSort] = useState<SortKey>("recommended");

  // UI-like price range (just visual + filters)
  const [minPrice, setMinPrice] = useState(10);
  const [maxPrice, setMaxPrice] = useState(380);

  // pagination
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let list = [...PRODUCTS];

    if (cat !== "All Fabrics") {
      if (cat === "Tribal Patterns") list = list.filter((p) => p.group === "Tribal");
      if (cat === "Geometric Designs") list = list.filter((p) => p.group === "Geometric");
      if (cat === "Abstract Prints") list = list.filter((p) => p.group === "Abstract");
      if (cat === "Bold Prints") list = list.filter((p) => p.group === "Floral"); // using Floral as “Bold Prints” bucket for now
    }

    // price filter
    list = list.filter((p) => p.priceFrom >= minPrice && p.priceFrom <= maxPrice);

    // sort
    if (sort === "price_low") list.sort((a, b) => a.priceFrom - b.priceFrom);
    if (sort === "price_high") list.sort((a, b) => b.priceFrom - a.priceFrom);

    return list;
  }, [cat, sort, minPrice, maxPrice]);

  const totalItems = 34; // UI shows "34 Items"
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);

  const pageItems = useMemo(() => {
    const start = (safePage - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, safePage]);

  function applyFilter() {
    setPage(1);
  }

  return (
    <main>
      {/* HERO */}
      <section className={styles.hero} style={{ backgroundImage: `url(${heroImg})` }}>
        <div className={`${styles.heroInner} container`}>
          <div className={styles.heroLeft}>
            <h1 className={styles.h1}>Shop</h1>
            <p className={styles.sub}>Browse Our Stunning Ankara Fabrics</p>
          </div>
        </div>
        <div className={styles.wave} />
      </section>

      <section className={`${styles.body} container`}>
        {/* Breadcrumb like UI */}
        <div className={styles.breadcrumb}>
          <span>Home</span> <FiChevronRight aria-hidden /> <span>Shop</span>
        </div>

        <div className={styles.layout}>
          {/* LEFT FILTER PANEL */}
          <aside className={styles.sidebar}>
            <div className={styles.sideBox}>
              <div className={styles.sideTitle}>Filter</div>

              <div className={styles.catList}>
                {(["All Fabrics", "Bold Prints", "Tribal Patterns", "Geometric Designs", "Abstract Prints"] as UiCategory[]).map(
                  (c) => {
                    const active = c === cat;
                    return (
                      <button
                        key={c}
                        type="button"
                        className={`${styles.catBtn} ${active ? styles.catActive : ""}`}
                        onClick={() => setCat(c)}
                      >
                        <span>{c}</span>
                        <span className={styles.catArrow} aria-hidden>
                          <FiChevronRight />
                        </span>
                      </button>
                    );
                  }
                )}
              </div>
            </div>

            <div className={styles.sideBox}>
              <div className={styles.sideTitle}>Price Range</div>

              <div className={styles.priceRow}>
                <span>${minPrice}</span>
                <span className={styles.priceLine} />
                <span>${maxPrice}</span>
              </div>

              <div className={styles.rangeWrap}>
                <input
                  className={styles.range}
                  type="range"
                  min={10}
                  max={380}
                  value={minPrice}
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                />
                <input
                  className={styles.range}
                  type="range"
                  min={10}
                  max={380}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
              </div>

              <button className={styles.applyBtn} type="button" onClick={applyFilter}>
                Apply Filter
              </button>
            </div>

            <div className={styles.sideBox}>
              <div className={styles.sideTitle}>Sort By:</div>
              <button className={styles.sideSelect} type="button">
                Recommended <FiChevronDown aria-hidden />
              </button>

              {/* UI shows a big preview image in sidebar */}
              <div className={styles.previewCard}>
                <img src="/assets/shop-grid-01.png" alt="Preview" />
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <section className={styles.main}>
            <div className={styles.topRow}>
              <div className={styles.itemsCount}>{totalItems} Items</div>

              <div className={styles.sortRow}>
                <div className={styles.sortLabel}>Sort By:</div>
                <button className={styles.sortSelect} type="button" aria-label="Sort dropdown">
                  Recommended <FiChevronDown aria-hidden />
                </button>
                <button className={styles.viewBtn} type="button" aria-label="View options">
                  ≡
                </button>
              </div>
            </div>

            <div className={styles.grid}>
              {pageItems.map((p) => (
                <article key={p.id} className={styles.card}>
                  <div className={styles.imgWrap}>
                    {p.tag && <div className={styles.badge}>{p.tag}</div>}
                    <img className={styles.img} src={p.image} alt={p.name} />
                  </div>

                  <div className={styles.meta}>
                    <div className={styles.name}>{p.name}</div>
                    <div className={styles.price}>From ${p.priceFrom.toFixed(2)}</div>
                    <button className={styles.detailsBtn} type="button">
                      View Details
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination like UI */}
            <div className={styles.pagination}>
              {[1, 2, 3].map((n) => (
                <button
                  key={n}
                  type="button"
                  className={`${styles.pageBtn} ${n === safePage ? styles.pageActive : ""}`}
                  onClick={() => setPage(n)}
                >
                  {n}
                </button>
              ))}
              <button
                type="button"
                className={styles.pageBtn}
                onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              >
                Next
              </button>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}