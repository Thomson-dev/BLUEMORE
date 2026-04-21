import { useInView } from "../hooks/useInView";

export default function Newsletter() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section ref={ref} className="bm-newsletter">
      <div className={`bm-newsletter-inner bm-reveal${inView ? " is-visible" : ""}`}>
        <div className="bm-newsletter-icon">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="M2 7l10 7 10-7"/>
          </svg>
        </div>
        <div className="bm-newsletter-text">
          <h3>Stay in the know</h3>
          <p>Sign up to our newsletter to find out about all things yachting, including new Listing, Global events and the latest News in the Industry.</p>
        </div>
        <div className="bm-newsletter-form">
          <input className="bm-newsletter-input" placeholder="Enter your e-mail address" type="email" />
          <button className="bm-btn-primary">Send now</button>
        </div>
      </div>
    </section>
  );
}
