import { HERO_IMG } from "../data";
import { SearchIcon, ChevronDown } from "../icons";

export default function Hero() {
  return (
    <section className="bm-hero">
      <img src={HERO_IMG} alt="Luxury yacht" className="bm-hero-img" />
      <video
        autoPlay loop muted playsInline preload="metadata" poster={HERO_IMG}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "70% center", zIndex: 0 }}
        aria-hidden="true"
      >
        <source src="https://cdn.bluemoreyachting.com/media/16027/videos/home-video-hd.webm" type="video/webm" />
        <source src="https://cdn.bluemoreyachting.com/media/16027/videos/home-video-hd.mp4" type="video/mp4" />
      </video>
      <div className="bm-hero-bg" />
      <div className="bm-hero-content">
        <div className="bm-hero-logo-icon">
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9"/><line x1="12" y1="21" x2="12" y2="23"/>
          </svg>
        </div>
        <h1 className="bm-hero-title">Your Private Horizon <strong>Luxury</strong></h1>
        <p className="bm-hero-sub">
          Exclusive yacht charters in Turkey, Greece, and <span>Croatia</span>
        </p>
        <p className="bm-hero-desc">
          Escape the noise of the world. Our dedicated concierge team handles everything from your arrival to your final toast, ensuring a journey of uninterrupted calm.
        </p>
      </div>
      <div className="bm-search-bar">
        <p className="bm-search-label"><span>Find now</span> your Luxury Yacht</p>
        <div className="bm-search-inner">
          <div className="bm-search-type">
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
              <path d="M3 17h18M5 17L3 9h18l-2 8M8 9V5h8v4"/>
            </svg>
            <div>
              <span className="bm-search-type-label">Yacht type</span>
              <span className="bm-search-type-val">Select Type</span>
            </div>
            <div style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}><ChevronDown /></div>
          </div>
          {([["Country", ["Select Country", "Turkey", "Greece", "Croatia"]], ["Budget", ["Select budget", "€10k–€30k", "€30k–€60k", "€60k+"]], ["Person", ["Select Person", "2–4", "4–8", "8–12", "12+"]]] as [string, string[]][]).map(([label, opts]) => (
            <div className="bm-search-field" key={label}>
              <label>{label}</label>
              <select defaultValue={opts[0]}>
                {opts.map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
          ))}
          <div className="bm-search-actions">
            <button className="bm-search-go"><SearchIcon /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
