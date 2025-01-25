import React from "react";

function Testimonials() {
  return (
    <section className="border-y border-gray-200 bg-gradient-to-b from-[#F5F7FA] to-white">
      <div className="mx-4 py-16 md:py-24 sm:mx-8 lg:mx-24 xl:mx-12 3xl:mx-48 z-10 border-x relative">
        <img
          src="/image/Rectangle.svg"
          alt=""
          className="absolute top-[-10px] right-[-10px]"
        />
        <img
          src="/image/L.svg"
          alt=""
          className="absolute top-0 left-0 -rotate-90"
        />
        <img
          src="/image/L.svg"
          alt=""
          className="absolute bottom-0 right-0 rotate-90"
        />
        <img
          src="/image/Rectangle.svg"
          alt=""
          className="absolute bottom-[-10px] left-[-10px]"
        />
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6 relative">
            <img
              src="/image/quotes.DnDTSP4U.svg"
              alt=""
              className="absolute -top-20 z-9 blur-[1px] opacity-90 sm:-top-16"
            />
            <div className="relative bg-gradient-to-b from-[#E9ECF0] to-transparent p-2 rounded-full">
              <a
                href="#"
                className="block px-3 py-2 rounded-full font-medium transition-all duration-200 flex items-center gap-2 text-[#697586] bg-white shadow-2xl hover:shadow-xl border-slate-300 border-2"
              >
                TESTIMONIALS
              </a>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-12 text-gray-900 z-10">
            Don&apos;t just take our word for it
          </h2>
        </div>
        <div className="relative">
          <div className="w-[90%] lg:w-[50%] md:w-[70%] sm:w-[70%] bg-gray-50 rounded-3xl border-gray-200 border-2 mb-8 mx-auto">
            <div className="w-fit border-white border-[5px] rounded-3xl p-12">
              <p className="text-gray-700 text-lg text-center leading-relaxed mb-10">
                SuperMetrics social analytics tool has provided great insights
                into social channels for our clients and has become an integral
                part of our content marketing strategies.
              </p>
              <div className="flex flex-col items-center">
                <img
                  src="/image/person1.DnL643u_.png"
                  alt="Mark Manson"
                  className="w-16 h-16 rounded-full mb-4 border-2 border-white shadow-lg"
                />
                <h4 className="font-semibold text-gray-900 mb-1">
                  Mark Manson
                </h4>
                <p className="text-gray-500 text-sm">
                  Project Manager at{" "}
                  <a
                    href="#"
                    className="text-black font-semibold underline hover:underline"
                  >
                    Google
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-3">
          <button
            className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-500 shadow-md ring-2 ring-blue-200 p-[2px]"
            aria-current="true"
          >
            <img
              src="/image/person1.DnL643u_.png"
              alt="Testimonial 1"
              className="w-12 h-12 rounded-full object-cover"
            />
          </button>
          <button className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md opacity-50 hover:opacity-100 transition-opacity p-[2px]">
            <img
              src="/image/person2.B_IcQ80N.png"
              alt="Testimonial 2"
              className="w-12 h-12 rounded-full object-cover"
            />
          </button>
          <button className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md opacity-50 hover:opacity-100 transition-opacity p-[2px]">
            <img
              src="/image/person3.CM2cTrqT.png"
              alt="Testimonial 3"
              className="w-12 h-12 rounded-full object-cover"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
