import Hero2 from "./(components)/Hero2";
import ServicesContent from "./(components)/ServicesContent";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-[#faf9f6]">
      {/* Hero Section */}
      {/* <Hero /> */}
      <Hero2 />
      {/* <ImageReveal/> */}
      {/* Services Content */}
      <ServicesContent />
    </div>
  );
};

export default ServicesPage;