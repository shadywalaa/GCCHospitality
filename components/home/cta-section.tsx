import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80)',
        }}
      />
      <div className="absolute inset-0 bg-background/85" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/3 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary text-xs tracking-[0.3em] font-medium">
              BEGIN YOUR JOURNEY
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-foreground mb-6 text-balance">
            Experience the Extraordinary
          </h2>
          
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Join an exclusive community of discerning travelers who demand nothing 
            less than perfection. Your sanctuary awaits.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/properties">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-10 text-sm tracking-wide">
                Explore Properties
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Button variant="outline" className="border-border text-foreground hover:bg-secondary h-14 px-10 text-sm tracking-wide">
              Contact Concierge
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
