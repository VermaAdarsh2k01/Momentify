import { portfolioItems } from '../services/servicesData'
import ServicesCarousel from '../Components/ServicesCarousel/ServicesCarousel'

const services = portfolioItems.map((item) => ({
  id: item.id,
  label: item.category,
  image: item.mediaUrl,
}))

export default function ServicesSection() {
  return (
    <section className="w-screen bg-white py-20 px-4" id="services">
      <div className="max-w-7xl mx-auto">

        {/* ── Section header ── */}
        <div className="flex flex-col items-center mb-20">
          <span className="font-body text-xs tracking-[0.18em] border border-gray-300 rounded-full px-5 py-1.5 text-gray-600 mb-6 uppercase">
            Services
          </span>
          <h2 className="font-body text-2xl md:text-3xl text-black text-center max-w-xl leading-tight">
            Explore the Events We Bring to Life
          </h2>
        </div>

        {/* ── Interactive carousel (client) ── */}
        <ServicesCarousel services={services} />

      </div>
    </section>
  )
}
