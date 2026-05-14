import React, { useState } from "react";
import HeroSection from "@/components/shared/HeroSection";
import SectionWrapper from "@/components/shared/SectionWrapper";
import CTAButton from "@/components/shared/CTAButton";
import { BOOKING_URL, ROOMS } from "@/lib/constants";
import { CheckCircle, Clock, Phone, Shield, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const trustPoints = [
  { icon: Star, label: "9.0+ guest rated" },
  { icon: Shield, label: "Pay online options" },
  { icon: Clock, label: "Refundable rates available" },
  { icon: Phone, label: "Special requests welcomed" },
];

const whyDirect = [
  { icon: Phone, title: "Direct cottage preference and arrival notes" },
  { icon: Shield, title: "Ask about refundable and non-refundable options" },
  { icon: Star, title: "Clarify best fit between Oak Tree and Arum" },
  { icon: CheckCircle, title: "Simple enquiry for longer or flexible stays" },
];

const roomOptions = [...ROOMS.map((r) => r.name), "Flexible - advise me"];

export default function Book() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", checkin: "", checkout: "",
    guests: "", roomType: "", requests: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <HeroSection
        image="/images/ARUMCOTTAGE/490416780.jpg"
        title="Reserve Your Cottage"
        subtitle="Book through Booking.com or send a direct enquiry for cottage guidance and special requests."
        compact
      />

      <SectionWrapper bg="white">
        <div className="text-center max-w-2xl mx-auto">
          <CTAButton href={BOOKING_URL} className="text-base px-10 py-4">
            Check Availability on Booking.com
          </CTAButton>
          <p className="font-body text-navy/70 text-sm mt-4 mb-8">
            Choose Oak Tree Cottage or Arum Cottage, compare refundable rates, and confirm your dates.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {trustPoints.map((tp) => (
              <div key={tp.label} className="flex items-center gap-2">
                <tp.icon size={16} className="text-terracotta" />
                <span className="font-body text-navy text-xs font-medium">{tp.label}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <div className="max-w-[600px] mx-auto px-6">
        <div className="border-t border-ash flex items-center justify-center py-6">
          <span className="font-body text-slate_mid text-xs px-4 bg-ivory">or enquire directly</span>
        </div>
      </div>

      <SectionWrapper bg="ivory" className="pt-0">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="bg-white rounded-lg p-10 text-center shadow-sm">
              <CheckCircle size={48} className="text-teal mx-auto mb-4" />
              <h3 className="font-display text-navy text-2xl font-medium mb-2">Enquiry Sent</h3>
              <p className="font-body text-navy/70 text-sm">Your enquiry has been captured in this demo form.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label className="font-body text-navy text-sm font-medium">Full Name</Label>
                  <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1.5 bg-white border-ash" placeholder="Your full name" />
                </div>
                <div>
                  <Label className="font-body text-navy text-sm font-medium">Email Address</Label>
                  <Input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1.5 bg-white border-ash" placeholder="you@email.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label className="font-body text-navy text-sm font-medium">Phone Number</Label>
                  <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-1.5 bg-white border-ash" placeholder="+27 ..." />
                </div>
                <div>
                  <Label className="font-body text-navy text-sm font-medium">Number of Guests</Label>
                  <Input value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} className="mt-1.5 bg-white border-ash" placeholder="e.g. 2 adults" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label className="font-body text-navy text-sm font-medium">Check-in Date</Label>
                  <Input type="date" value={form.checkin} onChange={(e) => setForm({ ...form, checkin: e.target.value })} className="mt-1.5 bg-white border-ash" />
                </div>
                <div>
                  <Label className="font-body text-navy text-sm font-medium">Check-out Date</Label>
                  <Input type="date" value={form.checkout} onChange={(e) => setForm({ ...form, checkout: e.target.value })} className="mt-1.5 bg-white border-ash" />
                </div>
              </div>
              <div>
                <Label className="font-body text-navy text-sm font-medium">Cottage Preference</Label>
                <Select onValueChange={(val) => setForm({ ...form, roomType: val })}>
                  <SelectTrigger className="mt-1.5 bg-white border-ash">
                    <SelectValue placeholder="Select a cottage..." />
                  </SelectTrigger>
                  <SelectContent>
                    {roomOptions.map((opt) => (
                      <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="font-body text-navy text-sm font-medium">Special Requests</Label>
                <Textarea value={form.requests} onChange={(e) => setForm({ ...form, requests: e.target.value })} className="mt-1.5 bg-white border-ash h-28" placeholder="Arrival time, parking, cottage preference, or anything else..." />
              </div>
              <button type="submit" className="w-full bg-terracotta hover:bg-terracotta-dark text-white font-body font-semibold text-sm py-3.5 rounded-md transition-all duration-150 shadow-sm">
                Send Enquiry
              </button>
            </form>
          )}
        </div>
      </SectionWrapper>

      <div className="bg-navy py-14">
        <div className="max-w-[1200px] mx-auto px-6">
          <h3 className="font-display text-white text-2xl md:text-3xl font-medium text-center mb-10">Why Enquire Directly?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyDirect.map((item) => (
              <div key={item.title} className="text-center">
                <item.icon size={24} className="text-terracotta mx-auto mb-3" />
                <p className="text-white font-body text-sm">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
