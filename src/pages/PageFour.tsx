import React from "react";
import Image from "next/image";

function PageFour() {
  return (
    <section className="w-full h-full border-y border-gray-200">
      {/* <div className="mx-4 sm:mx-8 lg:mx-24 xl:mx-12 3xl:mx-48 border-x py-20 relative"> */}
        <div className="w-full border-b">
          <div className="flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 mx-4 sm:mx-8 lg:mx-24 xl:mx-12 3xl:mx-48 border-x border-gray-200 py-8 md:py-16 relative">
            <Image
              src="/image/L.svg"
              alt=""
              className="absolute bottom-[0px] right-[0px] rotate-90 z-10"
              width={20}
              height={20}
            />
            <Image
              src="/image/Rectangle.svg"
              alt=""
              className="absolute bottom-[-10px] -left-[10px] z-10"
                width={20}
                height={20}
            />
            <div className="relative bg-gradient-to-b from-[#E9ECF0] to-transparent p-2 rounded-full">
              <a
                href="#"
                className="block px-3 py-2 rounded-full font-medium transition-all duration-200 flex items-center gap-2 text-[#697586] bg-white shadow-2xl hover:shadow-xl border-slate-300 border-2"
              >
                How it Works
              </a>
            </div>
            <h4 className="text-md sm:text-5xl lg:text-5xl font-bold mt-8 md:mt-12 text-center px-4">
              Get started in 3 Simple Steps
            </h4>
            <div className="w-full mt-8 md:mt-16 flex flex-col md:flex-row justify-around items-center gap-8">
              <div className="w-full sm:w-[70%] md:w-1/2 lg:w-1/3">
                <Image
                  src="/image/supermetrics.muIfyktd.png"
                  alt=""
                  className="w-full"
                  width={500}
                    height={500}
                />
              </div>
              <div className="w-full md:w-[35%] flex flex-col justify-end text-center md:text-left">
                <h1 className="text-5xl md:text-[4rem] lg:text-[5rem] xl:text-[7rem] font-sans font-bold bg-gradient-to-b from-[#CFD5DE] to-transparent bg-clip-text text-transparent mb-4">
                  01
                </h1>
                <h5 className="text-xl lg:text-xl xl:text-2xl font-bold">
                  Install SuperMetrics and create an account
                </h5>
                <p className="text-md text-[#344054] leading-7">
                  Installation is quick and creating a SuperMetrics account is
                  completely free.
                </p>
              </div>
            </div>
            <Image
              src="/image/line-left.D2lGd5zt.svg"
              alt=""
              className="w-[50%] hidden md:block"
              width={500}
                height={500}
            />
            <div className="w-full flex flex-col-reverse md:flex-row justify-around items-center gap-8 mt-8 md:mt-0">
              <div className="w-full md:w-[35%] flex flex-col justify-end text-center md:text-left">
                <h1 className="text-5xl md:text-[4rem] lg:text-[5rem] xl:text-[7rem] font-sans font-bold bg-gradient-to-b from-[#CFD5DE] to-transparent bg-clip-text text-transparent mb-4">
                  02
                </h1>
                <h5 className="text-xl lg:text-xl xl:text-2xl font-bold">
                  Connect your marketing account to SuperMetrics
                </h5>
                <p className="text-md text-[#344054] leading-7">
                  Link your accounts to track campaigns and manage channels from
                  one dashboard.
                </p>
              </div>
              <div className="w-full sm:w-[70%] md:w-1/2 lg:w-1/3">
                <Image
                  src="/image/datasource.CzByOHhy.png"
                  alt=""
                  className="w-full"
                    width={500}
                        height={500}
                />
              </div>
            </div>
            <Image
              src="/image/line-right.DszbghvZ.svg"
              alt=""
              className="w-[50%] hidden md:block"
                width={500}
                    height={500}
            />
            <div className="w-full flex flex-col md:flex-row justify-around items-center gap-8 mt-8 md:mt-0">
              <div className="w-full sm:w-[70%] md:w-1/2 lg:w-1/3">
                <Image
                  src="/image/sync.DUgLjFmr.png"
                  alt=""
                  className="w-full"
                    width={500}
                        height={500}
                />
              </div>
              <div className="w-full md:w-[35%] flex flex-col justify-end text-center md:text-left">
                <h1 className="text-5xl md:text-[4rem] lg:text-[5rem] xl:text-[7rem] font-sans font-bold bg-gradient-to-b from-[#CFD5DE] to-transparent bg-clip-text text-transparent mb-4">
                  03
                </h1>
                <h5 className="text-xl lg:text-xl xl:text-2xl font-bold">
                  Sync data directly to Google Sheets and Slides
                </h5>
                <p className="text-md text-[#344054] leading-7">
                  Easy access and integrate your data into documents and
                  presentations.
                </p>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
}

export default PageFour;
