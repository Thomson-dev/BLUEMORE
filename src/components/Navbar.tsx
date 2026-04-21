import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SearchIcon } from "../icons";

const NAV_LINKS = [
  { label: "Yacht Charter", to: "/" },
  { label: "Destinations",  to: "/destinations" },
  { label: "Contact",       to: "/" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`bm-nav${scrolled ? " scrolled" : ""}`}>
        <Link to="/" className="bm-nav-logo" style={{ textDecoration: "none" }}>
          <div style={{ width: 44, height: 44, border: "1.5px solid rgba(255,255,255,0.25)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9"/><line x1="12" y1="21" x2="12" y2="23"/>
            </svg>
          </div>
          <div>
            <div className="bm-nav-logo-text">BLUE M<span style={{ fontStyle: "italic" }}>O</span>RE</div>
            <div className="bm-nav-logo-sub">YACHTING</div>
          </div>
        </Link>

        <div className="bm-nav-links">
          {NAV_LINKS.map(l => (
            <Link key={l.label} to={l.to}>{l.label}</Link>
          ))}
        </div>

        <div className="bm-nav-right">
          <div className="bm-nav-search"><SearchIcon /></div>
          <button className="bm-nav-fav">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
            Favorites
          </button>
          <button className="bm-btn-primary">Start Planning</button>
          <button className="bm-nav-toggle" onClick={() => setMobileOpen(!mobileOpen)}>☰</button>
        </div>
      </nav>

      {mobileOpen && (
        <nav style={{ position: "fixed", top: 68, left: 0, right: 0, background: "rgba(7,12,38,0.98)", zIndex: 99, borderBottom: "1px solid var(--border)", maxHeight: "calc(100vh - 68px)", overflowY: "auto" }}>
          <div style={{ display: "flex", flexDirection: "column", padding: "16px", gap: "8px" }}>
            {NAV_LINKS.map(l => (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setMobileOpen(false)}
                style={{ padding: "12px 16px", color: "var(--white)", textDecoration: "none", opacity: 0.9, fontSize: "14px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </>
  );
}
