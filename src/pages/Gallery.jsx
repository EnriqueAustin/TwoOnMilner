import React, { useState } from "react";
import HeroSection from "@/components/shared/HeroSection";
import { GALLERY_IMAGES } from "@/lib/constants";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const categories = ["All", "Garden & Facade", "Oak Tree Cottage", "Arum Cottage"];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const filtered = activeFilter === "All" ? GALLERY_IMAGES : GALLERY_IMAGES.filter((img) => img.category === activeFilter);

  return (
    <>
      <HeroSection
        image="/images/ARUMCOTTAGE/490416793.jpg"
        title="Gallery"
        subtitle="Garden details, soft sage interiors, exposed brick, and the two cottages at Two on Milner."
        compact
      />

      <div className="bg-white py-6 sticky top-0 z-30 border-b border-ash">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-md text-xs font-body font-semibold transition-all duration-200 ${
                activeFilter === cat ? "bg-terracotta text-white" : "bg-navy/5 text-navy hover:bg-navy/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            <AnimatePresence>
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src + img.caption}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="break-inside-avoid overflow-hidden rounded-lg relative group cursor-pointer"
                  onClick={() => setLightboxIdx(i)}
                >
                  <img src={img.src} alt={img.caption} className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" loading="lazy" />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/42 transition-all duration-300 flex items-end">
                    <p className="text-white font-body text-sm p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                      {img.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-navy/95 z-50 flex items-center justify-center"
            onClick={() => setLightboxIdx(null)}
          >
            <button onClick={(e) => { e.stopPropagation(); setLightboxIdx(null); }} className="absolute top-6 right-6 text-white/70 hover:text-white" aria-label="Close gallery">
              <X size={28} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); setLightboxIdx((prev) => (prev - 1 + filtered.length) % filtered.length); }} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white" aria-label="Previous image">
              <ChevronLeft size={36} />
            </button>
            <div className="max-w-4xl max-h-[85vh] px-12" onClick={(e) => e.stopPropagation()}>
              <img src={filtered[lightboxIdx].src} alt={filtered[lightboxIdx].caption} className="max-w-full max-h-[75vh] object-contain rounded-lg" />
              <p className="text-white font-body text-sm text-center mt-4">{filtered[lightboxIdx].caption}</p>
            </div>
            <button onClick={(e) => { e.stopPropagation(); setLightboxIdx((prev) => (prev + 1) % filtered.length); }} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white" aria-label="Next image">
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
