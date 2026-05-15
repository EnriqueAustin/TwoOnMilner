import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Wifi, Car, Coffee, Trees, Plane, Map } from "lucide-react";

const experiences = [
  {
    icon: Trees,
    image: "/images/OAKTREECOTTAGE/490410856.jpg",
    title: "Leafy Privacy",
    text: "Detached cottages, private entrances, terraces, and a quiet garden feel.",
  },
  {
    icon: Coffee,
    image: "/images/ARUMCOTTAGE/490416781.jpg",
    title: "Self-Catering Ease",
    text: "Oak Tree includes a kitchenette; both cottages include tea, coffee, and a refrigerator.",
  },
  {
    icon: Wifi,
    image: "/images/OAKTREECOTTAGE/490410855.jpg",
    title: "Work-Trip Ready",
    text: "Free WiFi, desk space, streaming TV, and calm interiors for longer stays.",
  },
  {
    icon: Car,
    image: "/images/ARUMCOTTAGE/490416786.jpg",
    title: "On-Site Parking",
    text: "Free private parking makes southern-suburbs travel simple.",
  },
  {
    icon: Plane,
    image: "/images/ARUMCOTTAGE/490416766.jpg",
    title: "Airport Friendly",
    text: "Cape Town International Airport is around 14 to 15 km away.",
  },
  {
    icon: Map,
    image: "/images/OAKTREECOTTAGE/490410858.jpg",
    title: "Southern Suburbs Base",
    text: "Close to Rondebosch Common, Newlands, UCT, Kirstenbosch, and the city routes.",
  },
];

export default function ExperienceGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-terracotta text-xs tracking-[0.15em] uppercase font-body font-semibold mb-3">
            Guesthouse Living
          </p>
          <h2 className="font-display text-navy text-3xl md:text-5xl font-medium">
            Designed for Effortless Stays
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-lg h-72"
            >
              <img
                src={exp.image}
                alt={exp.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/38 to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <exp.icon size={22} className="text-white mb-3" />
                <h3 className="font-display text-white text-xl font-semibold mb-1">{exp.title}</h3>
                <p className="font-body text-white/80 text-sm leading-relaxed">{exp.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
