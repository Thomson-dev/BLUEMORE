// Global Styles for Bluemore Yacht Charter
export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

  :root {
    --bg: #070c26;
    --bg2: #0b1133;
    --bg3: #0f1640;
    --card: #0d1335;
    --border: rgba(255,255,255,0.08);
    --white: #ffffff;
    --muted: rgba(255,255,255,0.55);
    --accent: #5bc4be;
    --tan: #8b7355;
    --font-display: 'Cormorant Garamond', serif;
    --font-body: 'DM Sans', sans-serif;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: var(--bg);
    color: var(--white);
    font-family: var(--font-body);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  .bm-btn-primary {
    background: var(--white);
    color: var(--bg);
    border: none;
    padding: 10px 22px;
    font-family: var(--font-body);
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    border-radius: 4px;
    transition: background 0.2s;
    white-space: nowrap;
  }
  .bm-btn-primary:hover { background: #e8e8e8; }

  .bm-btn-outline {
    background: transparent;
    color: var(--white);
    border: 1px solid var(--white);
    padding: 10px 22px;
    font-family: var(--font-body);
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    border-radius: 4px;
    transition: background 0.2s;
    white-space: nowrap;
  }
  .bm-btn-outline:hover { background: rgba(255,255,255,0.08); }

  /* NAV */
  .bm-nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    height: 68px;
    background: rgba(7,12,38,0.92);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
  }
  .bm-nav-logo { display: flex; align-items: center; gap: 10px; }
  .bm-nav-logo-text {
    font-family: var(--font-display);
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 1px;
    color: var(--white);
    line-height: 1;
  }
  .bm-nav-logo-sub { font-size: 9px; letter-spacing: 4px; color: var(--muted); font-family: var(--font-body); text-transform: uppercase; }
  .bm-nav-links { display: flex; gap: 36px; align-items: center; }
  .bm-nav-links a {
    color: var(--white);
    text-decoration: none;
    font-size: 14px;
    opacity: 0.9;
    transition: opacity 0.2s;
  }
  .bm-nav-links a:hover { opacity: 1; }
  .bm-nav-right { display: flex; align-items: center; gap: 24px; }
  .bm-nav-toggle { display: none; width: 36px; height: 36px; background: none; border: none; color: var(--white); cursor: pointer; font-size: 20px; }
  .bm-nav-search {
    width: 36px; height: 36px; border-radius: 50%;
    border: 1px solid var(--border);
    background: transparent;
    color: var(--white);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
  }
  .bm-nav-fav {
    display: flex; align-items: center; gap: 8px;
    color: var(--white); font-size: 14px; cursor: pointer;
    background: none; border: none;
    min-height: 40px;
  }
  .bm-nav-mobile-menu {
    position: fixed;
    left: 0;
    right: 0;
    background: rgba(7,12,38,0.98);
    z-index: 99;
    border-bottom: 1px solid var(--border);
    overflow-y: auto;
  }
  .bm-nav-mobile-menu-items {
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 8px;
  }
  .bm-nav-mobile-menu-item {
    padding: 16px;
    color: var(--white);
    text-decoration: none;
    opacity: 0.9;
    transition: opacity 0.2s;
    font-size: 14px;
    border-bottom: 1px solid rgba(255,255,255,0.08);
  }
  .bm-nav-mobile-menu-item:hover {
    opacity: 1;
  }

  /* HERO */
  .bm-hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;
    padding-top: 68px;
  }
  .bm-hero-bg {
    position: absolute; inset: 0;
    background: linear-gradient(
      180deg,
      rgba(7,12,38,0.3) 0%,
      rgba(7,12,38,0.15) 40%,
      rgba(7,12,38,0.6) 75%,
      rgba(7,12,38,1) 100%
    );
    z-index: 2;
    pointer-events: none;
  }
  .bm-hero-img {
    position: absolute; inset: 0;
    width: 100%; height: 100%;
    object-fit: cover;
    z-index: 0;
  }
  .bm-hero-content {
    position: relative; z-index: 3;
    padding: 0 20px 60px;
    max-width: 900px;
  }
  .bm-hero-title {
    font-family: var(--font-display);
    font-size: clamp(40px, 6vw, 80px);
    font-weight: 300;
    line-height: 1.1;
    margin-bottom: 20px;
    letter-spacing: -0.5px;
  }
  .bm-hero-title strong { font-weight: 600; font-style: italic; }
  .bm-hero-sub {
    font-size: clamp(16px, 2vw, 22px);
    color: rgba(255,255,255,0.85);
    margin-bottom: 12px;
    font-weight: 300;
  }
  .bm-hero-sub span { color: var(--accent); }
  .bm-hero-desc {
    font-size: 14px;
    color: var(--muted);
    max-width: 600px;
    margin: 0 auto 40px;
    line-height: 1.7;
  }
  .bm-hero-logo-icon {
    width: 48px; height: 48px;
    border: 1.5px solid rgba(255,255,255,0.4);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 40px;
  }

  /* SEARCH BAR */
  .bm-search-bar {
    position: relative; z-index: 3;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding: 0 20px;
  }
  .bm-search-label {
    font-size: 13px;
    color: var(--muted);
    margin-bottom: 12px;
    text-align: left;
  }
  .bm-search-label span { color: var(--white); }
  .bm-search-inner {
    background: rgba(255,255,255,0.97);
    border-radius: 8px;
    display: flex;
    align-items: stretch;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0,0,0,0.4);
  }
  .bm-search-type {
    background: var(--bg);
    color: var(--white);
    padding: 18px 24px;
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 180px;
    cursor: pointer;
    border-right: 1px solid rgba(255,255,255,0.1);
  }
  .bm-search-type-label { font-size: 11px; color: var(--muted); display: block; margin-bottom: 2px; }
  .bm-search-type-val { font-size: 15px; font-weight: 500; }
  .bm-search-field {
    flex: 1;
    padding: 14px 20px;
    border-right: 1px solid #e8e8e8;
    cursor: pointer;
    display: flex; flex-direction: column; justify-content: center;
  }
  .bm-search-field label { font-size: 11px; color: #888; margin-bottom: 2px; display: block; }
  .bm-search-field select {
    border: none; background: transparent; font-size: 14px;
    color: #333; font-family: var(--font-body); cursor: pointer;
    outline: none; width: 100%;
  }
  .bm-search-actions {
    display: flex; align-items: center; gap: 12px; padding: 0 16px;
  }
  .bm-search-adv {
    display: flex; align-items: center; gap: 6px;
    font-size: 13px; color: #555; cursor: pointer;
    white-space: nowrap;
    background: none; border: none; font-family: var(--font-body);
  }
  .bm-search-go {
    width: 40px; height: 40px; border-radius: 50%;
    background: var(--bg); border: none;
    color: var(--white); cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    font-size: 16px; flex-shrink: 0;
  }

  /* SECTION TITLES */
  .bm-section { padding: 80px 60px; }
  .bm-section-header {
    display: flex; justify-content: space-between; align-items: flex-start;
    margin-bottom: 48px;
  }
  .bm-section-title {
    font-family: var(--font-display);
    font-size: clamp(28px, 3.5vw, 48px);
    font-weight: 300;
  }
  .bm-section-title strong { font-weight: 700; }
  .bm-section-sub { font-size: 14px; color: var(--muted); max-width: 380px; line-height: 1.6; margin-top: 12px; }
  .bm-section-link {
    display: flex; align-items: center; gap: 8px;
    color: var(--white); text-decoration: none; font-size: 14px;
    border: 1px solid var(--border); padding: 10px 20px; border-radius: 4px;
    transition: background 0.2s; white-space: nowrap;
    background: none; cursor: pointer;
  }
  .bm-section-link:hover { background: rgba(255,255,255,0.06); }

  /* YACHT CAROUSEL */
  .bm-carousel-wrap { position: relative; overflow: hidden; }
  .bm-carousel {
    display: flex;
    gap: 0;
    transition: transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94);
  }
  .bm-yacht-card {
    flex: 0 0 55%;
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s;
  }
  .bm-yacht-card.side { flex: 0 0 22%; opacity: 0.55; transform: scale(0.97); }
  .bm-yacht-card img {
    width: 100%; aspect-ratio: 16/10;
    object-fit: cover; display: block;
  }
  .bm-yacht-card-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(0deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 55%);
  }
  .bm-yacht-card-info {
    position: absolute; bottom: 0; left: 0; right: 0;
    padding: 24px;
    display: flex; justify-content: space-between; align-items: flex-end;
  }
  .bm-yacht-card-loc {
    font-size: 12px; color: var(--muted); margin-bottom: 4px;
    display: flex; align-items: center; gap: 6px;
  }
  .bm-yacht-name {
    font-family: var(--font-display);
    font-size: 28px; font-weight: 600; line-height: 1.1;
  }
  .bm-yacht-name span { font-weight: 300; }
  .bm-yacht-meta { font-size: 12px; color: var(--muted); margin-top: 4px; }
  .bm-yacht-price { text-align: right; }
  .bm-yacht-price-from { font-size: 12px; color: var(--muted); }
  .bm-yacht-price-val { font-size: 32px; font-weight: 700; line-height: 1; }
  .bm-yacht-price-unit { font-size: 12px; color: var(--muted); }
  .bm-yacht-fav {
    position: absolute; top: 20px; left: 20px;
    background: rgba(255,255,255,0.9); border-radius: 8px;
    padding: 8px 14px; font-size: 13px; color: var(--bg);
    display: flex; align-items: center; gap: 8px;
    cursor: pointer; border: none; font-family: var(--font-body);
  }
  .bm-carousel-btn {
    position: absolute; top: 50%; transform: translateY(-50%);
    width: 48px; height: 48px; border-radius: 50%;
    background: rgba(255,255,255,0.95); border: none;
    color: var(--bg); font-size: 18px; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    z-index: 10; box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    transition: background 0.2s;
  }
  .bm-carousel-btn:hover { background: var(--white); }
  .bm-carousel-btn.prev { left: 20px; }
  .bm-carousel-btn.next { right: 20px; }

  /* DESTINATIONS */
  .bm-destinations { background: var(--bg); padding: 80px 60px; }
  .bm-dest-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-top: 0; }
  .bm-dest-card {
    position: relative; border-radius: 12px; overflow: hidden; cursor: pointer;
    aspect-ratio: 3/2;
  }
  .bm-dest-card img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.4s; }
  .bm-dest-card:hover img { transform: scale(1.04); }
  .bm-dest-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(0deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 60%);
  }
  .bm-dest-info {
    position: absolute; bottom: 0; left: 0; right: 0; padding: 20px;
    display: flex; justify-content: space-between; align-items: flex-end;
  }
  .bm-dest-name { font-family: var(--font-display); font-size: 28px; font-weight: 600; }
  .bm-dest-count { font-size: 13px; color: rgba(255,255,255,0.8); margin-top: 4px; }
  .bm-dest-count a { color: var(--accent); text-decoration: none; font-weight: 500; }
  .bm-dest-arrow {
    width: 36px; height: 36px; border: 1px solid rgba(255,255,255,0.4);
    border-radius: 4px; display: flex; align-items: center; justify-content: center;
    color: var(--white); font-size: 14px; cursor: pointer;
  }
  .bm-dest-header { display: flex; align-items: center; gap: 60px; margin-bottom: 40px; }
  .bm-dest-header-left { display: flex; align-items: flex-start; gap: 16px; }
  .bm-dest-icon { width: 48px; height: 48px; border: 1.5px solid var(--border); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 4px; }

  /* ITINERARIES + SERVICES */
  .bm-split { display: grid; grid-template-columns: 1fr 1fr; min-height: 480px; }
  .bm-itin-card {
    position: relative; overflow: hidden; cursor: pointer;
  }
  .bm-itin-card img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .bm-itin-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%);
  }
  .bm-itin-content { position: absolute; inset: 0; padding: 40px; display: flex; flex-direction: column; }
  .bm-itin-tag {
    display: flex; align-items: center; gap: 10px;
    color: var(--white); font-size: 12px; text-transform: uppercase; letter-spacing: 2px;
    margin-bottom: auto;
  }
  .bm-itin-title { font-family: var(--font-display); font-size: 36px; font-weight: 600; margin-bottom: 16px; line-height: 1.1; }
  .bm-itin-title span { font-weight: 300; font-style: italic; }
  .bm-itin-desc { font-size: 14px; color: rgba(255,255,255,0.75); line-height: 1.7; margin-bottom: 24px; max-width: 380px; }
  .bm-itin-link { display: flex; align-items: center; gap: 8px; color: var(--white); font-size: 14px; text-decoration: underline; cursor: pointer; width: fit-content; }

  .bm-services { background: var(--bg2); padding: 40px; display: flex; flex-direction: column; justify-content: space-between; }
  .bm-services-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px; }
  .bm-services-title { font-size: 22px; font-weight: 400; }
  .bm-services-nav { display: flex; gap: 10px; }
  .bm-services-nav button {
    width: 40px; height: 40px; border-radius: 50%;
    background: rgba(255,255,255,0.1); border: none;
    color: var(--white); cursor: pointer; font-size: 16px;
    display: flex; align-items: center; justify-content: center;
    transition: background 0.2s;
  }
  .bm-services-nav button:hover { background: rgba(255,255,255,0.2); }
  .bm-services-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .bm-service-card {
    border-radius: 10px; overflow: hidden; position: relative; cursor: pointer;
    aspect-ratio: 4/3;
  }
  .bm-service-card img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .bm-service-card-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 60%);
  }
  .bm-service-card-info { position: absolute; bottom: 0; left: 0; padding: 16px; }
  .bm-service-card-icon { font-size: 18px; margin-bottom: 6px; opacity: 0.8; }
  .bm-service-name { font-family: var(--font-display); font-size: 20px; font-weight: 700; line-height: 1.1; }
  .bm-service-name span { font-weight: 300; display: block; }

  /* TESTIMONIALS */
  .bm-testimonials { background: #b5a898; padding: 80px 60px; color: var(--bg); }
  .bm-test-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 48px; }
  .bm-test-label { display: flex; align-items: center; gap: 12px; }
  .bm-test-label-icon { width: 40px; height: 40px; border: 1.5px solid rgba(7,12,38,0.3); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 18px; }
  .bm-test-label-text { font-size: 15px; font-weight: 500; }
  .bm-test-nav { display: flex; gap: 10px; }
  .bm-test-nav button {
    width: 40px; height: 40px; border-radius: 50%;
    background: rgba(7,12,38,0.12); border: none;
    color: var(--bg); cursor: pointer; font-size: 16px;
    display: flex; align-items: center; justify-content: center;
  }
  .bm-test-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .bm-test-card {
    background: rgba(255,255,255,0.35); border-radius: 12px; padding: 28px;
    display: flex; flex-direction: column; gap: 16px;
  }
  .bm-test-stars { color: #c9a227; font-size: 16px; letter-spacing: 2px; }
  .bm-test-text { font-size: 14px; line-height: 1.7; color: rgba(7,12,38,0.8); }
  .bm-test-author { font-weight: 600; font-size: 14px; }

  /* FEATURED */
  .bm-featured { background: var(--bg2); padding: 40px 60px; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
  .bm-featured-inner { display: flex; align-items: center; gap: 20px; }
  .bm-featured-badge { width: 48px; height: 48px; border: 1.5px solid var(--border); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0; }
  .bm-featured-title { font-size: 22px; font-weight: 400; }
  .bm-featured-sub { font-size: 13px; color: var(--muted); }
  .bm-featured-logos { display: flex; gap: 32px; align-items: center; margin-left: auto; flex-wrap: wrap; }
  .bm-featured-logo-item { font-size: 12px; color: var(--muted); letter-spacing: 1px; border: 1px solid var(--border); padding: 8px 16px; border-radius: 4px; white-space: nowrap; }

  /* BLOG */
  .bm-blog { background: var(--bg); padding: 80px 60px; }
  .bm-blog-grid { display: grid; grid-template-columns: 2fr 1fr 0.5fr; gap: 20px; margin-top: 40px; }
  .bm-blog-card {
    position: relative; border-radius: 12px; overflow: hidden; cursor: pointer;
    aspect-ratio: 3/2;
  }
  .bm-blog-card img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.4s; }
  .bm-blog-card:hover img { transform: scale(1.04); }
  .bm-blog-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(0deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 60%);
  }
  .bm-blog-info { position: absolute; bottom: 0; left: 0; padding: 24px; }
  .bm-blog-title { font-family: var(--font-display); font-size: 20px; font-weight: 600; margin-bottom: 6px; line-height: 1.2; }
  .bm-blog-date { font-size: 12px; color: var(--muted); }
  .bm-blog-more {
    background: var(--bg3); border-radius: 12px; display: flex;
    flex-direction: column; align-items: center; justify-content: center;
    gap: 8px; cursor: pointer; aspect-ratio: 3/2;
    font-size: 15px; color: var(--white); border: 1px solid var(--border);
  }
  .bm-blog-header { display: flex; justify-content: space-between; align-items: flex-start; }
  .bm-blog-header-right { font-size: 14px; color: var(--muted); max-width: 300px; line-height: 1.6; }

  /* NEWSLETTER */
  .bm-newsletter { background: var(--bg2); padding: 60px; border-top: 1px solid var(--border); }
  .bm-newsletter-inner { display: flex; align-items: center; gap: 40px; }
  .bm-newsletter-icon { font-size: 32px; opacity: 0.7; flex-shrink: 0; }
  .bm-newsletter-text h3 { font-size: 20px; margin-bottom: 4px; font-weight: 400; }
  .bm-newsletter-text p { font-size: 13px; color: var(--muted); }
  .bm-newsletter-form { display: flex; gap: 12px; margin-left: auto; }
  .bm-newsletter-input {
    background: rgba(255,255,255,0.06); border: 1px solid var(--border);
    color: var(--white); padding: 12px 20px; border-radius: 4px;
    font-family: var(--font-body); font-size: 14px; min-width: 280px;
    outline: none;
  }
  .bm-newsletter-input::placeholder { color: var(--muted); }
  .bm-newsletter-input:focus { border-color: rgba(255,255,255,0.25); }

  /* FOOTER */
  .bm-footer { background: var(--bg); padding: 60px; border-top: 1px solid var(--border); }
  .bm-footer-brand-row { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 60px; padding-bottom: 40px; border-bottom: 1px solid var(--border); }
  .bm-footer-brand-info { display: flex; align-items: flex-start; gap: 24px; }
  .bm-footer-brand-icon { width: 68px; height: 68px; border: 1.5px solid var(--border); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--white); flex-shrink: 0; }
  .bm-footer-brand-label { font-family: var(--font-display); font-size: 28px; font-weight: 300; margin-bottom: 8px; line-height: 1.2; }
  .bm-footer-brand-sub { font-size: 11px; letter-spacing: 3px; color: var(--muted); text-transform: uppercase; font-family: var(--font-body); }
  .bm-footer-brand-sub em { font-style: italic; color: var(--white); }
  
  .bm-footer-top { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr 1.2fr; gap: 40px; margin-bottom: 60px; }
  .bm-footer-brand { grid-column: 1 / 2; }
  .bm-footer-brand-title { font-family: var(--font-display); font-size: 18px; font-weight: 400; line-height: 1.3; margin-bottom: 16px; }
  .bm-footer-socials { display: flex; gap: 12px; margin-top: 20px; }
  .bm-footer-social {
    width: 36px; height: 36px; border-radius: 50%;
    border: 1px solid var(--border); display: flex; align-items: center; justify-content: center;
    color: var(--muted); font-size: 14px; cursor: pointer; text-decoration: none;
    transition: border-color 0.2s, color 0.2s;
  }
  .bm-footer-social:hover { border-color: rgba(255,255,255,0.3); color: var(--white); }
  .bm-footer-col h4 { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--white); margin-bottom: 20px; font-weight: 500; }
  .bm-footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 12px; }
  .bm-footer-col ul li a { color: var(--muted); text-decoration: none; font-size: 14px; transition: color 0.2s; }
  .bm-footer-col ul li a:hover { color: var(--white); }
  .bm-footer-support { background: var(--bg3); border-radius: 10px; padding: 24px; }
  .bm-footer-support-title { font-size: 18px; margin-bottom: 6px; }
  .bm-footer-support-sub { font-size: 13px; color: var(--muted); margin-bottom: 20px; line-height: 1.5; }
  .bm-footer-contact { display: flex; flex-direction: column; gap: 12px; }
  .bm-footer-contact-item { display: flex; align-items: center; gap: 12px; padding: 12px; background: rgba(255,255,255,0.04); border-radius: 8px; border: 1px solid var(--border); }
  .bm-footer-contact-icon { font-size: 18px; }
  .bm-footer-contact-label { font-size: 11px; color: var(--muted); }
  .bm-footer-contact-val { font-size: 13px; font-weight: 500; }
  .bm-footer-bottom { border-top: 1px solid var(--border); padding-top: 28px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; }
  .bm-footer-copy { font-size: 13px; color: var(--muted); }
  .bm-footer-legal { display: flex; gap: 24px; }
  .bm-footer-legal a { font-size: 13px; color: var(--muted); text-decoration: underline; cursor: pointer; }
  .bm-footer-badges { display: flex; gap: 12px; align-items: center; }
  .bm-footer-badge { font-size: 11px; color: var(--muted); border: 1px solid var(--border); padding: 6px 12px; border-radius: 4px; }

  /* COOKIE BANNER */
  .bm-cookie {
    position: fixed; bottom: 0; left: 0; right: 0; z-index: 200;
    background: rgba(15,22,64,0.98); backdrop-filter: blur(10px);
    padding: 20px 60px; border-top: 1px solid var(--border);
    display: flex; align-items: center; gap: 20px;
    font-size: 14px; color: rgba(255,255,255,0.75);
  }
  .bm-cookie a { color: var(--white); }
  .bm-cookie-btns { display: flex; gap: 12px; margin-left: auto; flex-shrink: 0; }
  .bm-cookie-decline {
    background: transparent; border: 1px solid var(--border);
    color: var(--white); padding: 10px 20px; border-radius: 4px;
    cursor: pointer; font-family: var(--font-body); font-size: 13px;
  }
  .bm-cookie-accept {
    background: var(--white); border: none;
    color: var(--bg); padding: 10px 20px; border-radius: 4px;
    cursor: pointer; font-family: var(--font-body); font-size: 13px; font-weight: 500;
  }

  @media (max-width: 1024px) {
    .bm-nav { padding: 0 24px; }
    .bm-nav-links { gap: 20px; }
    .bm-nav-links a:nth-child(n+3) { display: none; }
    .bm-nav-right { gap: 16px; }
    .bm-nav-fav { display: none; }
    .bm-section { padding: 60px 40px; }
    .bm-footer-top { grid-template-columns: 1fr 1fr 1fr; gap: 30px; }
    .bm-blog-grid { grid-template-columns: 1.5fr 1fr; gap: 16px; }
    .bm-dest-grid { gap: 16px; }
  }

  @media (max-width: 950px) {
    .bm-nav-links a:nth-child(n+3) { display: none; }
  }

  @media (max-width: 900px) {
    .bm-nav { padding: 0 20px; }
    .bm-nav-logo-text { font-size: 18px; }
    .bm-nav-links { display: none; }
    .bm-nav-toggle { display: flex; min-height: 40px; min-width: 40px; }
    .bm-nav-right { gap: 12px; }
    .bm-nav-mobile-menu { top: 68px; max-height: calc(100vh - 68px); }
    .bm-nav-fav { display: none; }
    .bm-nav-search { display: none; }
    .bm-btn-primary { padding: 8px 16px; font-size: 13px; }
    .bm-hero { padding-top: 68px; }
    .bm-hero-title { font-size: clamp(28px, 5vw, 50px); }
    .bm-hero-sub { font-size: clamp(14px, 1.5vw, 18px); }
    .bm-hero-desc { font-size: 13px; }
    .bm-search-bar { padding: 0 16px; }
    .bm-search-label { font-size: 12px; }
    .bm-search-inner { flex-direction: column; box-shadow: 0 10px 30px rgba(0,0,0,0.3); }
    .bm-search-type { min-width: auto; border-right: none; border-bottom: 1px solid rgba(255,255,255,0.1); padding: 16px 20px; }
    .bm-search-field { border-right: none; border-bottom: 1px solid #e8e8e8; }
    .bm-search-field:last-of-type { border-bottom: none; }
    .bm-search-actions { border-top: 1px solid #e8e8e8; width: 100%; justify-content: flex-end; padding: 12px 16px; }
    .bm-section { padding: 50px 20px; }
    .bm-section-header { flex-direction: column; align-items: flex-start; gap: 20px; }
    .bm-section-title { font-size: clamp(24px, 3vw, 36px); }
    .bm-section-link { width: 100%; }
    .bm-destinations { padding: 50px 20px; }
    .bm-dest-header { flex-direction: column; gap: 20px; align-items: flex-start; }
    .bm-dest-grid { grid-template-columns: 1fr; gap: 12px; }
    .bm-split { grid-template-columns: 1fr; min-height: auto; }
    .bm-itin-card { min-height: 300px; }
    .bm-services { padding: 24px; }
    .bm-services-grid { grid-template-columns: 1fr; gap: 12px; }
    .bm-blog-grid { grid-template-columns: 1fr; gap: 12px; }
    .bm-blog { padding: 50px 20px; }
    .bm-footer-top { grid-template-columns: 1fr; gap: 24px; }
    .bm-footer-brand { grid-column: auto; }
    .bm-newsletter-inner { flex-direction: column; gap: 24px; }
    .bm-newsletter-form { width: 100%; }
    .bm-newsletter-input { flex: 1; min-width: 0; }
    .bm-newsletter { padding: 40px 20px; }
    .bm-featured { padding: 24px 20px; }
    .bm-featured-inner { flex-direction: column; gap: 12px; }
    .bm-featured-logos { margin-left: 0; flex-direction: column; }
    .bm-cookie { padding: 16px 20px; flex-direction: column; gap: 12px; }
    .bm-cookie-btns { width: 100%; flex-direction: column; }
    .bm-test-cards { grid-template-columns: 1fr; }
    .bm-testimonials { padding: 50px 20px; }
    .bm-footer { padding: 40px 20px; }
    .bm-test-header { flex-direction: column; gap: 16px; align-items: flex-start; }
  }

  @media (max-width: 640px) {
    .bm-nav { height: 60px; padding: 0 16px; }
    .bm-nav-logo { gap: 8px; }
    .bm-nav-logo-text { font-size: 16px; }
    .bm-nav-logo-sub { font-size: 8px; letter-spacing: 2px; }
    .bm-nav-right { gap: 10px; }
    .bm-nav-toggle { width: 40px; height: 40px; font-size: 20px; }
    .bm-nav-search { width: 40px; height: 40px; display: none; }
    .bm-nav-fav { font-size: 12px; gap: 6px; display: none; }
    .bm-btn-primary { display: none; }
    .bm-nav-mobile-menu { top: 60px; max-height: calc(100vh - 60px); }
    .bm-btn-primary-mobile { display: block; padding: 8px 14px; font-size: 12px; }
    .bm-hero-content { padding: 0 16px 40px; }
    .bm-hero-title { font-size: clamp(24px, 4vw, 40px); margin-bottom: 12px; }
    .bm-hero-sub { font-size: clamp(12px, 1.2vw, 14px); margin-bottom: 8px; }
    .bm-hero-desc { font-size: 12px; margin-bottom: 24px; }
    .bm-hero-logo-icon { width: 40px; height: 40px; margin-bottom: 24px; }
    .bm-search-bar { padding: 0 12px; margin: 0 auto; }
    .bm-search-label { font-size: 11px; margin-bottom: 8px; }
    .bm-search-type { padding: 14px 16px; }
    .bm-search-type svg { width: 24px; height: 24px; }
    .bm-search-field { padding: 12px 16px; }
    .bm-search-field label { font-size: 10px; }
    .bm-search-field select { font-size: 13px; }
    .bm-search-adv { font-size: 12px; }
    .bm-search-go { width: 36px; height: 36px; }
    .bm-section { padding: 40px 16px; }
    .bm-section-title { font-size: clamp(20px, 2.5vw, 28px); }
    .bm-section-sub { font-size: 13px; }
    .bm-yacht-name { font-size: clamp(20px, 3vw, 24px); }
    .bm-yacht-price-val { font-size: 24px; }
    .bm-yacht-fav { padding: 6px 12px; font-size: 12px; }
    .bm-carousel-btn { width: 40px; height: 40px; font-size: 16px; }
    .bm-dest-name { font-size: clamp(20px, 3vw, 24px); }
    .bm-itin-title { font-size: 24px; }
    .bm-itin-tag { font-size: 10px; }
    .bm-newsletter-input { min-width: 0; }
    .bm-btn-primary { padding: 8px 14px; font-size: 12px; }
    .bm-btn-outline { padding: 8px 14px; font-size: 12px; }
    .bm-footer-socials { gap: 8px; }
    .bm-footer-social { width: 32px; height: 32px; font-size: 12px; }
    .bm-footer-brand-row { flex-direction: column; align-items: flex-start; gap: 24px; padding-bottom: 32px; margin-bottom: 40px; }
    .bm-footer-brand-info { gap: 16px; }
    .bm-footer-brand-icon { width: 56px; height: 56px; }
    .bm-footer-brand-label { font-size: 22px; }
    .bm-footer-socials { gap: 8px; justify-content: flex-start; margin-top: 8px; }
    .bm-footer-col h4 { font-size: 10px; }
    .bm-footer-col ul { gap: 8px; }
    .bm-footer-col ul li a { font-size: 13px; }
    .bm-test-label { flex-direction: column; align-items: flex-start; gap: 8px; }
    .bm-test-label-icon { width: 36px; height: 36px; }
    .bm-test-label-text { font-size: 13px; }
  }

  @media (max-width: 480px) {
    .bm-nav { height: 56px; padding: 0 12px; }
    .bm-nav-logo { gap: 6px; }
    .bm-nav-logo-text { font-size: 14px; }
    .bm-nav-logo-sub { display: none; }
    .bm-nav-toggle { width: 40px; height: 40px; }
    .bm-nav-search { width: 36px; height: 36px; display: none; }
    .bm-nav-fav { display: none; }
    .bm-nav-right { gap: 8px; }
    .bm-nav-mobile-menu { top: 56px; max-height: calc(100vh - 56px); }
    .bm-btn-primary { display: none; }
    .bm-section-title { font-size: clamp(18px, 2.2vw, 24px); }
    .bm-hero-title { font-size: clamp(20px, 3.5vw, 32px); }
    .bm-destinations { padding: 32px 12px; }
    .bm-newsletter { padding: 32px 12px; }
    .bm-footer { padding: 32px 12px; }
    .bm-footer-brand-row { flex-direction: column; align-items: flex-start; gap: 20px; padding-bottom: 24px; margin-bottom: 32px; }
    .bm-footer-brand-label { font-size: 18px; }
    .bm-footer-brand-icon { width: 48px; height: 48px; }
    .bm-footer-socials { gap: 8px; }
    .bm-footer-brand-title { font-size: 14px; }
    .bm-footer-contact-item { padding: 8px; }
    .bm-footer-contact-label { font-size: 10px; }
    .bm-footer-contact-val { font-size: 12px; }
    .bm-blog-title { font-size: 16px; }
    .bm-itin-title { font-size: 20px; }
  }

  @media (max-width: 390px) {
    .bm-nav-fav, .bm-nav-search { display: none !important; }
    .bm-nav-logo-text { font-size: 13px; }
    .bm-nav-right { gap: 6px; }
    .bm-footer-brand-row { flex-direction: column; }
    .bm-footer-brand-icon { width: 44px; height: 44px; }
    .bm-footer-brand-label { font-size: 16px; }
  }
`;

export default globalStyles;
