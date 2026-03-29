import Copy from '../Components/TextAnimation/Copy'
import TestimonialsCarousel from '../Components/TestimonialsCarousel/TestimonialsCarousel'

const testimonials = [
  {
    id: 1,
    name: 'Priya Mehta',
    role: 'Birthday Celebration',
    quote: "Momentify turned my 30th birthday into something I will never forget. Every detail was perfect — from the florals to the timeline. Truly magical.",
    initials: 'PM',
  },
  {
    id: 2,
    name: 'Rahul & Sneha Kapoor',
    role: 'Wedding Reception',
    quote: "We handed them our vision and they delivered ten times over. The coordination was flawless and our guests are still talking about it months later.",
    initials: 'RK',
  },
  {
    id: 3,
    name: 'Arjun Verma',
    role: 'Corporate Product Launch',
    quote: "Professional, punctual, and creative. The branding, stage setup, and live stream all worked perfectly. I would recommend Momentify to any business.",
    initials: 'AV',
  },
  {
    id: 4,
    name: 'Nisha Joshi',
    role: 'Baby Shower',
    quote: "The team understood exactly what I wanted and added touches I had not even thought of. Our intimate baby shower felt like a dream.",
    initials: 'NJ',
  },
  {
    id: 5,
    name: 'Karan Malhotra',
    role: 'Anniversary Dinner',
    quote: "From the very first call, I knew we were in good hands. Every detail reflected care, elegance, and a genuine love for what they do.",
    initials: 'KM',
  },
  {
    id: 6,
    name: 'Divya Sharma',
    role: 'Corporate Annual Meet',
    quote: "The event ran like clockwork. Our employees were genuinely impressed and the ambiance exceeded everything we had envisioned on paper.",
    initials: 'DS',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="w-screen bg-white py-24 px-4" id="testimonials">
      <div className="max-w-7xl mx-auto">

        {/* ── Section header ── */}
        <div className="flex flex-col items-center mb-16">
          <span className="font-body text-xs tracking-[0.18em] border border-gray-300 rounded-full px-5 py-1.5 text-gray-600 mb-6 uppercase">
            Testimonials
          </span>

          {/* Title row — carousel nav buttons are rendered inside the client component */}
          <div className="w-full">
            <Copy delay={0.3} type="slide">
              <h2 className="font-body text-2xl md:text-3xl text-black max-w-xl leading-tight">
                Words From the People We've Celebrated With
              </h2>
            </Copy>
          </div>
        </div>

        {/* ── Interactive carousel (client) ── */}
        <TestimonialsCarousel testimonials={testimonials} />

      </div>
    </section>
  )
}
