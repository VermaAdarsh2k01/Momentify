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
  variant = "primary" // primary, secondary, outline
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

  const getButtonClasses = () => {
    const baseClasses = `
      relative inline-flex items-center justify-between gap-4 px-8 py-4 
      rounded-full font-body font-medium text-lg transition-all duration-300 
      overflow-hidden group cursor-pointer border-2 uppercase tracking-wide
    `;

    switch (variant) {
      case "secondary":
        return `${baseClasses} bg-white text-black border-black hover:bg-black hover:text-white`;
      case "outline":
        return `${baseClasses} bg-transparent text-black border-black hover:bg-black hover:text-white`;
      default: // primary
        return `${baseClasses} bg-black text-white border-black hover:bg-white hover:text-black`;
    }
  };

  return (
    <Modal>
      <ModalTrigger className={`${getButtonClasses()} ${className}`}>
        <motion.div 
          className="flex items-center justify-between w-full"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10">{buttonText}</span>
          
          {/* Arrow Icon */}
          <motion.div
            className="relative z-10 w-8 h-8 rounded-full bg-current flex items-center justify-center"
            style={{
              backgroundColor: variant === "primary" ? "white" : "black",
              color: variant === "primary" ? "black" : "white",
            }}
            whileHover={{ 
              rotate: 45,
              backgroundColor: variant === "primary" ? "black" : "white",
              color: variant === "primary" ? "white" : "black",
            }}
            transition={{ duration: 0.3 }}
          >
            <svg
              width="16"
              height="16"
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
          </motion.div>
        </motion.div>
        
        {/* Background animation */}
        <motion.div
          className="absolute inset-0 bg-current opacity-0 group-hover:opacity-10 transition-opacity duration-300"
          initial={false}
        />
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
                className="text-3xl md:text-xl font-title-bold text-black dark:text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {modalTitle}
              </motion.h2>
              <motion.p 
                className="text-neutral-600 dark:text-neutral-400 text-lg font-body"
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