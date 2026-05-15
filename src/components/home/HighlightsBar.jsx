import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, TreePine, Car, Wifi, Sparkles } from "lucide-react";

const highlights = [
  { icon: Star, label: "9.0+ guest ratings" },
  { icon: TreePine, label: "Leafy garden setting" },
  { icon: Car, label: "Free on-site parking" },
  { icon: Wifi, label: "Free WiFi throughout" },
  { icon: Sparkles, label: "Daily housekeeping" },
];

export default function HighlightsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className="bg-navy py-6 md:py-8">
      <div ref={ref} className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-between items-center gap-6 md:gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`flex items-center gap-2.5 text-white/90 ${i === highlights.length - 1 ? "col-span-2 justify-center md:justify-start" : ""}`}
            >
              <h.icon size={18} className="text-white/70 flex-shrink-0" />
              <span className="font-body text-xs md:text-sm font-medium">{h.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
