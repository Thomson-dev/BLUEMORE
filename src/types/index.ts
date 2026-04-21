export interface Yacht {
  name: string;
  strong: string;
  loc: string;
  flag: string;
  meta: string;
  price: string;
  img: string;
}

export interface Destination {
  name: string;
  count: number;
  img: string;
}

export interface Service {
  name: string;
  sub: string;
  img: string;
  icon: string;
}

export interface BlogPost {
  title: string;
  date: string;
  img: string;
}

export interface Testimonial {
  stars: number;
  title: string;
  text: string;
  author: string;
}

export interface SubDestination {
  name: string;
  img: string;
  popular?: boolean;
}

export interface DestinationDetail {
  flag: string;
  count: number;
  bgImg: string; // kept for future per-country override
  description: string;
  subs: SubDestination[];
}
