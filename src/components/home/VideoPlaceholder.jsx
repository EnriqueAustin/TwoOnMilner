import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function VideoPlaceholder() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative h-[50vh] min-h-[340px] overflow-hidden">
      <motion.div
        initial={{ scale: 1.06 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src="/images/ARUMCOTTAGE/490416799.jpg"
          alt="Two on Milner cottage exterior"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy/78 via-navy/35 to-transparent" />
      <div className="relative z-10 h-full max-w-[1200px] mx-auto px-6 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="max-w-xl"
        >
          <p className="text-white/70 text-xs tracking-[0.2em] uppercase font-body mb-4">
            Private, polished, practical
          </p>
          <h2 className="font-display text-white text-3xl md:text-5xl font-light leading-tight mb-5">
            The feeling is boutique hotel. The rhythm is home.
          </h2>
          <p className="font-body text-white/80 text-base leading-relaxed">
            Arrive, park on site, make coffee, open the terrace doors, and settle into a calm cottage that has everything you need without the noise of a large hotel.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
