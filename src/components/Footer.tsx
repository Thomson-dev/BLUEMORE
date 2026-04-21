import { SOCIAL_ICONS } from "../icons";
import { useInView } from "../hooks/useInView";

export default function Footer() {
  const { ref, inView } = useInView<HTMLElement>();
  const vis = inView ? " is-visible" : "";

  return (
    <footer ref={ref} className="bm-footer">
      <div className={`bm-footer-brand-row bm-reveal${vis}`}>
        <div className="bm-footer-brand-info">
          <div className="bm-footer-brand-icon">
            <svg width="34" height="34" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="3.51" y1="8" x2="20.49" y2="8"/>
              <line x1="3.51" y1="16" x2="20.49" y2="16"/>
            </svg>
          </div>
          <div>
            <div className="bm-footer-brand-label">The Art of Luxury Yacht Charter</div>
            <div className="bm-footer-brand-sub">BLUE M<em>O</em>RE · YACHTING</div>
          </div>
        </div>
        <div className="bm-footer-socials">
          {SOCIAL_ICONS.map(s => (
            <a key={s.label} className="bm-footer-social" href="#" aria-label={s.label}>{s.svg}</a>
          ))}
        </div>
      </div>

      <div className={`bm-footer-top bm-reveal bm-reveal-d2${vis}`}>
        <div className="bm-footer-col">
          <h4>Premium Charters</h4>
          <ul>
            {["Turkey Luxury Yacht Charter", "Croatia Gulet Charter", "Bodrum Gulet Charter", "Greece Motor Yacht Charter", "Göçek Yacht Charter"].map(l => <li key={l}><a href="#">{l}</a></li>)}
          </ul>
        </div>
        <div className="bm-footer-col">
          <h4>Popular Locations</h4>
          <ul>
            {["Marmaris Yacht Charter", "Fethiye Yacht Charter", "Mykonos Yacht Charter", "Dubrovnik Yacht Charter", "Athens Yacht Charter"].map(l => <li key={l}><a href="#">{l}</a></li>)}
          </ul>
        </div>
        <div className="bm-footer-col">
          <h4>Planning & Company</h4>
          <ul>
            {["About Us", "Our Services", "Itineraries", "Blog", "Reviews"].map(l => <li key={l}><a href="#">{l}</a></li>)}
          </ul>
        </div>
        <div className="bm-footer-support">
          <div className="bm-footer-support-header">
            <div className="bm-footer-support-icon">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/>
                <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>
                <line x1="7.76" y1="16.24" x2="4.93" y2="19.07"/><line x1="19.07" y1="4.93" x2="16.24" y2="7.76"/>
              </svg>
            </div>
            <div>
              <div className="bm-footer-support-title">Help & Support</div>
              <div className="bm-footer-support-sub">Talk to our experts and browse through more yachts</div>
            </div>
          </div>
          <div className="bm-footer-contact">
            <div className="bm-footer-contact-item">
              <div className="bm-footer-contact-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.63A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <div>
                <span className="bm-footer-contact-label">Call Customer Service</span>
                <div className="bm-footer-contact-val">+905376084364</div>
              </div>
            </div>
            <div className="bm-footer-contact-item">
              <div className="bm-footer-contact-icon" style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.06)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
                </svg>
              </div>
              <div>
                <span className="bm-footer-contact-label">Whatsapp Customer Service</span>
                <div className="bm-footer-contact-val" style={{ color: "var(--accent)", cursor: "pointer" }}>Click and start</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bm-footer-bottom">
        <div className="bm-footer-copy">Copyright © Bluemore. All rights reserved.</div>
        <div className="bm-footer-badges">
          {["🇹🇷 Turkey", "Certified Agent", "Google ★★★★★", "Trustpilot", "TripAdvisor"].map(b => (
            <div key={b} className="bm-footer-badge">{b}</div>
          ))}
        </div>
        <div className="bm-footer-legal">
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(l => <a key={l} href="#">{l}</a>)}
        </div>
      </div>
    </footer>
  );
}
