"use client";
import React from "react";
import Copy from "../TextAnimation/Copy";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah & Michael Johnson",
      event: "Wedding Celebration",
      rating: 5,
      text: "Momentify turned our dream wedding into reality. Every detail was perfect, from the stunning decor to the seamless coordination. Our guests are still talking about how magical it was!",
      image: "/testimonials/couple1.jpg"
    },
    {
      id: 2,
      name: "David Chen",
      event: "Corporate Product Launch",
      rating: 5,
      text: "The team at Momentify delivered an exceptional corporate event that impressed our clients and stakeholders. Professional, creative, and flawlessly executed.",
      image: "/testimonials/corporate1.jpg"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      event: "50th Anniversary Party",
      rating: 5,
      text: "They made my parents' 50th anniversary celebration absolutely perfect. The attention to detail and personal touches made it truly special for our entire family.",
      image: "/testimonials/family1.jpg"
    }
  ];

  return (
    <section className="bg-gray-100 min-h-screen flex items-center py-20 lg:py-32" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <Copy key={testimonial.id} delay={index * 0.1} type="slide">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gray-300 mr-4 flex items-center justify-center text-2xl">
                    👤
                  </div>
                  <div>
                    <h4 className="text-black font-title text-lg mb-1">{testimonial.name}</h4>
                    <p className="text-gray-600 font-body text-sm">{testimonial.event}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                
                <p className="text-gray-700 font-body leading-relaxed italic flex-grow">
                  "{testimonial.text}"
                </p>
              </div>
            </Copy>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;