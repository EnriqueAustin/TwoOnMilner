import React from "react";
import HeroSection from "@/components/shared/HeroSection";
import SectionWrapper from "@/components/shared/SectionWrapper";
import RoomCard from "@/components/shared/RoomCard";
import { BOOKING_URL, ROOMS } from "@/lib/constants";
import { Bath, Car, Coffee, Refrigerator, Sparkles, Wifi } from "lucide-react";

const included = [
  { icon: Wifi, label: "Free WiFi" },
  { icon: Car, label: "Free private parking" },
  { icon: Sparkles, label: "Daily housekeeping" },
  { icon: Coffee, label: "Tea & coffee facilities" },
  { icon: Refrigerator, label: "Refrigerator" },
  { icon: Bath, label: "Private bathroom" },
];

export default function Rooms() {
  return (
    <>
      <HeroSection
        image="/images/OAKTREECOTTAGE/490410722.jpg"
        title="Two Private Cottages"
        subtitle="Oak Tree Cottage and Arum Cottage offer spacious open-plan comfort in a calm Rondebosch garden setting."
        compact
      />

      <div className="bg-terracotta">
        <div className="max-w-[1200px] mx-auto px-6 py-5">
          <p className="text-white font-body text-sm font-medium text-center">
            Booking.com sample rates shown are for 2 adults and 2 nights. Live prices vary by date and availability.
          </p>
        </div>
      </div>

      <SectionWrapper bg="white">
        <div className="text-center mb-8">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-terracotta font-body text-sm underline underline-offset-2 hover:text-terracotta-dark transition-colors"
          >
            Check live availability and current offers
          </a>
        </div>
        <div className="space-y-8">
          {ROOMS.map((room) => (
            <RoomCard key={room.id} room={room} horizontal />
          ))}
        </div>
      </SectionWrapper>

      <div className="bg-navy py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-center text-white/60 font-body text-xs tracking-[0.15em] uppercase mb-8">Both Cottages Include</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {included.map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center gap-2">
                <item.icon size={20} className="text-terracotta" />
                <span className="text-white font-body text-xs">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
