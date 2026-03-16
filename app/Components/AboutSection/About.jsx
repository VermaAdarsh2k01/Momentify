"use client";

import Copy from "../TextAnimation/Copy";

const TrailContainer = () => {
  return (
    <section className="w-full min-h-screen bg-[#e3e3db]">
      <div className="relative z-10 max-w-5xl lg:max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <Copy delay={0} type="slide">
          <div className="text-[1.9rem] sm:text-[2.2rem] lg:text-[2.7rem] text-[#111] max-w-5xl font-body">
            <p className="font-body">
              Since 2016, we're a team of all in all{" "}
              <span className="italic">experienced</span>{" "}
              consultations, <span className="font-semibold">combine</span> for
              strategic instant.
            </p>
          </div>
        </Copy>

        <div className="mt-2 flex flex-col md:flex-row gap-8 lg:gap-10 items-start">
          {/* LEFT COLUMN (DESCRIPTION + STAT) */}
          <div className="flex flex-col justify-between gap-8 h-full">
            <Copy delay={0} type="slide">
              <div className="">
                <p className="text-[0.95rem] sm:text-[1rem] text-body text-[#444] max-w-md">
                  At Momentify, we help businesses navigate complexity, unlock
                  growth, and achieve lasting transformation with a team of
                  experienced consultants. We combine strategic thinking with
                  precise execution to design experiences that move brands and
                  people forward.
                </p>
              </div>
            </Copy>

          <div className="flex items-center justify-center">
            <div>
              <div className="flex items-end gap-4 mt-2">
                <div className="text-[2.2rem] sm:text-[2.6rem] font-body text-[#111]">
                  150+
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[0.78rem] uppercase tracking-[0.16em] text-[#222]">
                    Successful Projects Delivered
                  </p>
                  <p className="text-[0.9rem] text-[#666] max-w-xs">
                    Across industries and markets, pairing insight with impact.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER IMAGE */}
          <Copy delay={0.15} type="slide">
            <div className="rounded-3xl overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.18)] bg-[#111] translate-y-2 max-w-sm mx-auto lg:mx-0">
              <img
                src="/owner.webp"
                alt="Momentify team"
                className="w-full h-full max-h-[360px] object-cover"
              />
            </div>
          </Copy>

          {/* RIGHT CTA CARD */}
          <Copy delay={0.2} type="slide">
            <div className="bg-white rounded-3xl px-6 py-6 flex flex-col justify-between gap-6 shadow-[0_18px_40px_rgba(10,10,10,0.16)] max-w-xs mx-auto lg:mx-0">
              <div className="flex flex-col gap-4">
                <span className="w-3 h-3 rounded-full bg-[#2d4bff] shadow-[0_0_0_6px_rgba(45,75,255,0.2)]" />
                <ul className="space-y-2 text-[0.95rem] text-[#1e1e1e]">
                  <li>Strategic Planning</li>
                  <li>Operational Excellence</li>
                  <li>Market Expansion</li>
                  <li>Risk Management</li>
                </ul>
              </div>

              <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-none bg-gradient-to-tr from-[#1b3dff] to-[#5a5dff] text-white text-[0.93rem] font-semibold shadow-[0_14px_32px_rgba(31,56,255,0.45)] hover:shadow-[0_18px_40px_rgba(31,56,255,0.55)] hover:from-[#1531d9] hover:to-[#4a4dde] transition-all duration-150 ease-out self-start">
                <span>Book a Free Call</span>
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-black/20 text-[0.8rem]">
                  ↗
                </span>
              </button>
            </div>
          </Copy>
        </div>
        </div>
      </div>
    </section>
  );
};

export default TrailContainer;
