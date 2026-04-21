import { SERVICES } from "../data";
import { Compass, ExternalLink } from "../icons";
import { useInView } from "../hooks/useInView";

export default function ItinerariesServices() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const vis = inView ? " is-visible" : "";

  return (
    <div ref={ref} className="bm-split">
      <div className={`bm-itin-card bm-reveal-left${vis}`}>
        <img src="https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=900&q=80" alt="Itineraries" />
        <div className="bm-itin-overlay" />
        <div className="bm-itin-content">
          <div className="bm-itin-tag">
            <Compass /> Itineraries
          </div>
          <div>
            <h2 className="bm-itin-title"><span>Your Journey,</span> Your Map</h2>
            <p className="bm-itin-desc">Discover the world's most breathtaking coastlines with itineraries designed exclusively for you. From hidden coves to vibrant cultures, we turn the ocean into your personal playground.</p>
            <span className="bm-itin-link">See more &nbsp;<ExternalLink /></span>
          </div>
        </div>
      </div>
      <div className={`bm-services bm-reveal-right${vis}`}>
        <div className="bm-services-header">
          <span className="bm-services-title">Our Services</span>
          <div className="bm-services-nav">
            <button>←</button>
            <button>→</button>
          </div>
        </div>
        <div className="bm-services-grid">
          {SERVICES.map((s, i) => (
            <div
              key={s.name}
              className={`bm-service-card bm-reveal-scale${vis}`}
              style={{ transitionDelay: inView ? `${0.2 + i * 0.1}s` : "0s" }}
            >
              <img src={s.img} alt={s.name} />
              <div className="bm-service-card-overlay" />
              <div className="bm-service-card-info">
                <div className="bm-service-card-icon">{s.icon}</div>
                <div className="bm-service-name">{s.name}<span>{s.sub}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
