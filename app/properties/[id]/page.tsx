"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { properties } from "@/lib/properties";
import { Button } from "@/components/ui/button";
import {
  Star,
  Bed,
  Bath,
  Users,
  Maximize2,
  MapPin,
  Clock,
  Calendar,
  ChevronLeft,
  ChevronRight,
  X,
  Check,
  Share2,
  Heart,
  Wifi,
  Car,
  Waves,
  Dumbbell,
  UtensilsCrossed,
  Film,
  Wine,
  Sparkles,
  Shield,
  Plane,
  Anchor,
  Phone,
} from "lucide-react";

const amenityIcons: Record<string, typeof Wifi> = {
  "Private Pool": Waves,
  "Beach Access": Waves,
  "Home Cinema": Film,
  "Chef Kitchen": UtensilsCrossed,
  "Wine Cellar": Wine,
  Gym: Dumbbell,
  Spa: Sparkles,
  "Smart Home": Wifi,
  "Rooftop Terrace": Maximize2,
  "Private Elevator": Shield,
  "Floor-to-Ceiling Windows": Maximize2,
  "Butler Service": Shield,
  "Wine Room": Wine,
  "Home Office": Wifi,
  "Private Desert": MapPin,
  "Infinity Pool": Waves,
  "Traditional Majlis": Sparkles,
  "Falcon Experience": Sparkles,
  "Camel Stable": Sparkles,
  Observatory: Sparkles,
  "Spa Pavilion": Sparkles,
  "Marina View": Anchor,
  "Private Dock": Anchor,
  "Steam Room": Sparkles,
  "Multiple Terraces": Maximize2,
  "Art Gallery": Sparkles,
  "Private Theater": Film,
  Library: Sparkles,
  "Courtyard Garden": Sparkles,
  "Traditional Hammam": Sparkles,
  "Music Room": Sparkles,
  "Private Beach": Waves,
  "Tennis Court": Dumbbell,
  Cinema: Film,
  "Staff Quarters": Shield,
  Helipad: Plane,
};

export default function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const property = properties.find((p) => p.id === resolvedParams.id);

  if (!property) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Gallery Section */}
      <PropertyGallery property={property} />

      {/* Main Content */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Property Info */}
            <div className="lg:col-span-2 space-y-12">
              {/* Header */}
              <PropertyHeader property={property} />

              {/* Description */}
              <PropertyDescription property={property} />

              {/* Amenities */}
              <PropertyAmenities property={property} />

              {/* Concierge Services */}
              <ConciergeServices property={property} />

              {/* Location */}
              <PropertyLocation property={property} />
            </div>

            {/* Right Column - Booking */}
            <div className="lg:col-span-1">
              <BookingCard property={property} />
            </div>
          </div>
        </div>
      </section>

      {/* Related Properties */}
      <RelatedProperties currentId={property.id} />

      <Footer />
    </main>
  );
}

