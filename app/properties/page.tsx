'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { properties, propertyTypes, locations } from '@/lib/properties'
import { Star, Bed, Bath, Users, SlidersHorizontal, Grid3X3, LayoutList, X, ArrowUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function PropertiesPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedType, setSelectedType] = useState('all')
  const [selectedLocation, setSelectedLocation] = useState('all')
  const [priceSort, setPriceSort] = useState<'asc' | 'desc' | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  const filteredProperties = useMemo(() => {
    let result = [...properties]
    
    if (selectedType !== 'all') {
      result = result.filter(p => p.type === selectedType)
    }
    
    if (selectedLocation !== 'all') {
      result = result.filter(p => 
        p.country.toLowerCase() === selectedLocation || 
        p.location.toLowerCase().includes(selectedLocation)
      )
    }
    
    if (priceSort) {
      result.sort((a, b) => priceSort === 'asc' ? a.price - b.price : b.price - a.price)
    }
    
    return result
  }, [selectedType, selectedLocation, priceSort])

  const clearFilters = () => {
    setSelectedType('all')
    setSelectedLocation('all')
    setPriceSort(null)
  }

  const hasActiveFilters = selectedType !== 'all' || selectedLocation !== 'all' || priceSort !== null

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary text-xs tracking-[0.3em] font-medium">
              OUR COLLECTION
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-light text-foreground mb-4 text-balance">
            Premium Properties
          </h1>
          <p className="text-muted-foreground max-w-xl">
            Discover our curated collection of extraordinary residences across the Gulf region.
          </p>
        </div>
      </section>

      {/* Filters Bar */}
      <section className="sticky top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border py-4">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Left Side - Filters */}
            <div className="flex items-center gap-3">
              {/* Mobile Filter Toggle */}
              <Button 
                variant="outline" 
                className="lg:hidden border-border text-foreground"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
              </Button>

              {/* Desktop Filters */}
              <div className="hidden lg:flex items-center gap-3">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="bg-secondary border border-border px-4 py-2 text-sm text-foreground focus:outline-none focus:border-primary"
                >
                  {propertyTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="bg-secondary border border-border px-4 py-2 text-sm text-foreground focus:outline-none focus:border-primary"
                >
                  {locations.map((loc) => (
                    <option key={loc.value} value={loc.value}>
                      {loc.label}
                    </option>
                  ))}
                </select>

                <Button
                  variant="outline"
                  className={`border-border ${priceSort ? 'bg-primary text-primary-foreground' : 'text-foreground'}`}
                  onClick={() => setPriceSort(priceSort === 'asc' ? 'desc' : priceSort === 'desc' ? null : 'asc')}
                >
                  <ArrowUpDown className="w-4 h-4 mr-2" />
                  Price {priceSort === 'asc' ? '↑' : priceSort === 'desc' ? '↓' : ''}
                </Button>

                {hasActiveFilters && (
                  <Button
                    variant="ghost"
                    className="text-muted-foreground hover:text-foreground"
                    onClick={clearFilters}
                  >
                    <X className="w-4 h-4 mr-1" />
                    Clear
                  </Button>
                )}
              </div>
            </div>

            {/* Right Side - View & Count */}
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground text-sm">
                {filteredProperties.length} Properties
              </span>
              
              <div className="flex border border-border">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  <LayoutList className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Filters Panel */}
          {showFilters && (
            <div className="lg:hidden mt-4 pt-4 border-t border-border space-y-3">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full bg-secondary border border-border px-4 py-3 text-sm text-foreground"
              >
                {propertyTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>

              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-secondary border border-border px-4 py-3 text-sm text-foreground"
              >
                {locations.map((loc) => (
                  <option key={loc.value} value={loc.value}>
                    {loc.label}
                  </option>
                ))}
              </select>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className={`flex-1 border-border ${priceSort ? 'bg-primary text-primary-foreground' : 'text-foreground'}`}
                  onClick={() => setPriceSort(priceSort === 'asc' ? 'desc' : priceSort === 'desc' ? null : 'asc')}
                >
                  <ArrowUpDown className="w-4 h-4 mr-2" />
                  Price {priceSort === 'asc' ? '↑' : priceSort === 'desc' ? '↓' : ''}
                </Button>

                {hasActiveFilters && (
                  <Button
                    variant="outline"
                    className="border-border text-foreground"
                    onClick={clearFilters}
                  >
                    Clear All
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Properties Grid/List */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          {filteredProperties.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg mb-4">No properties match your criteria</p>
              <Button onClick={clearFilters} variant="outline" className="border-border text-foreground">
                Clear Filters
              </Button>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProperties.map((property) => (
                <PropertyListCard key={property.id} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}

function PropertyCard({ property }: { property: typeof properties[0] }) {
  return (
    <Link href={`/properties/${property.id}`} className="group block">
      <div className="bg-card overflow-hidden">
        <div className="relative h-[280px] overflow-hidden">
          <Image
            src={property.images[0]}
            alt={property.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          
          {/* Tags */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-primary/90 text-primary-foreground px-3 py-1 text-xs tracking-wide">
              {property.type.toUpperCase()}
            </span>
            {property.featured && (
              <span className="bg-foreground/90 text-background px-3 py-1 text-xs tracking-wide">
                FEATURED
              </span>
            )}
          </div>
          
          {/* Rating */}
          <div className="absolute top-4 right-4 flex items-center gap-1 bg-background/80 backdrop-blur-sm px-2 py-1">
            <Star className="w-3 h-3 fill-primary text-primary" />
            <span className="text-foreground text-xs font-medium">{property.rating}</span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-lg text-foreground font-medium mb-1 group-hover:text-primary transition-colors">
            {property.name}
          </h3>
          <p className="text-muted-foreground text-sm mb-4">
            {property.location}, {property.country}
          </p>
          
          <div className="flex items-center gap-4 text-muted-foreground text-xs mb-4">
            <span className="flex items-center gap-1">
              <Bed className="w-3.5 h-3.5" />
              {property.bedrooms}
            </span>
            <span className="flex items-center gap-1">
              <Bath className="w-3.5 h-3.5" />
              {property.bathrooms}
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5" />
              {property.guests}
            </span>
            <span>{property.sqm} m²</span>
          </div>
          
          <div className="flex items-baseline gap-2 pt-4 border-t border-border">
            <span className="text-xl text-foreground font-light">
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

function PropertyListCard({ property }: { property: typeof properties[0] }) {
  return (
    <Link href={`/properties/${property.id}`} className="group block">
      <div className="bg-card flex flex-col md:flex-row overflow-hidden">
        <div className="relative h-[250px] md:h-auto md:w-[400px] flex-shrink-0 overflow-hidden">
          <Image
            src={property.images[0]}
            alt={property.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Tags */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-primary/90 text-primary-foreground px-3 py-1 text-xs tracking-wide">
              {property.type.toUpperCase()}
            </span>
            {property.featured && (
              <span className="bg-foreground/90 text-background px-3 py-1 text-xs tracking-wide">
                FEATURED
              </span>
            )}
          </div>
        </div>
        
        <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl text-foreground font-medium group-hover:text-primary transition-colors">
                {property.name}
              </h3>
              <div className="flex items-center gap-1 ml-4">
                <Star className="w-4 h-4 fill-primary text-primary" />
                <span className="text-foreground text-sm font-medium">{property.rating}</span>
                <span className="text-muted-foreground text-sm">({property.reviewCount})</span>
              </div>
            </div>
            
            <p className="text-muted-foreground text-sm mb-4">
              {property.location}, {property.country}
            </p>
            
            <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
              {property.shortDescription}
            </p>
            
            <div className="flex items-center gap-6 text-muted-foreground text-sm">
              <span className="flex items-center gap-2">
                <Bed className="w-4 h-4" />
                {property.bedrooms} Bedrooms
              </span>
              <span className="flex items-center gap-2">
                <Bath className="w-4 h-4" />
                {property.bathrooms} Bathrooms
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                {property.guests} Guests
              </span>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl text-foreground font-light">
                {property.currency} {property.price.toLocaleString()}
              </span>
              <span className="text-muted-foreground text-sm">
                / {property.priceUnit}
              </span>
            </div>
            <span className="text-primary text-sm font-medium">
              View Details →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
