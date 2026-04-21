import type { Yacht, Destination, Service, BlogPost, Testimonial } from "../types";

export const HERO_IMG = "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1600&q=80";

export const YACHTS: Yacht[] = [
  { name: "Meridian", strong: "Adriatica", loc: "Bodrum, Turkey", flag: "🇹🇷", meta: "42 Meters • 6 Cabins • 7 crew", price: "155,000 €", img: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=900&q=80" },
  { name: "Queen", strong: "Of Makri", loc: "Bodrum, Turkey", flag: "🇹🇷", meta: "37 Meters • 6 Cabins • 6 crew", price: "42,000 €", img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80" },
  { name: "Illusion", strong: "II", loc: "Bodrum, Turkey", flag: "🇹🇷", meta: "40 Meters • 6 Cabins • 8 crew", price: "58,000 €", img: "https://images.unsplash.com/photo-1569144157591-c60f3f82f137?w=900&q=80" },
  { name: "Azure", strong: "Dream", loc: "Athens, Greece", flag: "🇬🇷", meta: "35 Meters • 5 Cabins • 6 crew", price: "38,000 €", img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80" },
];

export const DESTINATIONS: Destination[] = [
  { name: "Croatia", count: 92, img: "https://images.unsplash.com/photo-1610106109549-5813ab87ae88?q=80&w=774&auto=format&fit=crop" },
  { name: "Greece", count: 62, img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80" },
  { name: "Turkey", count: 88, img: "https://plus.unsplash.com/premium_photo-1661964149725-fbf14eabd38c?q=80&w=1740&auto=format&fit=crop" },
];

export const SERVICES: Service[] = [
  { name: "Bespoke", sub: "Journey Design", img: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=600&q=80", icon: "♡" },
  { name: "Concierge", sub: "Services", img: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=600&q=80", icon: "✈" },
  { name: "Crew", sub: "Excellence", img: "https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=600&q=80", icon: "⚓" },
  { name: "Culinary", sub: "Experience", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80", icon: "🍽" },
];

export const BLOGS: BlogPost[] = [
  { title: "Discover the Greek Islands: From Nature Hikes to Ancient History", date: "Feb 1, 2026", img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=900&q=80" },
  { title: "Turkish Riviera Discovery Guide: The Turquoise Coast Awaits", date: "Feb 1, 2026", img: "https://images.unsplash.com/photo-1484910292437-025e5d13ce87?q=80&w=914&auto=format&fit=crop" },
];

export const TESTIMONIALS: Testimonial[] = [
  { stars: 5, title: "Exceptionally Warm Hospitality", text: "I recently enjoyed my second charter cruise on the yacht in Croatia. Previously I had cruised in Greece on a slightly longer but equally impressive vessel. Both are run by the owner, who occasionally captains. The crew of seven made six couples onboard feel like royalty — attentive, warm and always going the extra...", author: "Mark D." },
  { stars: 5, title: "An Unforgettable Anniversary", text: "Bluemore transformed our anniversary into something truly magical. Every detail was perfect — from the carefully crafted itinerary to the exquisite dining experience on board. The crew anticipated our every wish before we even expressed it and the destinations chosen were breathtaking...", author: "James & Claire, NYC" },
  { stars: 5, title: "Professional & Deeply Personal", text: "Professional, elegant, and deeply personal service. We have chartered with many companies over the years, but none compare to the attention to detail and genuine warmth shown by the Bluemore team. Truly a class apart in the world of luxury yachting...", author: "Elena K., Monaco" },
];
