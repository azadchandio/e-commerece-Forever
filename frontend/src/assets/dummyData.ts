// assets/dummyData.ts
import p1 from "../assets/frontend_assets/p_img1.png";
import p2 from "../assets/frontend_assets/p_img2.png";
import p3 from "../assets/frontend_assets/p_img3.png";
import p4 from "../assets/frontend_assets/p_img4.png";
import p5 from "../assets/frontend_assets/p_img5.png";
import p6 from "../assets/frontend_assets/p_img6.png";
import p7 from "../assets/frontend_assets/p_img7.png";
import p8 from "../assets/frontend_assets/p_img8.png";
import p9 from "../assets/frontend_assets/p_img9.png";
import p10 from "../assets/frontend_assets/p_img10.png";
import p11 from "../assets/frontend_assets/p_img11.png";
import p12 from "../assets/frontend_assets/p_img12.png";
import p13 from "../assets/frontend_assets/p_img13.png";


import type { Productt } from "../types/Product";

export const latestCollections: Productt[] = [
  {
    name: "Women Round Neck Cotton Top",
    price: 19.99,
    image: p1,
  },
  {
    name: "Men Round Neck Cotton T-Shirt",
    price: 14.99,
    image: p2,
  },
  {
    name: "Unisex Oversized Hoodie",
    price: 29.99,
    image: p3,
  },
  {
    name: "Women Round Neck Cotton Top",
    price: 29.99,
    image: p4,
  },
  {
    name: "Women Round Neck Cotton Top",
    price: 29.99,
    image: p5,
  },
  {
    name: "Men Round Neck Pure Cotton T-shirt",
    price: 29.99,
    image: p6,
  },
  {
    name: "Men Round Neck Pure Cotton T-shirt",
    price: 29.99,
    image: p7,
  },
  {
    name: "Men Round Neck Pure Cotton T-shirt",
    price: 29.99,
    image: p8,
  },
];

export const bestSellers: Productt[] = [
  {
    name: "Men Printed Shirt",
    price: 24.99,
    image: p9,
  },
  {
    name: "Women Cotton Top",
    price: 19.99,
    image: p10,
  },
  {
    name: "Casual Slim Fit Jeans",
    price: 34.99,
    image: p11,
  },
  {
    name: "Casual Slim Fit Jeans",
    price: 34.99,
    image: p12,
  },
  {
    name: "Casual Slim Fit Jeans",
    price: 34.99,
    image: p13,
  },
];

// assets/dummyData.ts
import { RefreshCw, Shield, Headphones } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Policy = {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
};

export const policies: Policy[] = [
  {
    icon: RefreshCw,
    title: 'Easy Exchange Policy',
    description: 'We offer hassle-free exchange policy',
    color: 'text-blue-500',
  },
  {
    icon: Shield,
    title: '7 Days Return Policy',
    description: 'We provide 7 days free return policy',
    color: 'text-green-500',
  },
  {
    icon: Headphones,
    title: 'Best Customer Support',
    description: 'We provide 24/7 customer support',
    color: 'text-purple-500',
  },
];

