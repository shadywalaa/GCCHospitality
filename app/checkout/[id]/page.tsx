"use client";

import { useSearchParams, useParams } from "next/navigation";
import { properties } from "@/lib/properties";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CheckoutPage() {
  const params = useParams();
  const search = useSearchParams();

  const id = params.id as string;

  const checkIn = search.get("checkIn") || "";
  const checkOut = search.get("checkOut") || "";
  const guests = Number(search.get("guests") || 2);

  const property = properties.find((p) => p.id === id);

  if (!property) return <div>Property not found</div>;

  const nights =
    checkIn && checkOut
      ? Math.max(
          1,
          Math.ceil(
            (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
              (1000 * 60 * 60 * 24),
          ),
        )
      : 1;

  const subtotal = property.price * nights;
  const serviceFee = Math.round(subtotal * 0.15);
  const total = subtotal + serviceFee;

  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* HEADER */}
        <div>
          <h1 className="text-3xl font-light">Confirm & Pay</h1>
          <p className="text-muted-foreground text-sm">
            Review your booking before confirmation
          </p>
        </div>

        {/* PROPERTY */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card border border-border p-6">
            <div className="relative h-60 w-full mb-4">
              <Image
                src={property.images[0]}
                alt={property.name}
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-xl font-medium">{property.name}</h2>
            <p className="text-muted-foreground text-sm">{property.location}</p>
          </div>

          {/* DETAILS */}
          <div className="bg-card border border-border p-6 space-y-3">
            <h3 className="text-lg font-medium">Booking Details</h3>

            <p className="text-sm">Check-in: {checkIn}</p>
            <p className="text-sm">Check-out: {checkOut}</p>
            <p className="text-sm">Guests: {guests}</p>
          </div>
        </div>

        {/* PRICE */}
        <div className="bg-card border border-border p-6 space-y-3">
          <h3 className="text-lg font-medium">Price Summary</h3>

          <div className="flex justify-between text-sm">
            <span>Nights × Rate</span>
            <span>
              {property.currency} {subtotal.toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between text-sm">
            <span>Service fee</span>
            <span>
              {property.currency} {serviceFee.toLocaleString()}
            </span>
          </div>

          <div className="border-t pt-3 flex justify-between font-medium text-lg">
            <span>Total</span>
            <span>
              {property.currency} {total.toLocaleString()}
            </span>
          </div>
        </div>

        {/* PAY */}
        <Button className="w-full h-14 text-lg">Pay Now</Button>
      </div>
    </main>
  );
}
