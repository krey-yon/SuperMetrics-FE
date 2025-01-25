import Prices from "@/components/Prices";
import React from "react";

function Pricing() {
  return (
    <section
      className="w-full border-y border-gray-200"
      data-astro-cid-hkoc4sea=""
    >
      <div
        className="mx-4 sm:mx-8 lg:mx-24 xl:mx-12 border-x py-10 sm:py-20 3xl:mx-48 relative"
        data-astro-cid-hkoc4sea=""
      >
        <img
          src="/image/Rectangle.svg"
          alt=""
          className="absolute top-[-10px] right-[-10px]"
          data-astro-cid-hkoc4sea=""
        />
        <img
          src="/image/L.svg"
          alt=""
          className="absolute top-0 left-0 -rotate-90"
          data-astro-cid-hkoc4sea=""
        />
        <img
          src="/image/L.svg"
          alt=""
          className="absolute bottom-0 right-0 rotate-90"
          data-astro-cid-hkoc4sea=""
        />
        <img
          src="/image/Rectangle.svg"
          alt=""
          className="absolute bottom-[-10px] left-[-10px]"
          data-astro-cid-hkoc4sea=""
        />
        <div className="text-center px-4" data-astro-cid-hkoc4sea="">
          <div className="flex justify-center mb-6" data-astro-cid-hkoc4sea="">
            <div className="relative bg-gradient-to-b from-[#E9ECF0] to-transparent p-2 rounded-full">
              <a
                href="#"
                className="block px-3 py-2 rounded-full font-medium transition-all duration-200 flex items-center gap-2 text-[#697586] bg-white shadow-2xl hover:shadow-xl border-slate-300 border-2"
              >
                Pricing
              </a>
            </div>
          </div>
          <h2
            className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-12"
            data-astro-cid-hkoc4sea=""
          >
            Flexible Pricing, built for growth
          </h2>
          <div
            className="mt-6 inline-flex items-center bg-gray-100 rounded-full p-1"
            data-astro-cid-hkoc4sea=""
          >
            <button
              className="billing-toggle px-3 sm:px-6 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 monthly"
              data-type="monthly"
              data-astro-cid-hkoc4sea=""
            >
              Monthly
            </button>
            <button
              className="billing-toggle relative bg-white !text-[#1B91F0] px-3 sm:px-6 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 yearly active flex items-center gap-2"
              data-type="yearly"
              data-astro-cid-hkoc4sea=""
            >
              Yearly
              <span
                className="bg-red-100 text-red-600 text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap"
                data-astro-cid-hkoc4sea=""
              >
                Save 20%
              </span>
            </button>
          </div>
        </div>
        <div
          className="px-12 xl:px-2 mt-8 sm:mt-16 3xl:px-[12rem] grid gap-12 sm:gap-6 xl:gap-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
          data-astro-cid-hkoc4sea=""
        >
            <Prices name="free" price={0} logo="/image/like.OSrzUwRD.png" />
            <Prices name="Starter" price={19 } logo="/image/rocket.NuVAlfCP.png" />
            <Prices name="Professional" price={39 } logo="/image/bag.B5ZJKkTO.png" />
            <Prices name="Team" price={99 } logo="/image/team.BAz5N5wR.png" />
        </div>
      </div>
    </section>
  );
}

export default Pricing;
