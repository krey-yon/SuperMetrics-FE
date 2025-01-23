import React from "react";

function PageThree() {
  return (
    <section className="w-full h-full border-y border-gray-200">
      <div className="mx-4 sm:mx-8 lg:mx-24 xl:mx-12 3xl:mx-48 border-x border-gray-200 pt-16">
        <div className="flex flex-col justify-center text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold">
            Access all your marketing data <br /> without leaving <br />
            <span className="mt-8 inline-block">
              {/* <Image src="/image/googlelogo.9XRy_ZxS.png" alt="Google" width={40} height={32} className="" /> */}
              <img
                src="/image/googlelogo.9XRy_ZxS.png"
                alt="google"
                className="inline h-[2em] w-auto align-middle mx-1"
              />
              <span className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl inline text-[#5F6368] font-medium">
                Workspace
              </span>
            </span>
          </h2>
          <div className="relative mt-16 flex justify-center">
            {" "}
            <img
              src="/image/services.D_qufu-d.png"
              className="w-8/10 z-20"
              alt=""
            />{" "}
            <img
              src="/image/dots.DgCTgs30.svg"
              className="hidden sm:block absolute z-1 lg:left-[1rem] lg:bottom-12 md:bottom-1 md:left-4 xl:bottom-32 xl:left-[17rem] 2xl:left-[10rem] 2xl:bottom-52"
            />{" "}
            <img
              src="/image/dots.DgCTgs30.svg"
              className="hidden sm:block absolute z-1 scale-x-[-1] lg:right-[1rem] lg:bottom-12 md:right-4 md:bottom-1 xl:bottom-32 xl:right-[17rem] 2xl:right-[10rem] 2xl:bottom-52"
            />{" "}
          </div>
        </div>
      </div>
      <div className="w-full border-y">
        {" "}
        <div className="flex justify-center items-center mx-4 sm:mx-8 lg:mx-24 xl:mx-12 3xl:mx-48 border-x border-gray-200 py-6 relative">
          {" "}
          <img
            src="/image/Rectangle.svg"
            alt=""
            className="absolute top-[-10px] left-[-10px] z-[888]"
          />{" "}
          <img
            src="/image/L.svg"
            alt=""
            class="absolute top-0 right-0 z-10"
          />{" "}
          <img
            src="/image/L.svg"
            alt=""
            className="absolute bottom-0 left-0 rotate-180 z-10"
          />{" "}
          <img
            src="/image/Rectangle.svg"
            alt=""
            className="absolute bottom-[-10px] right-[-10px] rotate-180 z-10"
          />{" "}
          <p className="text-xl mr-4">
            Looking for <span className="font-semibold">DataStudio</span>?
          </p>{" "}
          <a
            href="#"
            className="inline-block px-6 py-3 rounded-lg font-semibold transition-all duration-200 bg-white text-slate-800 hover:bg-slate-50 border border-slate-200"
          >
            {" "}
            Check it out{" "}
          </a>{" "}
        </div>{" "}
      </div>
    </section>
  );
}

export default PageThree;
