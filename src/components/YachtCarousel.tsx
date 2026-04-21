import { useState, useEffect } from "react";
import { YACHTS } from "../data";
import { FavIcon, ExternalLink } from "../icons";
import { useInView } from "../hooks/useInView";
import type { Yacht } from "../types";

function YachtCard({ yacht, type, onClick }: { yacht: Yacht; type: "center" | "side"; onClick?: () => void }) {
  const isCenter = type === "center";
  const m = yacht.price.match(/^([\d,]+)\s*€$/);
  const parts = m ? { num: m[1], sym: "€" } : { num: yacht.price, sym: "" };

  return (
    <div className={`bm-yacht-card ${type}`} onClick={onClick}>
      <img src={yacht.img} alt={yacht.name} loading="lazy" />
      <div className="bm-yacht-card-overlay" />
      <button className="bm-yacht-fav" onClick={e => e.stopPropagation()}>
        <FavIcon /> Add to Favorites
      </button>
      <div className="bm-yacht-card-info">
        <div style={{ minWidth: 0 }}>
          <div className="bm-yacht-card-loc">{yacht.flag} {yacht.loc}</div>
          <div className="bm-yacht-name">
            <strong>{yacht.name}</strong> <span>{yacht.strong}</span>
          </div>
          {isCenter && <div className="bm-yacht-meta">{yacht.meta}</div>}
        </div>
        <div className="bm-yacht-price">
          <div className="bm-yacht-price-from">from</div>
          <div className="bm-yacht-price-val">
            {parts.num}
            <span className="bm-yacht-price-sup"> {parts.sym}</span>
            {isCenter && <span className="bm-yacht-price-info">i</span>}
          </div>
          <div className="bm-yacht-price-unit">/week</div>
        </div>
      </div>
    </div>
  );
}

export default function YachtCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = YACHTS.length;
  const { ref, inView } = useInView<HTMLElement>();

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive(a => (a + 1) % total), 4500);
    return () => clearInterval(t);
  }, [paused, total]);

  const go = (i: number) => { setPaused(true); setActive((i + total) % total); };
  const leftY   = YACHTS[(active - 1 + total) % total];
  const centerY = YACHTS[active];
  const rightY  = YACHTS[(active + 1) % total];

  return (
    <section
      ref={ref}
      className="bm-section"
      style={{ background: "var(--bg)", paddingTop: 0 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={`bm-section-header bm-reveal${inView ? " is-visible" : ""}`}>
        <div>
          <h2 className="bm-section-title">Yacht for <strong>Charter</strong></h2>
          <p className="bm-section-sub">
            We do not list every yacht — only the finest. Explore our hand-picked fleet
            in the East Med, chosen for superior comfort and exceptional crews.
          </p>
        </div>
        <button className="bm-section-link">All Yachts &nbsp;<ExternalLink /></button>
      </div>

      <div className={`bm-carousel-wrap bm-reveal bm-reveal-d2${inView ? " is-visible" : ""}`}>
        <div className="bm-carousel-track">
          <YachtCard yacht={leftY}   type="side"   onClick={() => go(active - 1)} />
          <YachtCard yacht={centerY} type="center" />
          <YachtCard yacht={rightY}  type="side"   onClick={() => go(active + 1)} />
        </div>
        <button className="bm-carousel-btn prev" onClick={() => go(active - 1)} aria-label="Previous">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <button className="bm-carousel-btn next" onClick={() => go(active + 1)} aria-label="Next">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>

      <div className="bm-carousel-dots">
        {YACHTS.map((_, i) => (
          <button
            key={i}
            className={`bm-carousel-dot${i === active ? " active" : ""}`}
            style={{ width: i === active ? 28 : 7 }}
            onClick={() => go(i)}
            aria-label={`Yacht ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
