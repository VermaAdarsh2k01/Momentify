import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
export const initEmailJS = () => {
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  if (publicKey) {
    emailjs.init(publicKey);
  }
};

// Email service configuration
export const emailConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
};

// Validate EmailJS configuration
export const validateEmailConfig = () => {
  const { serviceId, templateId, publicKey } = emailConfig;
  
  if (!serviceId) {
    throw new Error('NEXT_PUBLIC_EMAILJS_SERVICE_ID is not configured');
  }
  
  if (!templateId) {
    throw new Error('NEXT_PUBLIC_EMAILJS_TEMPLATE_ID is not configured');
  }
  
  if (!publicKey) {
    throw new Error('NEXT_PUBLIC_EMAILJS_PUBLIC_KEY is not configured');
  }
  
  return { serviceId, templateId, publicKey };
};

// Send contact form email
export const sendContactEmail = async (formData) => {
  try {
    console.log('🔧 Starting email send process...');
    const { serviceId, templateId, publicKey } = validateEmailConfig();
    console.log('✅ EmailJS config validated:', { serviceId, templateId, publicKey: publicKey ? 'SET' : 'MISSING' });
    
    // Get current timestamp for the email
    const currentTime = new Date().toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });
    
    const templateParams = {
      // Variables matching your EmailJS template
      name: `${formData.firstName} ${formData.lastName}`,
      time: currentTime,
      message: formData.message,
      
      // Contact details for the template
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone || 'Not provided',
      company: formData.company || 'Not provided',
    };

    console.log('📧 Template params:', templateParams);
    console.log('🚀 Sending email via EmailJS...');

    const result = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );

    console.log('✅ Email sent successfully!', result);
    return result;
  } catch (error) {
    console.error('❌ EmailJS Error:', error);
    console.error('Error details:', {
      message: error.message,
      text: error.text,
      status: error.status
    });
    throw error;
  }
};