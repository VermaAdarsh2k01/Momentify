"use client";
import React from "react";
import ContactButton from "./ContactButton";

const ContactButtonExample = () => {
  // Custom form submission handler
  const handleFormSubmission = async (formData) => {
    // Here you can add your custom logic for handling form submissions
    // For example:
    // - Send data to your API endpoint
    // - Integrate with email services like EmailJS, SendGrid, etc.
    // - Save to database
    // - Send to CRM system
    
    console.log("Custom form handler received:", formData);
    
    // Example API call (uncomment and modify as needed):
    /*
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      
      const result = await response.json();
      console.log('Form submitted successfully:', result);
    } catch (error) {
      console.error('Error submitting form:', error);
      throw error; // Re-throw to show error message to user
    }
    */
  };

  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-title-bold text-center mb-8">
          Contact Button Examples
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Primary Button */}
          <div className="text-center">
            <h3 className="text-xl font-title mb-4">Primary Style</h3>
            <ContactButton
              buttonText="View Experiences"
              modalTitle="Let's Create Something Amazing"
              modalSubtitle="Tell us about your vision and we'll bring it to life."
              onFormSubmit={handleFormSubmission}
              variant="primary"
            />
          </div>

          {/* Secondary Button */}
          <div className="text-center">
            <h3 className="text-xl font-title mb-4">Secondary Style</h3>
            <ContactButton
              buttonText="Get Started"
              modalTitle="Ready to Begin?"
              modalSubtitle="Share your project details and let's get started."
              onFormSubmit={handleFormSubmission}
              variant="secondary"
            />
          </div>

          {/* Outline Button */}
          <div className="text-center">
            <h3 className="text-xl font-title mb-4">Outline Style</h3>
            <ContactButton
              buttonText="Contact Us"
              modalTitle="Get In Touch"
              modalSubtitle="We'd love to hear from you. Send us a message!"
              onFormSubmit={handleFormSubmission}
              variant="outline"
            />
          </div>
        </div>

        {/* Custom Styled Button */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-title mb-4">Custom Styled</h3>
          <ContactButton
            buttonText="Start Your Journey"
            modalTitle="Transform Your Ideas"
            modalSubtitle="Let's discuss how we can help you achieve your goals."
            onFormSubmit={handleFormSubmission}
            variant="primary"
            className="bg-gradient-to-r from-purple-600 to-blue-600 border-transparent hover:from-blue-600 hover:to-purple-600"
          />
        </div>

        {/* Usage Instructions */}
        <div className="mt-16 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-title-bold mb-4">How to Use</h2>
          <div className="space-y-4 font-body">
            <p>
              <strong>Basic Usage:</strong> Import and use the ContactButton component anywhere in your app.
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`import ContactButton from './Components/ContactButton/ContactButton';

<ContactButton 
  buttonText="Your Button Text"
  modalTitle="Modal Title"
  modalSubtitle="Modal subtitle"
  onFormSubmit={handleFormSubmission}
  variant="primary" // primary, secondary, outline
/>`}
            </pre>
            
            <p>
              <strong>Props:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><code>buttonText</code>: Text displayed on the button</li>
              <li><code>modalTitle</code>: Title shown in the modal</li>
              <li><code>modalSubtitle</code>: Subtitle shown in the modal</li>
              <li><code>onFormSubmit</code>: Function to handle form submission</li>
              <li><code>variant</code>: Button style (primary, secondary, outline)</li>
              <li><code>className</code>: Additional CSS classes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactButtonExample;