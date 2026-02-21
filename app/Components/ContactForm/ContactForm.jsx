"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { sendContactEmail } from "../../utils/emailjs";

const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Send email using EmailJS utility
      const result = await sendContactEmail(formData);
      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      
      // Call the onSubmit callback if provided
      if (onSubmit) {
        await onSubmit(formData);
      }
      
      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = `
    w-full px-4 py-3 bg-transparent border border-neutral-300 dark:border-neutral-700 
    rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
    transition-all duration-200 text-black dark:text-white placeholder-neutral-500 
    dark:placeholder-neutral-400 font-body
  `;

  const labelClasses = `
    block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 font-body
  `;

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className={labelClasses}>
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="Enter your first name"
          />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClasses}>
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="Enter your last name"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClasses}>
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={inputClasses}
          placeholder="Enter your email address"
        />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Enter your phone number"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={1}
          className={inputClasses}
          placeholder="Tell us about your project or inquiry..."
        />
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className={`
          w-full py-4 px-6 bg-black dark:bg-white text-white dark:text-black 
          rounded-lg font-medium transition-all duration-200 hover:bg-neutral-800 
          dark:hover:bg-neutral-200 disabled:opacity-50 disabled:cursor-not-allowed
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          font-body uppercase tracking-wide
        `}
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          </span>
        ) : (
          "Send Message"
        )}
      </motion.button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
        >
          <p className="text-green-800 dark:text-green-200 font-medium">
            ✅ Message sent successfully! We'll get back to you soon.
          </p>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
        >
          <p className="text-red-800 dark:text-red-200 font-medium">
            ❌ Failed to send message. Please try again or contact us directly.
          </p>
        </motion.div>
      )}
    </motion.form>
  );
};

export default ContactForm;