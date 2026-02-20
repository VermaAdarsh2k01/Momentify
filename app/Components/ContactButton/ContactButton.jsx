"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
} from "../UI/AnimatedModal";
import ContactForm from "../ContactForm/ContactForm";

const ContactButton = ({ 
  buttonText = "View Experiences",
  modalTitle = "Let's Start Your Journey",
  modalSubtitle = "Tell us about your project and we'll get back to you within 24 hours.",
  onFormSubmit,
  className = "",
  variant = "primary", // primary, secondary, outline
  scale = true, // boolean prop to control scale animation on hover
  size = "md" // sm, md, lg
}) => {
  const handleFormSubmit = async (formData) => {
    try {
      // If custom onFormSubmit is provided, use it
      if (onFormSubmit) {
        await onFormSubmit(formData);
      } else {
        // Default: Send to API endpoint
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to submit form');
        }
        
        const result = await response.json();
        console.log('Form submitted successfully:', result);
      }
      
      // Show success message
      alert("Thank you for your message! We'll get back to you soon.");
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert(`There was an error submitting your message: ${error.message}. Please try again.`);
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "px-6 py-3 gap-3 text-base";
      case "lg":
        return "px-10 py-5 gap-5 text-xl";
      default: // md
        return "px-8 py-4 gap-4 text-lg";
    }
  };

  const getIconSize = () => {
    switch (size) {
      case "sm":
        return { container: "w-6 h-6", svg: { width: "12", height: "12" } };
      case "lg":
        return { container: "w-10 h-10", svg: { width: "20", height: "20" } };
      default: // md
        return { container: "w-8 h-8", svg: { width: "16", height: "16" } };
    }
  };

  const getButtonClasses = () => {
    const baseClasses = `
      relative inline-flex items-center justify-between 
      rounded-full font-body font-medium 
      overflow-hidden group cursor-pointer border-2 uppercase tracking-wide
      ${getSizeClasses()}
    `;

    switch (variant) {
      case "secondary":
        return `${baseClasses} border-black`;
      case "outline":
        return `${baseClasses} border-black`;
      default: // primary
        return `${baseClasses} border-black`;
    }
  };

  return (
    <Modal>
      <ModalTrigger asChild>
        <motion.div 
          className={`${getButtonClasses()} ${className}`}
          initial={{
            backgroundColor: variant === "primary" ? "#000000" : variant === "secondary" ? "#ffffff" : "transparent",
            color: variant === "primary" ? "#ffffff" : "#000000"
          }}
          whileHover={{ 
            scale: scale ? 1.02 : 1,
            backgroundColor: variant === "primary" ? "#ffffff" : "#000000",
            color: variant === "primary" ? "#000000" : "#ffffff"
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between gap-4 w-full"          >
            <span className="relative z-10">{buttonText}</span>
            
            {/* Arrow Icon */}
            <div
              className={`relative z-10 ${getIconSize().container} rounded-full flex items-center justify-center transition-colors duration-300 ${
                variant === "primary" 
                  ? "bg-white text-black group-hover:bg-black group-hover:text-white" 
                  : "bg-black text-white group-hover:bg-white group-hover:text-black"
              }`}
            >
              <svg
                width={getIconSize().svg.width}
                height={getIconSize().svg.height}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7,7 17,7 17,17" />
              </svg>
            </div>
          </div>
          
          {/* Background animation */}
          <motion.div
            className="absolute inset-0 bg-current opacity-0 group-hover:opacity-10 transition-opacity duration-300"
            initial={false}
          />
        </motion.div>
      </ModalTrigger>

      <ModalBody>
        <ModalContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Modal Header */}
            <div className="mb-8 text-center">
              <motion.h2 
                className="text-3xl md:text-xl font-title-bold text-black mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {modalTitle}
              </motion.h2>
              <motion.p 
                className="text-neutral-600 text-lg font-body"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {modalSubtitle}
              </motion.p>
            </div>

            {/* Contact Form */}
            <ContactForm onSubmit={handleFormSubmit} />
          </motion.div>
        </ModalContent>
      </ModalBody>
    </Modal>
  );
};

export default ContactButton;