import './ServiceFlipGrid.css'

const services = [
  {
    id: 1,
    label: 'Venue Sourcing',
    stat: '500+',
    detail: 'Curated venues across 40 cities worldwide',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80',
  },
  {
    id: 2,
    label: 'Catering & Dining',
    stat: '120+',
    detail: 'Preferred chef partners and catering studios',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
  },
  {
    id: 3,
    label: 'AV & Production',
    stat: '98%',
    detail: 'Client satisfaction on technical delivery',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80',
  },
  {
    id: 4,
    label: 'Décor & Styling',
    stat: '1,200+',
    detail: 'Events styled with bespoke floral and décor',
    image: '/service-decor.jpeg',
  },
  {
    id: 5,
    label: 'Entertainment',
    stat: '300+',
    detail: 'Artists, performers and speakers on roster',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80',
  },
  {
    id: 6,
    label: 'Photography & Film',
    stat: '4K',
    detail: 'Full cinematic coverage for every occasion',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80',
  },
]

export default function ServiceFlipGrid() {
  return (
    <section className="py-20 max-w-5xl mx-auto px-4">
      {/* Centered header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        {/* <p className="text-xs font-semibold uppercase  text-gray-400 mb-4 flex items-center justify-center gap-2">
          Our 
          <img src='/service_icon.svg' color='red'></img> 
          Services
        </p> */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-title text-black">
          We are a team of{' '}
          <span className="text-gray-900 font-title">visionary planners,</span>{' '}
          <span className="text-gray-900 font-title">designers,</span> and{' '}
          <span className="text-gray-900 font-title">producers</span>{' '}
          dedicated to crafting{' '}
          <span className="text-gray-900 font-title">exceptional events.</span>
        </h2>
        {/* <p className="text-base text-gray-500 leading-relaxed">
          Our mission is to bridge creativity with flawless execution — from intimate
          gatherings to large-scale productions, we handle every detail with precision and care.
        </p> */}
      </div>

      <div className="grid grid-cols-3 gap-3">
        {services.map((svc) => (
          <FlipCard key={svc.id} svc={svc} />
        ))}
      </div>
    </section>
  )
}

function FlipCard({ svc }) {
  return (
    <div className="flip-card rounded-2xl">
      <div className="flip-card-inner">

        {/* Front */}
        <div className="flip-card-front bg-gray-100 rounded-2xl p-5 flex flex-col justify-between">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
            {svc.label}
          </p>
          <div>
            <p className="text-3xl font-bold text-gray-900 leading-none mb-2">
              {svc.stat}
            </p>
            <p className="text-xs text-gray-500 leading-relaxed">
              {svc.detail}
            </p>
          </div>
        </div>

        {/* Back */}
        <div className="flip-card-back rounded-2xl overflow-hidden relative">
          <img
            src={svc.image}
            alt={svc.label}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-semibold leading-snug">
            {svc.label}
          </p>
        </div>

      </div>
    </div>
  )
}
