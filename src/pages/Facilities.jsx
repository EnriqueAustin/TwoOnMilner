import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from "@/components/shared/HeroSection";
import SectionWrapper from "@/components/shared/SectionWrapper";
import {
  Bath, Car, Coffee, DoorOpen, Flower2, KeyRound, Lock, Microwave,
  Refrigerator, ShowerHead, Sparkles, Sun, Tv, Utensils, Wifi, Wind
} from "lucide-react";

const facilities = [
  { icon: Car, label: "Free private parking", desc: "On-site parking for easy arrivals" },
  { icon: Wifi, label: "Free WiFi", desc: "Available throughout the property" },
  { icon: Flower2, label: "Garden setting", desc: "Leafy, calm, and residential" },
  { icon: Sun, label: "Terrace seating", desc: "Outdoor furniture and private corners" },
  { icon: Sparkles, label: "Daily housekeeping", desc: "Fresh, well-serviced stays" },
  { icon: KeyRound, label: "Private check-in/out", desc: "Simple arrivals and departures" },
  { icon: Lock, label: "Security", desc: "CCTV, alarm, fire extinguishers, key access" },
  { icon: Wind, label: "Laundry support", desc: "Laundry and ironing available at extra charge" },
];

const inRoom = [
  { icon: Bath, label: "Private bathroom with towels and toiletries" },
  { icon: ShowerHead, label: "Bath or shower depending on cottage" },
  { icon: Coffee, label: "Tea and coffee facilities" },
  { icon: Refrigerator, label: "Refrigerator" },
  { icon: Microwave, label: "Microwave and kitchenette in Oak Tree Cottage" },
  { icon: Utensils, label: "Kitchenware and electric kettle" },
  { icon: Tv, label: "Flat-screen TV or streaming service" },
  { icon: DoorOpen, label: "Private entrance and open-plan living" },
];

const experiences = [
  {
    title: "Morning Coffee in Sage and Stone",
    text: "Start the day in a soft green kitchenette with everything close at hand, then take your cup out to the terrace.",
    image: "/images/OAKTREECOTTAGE/490410555.jpg",
  },
  {
    title: "Hotel-Level Polish",
    text: "Double vanities, crisp linens, exposed brick, and daily housekeeping give the cottages a refined boutique feel.",
    image: "/images/OAKTREECOTTAGE/490410720.jpg",
  },
  {
    title: "Quiet Evenings In",
    text: "Streaming, lounge seating, and a calm open-plan layout make it easy to unwind after work, a course, or a day out.",
    image: "/images/ARUMCOTTAGE/490416784.jpg",
  },
  {
    title: "A Garden Address",
    text: "The cottages sit low and private among trees and planting, with Rondebosch's best routes close by.",
    image: "/images/ARUMCOTTAGE/490416797.jpg",
  },
];

function ExperienceCard({ exp, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const fromLeft = index % 2 === 0;

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <motion.div
        className={`overflow-hidden rounded-lg ${index % 2 === 1 ? "lg:order-2" : ""}`}
        initial={{ opacity: 0, x: fromLeft ? -60 : 60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <img src={exp.image} alt={exp.title} className="w-full h-72 lg:h-80 object-cover" loading="lazy" />
      </motion.div>
      <motion.div
        className={index % 2 === 1 ? "lg:order-1" : ""}
        initial={{ opacity: 0, x: fromLeft ? 60 : -60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
      >
        <h3 className="font-display text-navy text-2xl md:text-3xl font-medium mb-4">{exp.title}</h3>
        <p className="font-body text-navy/70 text-base leading-relaxed">{exp.text}</p>
      </motion.div>
    </div>
  );
}

export default function Facilities() {
  return (
    <>
      <HeroSection
        image="/images/ARUMCOTTAGE/490416784.jpg"
        title="Facilities & Comforts"
        subtitle="Everything needed for a polished self-contained stay in Rondebosch."
        compact
      />

      <SectionWrapper bg="ivory">
        <div className="text-center mb-12">
          <p className="text-terracotta text-xs tracking-[0.15em] uppercase font-body font-semibold mb-3">Property</p>
          <h2 className="font-display text-navy text-3xl md:text-4xl font-medium">Guesthouse Facilities</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {facilities.map((f) => (
            <div key={f.label} className="bg-white rounded-lg p-5 flex items-start gap-4 shadow-[0_2px_12px_rgba(32,58,49,0.06)]">
              <f.icon size={20} className="text-terracotta mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-body text-navy text-sm font-semibold">{f.label}</p>
                <p className="font-body text-slate_mid text-xs mt-0.5">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper bg="white">
        <div className="text-center mb-12">
          <p className="text-terracotta text-xs tracking-[0.15em] uppercase font-body font-semibold mb-3">In Your Cottage</p>
          <h2 className="font-display text-navy text-3xl md:text-4xl font-medium">In-Room Amenities</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {inRoom.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <item.icon size={18} className="text-terracotta flex-shrink-0" />
              <span className="font-body text-navy/80 text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper bg="ivory">
        <div className="text-center mb-12">
          <p className="text-terracotta text-xs tracking-[0.15em] uppercase font-body font-semibold mb-3">Moments</p>
          <h2 className="font-display text-navy text-3xl md:text-4xl font-medium">A Stay With Texture</h2>
        </div>
        <div className="space-y-16 overflow-hidden">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.title} exp={exp} index={i} />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
