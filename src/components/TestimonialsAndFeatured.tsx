import { useState } from "react";
import { TESTIMONIALS } from "../data";
import { ArrowRight } from "../icons";
import { useInView } from "../hooks/useInView";

const MEDIA = ["yahoo! finance", "BUSINESS INSIDER", "msn", "AP News", "Forbes Travel", "Bloomberg"];

export default function TestimonialsAndFeatured() {
  const [active, setActive] = useState(0);
  const total = TESTIMONIALS.length;
  const t = TESTIMONIALS[active];
  const { ref, inView } = useInView<HTMLDivElement>();
  const vis = inView ? " is-visible" : "";

  return (
    <div ref={ref} className="bm-tf-wrap">
      {/* LEFT: testimonial slider */}
      <div className={`bm-tf-left bm-reveal-left${vis}`}>
        <div className="bm-tf-quote">"</div>
        <div className="bm-tf-title">{t.title}</div>
        <div className="bm-tf-stars">{"★".repeat(t.stars)}</div>
        <p className="bm-tf-text">{t.text}</p>
        <button className="bm-tf-readmore">Read more</button>
        <div className="bm-tf-author">— {t.author}</div>
        <div className="bm-tf-bottom">
          <div className="bm-tf-wordmark">Blue M<em>o</em>re · Yachting</div>
          <div className="bm-tf-nav">
            <button className="bm-tf-nav-btn" onClick={() => setActive((active - 1 + total) % total)} aria-label="Previous">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button className="bm-tf-nav-btn" onClick={() => setActive((active + 1) % total)} aria-label="Next">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT: as featured in */}
      <div className={`bm-tf-right bm-reveal-right${vis}`} style={{ transitionDelay: inView ? "0.15s" : "0s" }}>
        <svg className="bm-tf-topo" viewBox="0 0 400 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <path d="M-60 180 Q80 80 210 220 Q340 360 480 270" stroke="white" strokeWidth="1" fill="none" opacity="0.35"/>
          <path d="M-60 230 Q80 130 210 270 Q340 410 480 320" stroke="white" strokeWidth="1" fill="none" opacity="0.3"/>
          <path d="M-60 280 Q80 180 210 320 Q340 460 480 370" stroke="white" strokeWidth="1" fill="none" opacity="0.25"/>
          <path d="M-60 330 Q80 230 210 370 Q340 510 480 420" stroke="white" strokeWidth="1" fill="none" opacity="0.2"/>
          <path d="M-60 380 Q80 280 210 420 Q340 560 480 470" stroke="white" strokeWidth="1" fill="none" opacity="0.15"/>
          <path d="M40 60 Q160 -10 310 110 Q430 200 510 140" stroke="white" strokeWidth="1" fill="none" opacity="0.28"/>
          <path d="M40 110 Q160 40 310 160 Q430 250 510 190" stroke="white" strokeWidth="1" fill="none" opacity="0.22"/>
          <path d="M-60 430 Q80 330 210 470 Q340 600 480 520" stroke="white" strokeWidth="1" fill="none" opacity="0.12"/>
        </svg>
        <div className="bm-tf-badge">✦</div>
        <div className="bm-tf-feat-label">As Featured In</div>
        <div className="bm-tf-feat-title">
          Trusted by the World's <strong>Top Publications</strong>
        </div>
        <div className="bm-tf-media-grid">
          {MEDIA.map((m, i) => (
            <div
              key={m}
              className={`bm-tf-media-logo bm-reveal-scale${vis}`}
              style={{ transitionDelay: inView ? `${0.3 + i * 0.07}s` : "0s" }}
            >{m}</div>
          ))}
        </div>
        <button className="bm-tf-press-link">
          Read Press Articles &nbsp;<ArrowRight />
        </button>
        <div className="bm-tf-right-bottom">
          <div className="bm-tf-right-wordmark">Blue M<em>o</em>re · Yachting</div>
        </div>
      </div>
    </div>
  );
}
