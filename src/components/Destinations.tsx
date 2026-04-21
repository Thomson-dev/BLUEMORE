import { DESTINATIONS } from "../data";
import { ExternalLink } from "../icons";
import { useInView } from "../hooks/useInView";

export default function Destinations() {
  const { ref, inView } = useInView<HTMLElement>();
  const vis = inView ? " is-visible" : "";

  return (
    <section ref={ref} className="bm-destinations">
      <div className={`bm-dest-header bm-reveal${vis}`}>
        <div className="bm-dest-icon">
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9"/><line x1="12" y1="21" x2="12" y2="23"/>
          </svg>
        </div>
        <div style={{ flex: 1 }}>
          <h2 className="bm-section-title">Explore <strong>Destinations</strong></h2>
          <p className="bm-section-sub" style={{ marginTop: 8 }}>Discover the most beautiful destinations in the Mediterranean.</p>
        </div>
        <button className="bm-btn-outline">Discovery Mediterranean</button>
      </div>
      <div className="bm-dest-grid">
        {DESTINATIONS.map((d, i) => (
          <div
            key={d.name}
            className={`bm-dest-card bm-reveal-scale${vis}`}
            style={{ transitionDelay: inView ? `${i * 0.12}s` : "0s" }}
          >
            <img src={d.img} alt={d.name} />
            <div className="bm-dest-overlay" />
            <div className="bm-dest-info">
              <div>
                <div className="bm-dest-name">{d.name}</div>
                <div className="bm-dest-count">Included <a href="#">{d.count} yachts</a></div>
              </div>
              <div className="bm-dest-arrow"><ExternalLink /></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
