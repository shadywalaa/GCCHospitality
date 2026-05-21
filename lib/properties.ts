export interface Property {
  id: string;
  name: string;
  location: string;
  country: string;
  type: "villa" | "apartment" | "hotel" | "penthouse" | "residence";
  price: number;
  currency: string;
  priceUnit: string;
  bedrooms: number;
  bathrooms: number;
  guests: number;
  sqm: number;
  rating: number;
  reviewCount: number;
  images: string[];
  amenities: string[];
  description: string;
  shortDescription: string;
  featured: boolean;
  conciergeServices: string[];
  checkIn: string;
  checkOut: string;
}

export const properties: Property[] = [
  {
    id: "dreams-gate-p1",
    name: "Dreams Gate P1",
    location: "The Pearl-Doha",
    country: "Qatar",
    type: "apartment",
    price: 1000,
    currency: "QAR",
    priceUnit: "night",
    bedrooms: 1,
    bathrooms: 2,
    guests: 5,
    sqm: 850,
    rating: 4.97,
    reviewCount: 128,
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
    ],
    amenities: [
      "Private Pool",
      "Beach Access",
      "Home Cinema",
      "Chef Kitchen",
      "Majlis Lounge",
      "Gym",
      "Spa",
      "Smart Home",
    ],
    description:
      "Wake up to calming marina views in this stylish one-bedroom apartment located in The Pearl. Perfect for couples and solo travelers, the apartment offers access to a shared swimming pool, gym, and indoor and outdoor playgrounds.",
    shortDescription: "Waterfront masterpiece with private beach access",
    featured: true,
    conciergeServices: [
      "Private Chef",
      "Yacht Charter",
      "Chauffeur Service",
      "Personal Shopping",
    ],
    checkIn: "14:00",
    checkOut: "11:00",
  },
  {
    id: "dreams-gate-1",
    name: "Dreams Gate 1",
    location: "Umm Ebairiya, Umm Salal Ali",
    country: "Qatar",
    type: "villa",
    price: 1500,
    currency: "QAR",
    priceUnit: "night",
    bedrooms: 3,
    bathrooms: 4,
    guests: 35,
    sqm: 620,
    rating: 4.95,
    reviewCount: 89,
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    ],
    amenities: [
      "Skyline Rooftop Terrace",
      "Private Elevator",
      "Floor-to-Ceiling Windows",
      "Panoramic Glass Views",
      "Private Lounge",
      "Home Office",
    ],
    description:
      "A warm, family-focused villa designed for laughter, privacy, and unforgettable moments together. Villa 1 features a private indoor swimming pool, a football field for friendly matches, and a cozy private majlis perfect for long conversations and late-night bonding.",
    shortDescription: "360-degree skyline views from West Bay's finest",
    featured: true,
    conciergeServices: [
      "Private Chauffeur",
      "Private Airport Transfer",
      "In-Villa Experiences",
      "Dedicated Guest Support",
    ],
    checkIn: "14:00",
    checkOut: "11:00",
  },
  {
    id: "dreams-gate-7",
    name: "Dreams Gate 7",
    location: "Umm Ebairiya, Umm Salal Ali",
    country: "Qatar",
    type: "villa",
    price: 1500,
    currency: "QAR",
    priceUnit: "night",
    bedrooms: 4,
    bathrooms: 4,
    guests: 35,
    sqm: 1200,
    rating: 4.99,
    reviewCount: 45,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
    ],
    amenities: [
      "Private Desert",
      "Infinity Pool",
      "Traditional Majlis",
      "Falcon Experience",
      "Camel Stable",
      "Observatory",
      "Spa Pavilion",
    ],
    description:
      "A transcendent escape where ancient Arabian heritage meets contemporary luxury. This exclusive desert compound offers an immersive experience with private dunes, traditional Majlis, and world-class amenities under the vast Qatari sky.",
    shortDescription: "Where Arabian heritage meets modern luxury",
    featured: true,
    conciergeServices: [
      "Desert Safari",
      "Falcon Training",
      "Stargazing Guide",
      "Bedouin Dining Experience",
    ],
    checkIn: "14:00",
    checkOut: "11:00",
  },
  {
    id: "dreams-gate-9",
    name: "Dreams Gate 9",
    location: "Umm Ebairiya, Umm Salal Ali",
    country: "Qatar",
    type: "villa",
    price: 2000,
    currency: "QAR",
    priceUnit: "night",
    bedrooms: 4,
    bathrooms: 4,
    guests: 35,
    sqm: 520,
    rating: 4.93,
    reviewCount: 67,
    images: [
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&q=80",
    ],
    amenities: [
      "Marina View",
      "Private Dock",
      "Smart Home",
      "Gym",
      "Steam Room",
      "Chef Kitchen",
      "Multiple Terraces",
    ],
    description:
      "Located in Qatar's futuristic Lusail City, this marina residence represents the next chapter of Gulf luxury living. With direct marina access and cutting-edge smart home technology, it offers a lifestyle at the forefront of modern hospitality.",
    shortDescription: "Future-forward living in Lusail Marina",
    featured: false,
    conciergeServices: [
      "Yacht Concierge",
      "Fitness Trainer",
      "Personal Stylist",
      "Restaurant Reservations",
    ],
    checkIn: "15:00",
    checkOut: "11:00",
  },
  {
    id: "dreams-gate-6",
    name: "Dreams Gate 6",
    location: "Umm Ebairiya, Umm Salal Ali",
    country: "Qatar",
    type: "villa",
    price: 1500,
    currency: "QAR",
    priceUnit: "night",
    bedrooms: 6,
    bathrooms: 7,
    guests: 35,
    sqm: 680,
    rating: 4.96,
    reviewCount: 92,
    images: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    ],
    amenities: [
      "Art Gallery",
      "Private Theater",
      "Library",
      "Courtyard Garden",
      "Traditional Hammam",
      "Music Room",
    ],
    description:
      "Immersed in the heart of Qatar's cultural renaissance, this villa offers an artistic sanctuary steps from world-class galleries and performance venues. Arabian architecture meets curated design in this culturally rich retreat.",
    shortDescription: "Artistic sanctuary in the cultural heart",
    featured: false,
    conciergeServices: [
      "Gallery Tours",
      "Cultural Guide",
      "Private Performances",
      "Art Acquisition",
    ],
    checkIn: "14:00",
    checkOut: "11:00",
  },
  {
    id: "dreams-gate-3",
    name: "Dreams Gate 3",
    location: "Umm Ebairiya, Umm Salal Ali",
    country: "Qatar",
    type: "villa",
    price: 2500,
    currency: "QAR",
    priceUnit: "night",
    bedrooms: 7,
    bathrooms: 7,
    guests: 35,
    sqm: 1800,
    rating: 4.98,
    reviewCount: 156,
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    ],
    amenities: [
      "Private Beach",
      "Infinity Pool",
      "Tennis Court",
      "Cinema",
      "Spa",
      "Staff Quarters",
      "Chauffeur Services",
    ],
    description:
      "If space, elegance, and outdoor living matter to you, Villa 3 delivers it all. Featuring two outdoor swimming pools, a landscaped garden, and a dedicated event area, this villa is designed for unforgettable celebrations and large family stays.",
    shortDescription:
      "Ideal for guests who want luxury, freedom, and room to celebrate.",
    featured: true,
    conciergeServices: [
      "Private Beach Access",
      "Sea View Terrace",
      "Personal Security",
      "Private Chef Dining",
    ],
    checkIn: "14:00",
    checkOut: "11:00",
  },
];

export const propertyTypes = [
  { value: "all", label: "All Properties" },
  { value: "villa", label: "Villas" },
  { value: "hotel", label: "Hotels" },
  { value: "apartment", label: "Apartments" },
  { value: "penthouse", label: "Penthouses" },
  { value: "residence", label: "Residences" },
];

export const locations = [
  { value: "all", label: "All Locations" },
  { value: "qatar", label: "Qatar" },
  { value: "uae", label: "UAE" },
  { value: "doha", label: "Doha" },
  { value: "dubai", label: "Dubai" },
];
