import Image from "next/image";
import Copy from "../../Components/TextAnimation/Copy";

const extras = [
  "Henna",
  "Face painting",
  "Photo booth",
  "Telephone messaging booth",
  "Group games",
];

const ExtraServices = () => {
  return (
    <section className="bg-white py-16 md:py-24" id="other-services">
      <div className="max-w-7xl mx-auto px-6 md:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Left — heading + description */}
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/dot-icon-lg.png"
                alt=""
                width={48}
                height={48}
                className="mb-5 w-12 h-12"
              />
            
              <Copy>
                <h2 className="font-title text-3xl md:text-4xl text-black leading-tight mb-5">
                  Extra Services
                </h2>
              </Copy>
            </div>
            <Copy>
              <p className="font-body text-base md:text-lg text-neutral-500 max-w-md leading-relaxed">
                Make your event truly unforgettable with our curated add-ons —
                each designed to elevate the guest experience and keep the energy
                alive.
              </p>
            </Copy>
          </div>

          {/* Right — list with dividers */}
          <ul className="flex flex-col">
            {extras.map((service, i) => (
              <li
                key={service}
                className={`py-5 ${
                  i !== extras.length - 1
                    ? "border-b border-neutral-200"
                    : ""
                }`}
              >
                <Copy>
                  <span className="font-body text-lg md:text-xl text-black tracking-wide inline-block">
                    {service}
                  </span>
                </Copy>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExtraServices;
