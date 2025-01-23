import Image from "next/image";
import React from "react";

function PageTwo() {
  return (
    <section className="w-full h-full border-y border-gray-200">
      <div className="mx-4 sm:mx-8 lg:mx-24 xl:mx-12 3xl:mx-48 border-x py-20 relative">
        {/* Corner rectangle */}
        <Image
          src={"/image/Rectangle.svg"}
          alt="Rectangle"
          width={20}
          height={20}
          className="absolute top-[-10px] left-[-10px]"
        />
        <Image
          src={"/image/L.svg"}
          alt="L"
          width={20}
          height={20}
          className="absolute top-0 right-0"
        />
        <Image
          src={"/image/L.svg"}
          alt="L"
          width={20}
          height={20}
          className="absolute bottom-0 left-0 rotate-180"
        />
        <Image
          src={"/image/Rectangle.svg"}
          alt="Rectangle"
          width={20}
          height={20}
          className="absolute bottom-[-10px] right-[-10px] rotate-180"
        />
        <p className="text-center text-gray-600 mb-8 text-xl font-lato">
          Trusted by 5000+ marketing professionals
        </p>
        <div className="flex flex-wrap justify-center items-center  gap-x-12 gap-y-8">
        {/* beta logo */}
        <div>
          <Image
            src={"/image/beta.svg"}
            alt="beta"
            width={200}
            height={200}
            className="h-16 object-contain"
          />
        </div>
        {/* incus logo */}
        <div>
          <Image
            src={"/image/incus.svg"}
            alt="incus"
            width={200}
            height={200}
            className="h-16 object-contain"
          />
        </div>
        {/* Universe logo */}
        <div>
          <Image
            src={"/image/blue-spec.svg"}
            alt="universe"
            width={200}
            height={200}
            className="h-16 object-contain"
          />
        </div>
        {/* Blue spec logo */}
        <div>
          <Image
            src={"/image/blue-spec.svg"}
            alt="blue-spec"
            width={200}
            height={200}
            className="h-16 object-contain"
          />
        </div>
        {/* uncle logo */}
        <div>
          <Image
            src={"/image/uncle.svg"}
            alt="uncle"
            width={200}
            height={200}
            className="h-16 object-contain"
          />
        </div>
        {/* container logo */}
        <div>
          <Image
            src={"/image/thecontainer.svg"}
            alt="container"
            width={200}
            height={200}
            className="h-16 object-contain"
          />
        </div>
        </div>
      </div>
    </section>
  );
}

export default PageTwo;
