import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const stories = [
  {
    image: "/images/OAKTREECOTTAGE/490410722.jpg",
    eyebrow: "The Setting",
    title: "A Quiet Garden Address in Rondebosch",
    text: "Set on tree-lined Milner Road, the cottages feel private and residential while staying close to Cape Town's major routes, the airport, UCT, Newlands, and Kirstenbosch.",
    link: { label: "Explore the Location", to: "/location" },
    reverse: false,
  },
  {
    image: "/images/OAKTREECOTTAGE/490410715.jpg",
    eyebrow: "The Design",
    title: "Sage, Brick, Linen, and Light",
    text: "The interiors are calm and tactile: exposed brick, soft green cabinetry, crisp linen, ornate mirrors, stone-toned floors, and thoughtful open-plan layouts made for unhurried stays.",
    link: { label: "View Cottages", to: "/rooms" },
    reverse: true,
  },
  {
    image: "/images/ARUMCOTTAGE/490416783.jpg",
    eyebrow: "The Stay",
    title: "Self-Contained Comfort With Boutique Polish",
    text: "Both cottages include private bathrooms, free WiFi, daily housekeeping, tea and coffee facilities, outdoor seating, and the easy privacy of a detached guesthouse.",
    link: { label: "See Facilities", to: "/facilities" },
    reverse: false,
  },
];

function StoryBlock({ image, eyebrow, title, text, link, reverse }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className={`relative overflow-hidden ${reverse ? "lg:order-2" : ""}`}
      >
        <img src={image} alt={title} className="w-full h-80 lg:h-full object-cover" loading="lazy" />
      </motion.div>
      <div className={`flex items-center ${reverse ? "lg:order-1" : ""}`}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="px-8 py-16 md:px-16 lg:px-20 max-w-xl"
        >
          <p className="text-terracotta text-xs tracking-[0.15em] uppercase font-body font-semibold mb-4">{eyebrow}</p>
          <h2 className="font-display text-navy text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] mb-6">
            {title}
          </h2>
          <p className="font-body text-navy/70 text-base leading-relaxed mb-8">{text}</p>
          <Link to={link.to} className="inline-flex items-center gap-2 text-terracotta font-body font-semibold text-sm hover:gap-3 transition-all duration-200">
            {link.label} <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default function ImmersiveStory() {
  return (
    <section>
      {stories.map((story, i) => (
        <div key={story.title} className={i % 2 === 0 ? "bg-ivory" : "bg-white"}>
          <StoryBlock {...story} />
        </div>
      ))}
    </section>
  );
}
