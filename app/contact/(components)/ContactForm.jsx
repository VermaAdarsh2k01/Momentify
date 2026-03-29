"use client";
import React, { useState } from "react";
import Copy from "../../Components/TextAnimation/Copy";
import { ArrowUpRight, Check, MessageCircle, Clock, Sparkles } from "lucide-react";

const eventTypes = [
  "Wedding",
  "Corporate Event",
  "Birthday Party",
  "Baby Shower",
  "Anniversary",
  "Cultural Event",
  "Holiday Party",
  "Other",
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) =>
    /^[\+]?[1-9][\d]{0,15}$/.test(phone.replace(/[\s\-\(\)]/g, ""));

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(formData.email)) newErrors.email = "Please enter a valid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!validatePhone(formData.phone)) newErrors.phone = "Please enter a valid phone number";
    if (formData.message.trim() && formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setIsSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        eventType: "",
        message: "",
      });
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBase =
    "w-full px-5 py-3.5 bg-[#f2f2f0] border border-transparent rounded-xl text-black placeholder-neutral-400 font-body text-sm focus:outline-none focus:border-[#8F1B32]/30 transition-all duration-200";
  const errorBorder = "border-red-400";

  if (isSubmitted) {
    return (
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-14 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
            <Check size={32} className="text-green-600" />
          </div>
          <Copy>
            <h2 className="font-title text-3xl md:text-4xl text-black mb-4">
              Thank You!
            </h2>
          </Copy>
          <Copy>
            <p className="font-body text-neutral-500 text-base max-w-md mx-auto mb-8">
              We've received your message and will get back to you within 24
              hours. We're excited to start planning your event!
            </p>
          </Copy>
          <button
            onClick={() => setIsSubmitted(false)}
            className="inline-flex items-center gap-2 bg-black text-white text-sm font-body px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            Send Another Message
            <ArrowUpRight size={15} />
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-14">
        {/* Section header */}
        <div className="flex flex-col items-center mb-16">
          <Copy>
            <span className="font-body text-xs tracking-[0.18em] border border-gray-300 rounded-full px-5 py-1.5 text-gray-600 mb-6 uppercase inline-block">
              Get In Touch
            </span>
          </Copy>
          <Copy>
            <h2 className="font-body text-2xl md:text-3xl text-black text-center max-w-xl leading-tight">
              Tell Us About Your Event and We'll Handle the Rest
            </h2>
          </Copy>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          {/* Left — copy + image */}
          <div>
            {/* <Copy>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8">
                <img
                  src="/services/wedding.webp"
                  alt="Event planning"
                  className="w-full h-full object-cover"
                />
              </div>
            </Copy> */}
            <Copy>
              <h3 className="font-title text-2xl md:text-3xl text-black mb-4">
                Every Detail Matters
              </h3>
            </Copy>
            <Copy>
              <p className="font-body text-sm text-neutral-500 leading-relaxed mb-6">
                Share your vision with us and our team will craft a personalized
                plan tailored to your event. No consultation fee — just a
                genuine conversation about bringing your ideas to life.
              </p>
            </Copy>
            <div className="flex flex-col gap-4 mt-2">
              <Copy>
                <div className="bg-[#f2f2f0] rounded-xl px-5 py-5 flex items-center gap-5">
                  <div className="h-11 w-11 rounded-xl bg-[#8F1B32] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#8F1B32]/30 mb-2">
                    <MessageCircle size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-body text-sm font-medium text-black mv">Free Initial Consultation</p>
                    <p className="font-body text-xs text-gray-400 mt-0.5">No obligation, no pressure</p>
                  </div>
                </div>
              </Copy>
              <Copy>
                <div className="bg-[#f2f2f0] rounded-xl px-5 py-5 flex items-center gap-5">
                  <div className="h-11 w-11 rounded-xl bg-[#8F1B32] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#8F1B32]/30 mb-2">
                    <Clock size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-body text-sm font-medium text-black">Response Within 24 Hours</p>
                    <p className="font-body text-xs text-gray-400 mt-0.5">We value your time</p>
                  </div>
                </div>
              </Copy>
              <Copy>
                <div className="bg-[#f2f2f0] rounded-xl px-5 py-5 flex items-center gap-5">
                  <div className="h-11 w-11 rounded-xl bg-[#8F1B32] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#8F1B32]/30 mb-2">
                    <Sparkles size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-body text-sm font-medium text-black">Custom Packages Available</p>
                    <p className="font-body text-xs text-gray-400 mt-0.5">Tailored to your vision & budget</p>
                  </div>
                </div>
              </Copy>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name *"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`${inputBase} ${errors.firstName ? errorBorder : ""}`}
                  />
                  {errors.firstName && (
                    <p className="text-red-400 text-xs mt-1 font-body">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={inputBase}
                  />
                </div>
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${inputBase} ${errors.email ? errorBorder : ""}`}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1 font-body">{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`${inputBase} ${errors.phone ? errorBorder : ""}`}
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1 font-body">{errors.phone}</p>
                )}
              </div>

              <div>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className={`${inputBase} ${!formData.eventType ? "text-neutral-400" : ""}`}
                >
                  <option value="" disabled>
                    Select Event Type
                  </option>
                  {eventTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <textarea
                  rows={5}
                  name="message"
                  placeholder="Tell us about your event — date, guest count, ideas, or anything else..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputBase} resize-none ${errors.message ? errorBorder : ""}`}
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1 font-body">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center justify-center gap-2 px-8 py-2.5 rounded-full font-body text-sm tracking-wide transition-all duration-300 ${
                  isSubmitting
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <ArrowUpRight size={14} />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
