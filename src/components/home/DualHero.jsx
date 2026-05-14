import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CTAButton from "@/components/shared/CTAButton";
import { BOOKING_URL } from "@/lib/constants";

const heroSets = [
  [
    "/images/OAKTREECOTTAGE/490410722.jpg",
    "/images/OAKTREECOTTAGE/490410715.jpg",
    "/images/OAKTREECOTTAGE/490410555.jpg",
    "/images/ARUMCOTTAGE/490416783.jpg",
    "/images/OAKTREECOTTAGE/490410720.jpg",
    "/images/ARUMCOTTAGE/490416797.jpg",
  ],
  [
    "/images/ARUMCOTTAGE/490416793.jpg",
    "/images/ARUMCOTTAGE/490416780.jpg",
    "/images/OAKTREECOTTAGE/490410865.jpg",
    "/images/ARUMCOTTAGE/490416778.jpg",
    "/images/OAKTREECOTTAGE/490410864.jpg",
    "/images/ARUMCOTTAGE/490416791.jpg",
  ],
  [
    "/images/OAKTREECOTTAGE/490410721.jpg",
    "/images/ARUMCOTTAGE/490416784.jpg",
    "/images/OAKTREECOTTAGE/490410861.jpg",
    "/images/ARUMCOTTAGE/490416772.jpg",
    "/images/OAKTREECOTTAGE/490410862.jpg",
    "/images/ARUMCOTTAGE/490416787.jpg",
  ],
];

const tileClasses = [
  "col-span-2 row-span-2 md:col-span-2 md:row-span-2",
  "hidden md:block md:col-span-1 md:row-span-1",
  "hidden md:block md:col-span-1 md:row-span-1",
  "hidden md:block md:col-span-1 md:row-span-2",
  "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
  "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
];

export default function DualHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSets.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[680px] overflow-hidden bg-[#07120f]">
      {heroSets.map((set, setIndex) => (
        <div
          key={set.join("-")}
          className="absolute inset-0 grid grid-cols-2 md:grid-cols-5 grid-rows-3 md:grid-rows-2 gap-1 p-1 transition-opacity duration-1000 ease-out"
          style={{ opacity: setIndex === current ? 1 : 0 }}
        >
          {set.map((src, imageIndex) => (
            <div key={src} className={`relative overflow-hidden ${tileClasses[imageIndex]}`}>
              <img
                src={src}
                alt="Two on Milner guest cottage in Rondebosch"
                className="w-full h-full object-cover"
                loading={setIndex === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-[#07120f]/95 via-[#07120f]/70 to-[#07120f]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07120f]/70 via-transparent to-[#07120f]/35" />

      <div className="relative z-10 h-full max-w-[1200px] mx-auto px-6 flex items-center">
        <div className="max-w-3xl pt-20">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-white text-xs md:text-sm tracking-[0.18em] uppercase font-body font-semibold mb-5 drop-shadow-[0_2px_16px_rgba(0,0,0,0.9)]"
          >
            Rondebosch · Cape Town · Two private cottages
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-display text-white text-5xl md:text-7xl lg:text-8xl font-light leading-[1.02] max-w-4xl drop-shadow-[0_4px_28px_rgba(0,0,0,0.95)]"
          >
            Two on Milner
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="text-white font-body font-light text-base md:text-lg lg:text-xl mt-5 max-w-2xl leading-relaxed drop-shadow-[0_2px_18px_rgba(0,0,0,0.9)]"
          >
            Oak Tree and Arum Cottage are polished open-plan guesthouse stays: quiet, spacious, self-contained, and tucked into a leafy Rondebosch garden.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <CTAButton href={BOOKING_URL} className="bg-white text-navy hover:bg-ivory">
              Check Availability
            </CTAButton>
            <CTAButton variant="ghost" to="/rooms">View Cottages</CTAButton>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-6 md:left-1/2 md:-translate-x-1/2 z-20 flex gap-2">
        {heroSets.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Show hero image set ${i + 1}`}
            className={`h-[3px] rounded-full transition-all duration-500 ${i === current ? "w-10 bg-white" : "w-5 bg-white/40"}`}
          />
        ))}
      </div>
    </section>
  );
}
