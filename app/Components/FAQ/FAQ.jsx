"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Copy from "../TextAnimation/Copy";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What types of events do you specialize in?",
      answer: "We specialize in luxury weddings, corporate events, social celebrations, product launches, and private parties. Our expertise covers both intimate gatherings and large-scale events."
    },
    {
      id: 2,
      question: "How far in advance should I book your services?",
      answer: "We recommend booking 6-12 months in advance for weddings and major events. However, we can accommodate shorter timelines depending on availability and event complexity."
    },
    {
      id: 3,
      question: "Do you provide services outside your local area?",
      answer: "Yes, we provide destination event planning services. Travel and accommodation costs may apply depending on the location and duration of the event."
    },
    {
      id: 4,
      question: "What's included in your event planning packages?",
      answer: "Our packages include venue selection, vendor coordination, design and decor, timeline management, day-of coordination, and post-event cleanup. We customize each package to your specific needs."
    },
    {
      id: 5,
      question: "Can you work within my budget?",
      answer: "Absolutely! We work with various budget ranges and will help you prioritize elements to create the best possible event within your budget constraints."
    },
    {
      id: 6,
      question: "Do you handle vendor payments and contracts?",
      answer: "Yes, we can manage vendor relationships, contracts, and payments on your behalf. This ensures consistency and reduces stress during the planning process."
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="bg-white min-h-screen flex items-center py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 w-full">
        <Copy delay={0} type="slide">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-black text-5xl lg:text-7xl xl:text-8xl font-title leading-[1] mb-6">
              FAQ
            </h2>
            <div className="flex justify-center mb-8">
              <img 
                src="/highlight.svg" 
                alt="Highlight decoration" 
                className="w-40 h-auto lg:w-48 xl:w-56 invert"
              />
            </div>
            <p className="text-black text-lg lg:text-xl font-body max-w-3xl mx-auto leading-relaxed">
              Find answers to commonly asked questions about our services and process
            </p>
          </div>
        </Copy>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Copy key={faq.id} delay={index * 0.1} type="slide">
              <div className="border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-8 py-6 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                >
                  <h3 className="text-black font-title text-lg lg:text-xl pr-4">
                    {faq.question}
                  </h3>
                  <span className={`text-2xl transform transition-transform duration-300 ${
                    openFAQ === faq.id ? 'rotate-45' : ''
                  }`}>
                    +
                  </span>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openFAQ === faq.id ? "auto" : 0,
                    opacity: openFAQ === faq.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6 pt-2">
                    <p className="text-gray-700 font-body leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </div>
            </Copy>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;