function PropertyGallery({ property }: { property: (typeof properties)[0] }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <section className="pt-24 lg:pt-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/properties"
              className="hover:text-foreground transition-colors"
            >
              Properties
            </Link>
            <span>/</span>
            <span className="text-foreground">{property.name}</span>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-4 grid-rows-2 gap-3 h-[500px] lg:h-[600px]">
            {/* Main Image */}
            <div
              className="col-span-4 lg:col-span-2 row-span-2 relative cursor-pointer overflow-hidden group"
              onClick={() => openLightbox(0)}
            >
              <Image
                src={property.images[0]}
                alt={property.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors" />
            </div>

            {/* Secondary Images */}
            {property.images.slice(1, 5).map((image, index) => (
              <div
                key={index}
                className={`relative cursor-pointer overflow-hidden group ${
                  index < 2 ? "hidden lg:block" : "col-span-2 lg:col-span-1"
                }`}
                onClick={() => openLightbox(index + 1)}
              >
                <Image
                  src={image}
                  alt={`${property.name} ${index + 2}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors" />

                {/* View All Photos Overlay on last image */}
                {index === property.images.slice(1, 5).length - 1 && (
                  <div className="absolute inset-0 bg-background/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-foreground text-sm font-medium">
                      View All Photos
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-background/98 flex items-center justify-center">
          <button
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
            onClick={() => setLightboxOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>

          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 text-foreground hover:text-primary transition-colors"
            onClick={() =>
              setCurrentImage((prev) =>
                prev === 0 ? property.images.length - 1 : prev - 1,
              )
            }
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 text-foreground hover:text-primary transition-colors"
            onClick={() =>
              setCurrentImage((prev) =>
                prev === property.images.length - 1 ? 0 : prev + 1,
              )
            }
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="relative w-full max-w-5xl h-[70vh] mx-6">
            <Image
              src={property.images[currentImage]}
              alt={`${property.name} ${currentImage + 1}`}
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {property.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImage
                    ? "bg-primary"
                    : "bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

function PropertyHeader({ property }: { property: (typeof properties)[0] }) {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-primary/90 text-primary-foreground px-3 py-1 text-xs tracking-wide">
              {property.type.toUpperCase()}
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-primary text-primary" />
              <span className="text-foreground font-medium">
                {property.rating}
              </span>
              <span className="text-muted-foreground">
                ({property.reviewCount} reviews)
              </span>
            </div>
          </div>

          <h1 className="text-3xl lg:text-4xl font-light text-foreground mb-2">
            {property.name}
          </h1>

          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>
              {property.location}, {property.country}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="icon"
            className="border-border text-foreground"
          >
            <Share2 className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="border-border text-foreground"
          >
            <Heart className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="flex flex-wrap items-center gap-6 py-6 border-y border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-secondary flex items-center justify-center">
            <Bed className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className="text-foreground font-medium">
              {property.bedrooms}
            </div>
            <div className="text-muted-foreground text-sm">Bedrooms</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-secondary flex items-center justify-center">
            <Bath className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className="text-foreground font-medium">
              {property.bathrooms}
            </div>
            <div className="text-muted-foreground text-sm">Bathrooms</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-secondary flex items-center justify-center">
            <Users className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className="text-foreground font-medium">{property.guests}</div>
            <div className="text-muted-foreground text-sm">Guests</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-secondary flex items-center justify-center">
            <Maximize2 className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className="text-foreground font-medium">{property.sqm} m²</div>
            <div className="text-muted-foreground text-sm">Living Space</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PropertyDescription({
  property,
}: {
  property: (typeof properties)[0];
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-medium text-foreground">
        About This Property
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        {property.description}
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Located in the prestigious {property.location}, this exceptional
        residence offers an unparalleled lifestyle experience. Every detail has
        been meticulously crafted to exceed the expectations of the most
        discerning guests.
      </p>
    </div>
  );
}

function PropertyAmenities({ property }: { property: (typeof properties)[0] }) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-medium text-foreground">
        Amenities & Features
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {property.amenities.map((amenity) => {
          const Icon = amenityIcons[amenity] || Check;
          return (
            <div
              key={amenity}
              className="flex items-center gap-3 p-4 bg-card border border-border"
            >
              <Icon className="w-5 h-5 text-primary" />
              <span className="text-foreground text-sm">{amenity}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ConciergeServices({ property }: { property: (typeof properties)[0] }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-medium text-foreground">
          Concierge Services
        </h2>
        <span className="text-primary text-sm">Available upon request</span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {property.conciergeServices.map((service) => (
          <div
            key={service}
            className="flex items-center gap-3 p-4 bg-primary/5 border border-primary/20"
          >
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-foreground text-sm">{service}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PropertyLocation({ property }: { property: (typeof properties)[0] }) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-medium text-foreground">Location</h2>
      <div className="relative h-[300px] bg-secondary overflow-hidden">
        {/* Placeholder for map - in production would use actual map component */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-foreground font-medium">{property.location}</p>
            <p className="text-muted-foreground text-sm">{property.country}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6 text-muted-foreground text-sm">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>Check-in: {property.checkIn}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>Check-out: {property.checkOut}</span>
        </div>
      </div>
    </div>
  );
}

function BookingCard({ property }: { property: (typeof properties)[0] }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);

  return (
    <div className="sticky top-28">
      <div className="bg-card border border-border p-6 space-y-6">
        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-light text-foreground">
            {property.currency} {property.price.toLocaleString()}
          </span>
          <span className="text-muted-foreground">/ {property.priceUnit}</span>
        </div>

        {/* Booking Form */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <label className="text-muted-foreground text-xs tracking-wide">
                CHECK IN
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-secondary border border-border pl-10 pr-3 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-muted-foreground text-xs tracking-wide">
                CHECK OUT
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-secondary border border-border pl-10 pr-3 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-muted-foreground text-xs tracking-wide">
              GUESTS
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full bg-secondary border border-border pl-10 pr-3 py-3 text-foreground text-sm appearance-none focus:outline-none focus:border-primary transition-colors"
              >
                {[...Array(property.guests)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} {i === 0 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="space-y-3 pt-4 border-t border-border">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">
              {property.currency} {property.price.toLocaleString()} × 3 nights
            </span>
            <span className="text-foreground">
              {property.currency} {(property.price * 3).toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Service fee</span>
            <span className="text-foreground">
              {property.currency}{" "}
              {Math.round(property.price * 0.15).toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between pt-3 border-t border-border">
            <span className="text-foreground font-medium">Total</span>
            <span className="text-foreground font-medium">
              {property.currency}{" "}
              {(
                property.price * 3 +
                Math.round(property.price * 0.15)
              ).toLocaleString()}
            </span>
          </div>
        </div>

        {/* Book Button */}
        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-sm tracking-wide">
          Reserve Now
        </Button>

        <p className="text-center text-muted-foreground text-xs">
          You won&apos;t be charged yet
        </p>
      </div>

      {/* Contact Card */}
      <div className="mt-4 bg-card border border-border p-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary flex items-center justify-center">
            <Phone className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <div className="text-foreground font-medium">Need assistance?</div>
            <div className="text-muted-foreground text-sm">Contact us</div>
          </div>
        </div>
        <Button
          variant="outline"
          className="w-full mt-4 border-border text-foreground h-10"
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
}

function RelatedProperties({ currentId }: { currentId: string }) {
  const related = properties.filter((p) => p.id !== currentId).slice(0, 3);

  return (
    <section className="py-16 lg:py-24 bg-card border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl font-light text-foreground mb-2">
              Similar Properties
            </h2>
            <p className="text-muted-foreground">
              Explore more exceptional residences
            </p>
          </div>
          <Link
            href="/properties"
            className="text-primary text-sm hover:underline"
          >
            View All →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {related.map((property) => (
            <Link
              key={property.id}
              href={`/properties/${property.id}`}
              className="group block"
            >
              <div className="relative h-[250px] overflow-hidden mb-4">
                <Image
                  src={property.images[0]}
                  alt={property.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg text-foreground font-medium group-hover:text-primary transition-colors">
                {property.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                {property.location}
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-foreground font-light">
                  {property.currency} {property.price.toLocaleString()}
                </span>
                <span className="text-muted-foreground text-sm">
                  / {property.priceUnit}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
