import React from "react";
import useSeo from "@/hooks/use-seo";
import HeroSection from "@/components/shared/HeroSection";
import SectionWrapper from "@/components/shared/SectionWrapper";

const stats = [
  { value: "2", label: "Private Cottages" },
  { value: "48-50 m²", label: "Spacious Open-Plan Layouts" },
  { value: "9.0+", label: "Booking.com Guest Ratings" },
  { value: "14 km", label: "Approx. to Cape Town Airport" },
];

export default function About() {
  useSeo({
    title: "About",
    description: "Two on Milner is a calm Rondebosch guesthouse offering two private cottages near UCT, Kirstenbosch, and Cape Town International Airport. Rated 9.0+ on Booking.com.",
    path: "/about",
    image: "/images/ARUMCOTTAGE/490416783.jpg",
  });

  return (
    <>
      <HeroSection
        image="/images/OAKTREECOTTAGE/490410722.jpg"
        title="A Calm Rondebosch Hideaway"
        subtitle="Two on Milner pairs boutique interiors with the privacy and practicality of self-contained cottage living."
        compact
      />

      <SectionWrapper bg="ivory">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="overflow-hidden rounded-lg">
            <img
              src="/images/ARUMCOTTAGE/490416783.jpg"
              alt="Interior dining detail at Two on Milner"
              className="w-full h-80 lg:h-[520px] object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="font-body text-navy/80 text-base leading-relaxed mb-5">
              Two on Milner sits in a leafy pocket of Rondebosch, close to Rondebosch Common and the southern-suburbs routes that make Cape Town easy to move through. It is a quiet, residential-feeling address rather than a big-hotel experience.
            </p>
            <p className="font-body text-navy/80 text-base leading-relaxed mb-5">
              Oak Tree Cottage and Arum Cottage are both stylish open-plan spaces with the kind of details guests notice: crisp linen, exposed brick, soft sage cabinetry, elegant mirrors, private bathrooms, thoughtful coffee stations, and outdoor seating.
            </p>
            <p className="font-body text-navy/80 text-base leading-relaxed mb-5">
              The cottages are especially well suited to couples, business travellers, visiting parents, course attendees, and guests who want a comfortable base near UCT, Newlands, Kirstenbosch, the airport, and Cape Town's central attractions.
            </p>
            <p className="font-display text-navy text-xl italic">
              Quiet enough to exhale, connected enough to keep the city within reach.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <div className="bg-navy py-14">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-white text-3xl md:text-4xl font-semibold mb-1">{stat.value}</p>
                <p className="text-slate_mid font-body text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
