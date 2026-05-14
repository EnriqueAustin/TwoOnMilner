import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { ArrowRight } from "lucide-react";

export default function IntroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper bg="ivory">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center overflow-hidden">
        <motion.div initial={{ opacity: 0, x: -80 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, ease: "easeOut" }}>
          <h2 className="font-display text-navy text-3xl md:text-5xl font-medium leading-[1.15]">
            Two Cottages Built for Slow Living
          </h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 80 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}>
          <p className="font-body text-navy/80 text-base leading-relaxed mb-4">
            Two on Milner is a quiet guesthouse address with two private open-plan cottages, polished interiors, and the leafy ease of Rondebosch.
          </p>
          <p className="font-body text-navy/80 text-base leading-relaxed mb-4">
            Oak Tree and Arum Cottage each bring their own rhythm: sage kitchens, exposed brick, crisp linen, private bathrooms, terraces, and daily housekeeping.
          </p>
          <p className="font-body text-navy/80 text-base leading-relaxed mb-6">
            Close to UCT, Newlands, Kirstenbosch, the airport, and the city routes, it is Cape Town accommodation that feels both refined and practical.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 text-terracotta font-body font-semibold text-sm hover:gap-3 transition-all duration-200">
            Our Story <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
