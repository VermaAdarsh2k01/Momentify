"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Copy from "../../Components/TextAnimation/Copy";

const faqs = [
  {
    id: 1,
    question: "How do I get started with planning my event?",
    answer:
      "Simply fill out the contact form above or give us a call. We'll schedule a free consultation to discuss your vision, budget, and timeline. From there, we'll put together a tailored proposal for you.",
  },
  {
    id: 2,
    question: "Is there a consultation fee?",
    answer:
      "No — your initial consultation is completely free and comes with no obligation. We want to understand your event before we talk numbers.",
  },
  {
    id: 3,
    question: "How far in advance should I book?",
    answer:
      "We recommend booking 6–12 months ahead for weddings and large events. For smaller gatherings, 2–3 months is usually sufficient. That said, we can accommodate shorter timelines depending on availability.",
  },
  {
    id: 4,
    question: "Do you travel for destination events?",
    answer:
      "Absolutely. While we're based in Denver, Colorado, we've planned events across multiple states. Travel and accommodation costs are discussed transparently during the proposal stage.",
  },
  {
    id: 5,
    question: "What is your pricing structure?",
    answer:
      "Our pricing depends on the scale and requirements of your event. We offer flexible packages — from full-service planning to day-of coordination — and we'll always provide a clear, itemized quote before you commit.",
  },
  {
    id: 6,
    question: "Can I customize a package to fit my needs?",
    answer:
      "Yes! Every event is unique and we encourage customization. Mix and match services, add extras, or scale down — we'll build around your priorities.",
  },
];

const ContactFAQ = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 w-full">
        {/* Section header */}
        <div className="flex flex-col items-center mb-14">
          <Copy>
            <span className="font-body text-xs tracking-[0.18em] border border-gray-300 rounded-full px-5 py-1.5 text-gray-600 mb-6 uppercase inline-block">
              FAQ
            </span>
          </Copy>
          <Copy>
            <h2 className="font-body text-2xl md:text-3xl text-black text-center max-w-lg leading-tight">
              Common Questions Before You Reach Out
            </h2>
          </Copy>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-4 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-start gap-4"
              >
                <h3 className="text-black font-title text-base sm:text-lg lg:text-xl leading-tight flex-1">
                  {faq.question}
                </h3>
                <span
                  className={`text-xl sm:text-2xl transform transition-transform duration-300 flex-shrink-0 mt-0.5 ${
                    openId === faq.id ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openId === faq.id ? "auto" : 0,
                  opacity: openId === faq.id ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-4 pb-4 pt-2 sm:px-6 sm:pb-5 lg:px-8 lg:pb-6">
                  <p className="text-gray-700 font-body text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
