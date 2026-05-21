"use client";

import { useState } from "react";
import { Search, Calendar, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const [destination, setDestination] = useState("");

  return (
    <section className="relative min-h-screen flex items-end pt-28 md:pt-36 pb-20 lg:pb-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-primary" />
                <span className="text-primary text-xs tracking-[0.3em] font-medium">
                  PREMIUM HOSPITALITY
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-foreground leading-[1.1] text-balance">
                Where Luxury
                <br />
                <span className="text-primary">Becomes Home</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
                Experience Gulf hospitality at its finest. ZAHW delivers
                handpicked villas, penthouses, and curated experiences across
                Qatar - with a vision to extend across the Gulf.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-12 pt-4">
              <div>
                <div className="text-3xl font-light text-foreground">12+</div>
                <div className="text-muted-foreground text-sm">
                  Premium Properties
                </div>
              </div>
              <div>
                <div className="text-3xl font-light text-foreground">300+</div>
                <div className="text-muted-foreground text-sm">
                  Guest Satisfaction
                </div>
              </div>
              <div>
                <div className="text-3xl font-light text-foreground">24/7</div>
                <div className="text-muted-foreground text-sm">
                  Concierge Service
                </div>
              </div>
            </div>
          </div>

          {/* Search Card */}
          <div className="lg:col-span-5">
            <div className="bg-card/95 backdrop-blur-sm border border-border p-6 lg:p-8">
              <h3 className="text-foreground text-lg font-medium mb-6">
                Find Your Sanctuary
              </h3>

              <div className="space-y-4">
                {/* Destination */}
                <div className="space-y-2">
                  <label className="text-muted-foreground text-xs tracking-wide">
                    DESTINATION
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full bg-secondary border border-border pl-11 pr-4 py-3 text-foreground text-sm appearance-none focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="">Select destination</option>
                      <option value="doha">Doha, Qatar</option>
                      <option value="dubai">Dubai, UAE</option>
                      <option value="abudhabi">Abu Dhabi, UAE</option>
                    </select>
                  </div>
                </div>

                {/* Dates */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full min-w-0">
                  <div className="space-y-2 bg-secondary/40 p-3 rounded-md min-w-0 overflow-hidden">
                    <label className="text-muted-foreground text-xs tracking-wide">
                      CHECK IN
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        type="date"
                        className="w-full min-w-0 max-w-full bg-secondary border border-border pl-11 pr-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 bg-secondary/40 p-3 rounded-md min-w-0 overflow-hidden">
                    <label className="text-muted-foreground text-xs tracking-wide">
                      CHECK OUT
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        type="date"
                        className="w-full min-w-0 max-w-full bg-secondary border border-border pl-11 pr-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Guests */}
                <div className="space-y-2">
                  <label className="text-muted-foreground text-xs tracking-wide">
                    GUESTS
                  </label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <select className="w-full min-w-0 bg-secondary border border-border pl-11 pr-4 py-3 text-foreground text-sm appearance-none focus:outline-none focus:border-primary transition-colors">
                      <option value="2">2 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="8">8+ Guests</option>
                    </select>
                  </div>
                </div>

                {/* Search Button */}
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 mt-2 flex items-center justify-center gap-2">
                  <Search className="w-4 h-4" />
                  Search Properties
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-xs text-muted-foreground tracking-widest">
          SCROLL
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
