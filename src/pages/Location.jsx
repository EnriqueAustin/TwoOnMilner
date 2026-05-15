import React from "react";
import useSeo from "@/hooks/use-seo";
import HeroSection from "@/components/shared/HeroSection";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Bus, Landmark, MapPin, Mountain, Plane, UtensilsCrossed } from "lucide-react";

const categories = [
  {
    icon: UtensilsCrossed,
    title: "Local Food & Coffee",
    items: [
      "Common Ground Cafe - 200 m",
      "Covert Coffee - 800 m",
      "Prego - 900 m",
      "Rondebosch cafes and restaurants - nearby",
    ],
  },
  {
    icon: Landmark,
    title: "Culture & Landmarks",
    items: [
      "Irma Stern Museum - 2.1 km",
      "Groote Schuur - 3.7 km",
      "District Six Museum - 8 km",
      "Zeitz MOCAA - 10 km",
    ],
  },
  {
    icon: Mountain,
    title: "Nature",
    items: [
      "Newlands Reservoir - 4.4 km",
      "Kirstenbosch National Botanical Garden - 6 km",
      "Maclear's Beacon - 11 km",
      "Table Mountain - 14 km",
    ],
  },
  {
    icon: Bus,
    title: "Public Transport",
    items: [
      "Rondebosch Station - 1.5 km",
      "Rosebank Railway Station - 1.7 km",
      "MyCiTi Station Gardens - 8 km",
      "Foreshore bus connections - 8 km",
    ],
  },
  {
    icon: Plane,
    title: "Arrival",
    items: [
      "Cape Town International Airport - approx. 14 km",
      "Free on-site parking at the property",
      "Airport taxi offers may be available through Booking.com",
      "Easy access to major southern-suburbs routes",
    ],
  },
];

export default function Location() {
  useSeo({
    title: "Location",
    description: "Two on Milner is at 2 Milner Road, Rondebosch, Cape Town — close to UCT, Kirstenbosch, Newlands, and 14 km from Cape Town International Airport.",
    path: "/location",
    image: "/images/ARUMCOTTAGE/490416790.jpg",
  });

  return (
    <>
      <HeroSection
        image="/images/ARUMCOTTAGE/490416790.jpg"
        title="Leafy, Central Rondebosch"
        subtitle="2 Milner Road places you close to Rondebosch Common, Newlands, UCT, Kirstenbosch, and Cape Town's major routes."
        compact
      />

      <SectionWrapper bg="ivory">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="rounded-lg overflow-hidden shadow-md h-[400px] lg:h-full min-h-[400px]">
            <iframe
              title="Two on Milner Location"
              src="https://www.google.com/maps?q=2%20Milner%20Road%2C%20Rondebosch%2C%20Cape%20Town%2C%207700&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div>
            <p className="text-terracotta text-xs tracking-[0.15em] uppercase font-body font-semibold mb-3">The Neighbourhood</p>
            <h2 className="font-display text-navy text-3xl md:text-4xl font-medium mb-4 leading-tight">
              Rondebosch, Cape Town
            </h2>
            <p className="font-body text-navy/80 text-base leading-relaxed mb-6">
              Rondebosch is one of Cape Town's established southern suburbs: leafy, practical, and well connected. Guests choose this location for quick access to UCT, Newlands, Claremont, hospitals, Kirstenbosch, the airport, and the city bowl.
            </p>
            <div className="flex items-start gap-2 text-slate_mid font-body text-sm">
              <MapPin size={16} className="text-terracotta mt-0.5 flex-shrink-0" />
              <span>2 Milner Road, Rondebosch, Cape Town, 7700, South Africa</span>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="white">
        <div className="text-center mb-12">
          <h2 className="font-display text-navy text-3xl md:text-4xl font-medium">Nearby</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.title} className="bg-ivory rounded-lg p-6 shadow-[0_2px_12px_rgba(32,58,49,0.06)]">
              <div className="flex items-center gap-3 mb-4">
                <cat.icon size={20} className="text-terracotta" />
                <h3 className="font-display text-navy text-xl font-semibold">{cat.title}</h3>
              </div>
              <ul className="space-y-2.5">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 font-body text-navy/70 text-sm">
                    <span className="text-terracotta mt-1.5 flex-shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
