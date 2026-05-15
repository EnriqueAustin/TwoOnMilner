import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CTAButton from "@/components/shared/CTAButton";
import { BOOKING_URL } from "@/lib/constants";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative h-[40vh] min-h-[320px] overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img
          src="/images/OAKTREECOTTAGE/490410718.jpg"
          alt="Two on Milner cottage dining area"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy/52" />
      </motion.div>
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-white text-3xl md:text-5xl font-medium mb-4"
        >
          Settle Into Rondebosch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-white/80 font-body text-sm md:text-base mb-8 max-w-lg"
        >
          Two polished cottages, free parking, daily housekeeping, and a calm garden setting close to the city routes.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <CTAButton href={BOOKING_URL} variant="primary">
            Check Availability
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}
