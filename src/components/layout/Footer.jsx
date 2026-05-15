import React from "react";
import { Link } from "react-router-dom";
import { BOOKING_URL, CONTACT } from "@/lib/constants";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy">
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-display text-white text-2xl font-semibold mb-2">{CONTACT.name}</h3>
              <p className="text-[11px] tracking-[0.15em] uppercase text-slate_mid font-body mb-4">{CONTACT.subtitle}</p>
              <p className="text-slate_mid font-body text-sm leading-relaxed">
                Two stylish open-plan cottages in leafy Rondebosch, Cape Town, designed for calm, privacy, and easy access to the airport, Kirstenbosch, UCT, and the city.
              </p>
            </div>

            <div>
              <h4 className="text-white font-body text-xs tracking-[0.12em] uppercase font-semibold mb-6">Explore</h4>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: "Cottages", path: "/rooms" },
                  { label: "Gallery", path: "/gallery" },
                  { label: "About", path: "/about" },
                  { label: "Facilities", path: "/facilities" },
                  { label: "Location", path: "/location" },
                  { label: "Contact", path: "/contact" },
                  { label: "FAQ", path: "/faq" },
                  { label: "Reservations", path: "/book" },
                ].map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-slate_mid hover:text-white text-sm font-body transition-colors py-1"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-body text-xs tracking-[0.12em] uppercase font-semibold mb-6">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-slate_mid mt-0.5 flex-shrink-0" />
                  <span className="text-slate_mid text-sm font-body">{CONTACT.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-slate_mid flex-shrink-0" />
                  <span className="text-slate_mid text-sm font-body">{CONTACT.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-slate_mid flex-shrink-0" />
                  <span className="text-slate_mid text-sm font-body">{CONTACT.email}</span>
                </div>
              </div>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 bg-terracotta hover:bg-terracotta-dark text-white text-sm font-body font-semibold px-6 py-2.5 rounded-md transition-all duration-150"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#17281f] py-4 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-slate_mid/70 text-xs font-body">
            © {new Date().getFullYear()} Two on Milner. All rights reserved.
          </p>
          <p className="text-slate_mid/70 text-xs font-body">
            2 Milner Road, Rondebosch, Cape Town
          </p>
        </div>
      </div>
    </footer>
  );
}
