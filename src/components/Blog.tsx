import { BLOGS } from "../data";
import { ExternalLink } from "../icons";
import { useInView } from "../hooks/useInView";

export default function Blog() {
  const { ref, inView } = useInView<HTMLElement>();
  const vis = inView ? " is-visible" : "";

  return (
    <section ref={ref} className="bm-blog">
      <div className={`bm-blog-header bm-reveal${vis}`}>
        <div>
          <h2 className="bm-section-title">
            Latest from <span style={{ color: "var(--muted)", fontWeight: 300 }}>Blog</span>
          </h2>
        </div>
        <div className="bm-blog-header-right">
          Stay updated with the latest news and tips from the world of yachting.
        </div>
      </div>
      <div className="bm-blog-grid">
        {BLOGS.map((b, i) => (
          <div
            key={i}
            className={`bm-blog-card bm-reveal-scale${vis}`}
            style={{ transitionDelay: inView ? `${0.1 + i * 0.12}s` : "0s" }}
          >
            <img src={b.img} alt={b.title} />
            <div className="bm-blog-overlay" />
            <div className="bm-blog-info">
              <div className="bm-blog-title">{b.title}</div>
              <div className="bm-blog-date">{b.date}</div>
            </div>
          </div>
        ))}
        <div className={`bm-blog-more bm-reveal-scale${vis}`} style={{ transitionDelay: inView ? "0.34s" : "0s" }}>
          <span>More</span>
          <div className="bm-blog-more-arrow"><ExternalLink /></div>
        </div>
      </div>
    </section>
  );
}
