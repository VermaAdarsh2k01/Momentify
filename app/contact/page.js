import ContactHero from "./(components)/ContactHero";
import ContactForm from "./(components)/ContactForm";
import ContactInfo from "./(components)/ContactInfo";
import ContactFAQ from "./(components)/ContactFAQ";
import WhyChooseUs from "../Components/WhyChooseUs/WhyChooseUs";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <WhyChooseUs />
      <ContactFAQ />
      
    </div>
  );
};

export default ContactPage;
