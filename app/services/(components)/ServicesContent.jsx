"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardFlip from "@/components/kokonutui/card-flip";
import ContactSection from "@/app/Components/ContactSection/ContactSection";

gsap.registerPlugin(ScrollTrigger);

const ServicesContent = () => {
  const portfolioRef = useRef(null);
  const highlightsRef = useRef(null);

  useEffect(() => {
    // Portfolio cards animation
    gsap.fromTo(
      ".portfolio-card",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: portfolioRef.current,
          start: "top 80%",
        },
      }
    );

    // Highlights animation
    gsap.fromTo(
      ".highlight-item",
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: highlightsRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const portfolioItems = [
    {
      id: 1,
      title: "Wedding Events",
      subtitle: "Dream Wedding Planning",
      description: "Create your perfect wedding day with our comprehensive planning services. From intimate ceremonies to grand celebrations, we handle every detail to make your special day unforgettable.",
      features: ["Wedding ceremony", "Pre/Post Wedding Rituals", "Engagement", "Sangeet", "Dance preparation", "Full Baraat preparation"],
      category: "Wedding",
      link: "#",
      mediaUrl: "/services/wedding.jpg",
      mediaType: "image"
    },
    {
      id: 2,
      title: "Corporate Events",
      subtitle: "Professional Event Management",
      description: "Elevate your business events with our corporate planning expertise. From conferences to product launches, we ensure your professional gatherings leave a lasting impression.",
      features: ["Team events", "Corporate Parties"],
      category: "Corporate",
      link: "#",
      mediaUrl: "/services/corporate.jpg",
      mediaType: "image"
    },
    {
      id: 3,
      title: "Social Events",
      subtitle: "Social Gathering Excellence",
      description: "Transform your social events into memorable experiences. Whether it's a birthday party, anniversary, or casual gathering, we bring your vision to life.",
      features: ["Graduation party", "Proms Event", "The No-Reason party"],
      category: "Social",
      link: "#",
      mediaUrl: "/services/social.jpg",
      mediaType: "image"
    },
    {
      id: 4,
      title: "Cultural Events",
      subtitle: "Honoring Traditions",
      description: "Celebrate your cultural and religious milestones with respect and authenticity. We understand the importance of tradition and create meaningful ceremonies.",
      features: ["Mundan Ceremony", "Housewarming", "Festivals & Community Celebrations", "Prayer Meetings & Spiritual Gatherings", "Milestone Religious Ceremonies", "Custom Rituals & Traditions", "Quinceanera"],
      category: "Cultural & Religious",
      link: "#",
      mediaUrl: "/services/cultural.jpg",
      mediaType: "image"
    },
    {
      id: 5,
      title: "Celebrations of Life",
      subtitle: "Meaningful Tributes",
      description: "Honor and celebrate the life of your loved ones with dignity and grace. We help create meaningful gatherings that celebrate memories and bring comfort.",
      features: ["Baby Shower", "Birthday Parties", "Anniversaries", "Marriage Proposal", "Personalized Love Proposals", "Surprise Party", "Gender Reveal"],
      category: "Celebrations of Life",
      link: "#",
      mediaUrl: "/services/babyshower.jpg",
      mediaType: "image"
    },
    {
      id: 6,
      title: "Holiday Parties",
      subtitle: "Festive Event Planning",
      description: "Make your holiday celebrations magical with our festive event planning. From intimate family gatherings to large corporate holiday parties.",
      features: [],
      category: "Holiday Parties",
      link: "#",
      mediaUrl: "/services/holiday.jpg",
      mediaType: "image"
    },
    {
      id: 7,
      title: "Music/DJ/Dance",
      subtitle: "Entertainment & Music Services",
      description: "Bring energy and excitement to your events with our music and entertainment services. Professional DJs, live music, and dance entertainment.",
      features: ["Hollywood/Bollywood/Tollywood/Punjabi/Regional", "Dhol", "Special Occasion Dance performances", "DJ"],
      category: "Music/DJ/Dance",
      link: "#",
      mediaUrl: "/services/music.jpg",
      mediaType: "image"
    }
  ];

  const highlights = [
    {
      id: 1,
      image: "/api/placeholder/200/200",
      title: "Gourmet Catering",
      description: "Exquisite culinary experiences"
    },
    {
      id: 2,
      image: "/api/placeholder/200/200",
      title: "Pesto Chicken Salad",
      description: "Fresh and flavorful"
    },
    {
      id: 3,
      image: "/api/placeholder/200/200",
      title: "Premium Desserts",
      description: "Sweet endings to perfect events"
    },
    {
      id: 4,
      image: "/api/placeholder/200/200",
      title: "Artisan Appetizers",
      description: "Beautifully crafted starters"
    }
  ];

  return (
    <>
      {/* Services Section */}
      <section className="py-20 bg-white" ref={portfolioRef}>
        <div className="max-w-6xl mx-auto px-5">

          <div className="grid grid-cols-1 gap-6 lg:gap-8">
            {portfolioItems.map((item) => (
              <div key={item.id} className="portfolio-card flex justify-center">
                <CardFlip
                  title={item.title}
                  subtitle={item.subtitle}
                  description={item.description}
                  features={item.features}
                  mediaUrl={item.mediaUrl}
                  mediaType={item.mediaType}
                  scale={false}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      {/* <section className="py-20 bg-[#faf9f6]" ref={highlightsRef}>
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2c2c2c] mb-4 tracking-tight">Highlights That Define Excellence</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every detail matters in creating extraordinary experiences that leave lasting impressions
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:gap-8 mt-10">
            {highlights.map((highlight) => (
              <div 
                key={highlight.id} 
                className="highlight-item bg-white rounded-2xl p-6 lg:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-5">
                  <Image
                    src={highlight.image}
                    alt={highlight.title}
                    width={120}
                    height={120}
                    className="w-28 h-36 lg:w-32 lg:h-32 rounded-xl object-cover mx-auto"
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg lg:text-xl font-bold text-[#2c2c2c]">{highlight.title}</h4>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <ContactSection/>
    </>
  );
}

export default ServicesContent;