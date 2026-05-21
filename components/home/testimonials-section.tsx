import Image from "next/image";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sheikh Mohammed Al-Thani",
    title: "Doha, Qatar",
    avatar: "",
    rating: 5,
    quote:
      "ZAHW redefined what we expected from luxury hospitality. The attention to detail and personalized service were extraordinary. Our family felt truly at home.",
  },
  {
    name: "Sarah Mohamed",
    title: "Dubai, UAE",
    avatar: "",
    rating: 5,
    quote:
      "From the seamless booking to the exceptional property and concierge services, every aspect exceeded expectations. This is the gold standard for luxury stays.",
  },
  {
    name: "Ahmad bin Rashid",
    title: "Doha, Qatar",
    avatar:
      "https://media.istockphoto.com/id/2171382633/vector/user-profile-icon-anonymous-person-symbol-blank-avatar-graphic-vector-illustration.jpg?s=612x612&w=0&k=20&c=ZwOF6NfOR0zhYC44xOX06ryIPAUhDvAajrPsaZ6v1-w=",
    rating: 5,
    quote:
      "As someone in the industry, I appreciate ZAHW commitment to quality. Their properties represent the finest in Gulf luxury, and their service is unmatched.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary text-xs tracking-[0.3em] font-medium">
              GUEST VOICES
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-light text-foreground mb-4 text-balance">
            Stories of Excellence
          </h2>
          <p className="text-muted-foreground">
            The true measure of our success lies in the experiences of our
            distinguished guests
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-secondary p-8 relative group hover:bg-secondary/80 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-8 text-balance">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-foreground font-medium">
                    {testimonial.name}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-20 pt-16 border-t border-border">
          <div className="text-center mb-8">
            <span className="text-muted-foreground text-sm tracking-wide">
              TRUSTED BY
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-50">
            {[
              "Forbes Travel",
              "Condé Nast",
              "Luxury Travel Magazine",
              "GCC Business",
              "Arabian Luxury",
            ].map((brand) => (
              <div
                key={brand}
                className="text-muted-foreground font-light tracking-wide"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
