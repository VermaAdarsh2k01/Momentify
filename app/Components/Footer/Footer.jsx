import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src="/footer-logo.svg" alt="Momentify" className="h-10 w-auto" />
              
            </div>
            <p className="font-body text-white/90 max-w-sm leading-relaxed">
              Curated celebrations, refined experiences, and unforgettable stories
              for every occasion.
            </p>
          </div>

          <div>
            <h3 className="font-title text-3xl mb-5">Explore</h3>
            <div className="flex flex-col gap-3 font-body text-white/90">
              <Link href="/" className="hover:text-white transition-colors duration-300">
                Home
              </Link>
              <Link
                href="/services"
                className="hover:text-white transition-colors duration-300"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-title text-3xl mb-5">Contact Us</h3>
            <p className="font-body text-white/90 mb-4">contact@momentifyevents.com</p>
            <p className="font-body text-white/90 mb-6">+1 306 419 1999</p>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-white px-6 py-3 font-body text-sm tracking-wide hover:bg-white hover:text-[#8F1B32] transition-all duration-300"
            >
              Start Your Event
            </Link>
          </div>
        </div>

        <div className="mt-12 lg:mt-14 pt-6 border-t border-white/20 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <p className="font-body text-sm text-white/80">
            {new Date().getFullYear()} Momentify Events. All rights reserved.
          </p>
          <p className="font-body text-sm text-white/70">Crafted for meaningful moments.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
