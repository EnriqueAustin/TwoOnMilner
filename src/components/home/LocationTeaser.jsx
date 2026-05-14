import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { motion, useInView } from "framer-motion";

const nearby = [
  "Common Ground Cafe - 200 m",
  "Rondebosch Station - 1.5 km",
  "Irma Stern Museum - 2.1 km",
  "Groote Schuur - 3.7 km",
  "Kirstenbosch - 6 km",
];

export default function LocationTeaser() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="bg-white">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden lg:order-2"
        >
          <img
            src="/images/OAKTREECOTTAGE/490410862.jpg"
            alt="Leafy garden at Two on Milner"
            className="w-full h-80 lg:h-full object-cover"
            loading="lazy"
          />
        </motion.div>

        <div className="flex items-center lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="px-8 py-16 md:px-16 lg:px-20 max-w-xl"
          >
            <p className="text-terracotta text-xs tracking-[0.15em] uppercase font-body font-semibold mb-4">
              Location
            </p>
            <h2 className="font-display text-navy text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] mb-6">
              In the Heart of Rondebosch
            </h2>
            <p className="font-body text-navy/70 text-base leading-relaxed mb-7">
              A tree-lined southern-suburbs address with quick access to major routes, Newlands, UCT, hospitals, Kirstenbosch, the city, and Cape Town International Airport.
            </p>
            <ul className="space-y-3 mb-8">
              {nearby.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-navy/70 font-body text-sm">
                  <MapPin size={14} className="text-terracotta flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/location" className="inline-flex items-center gap-2 text-terracotta font-body font-semibold text-sm hover:gap-3 transition-all duration-200">
              See the Neighbourhood <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
