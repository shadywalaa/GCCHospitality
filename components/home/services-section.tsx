import { Shield, Clock, Globe, Award, Headphones, Lock } from "lucide-react";

const services = [
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Round-the-clock personal assistance for any request, any time",
  },
  {
    icon: Shield,
    title: "Verified Properties",
    description:
      "Every property personally inspected and certified to our standards",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Access to exclusive properties across the GCC and beyond",
  },
  {
    icon: Award,
    title: "Premium Standards",
    description: "Uncompromising quality in every detail of your experience",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Personal relationship managers for VIP guests",
  },
  {
    icon: Lock,
    title: "Privacy Assured",
    description: "Absolute discretion for high-profile guests and families",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-xs tracking-[0.3em] font-medium">
                WHY ZAHW
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-foreground mb-6 text-balance">
              The Foundation of Trust
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              ZAHW is more than a booking platform - it is a private hospitality
              experience designed for travelers who value privacy, elegance, and
              exceptional stays. Every villa, suite, and experience is carefully
              selected to reflect the standards of modern Gulf luxury
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-light text-primary mb-2">15+</div>
                <div className="text-muted-foreground text-sm">
                  Years of Excellence
                </div>
              </div>
              <div>
                <div className="text-4xl font-light text-primary mb-2">
                  300+
                </div>
                <div className="text-muted-foreground text-sm">
                  Satisfied Guests
                </div>
              </div>
              <div>
                <div className="text-4xl font-light text-primary mb-2">12+</div>
                <div className="text-muted-foreground text-sm">
                  Premium Properties
                </div>
              </div>
              <div>
                <div className="text-4xl font-light text-primary mb-2">2</div>
                <div className="text-muted-foreground text-sm">Cities</div>
              </div>
            </div>
          </div>

          {/* Right Services Grid */}
          <div className="grid grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`p-6 bg-card border border-border hover:border-primary/30 transition-colors group ${
                  index % 3 === 0 ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <service.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-foreground font-medium mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
