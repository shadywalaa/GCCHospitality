"use client";

import { useSearchParams } from "next/navigation";
import { properties } from "@/lib/properties";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function CheckoutPage() {
  const params = useSearchParams();

  const id = params.get("id");
  const initialCheckIn = params.get("checkIn") || "";
  const initialCheckOut = params.get("checkOut") || "";
  const initialGuests = Number(params.get("guests") || 2);

  const property = properties.find((p) => p.id === id);

  const [checkIn, setCheckIn] = useState(initialCheckIn);
  const [checkOut, setCheckOut] = useState(initialCheckOut);
  const [guests, setGuests] = useState(initialGuests);

  if (!property) {
    return <div className="p-10">Property not found</div>;
  }

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
          <h1 className="text-3xl font-light">Confirm Your Stay</h1>
          <p className="text-muted-foreground text-sm">
            Review your booking details before payment
          </p>
        </div>

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* PROPERTY CARD */}
          <div className="bg-card border border-border p-6 space-y-4">
            <div className="relative h-56 w-full">
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

          {/* BOOKING DETAILS */}
          <div className="bg-card border border-border p-6 space-y-4">
            <h3 className="text-lg font-medium">Your Details</h3>

            <div className="space-y-3">
              <div>
                <label className="text-xs text-muted-foreground">
                  CHECK-IN
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-secondary border border-border p-3"
                />
              </div>

              <div>
                <label className="text-xs text-muted-foreground">
                  CHECK-OUT
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-secondary border border-border p-3"
                />
              </div>

              <div>
                <label className="text-xs text-muted-foreground">GUESTS</label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full bg-secondary border border-border p-3"
                >
                  {[...Array(property.guests)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1} Guests
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* PRICE BREAKDOWN */}
        <div className="bg-card border border-border p-6 space-y-3">
          <h3 className="text-lg font-medium mb-2">Price Summary</h3>

          <div className="flex justify-between text-sm">
            <span>
              {property.currency} {property.price.toLocaleString()} × {nights}{" "}
              nights
            </span>
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

        {/* PAY BUTTON */}
        <Button className="w-full h-14 text-lg bg-primary">Pay Now</Button>

        <p className="text-center text-muted-foreground text-xs">
          You will be charged only after confirmation
        </p>
      </div>
    </main>
  );
}
