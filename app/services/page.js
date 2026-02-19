import Hero from "./(components)/Hero";
import ServicesContent from "./(components)/ServicesContent";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-[#faf9f6]">
      {/* Hero Section */}
      <Hero />
      
      {/* Services Content */}
      <ServicesContent />
    </div>
  );
};

export default ServicesPage;