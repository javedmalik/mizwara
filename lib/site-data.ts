import {
  Apple,
  Coffee,
  Flower2,
  Gem,
  Leaf,
  PackageOpen,
  Salad,
  Wheat,
} from "lucide-react";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/export-import", label: "Export & Import" },
  { href: "/contact", label: "Contact" },
];
export const products = [
  {
    slug: "agricultural-products",
    name: "Agricultural Products",
    description:
      "Carefully selected agricultural inputs and products for modern farming requirements.",
    details:
      "We coordinate requirements for agricultural products such as fertilizers, pesticides, plant nutrients and other farming-related products.",
    highlights: [
      "Fertilizers and plant nutrients",
      "Crop-protection products",
      "Commercial quantity support",
      "Domestic and export enquiries",
    ],
    bannerImage: "/images/product-banners/agricultural-products-banner.webp",
    productImage: "/images/product-banners/agricultural-products-banner.webp",
    bannerPosition: "center",
    icon: Wheat,
  },
  {
    slug: "food-beverages",
    name: "Food & Beverages",
    description:
      "Quality food and beverage products prepared for domestic and international distribution.",
    details:
      "Our food and beverage category is designed for buyers seeking reliable sourcing and commercial supply coordination.",
    highlights: [
      "Wholesale requirements",
      "Product specification review",
      "Packaging coordination",
      "Market-focused sourcing",
    ],
    bannerImage: "/images/product-banners/food-beverages-banner.webp",
    productImage: "/images/product-banners/food-beverages-banner.webp",
    bannerPosition: "center",
    icon: Coffee,
  },
  {
    slug: "spices",
    name: "Spices",
    description:
      "Aromatic whole and ground spices sourced for flavour, purity and reliable supply.",
    details:
      "We support enquiries for Indian whole and ground spices, with product form, grade, packing and quantity aligned to buyer requirements.",
    highlights: [
      "Whole and ground options",
      "Quality-focused sourcing",
      "Bulk and retail packaging",
      "Export enquiry support",
    ],
    bannerImage: "/images/product-banners/spices-banner.webp",
    productImage: "/images/product-banners/spices-banner.webp",
    bannerPosition: "center",
    icon: Flower2,
  },
  {
    slug: "makhana",
    name: "Makhana",
    description:
      "Premium fox nuts graded for wholesale, retail packaging and export markets.",
    details:
      "Makhana requirements can be coordinated by size, grade, raw or processed format, quantity and packaging.",
    highlights: [
      "Multiple grade enquiries",
      "Raw or processed formats",
      "Retail and bulk packaging",
      "Private-label coordination",
    ],
    bannerImage: "/images/product-banners/makhana-banner.webp",
    productImage: "/images/product-banners/makhana-banner.webp",
    bannerPosition: "center",
    icon: Gem,
  },
  {
    slug: "grains-pulses",
    name: "Grains & Pulses",
    description:
      "Staple grains and pulses procured from dependable agricultural supply networks.",
    details:
      "We coordinate grain and pulse sourcing according to variety, grade, quantity, packaging and destination-market requirements.",
    highlights: [
      "Variety-based sourcing",
      "Commercial quantities",
      "Packaging options",
      "Supply coordination",
    ],
    bannerImage: "/images/product-banners/grains-pulses-banner.webp",
    productImage: "/images/product-banners/grains-pulses-banner.webp",
    bannerPosition: "center",
    icon: Salad,
  },
  {
    slug: "herbal-products",
    name: "Herbal Products",
    description:
      "Naturally inspired herbal products aligned with evolving wellness demand.",
    details:
      "Our herbal category supports selected natural and wellness-oriented product enquiries.",
    highlights: [
      "Requirement-led selection",
      "Ingredient specification review",
      "Packaging coordination",
      "Documentation support",
    ],
    bannerImage: "/images/product-banners/herbal-products-banner.webp",
    productImage: "/images/product-banners/herbal-products-banner.webp",
    bannerPosition: "center",
    icon: Leaf,
  },
  {
    slug: "cosmetics-personal-care",
    name: "Cosmetics & Personal Care",
    description:
      "Selected personal-care products suitable for modern retail and distribution channels.",
    details:
      "We assist buyers with selected cosmetics and personal-care sourcing opportunities.",
    highlights: [
      "Selected product sourcing",
      "Retail-ready requirements",
      "Packaging discussion",
      "Buyer-focused coordination",
    ],
    bannerImage:
      "/images/product-banners/cosmetics-personal-care-banner.webp",
      productImage:
      "/images/product-banners/cosmetics-personal-care-banner.webp",
    bannerPosition: "center",
    icon: Apple,
  },
  {
    slug: "custom-sourcing",
    name: "Custom Sourcing",
    description:
      "Product sourcing and packaging support shaped around buyer specifications.",
    details:
      "If your required product is outside our listed categories, share a complete specification for review.",
    highlights: [
      "Custom requirement review",
      "Supplier coordination",
      "Specification matching",
      "Commercial feasibility check",
    ],
    bannerImage: "/images/product-banners/custom-sourcing-banner.webp",
    productImage: "/images/product-banners/custom-sourcing-banner.webp",
    bannerPosition: "center",
    icon: PackageOpen,
  },
];
export const contact = {
  whatsapp: "+91-9454794200",
  phone: "+91-9454794200",
  email: "mizavaraglobal@gmail.com",
  address: "Mizavara Global Private Limited Dhanewa, Maharajganj 273303 Uttar Pradesh (UP) India",
  formspreeEndpoint: "https://formspree.io/f/mljjjvke",
};
export const socialLinks = [
  { name: "Facebook", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "LinkedIn", href: "#" },
];
