import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Star, Bed, Bath, Users } from 'lucide-react'
import { properties } from '@/lib/properties'

export function FeaturedProperties() {
  const featured = properties.filter((p) => p.featured).slice(0, 4)

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-xs tracking-[0.3em] font-medium">
                CURATED COLLECTION
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-foreground text-balance">
              Exceptional Properties
            </h2>
            <p className="text-muted-foreground max-w-lg">
              Hand-selected residences that represent the pinnacle of Gulf luxury, 
              each offering a unique expression of refined living.
            </p>
          </div>
          <Link 
            href="/properties"
            className="flex items-center gap-2 text-primary hover:gap-4 transition-all duration-300 text-sm font-medium"
          >
            View All Properties
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Property Grid - Asymmetric Layout */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Large Featured Card */}
          <div className="lg:col-span-7 lg:row-span-2">
            <PropertyCardLarge property={featured[0]} />
          </div>

          {/* Stacked Cards */}
          <div className="lg:col-span-5 space-y-6">
            <PropertyCardMedium property={featured[1]} />
            <PropertyCardMedium property={featured[2]} />
          </div>

          {/* Bottom Full Width */}
          {featured[3] && (
            <div className="lg:col-span-12">
              <PropertyCardWide property={featured[3]} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function PropertyCardLarge({ property }: { property: typeof properties[0] }) {
  return (
    <Link href={`/properties/${property.id}`} className="group block h-full">
      <div className="relative h-full min-h-[500px] lg:min-h-full overflow-hidden bg-card">
        <Image
          src={property.images[0]}
          alt={property.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        
        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 p-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-primary/90 text-primary-foreground px-3 py-1 text-xs tracking-wide">
              {property.type.toUpperCase()}
            </span>
            <span className="flex items-center gap-1 text-foreground text-sm">
              <Star className="w-3 h-3 fill-primary text-primary" />
              {property.rating}
            </span>
          </div>
          
          <h3 className="text-2xl lg:text-3xl text-foreground font-light mb-2 group-hover:text-primary transition-colors">
            {property.name}
          </h3>
          <p className="text-muted-foreground text-sm mb-4">
            {property.location}, {property.country}
          </p>
          
          <div className="flex items-center gap-6 text-muted-foreground text-sm mb-4">
            <span className="flex items-center gap-2">
              <Bed className="w-4 h-4" />
              {property.bedrooms} Beds
            </span>
            <span className="flex items-center gap-2">
              <Bath className="w-4 h-4" />
              {property.bathrooms} Baths
            </span>
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              {property.guests} Guests
            </span>
          </div>
          
          <div className="flex items-baseline gap-2">
            <span className="text-2xl text-foreground font-light">
              {property.currency} {property.price.toLocaleString()}
            </span>
            <span className="text-muted-foreground text-sm">
              / {property.priceUnit}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

function PropertyCardMedium({ property }: { property: typeof properties[0] }) {
  return (
    <Link href={`/properties/${property.id}`} className="group block">
      <div className="relative h-[280px] overflow-hidden bg-card">
        <Image
          src={property.images[0]}
          alt={property.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        
        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-primary/90 text-primary-foreground px-2 py-0.5 text-[10px] tracking-wide">
              {property.type.toUpperCase()}
            </span>
            <span className="flex items-center gap-1 text-foreground text-xs">
              <Star className="w-3 h-3 fill-primary text-primary" />
              {property.rating}
            </span>
          </div>
          
          <h3 className="text-xl text-foreground font-light mb-1 group-hover:text-primary transition-colors">
            {property.name}
          </h3>
          <p className="text-muted-foreground text-xs mb-3">
            {property.location}, {property.country}
          </p>
          
          <div className="flex items-baseline gap-2">
            <span className="text-lg text-foreground font-light">
              {property.currency} {property.price.toLocaleString()}
            </span>
            <span className="text-muted-foreground text-xs">
              / {property.priceUnit}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

function PropertyCardWide({ property }: { property: typeof properties[0] }) {
  return (
    <Link href={`/properties/${property.id}`} className="group block">
      <div className="grid md:grid-cols-2 bg-card overflow-hidden">
        <div className="relative h-[300px] md:h-[350px]">
          <Image
            src={property.images[0]}
            alt={property.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        
        <div className="p-8 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-primary/90 text-primary-foreground px-3 py-1 text-xs tracking-wide">
              {property.type.toUpperCase()}
            </span>
            <span className="flex items-center gap-1 text-foreground text-sm">
              <Star className="w-3 h-3 fill-primary text-primary" />
              {property.rating}
            </span>
          </div>
          
          <h3 className="text-2xl text-foreground font-light mb-2 group-hover:text-primary transition-colors">
            {property.name}
          </h3>
          <p className="text-muted-foreground text-sm mb-4">
            {property.location}, {property.country}
          </p>
          
          <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
            {property.shortDescription}
          </p>
          
          <div className="flex items-center gap-6 text-muted-foreground text-sm mb-6">
            <span className="flex items-center gap-2">
              <Bed className="w-4 h-4" />
              {property.bedrooms} Beds
            </span>
            <span className="flex items-center gap-2">
              <Bath className="w-4 h-4" />
              {property.bathrooms} Baths
            </span>
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              {property.guests} Guests
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl text-foreground font-light">
                {property.currency} {property.price.toLocaleString()}
              </span>
              <span className="text-muted-foreground text-sm">
                / {property.priceUnit}
              </span>
            </div>
            <span className="text-primary text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
              View Details
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
