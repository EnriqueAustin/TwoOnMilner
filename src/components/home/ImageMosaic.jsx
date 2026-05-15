import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CTAButton from "@/components/shared/CTAButton";

const images = [
  { src: "/images/OAKTREECOTTAGE/490410716.jpg", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/ARUMCOTTAGE/490416767.jpg", span: "" },
  { src: "/images/OAKTREECOTTAGE/490410717.jpg", span: "" },
  { src: "/images/ARUMCOTTAGE/490416770.jpg", span: "" },
  { src: "/images/OAKTREECOTTAGE/490410854.jpg", span: "" },
  { src: "/images/ARUMCOTTAGE/490416771.jpg", span: "md:col-span-2" },
  { src: "/images/ARUMCOTTAGE/490416785.jpg", span: "" },
  { src: "/images/OAKTREECOTTAGE/490410860.jpg", span: "" },
];

export default function ImageMosaic() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-navy py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-white/60 text-xs tracking-[0.15em] uppercase font-body font-semibold mb-3">
            Gallery
          </p>
          <h2 className="font-display text-white text-3xl md:text-5xl font-medium">
            Soft Greens, Garden Light, and Brick Warmth
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`overflow-hidden rounded-lg ${img.span}`}
            >
              <img
                src={img.src}
                alt="Two on Milner guesthouse"
                className={`w-full object-cover hover:scale-[1.04] transition-transform duration-700 ${
                  img.span.includes("row-span-2") ? "h-48 md:h-full" : img.span.includes("col-span-2") ? "h-48 md:h-56" : "h-40 md:h-52"
                }`}
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <CTAButton variant="ghost" to="/gallery">
            View Full Gallery
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
