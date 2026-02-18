"use client";
import React from "react";
import Copy from "../TextAnimation/Copy";

const ContactSectionNew = () => {
  return (
    <section className="bg-black min-h-screen flex items-center py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 w-full">
        <Copy delay={0} type="slide">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-white text-5xl lg:text-7xl xl:text-8xl font-title leading-[1] mb-6">
              Contact
            </h2>
            <div className="flex justify-center mb-8">
              <img 
                src="/highlight.svg" 
                alt="Highlight decoration" 
                className="w-40 h-auto lg:w-48 xl:w-56"
              />
            </div>
            <p className="text-white text-lg lg:text-xl font-body max-w-3xl mx-auto leading-relaxed">
              Ready to start planning your perfect event? Get in touch with us today
            </p>
          </div>
        </Copy>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <Copy delay={0.2} type="slide">
            <div className="space-y-8">
              <div>
                <h3 className="text-white font-title text-2xl mb-4">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">📧</span>
                    <div>
                      <p className="text-white font-body">Email</p>
                      <p className="text-gray-300 font-body">hello@momentify.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">📱</span>
                    <div>
                      <p className="text-white font-body">Phone</p>
                      <p className="text-gray-300 font-body">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">📍</span>
                    <div>
                      <p className="text-white font-body">Location</p>
                      <p className="text-gray-300 font-body">New York, NY</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-white font-title text-2xl mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <button className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all duration-300">
                    <span className="text-white text-xl">📘</span>
                  </button>
                  <button className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all duration-300">
                    <span className="text-white text-xl">📷</span>
                  </button>
                  <button className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all duration-300">
                    <span className="text-white text-xl">🐦</span>
                  </button>
                </div>
              </div>
            </div>
          </Copy>

          {/* Contact Form */}
          <Copy delay={0.4} type="slide">
            <div className="bg-white bg-opacity-5 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-white font-title text-2xl mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white placeholder-gray-300 font-body focus:outline-none focus:border-opacity-50 transition-all duration-200"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white placeholder-gray-300 font-body focus:outline-none focus:border-opacity-50 transition-all duration-200"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white placeholder-gray-300 font-body focus:outline-none focus:border-opacity-50 transition-all duration-200"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white placeholder-gray-300 font-body focus:outline-none focus:border-opacity-50 transition-all duration-200"
                />
                <textarea
                  rows={4}
                  placeholder="Tell us about your event..."
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white placeholder-gray-300 font-body focus:outline-none focus:border-opacity-50 transition-all duration-200 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-white text-black px-6 py-4 rounded-lg font-title text-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </Copy>
        </div>
      </div>
    </section>
  );
};

export default ContactSectionNew;