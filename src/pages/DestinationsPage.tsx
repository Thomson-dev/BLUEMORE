import { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { DestinationDetail } from "../types";

const DEST_DATA: Record<string, DestinationDetail> = {
  Croatia: {
    flag: "🇭🇷",
    count: 92,
    bgImg: "",
    description:
      "If you are looking for sunshine sailing in the East Mediterranean, then a yacht charter in Croatia could be for you, whether you are looking to charter a sailing yacht or a motor yacht. Croatia boasts over 1,200 islands along its stunning Dalmatian coast, offering pristine anchorages, medieval towns, and exceptional cuisine. From the historic walls of Dubrovnik to the party atmosphere of Hvar, Croatia delivers an unparalleled Mediterranean experience.",
    subs: [
      { name: "Dubrovnik", img: "https://images.unsplash.com/photo-1596463059283-da257325bab8?w=600&q=80", popular: true },
      { name: "Hvar",      img: "https://images.unsplash.com/photo-1596463059283-da257325bab8?w=600&q=80" },
      { name: "Korčula",   img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80" },
      { name: "Mljet",     img: "https://images.unsplash.com/photo-1596463059283-da257325bab8?w=600&q=80" },
      { name: "Split",     img: "https://images.unsplash.com/photo-1601000938259-8e13f0f8c918?w=600&q=80" },
    ],
  },
  Greece: {
    flag: "🇬🇷",
    count: 62,
    bgImg: "",
    description:
      "Greece is the ultimate sailing paradise with over 6,000 islands scattered across the Aegean and Ionian Seas. A yacht charter in Greece offers the perfect blend of ancient history, crystal-clear waters, and legendary Greek hospitality. Whether you choose the Cyclades with their iconic white-washed villages or the lush green Ionian islands, Greece promises an extraordinary yachting adventure you will never forget.",
    subs: [
      { name: "Athens",    img: "https://images.unsplash.com/photo-1596463059283-da257325bab8?w=600&q=80", popular: true },
      { name: "Mykonos",   img: "https://images.unsplash.com/photo-1527490087278-9c75be0b8052?w=600&q=80" },
      { name: "Santorini", img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80" },
      { name: "Rhodes",    img: "https://images.unsplash.com/photo-1484910292437-025e5d13ce87?w=600&q=80" },
      { name: "Corfu",     img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&q=80" },
      { name: "Kos",       img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80" },
    ],
  },
  Turkey: {
    flag: "🇹🇷",
    count: 88,
    bgImg: "",
    description:
      "Turkey's Aegean and Mediterranean coasts — the famed Turquoise Coast — are a mosaic of ancient ruins, pine-forested mountains tumbling to the sea, and secluded bays of impossibly blue water. Sailing from Bodrum to Göçek, you'll discover hidden coves, Roman amphitheatres, and fishing villages unchanged for centuries. Turkish hospitality and world-class cuisine make every anchorage a destination in itself.",
    subs: [
      { name: "Bodrum",    img: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=600&q=80", popular: true },
      { name: "Marmaris",  img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80" },
      { name: "Fethiye",   img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80" },
      { name: "Göçek",     img: "https://images.unsplash.com/photo-1569144157591-c60f3f82f137?w=600&q=80" },
      { name: "Antalya",   img: "https://images.unsplash.com/photo-1484910292437-025e5d13ce87?w=600&q=80" },
    ],
  },
};

const SailIcon = () => (
  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M3 17h18M12 3v14M12 3C12 3 5 10 5 17M12 3c0 0 7 7 7 14"/>
  </svg>
);

type Country = keyof typeof DEST_DATA;

export default function DestinationsPage() {
  const [active, setActive] = useState<Country>("Croatia");
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const cardsRef = useRef<HTMLDivElement>(null);

  const dest = DEST_DATA[active];

  const checkScroll = useCallback(() => {
    const el = cardsRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  // Reset scroll position and re-check arrows when country changes
  useEffect(() => {
    const el = cardsRef.current;
    if (!el) return;
    el.scrollLeft = 0;
    // small delay to let DOM update with new cards
    const t = setTimeout(checkScroll, 50);
    return () => clearTimeout(t);
  }, [active, checkScroll]);

  const getCardStep = () => {
    const el = cardsRef.current;
    if (!el) return 254;
    const card = el.querySelector(".bm-dp-card") as HTMLElement | null;
    if (!card) return 254;
    return card.offsetWidth + 14; // card width + gap
  };

  const prev = () => cardsRef.current?.scrollBy({ left: -getCardStep(), behavior: "smooth" });
  const next = () => cardsRef.current?.scrollBy({ left:  getCardStep(), behavior: "smooth" });

  const switchCountry = (c: Country) => setActive(c);

  return (
    <>
      <div className="bm-dp">
        {/* Single looping video background */}
        <video
          autoPlay loop muted playsInline preload="metadata"
          poster="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1600&q=80"
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "70% center",
            zIndex: 0,
          }}
          aria-hidden="true"
        >
          <source src="https://cdn.bluemoreyachting.com/media/16027/videos/home-video-hd.webm" type="video/webm" />
          <source src="https://cdn.bluemoreyachting.com/media/16027/videos/home-video-hd.mp4"  type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(135deg, rgba(7,12,38,0.88) 0%, rgba(7,12,38,0.55) 100%)",
        }} />

        <div className="bm-dp-inner">
          <Navbar />

          {/* Breadcrumb */}
          <div className="bm-dp-breadcrumb">
            <Link to="/">Home</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span>Destinations</span>
          </div>

          {/* Country tabs */}
          <div className="bm-dp-tabs">
            {(Object.keys(DEST_DATA) as Country[]).map(c => (
              <button
                key={c}
                className={`bm-dp-tab${active === c ? " active" : ""}`}
                onClick={() => switchCountry(c)}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Main body */}
          <div className="bm-dp-body">
            {/* Left panel */}
            <div className="bm-dp-left">
              <div className="bm-dp-flag">{dest.flag}</div>
              <div className="bm-dp-country">{active}</div>
              <div className="bm-dp-count">
                <SailIcon />
                Include <strong>{dest.count} Yacht</strong>
              </div>
              <p className="bm-dp-desc">{dest.description}</p>
              <button className="bm-btn-outline">Discovery {active}</button>
            </div>

            {/* Right panel */}
            <div>
              <div className="bm-dp-right-header">
                <div className="bm-dp-right-title">Destinations in {active}</div>
                <div className="bm-dp-arrows">
                  <button
                    className="bm-dp-arrow"
                    onClick={prev}
                    disabled={!canPrev}
                    aria-label="Previous"
                  >
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <polyline points="15 18 9 12 15 6"/>
                    </svg>
                  </button>
                  <button
                    className="bm-dp-arrow"
                    onClick={next}
                    disabled={!canNext}
                    aria-label="Next"
                  >
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Scrollable card row */}
              <div
                ref={cardsRef}
                className="bm-dp-cards-wrap"
                onScroll={checkScroll}
              >
                <div className="bm-dp-cards">
                  {dest.subs.map(sub => (
                    <div className="bm-dp-card" key={sub.name}>
                      {sub.popular && <div className="bm-dp-badge">Most Popular</div>}
                      <img src={sub.img} alt={sub.name} loading="lazy" />
                      <div className="bm-dp-card-overlay" />
                      <div className="bm-dp-card-info">
                        <div className="bm-dp-card-name">{sub.name}</div>
                        <div className="bm-dp-card-link">
                          <strong>Discovery</strong>&nbsp;Destination
                          <div className="bm-dp-card-link-btn">
                            <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                              <polyline points="7 17 17 7"/><polyline points="7 7 17 7 17 17"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
