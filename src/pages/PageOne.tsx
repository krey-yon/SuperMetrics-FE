import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";

function PageOne() {
  return (
    <div className="bg-[#F9FAFB] flex flex-col w-full overflow-auto pt-2 md:flex-row items-center justify-between md:pt-28 py-2">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
          <h1 className="text-[2rem] leading-[1.2] md:text-6xl font-semibold text-[#0A2540] mb-6">
            Sync Your Marketing Data to{" "}
            <span className="whitespace-nowrap">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
              <span className="text-[#666666] ml-2">Workspace</span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[#4A5567] max-w-3xl">
            With the SuperMetrics Workspace add-on, access all your connected
            marketing and sales accounts directly in Google Sheets, Slides, and
            everywhere else.
          </p>
          <div className="flex space-x-4 mt-8">
            <button className="flex rounded-md bg-blue-500 p-2 text-white gap-2">Install Now <FaArrowRightLong className="translate-y-1" /> </button>
            <button className="text-gray-700 border rounded-md p-2">Learn More</button>
          </div>
        </div>
      <div className="max-w-[calc(100%-28px)] md:w-1/2">
        <Image
          src="/image/hero.png"
          alt="Hero"
          width={800}
          height={508}
          layout="responsive"
          className="w-10"
        />
      </div>
    </div>
  );
}

export default PageOne;
