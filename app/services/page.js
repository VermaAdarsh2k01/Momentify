import Hero2 from "./(components)/Hero2";
import ServicesContent from "./(components)/ServicesContent";
import ExtraServices from "./(components)/ExtraServices";
import PackagesSection from "../sections/PackagesSection";
import WhyChooseUs from "../Components/WhyChooseUs/WhyChooseUs";
import ContactFAQ from "../contact/(components)/ContactFAQ";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-[#faf9f6]">
      {/* Hero Section */}
      {/* <Hero /> */}
      <Hero2 />
      
      {/* <ImageReveal/> */}
      {/* Services Content */}  
      <ServicesContent />
      <ExtraServices />
      <PackagesSection />
      <WhyChooseUs />
      <ContactFAQ />
    </div>
  );
};

export default ServicesPage;