import React from "react";
import Copy from "../../Components/TextAnimation/Copy";
import { Clock, Globe, CalendarCheck, HeartHandshake } from "lucide-react";

const highlights = [
  {
    icon: <Clock size={28} strokeWidth={1.5} />,
    title: "Quick Response",
    description:
      "We respond to all inquiries within 24 hours, so you're never left waiting.",
  },
  {
    icon: <Globe size={28} strokeWidth={1.5} />,
    title: "Destination Events",
    description:
      "We plan events across Colorado and beyond — no vision is too far to reach.",
  },
  {
    icon: <CalendarCheck size={28} strokeWidth={1.5} />,
    title: "Flexible Scheduling",
    description:
      "Weekend, weekday, or holiday — we work around your preferred dates.",
  },
  {
    icon: <HeartHandshake size={28} strokeWidth={1.5} />,
    title: "No Obligation Quote",
    description:
      "Get a detailed, honest quote with zero pressure. Your comfort comes first.",
  },
];

const ContactInfo = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-14">
        {/* Section header */}
        <div className="flex flex-col items-center mb-16">
          <Copy>
            <span className="font-body text-xs tracking-[0.18em] border border-gray-300 rounded-full px-5 py-1.5 text-gray-600 mb-6 uppercase inline-block">
              Why Reach Out
            </span>
          </Copy>
          <Copy>
            <h2 className="font-body text-2xl md:text-3xl text-black text-center max-w-lg leading-tight">
              From the First Call to the Final Dance — We're With You
            </h2>
          </Copy>
        </div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {highlights.map((item) => (
            <div key={item.title} className="bg-[#f2f2f0] rounded-2xl p-6 flex flex-col gap-4 h-full">
              <Copy delay={0.5} type="slide">
              <div className="h-11 w-11 rounded-xl bg-[#8F1B32] text-white flex items-center justify-center shadow-md shadow-[#8F1B32]/30">
                {item.icon}
              </div>
              </Copy>
              
              <div>
                <Copy delay={0.7} type="slide">
                <h3 className="font-body text-sm font-semibold text-black mb-1.5 leading-snug">
                  {item.title}
                </h3>
                </Copy>
                <Copy delay={0.8} type="slide">
                <p className="font-body text-sm text-gray-500">
                  {item.description}
                </p>
                </Copy>
              </div>
            </div>
          ))}
        </div>

        {/* Map embed */}
        <div className="mt-16 rounded-2xl overflow-hidden">
          <Copy>
            <iframe
              title="Momentify Events Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3074.896!2d-104.7719!3d39.6236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c87d6e3b8b88d%3A0x0!2sAurora%2C+CO+80016!5e0!3m2!1sen!2sus!4v1711700000000!5m2!1sen!2sus"
              className="w-full h-[300px] md:h-[400px] border-0 rounded-2xl"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Copy>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
