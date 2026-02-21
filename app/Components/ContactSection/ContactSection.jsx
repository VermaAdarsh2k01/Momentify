"use client";
import ContactButton from "../ContactButton/ContactButton.jsx";

const ContactSection = () => {
  // Custom form submission handler
  const handleContactFormSubmit = async (formData) => {
    // Add your custom logic here
    // For example: send to API, email service, etc.
    console.log("Contact form submitted:", formData);
    
    // Example: You could send this data to your backend
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });
  };

  return (
    <div className="h-[50svh] w-full bg-white flex items-center justify-center rounded-2xl overflow-hidden">
      <div className="text-center space-y-8">
        <h2 className="text-black text-4xl md:text-6xl font-title-bold">
          Ready to Get Started?
        </h2>
        <ContactButton
          buttonText="View Experiences"
          modalTitle="Let's Create Something Amazing Together"
          modalSubtitle="Tell us about your vision and we'll help bring it to life."
          onFormSubmit={handleContactFormSubmit}
          variant="secondary"
        />
      </div>
    </div>
  );
};

export default ContactSection;