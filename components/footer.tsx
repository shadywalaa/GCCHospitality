import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  properties: [
    { name: "Villas", href: "/properties?type=villa" },
    { name: "Penthouses", href: "/properties?type=penthouse" },
    { name: "Hotels", href: "/properties?type=hotel" },
    { name: "Apartments", href: "/properties?type=residence" },
  ],
  destinations: [
    { name: "Qatar", href: "/properties?location=qatar" },
    { name: "UAE", href: "/properties?location=uae" },
  ],
  company: [
    { name: "About", href: "#about" },
    { name: "Careers", href: "#careers" },
  ],
  support: [
    { name: "Contact", href: "#contact" },
    { name: "FAQ", href: "#faq" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border border-primary/60 flex items-center justify-center">
                <span className="text-primary font-semibold text-lg tracking-wider">
                  Z
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-foreground font-semibold tracking-[0.3em] text-sm">
                  ZAHW
                </span>
                <span className="text-muted-foreground text-[10px] tracking-[0.2em]">
                  HOSPITALITY
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-8">
              GCC's most rigorous luxury hospitality platform. Elite property
              curation with end-to-end management infrastructure for the Gulf's
              most discerning owners and guests.
            </p>
            <div className="flex items-center gap-4">
              {["Facebook", "Instagram", "TikTok"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Properties */}
          <div>
            <h4 className="text-foreground text-xs font-semibold tracking-[0.2em] mb-6">
              PROPERTIES
            </h4>
            <ul className="space-y-4">
              {footerLinks.properties.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-foreground text-xs font-semibold tracking-[0.2em] mb-6">
              DESTINATIONS
            </h4>
            <ul className="space-y-4">
              {footerLinks.destinations.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-foreground text-xs font-semibold tracking-[0.2em] mb-6">
              COMPANY
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-foreground text-xs font-semibold tracking-[0.2em] mb-6">
              SUPPORT
            </h4>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h3 className="text-foreground text-lg font-medium mb-2">
                Stay in the world of luxury
              </h3>
              <p className="text-muted-foreground text-sm">
                Exclusive offers and experiences delivered to your inbox
              </p>
            </div>
            <div className="flex gap-3 max-w-md w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-secondary border border-border rounded-none px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <button className="bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition-colors flex items-center gap-2 shrink-0">
                Subscribe
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-muted-foreground text-xs">
              © 2026 ZAHW Hospitality. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-muted-foreground text-xs">Doha, Qatar</span>
              <span className="text-muted-foreground text-xs">
                +974 1234 5678
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
