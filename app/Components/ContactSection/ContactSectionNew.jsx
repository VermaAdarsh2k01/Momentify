"use client";
import React, { useState } from "react";
import Copy from "../TextAnimation/Copy";

const ContactSectionNew = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
  };

  const validateForm = () => {
    const newErrors = {};

    // First Name validation (REQUIRED)
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    // Last Name validation (OPTIONAL - no validation needed)

    // Email validation (REQUIRED)
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation (REQUIRED)
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Message validation (OPTIONAL - only validate if provided)
    if (formData.message.trim() && formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Here you would typically send the form data to your backend
      console.log("Form submitted:", formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Reset form on successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
      });
      
      alert("Thank you! Your message has been sent successfully.");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Sorry, there was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="bg-black min-h-screen flex items-center py-32 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 w-full">
        <Copy delay={0} type="slide">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-white text-5xl lg:text-7xl xl:text-8xl font-title leading-[1] mb-2">
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
                      <p className="text-gray-300 font-body">contact@momentifyevents.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">📱</span>
                    <div>
                      <p className="text-white font-body">Phone</p>
                      <p className="text-gray-300 font-body">+1 303 419 1999</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">📍</span>
                    <div>
                      <p className="text-white font-body">Location</p>
                      <p className="text-gray-300 font-body">6109 S Cathay CT aurora , CO 80016 ,Denver,  Colorado</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div>
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
              </div> */}
            </div>
          </Copy>

          {/* Contact Form */}
          <Copy delay={0.4} type="slide">
            <div className="bg-black border-2 border-white bg-opacity-5 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-white font-title text-2xl mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-black bg-opacity-10 border rounded-lg text-white placeholder-gray-300 font-body focus:outline-none transition-all duration-200 ${
                        errors.firstName 
                          ? 'border-red-500 border-opacity-70 focus:border-red-400' 
                          : 'border-white border-opacity-20 focus:border-opacity-50'
                      }`}
                    />
                    {errors.firstName && (
                      <p className="text-red-400 text-sm mt-1 font-body">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-black bg-opacity-10 border rounded-lg text-white placeholder-gray-300 font-body focus:outline-none transition-all duration-200 ${
                        errors.lastName 
                          ? 'border-red-500 border-opacity-70 focus:border-red-400' 
                          : 'border-white border-opacity-20 focus:border-opacity-50'
                      }`}
                    />
                    {errors.lastName && (
                      <p className="text-red-400 text-sm mt-1 font-body">{errors.lastName}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-black bg-opacity-10 border rounded-lg text-white placeholder-gray-300 font-body focus:outline-none transition-all duration-200 ${
                      errors.email 
                        ? 'border-red-500 border-opacity-70 focus:border-red-400' 
                        : 'border-white border-opacity-20 focus:border-opacity-50'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1 font-body">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-black bg-opacity-10 border rounded-lg text-white placeholder-gray-300 font-body focus:outline-none transition-all duration-200 ${
                      errors.phone 
                        ? 'border-red-500 border-opacity-70 focus:border-red-400' 
                        : 'border-white border-opacity-20 focus:border-opacity-50'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1 font-body">{errors.phone}</p>
                  )}
                </div>
                
                <div>
                  <textarea
                    rows={4}
                    name="message"
                    placeholder="Tell us about your event..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-black bg-opacity-10 border rounded-lg text-white placeholder-gray-300 font-body focus:outline-none transition-all duration-200 resize-none ${
                      errors.message 
                        ? 'border-red-500 border-opacity-70 focus:border-red-400' 
                        : 'border-white border-opacity-20 focus:border-opacity-50'
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1 font-body">{errors.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-4 rounded-lg font-title text-lg transition-all duration-300 transform ${
                    isSubmitting
                      ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                      : 'bg-white text-black '
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
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