import React from "react";
import Image from "next/image";

function PageFive() {
  return (
    <section className="w-full border-y border-gray-200">
      <div className="px-16 md:px-16 mx-4 sm:mx-8 lg:mx-24 xl:mx-12 sm:px-16 3xl:mx-48 flex flex-col justify-center items-center border-x border-gray-200 py-16 relative">
        <Image
          src="/image/L.svg"
          alt=""
          className="absolute bottom-0 left-0 rotate-180"
          width={20} // Replace with actual width
          height={20} // Replace with actual height
        />
        <Image
          src="/image/Rectangle.svg"
          alt=""
          className="absolute bottom-[-10px] right-[-10px] rotate-180"
          width={20} // Replace with actual width
          height={20} // Replace with actual height
        />
        <div className="relative bg-gradient-to-b from-[#E9ECF0] to-transparent p-2 rounded-full">
          <a
            href="#"
            className="block px-3 py-2 rounded-full font-medium transition-all duration-200 flex items-center gap-2 text-[#697586] bg-white shadow-2xl hover:shadow-xl border-slate-300 border-2"
          >
            FAQ&apos;s
          </a>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl mt-12 mb-12 font-bold text-center">
          Frequently Asked Questions
        </h2>
        <div className="w-full max-w-4xl mx-auto mt-12">
          <div className="border-b border-gray-200 last:border-none">
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer py-8 text-xl font-medium hover:text-gray-700">
                What is SuperMetrics for Google Workspace?
                <span className="flex items-center justify-center w-8 h-8">
                  <svg
                    className="w-6 h-6 group-open:hidden"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    ></path>
                  </svg>
                  <svg
                    className="w-6 h-6 hidden group-open:block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 12H4"
                    ></path>
                  </svg>
                </span>
              </summary>
              <div className="pb-8 text-gray-600 text-lg leading-relaxed">
                SuperMetrics for Google Workspace is a powerful integration that
                allows you to automatically pull marketing data from various
                sources directly into your Google Sheets and Slides. It
                streamlines your reporting workflow and saves time on manual
                data collection.
              </div>
            </details>
          </div>
          <div className="border-b border-gray-200 last:border-none">
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer py-8 text-xl font-medium hover:text-gray-700">
                How does the pricing work?
                <span className="flex items-center justify-center w-8 h-8">
                  <svg
                    className="w-6 h-6 group-open:hidden"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    ></path>
                  </svg>
                  <svg
                    className="w-6 h-6 hidden group-open:block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 12H4"
                    ></path>
                  </svg>
                </span>
              </summary>
              <div className="pb-8 text-gray-600 text-lg leading-relaxed">
                Our pricing is based on the number of data sources and users you
                need. We offer flexible plans starting from individual users to
                enterprise solutions. Contact our sales team for detailed
                pricing information.
              </div>
            </details>
          </div>
          {/* Additional FAQ items here */}
          <div className="border-b border-gray-200 last:border-none">
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer py-8 text-xl font-medium hover:text-gray-700">
                Do I need technical skills to use SuperMetrics?
                <span className="flex items-center justify-center w-8 h-8">
                  <svg
                    className="w-6 h-6 group-open:hidden"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    ></path>
                  </svg>
                  <svg
                    className="w-6 h-6 hidden group-open:block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 12H4"
                    ></path>
                  </svg>
                </span>
              </summary>
              <div className="pb-8 text-gray-600 text-lg leading-relaxed">
                No technical skills are required! SuperMetrics is designed to be
                user-friendly and intuitive. If you can use Google Sheets, you
                can use SuperMetrics.
              </div>
            </details>
          </div>
          <div className="border-b border-gray-200 last:border-none">
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer py-8 text-xl font-medium hover:text-gray-700">
                Which data sources can I connect to?
                <span className="flex items-center justify-center w-8 h-8">
                  <svg
                    className="w-6 h-6 group-open:hidden"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    ></path>
                  </svg>
                  <svg
                    className="w-6 h-6 hidden group-open:block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 12H4"
                    ></path>
                  </svg>
                </span>
              </summary>
              <div className="pb-8 text-gray-600 text-lg leading-relaxed">
                SuperMetrics supports 100+ marketing platforms including Google
                Analytics, Facebook Ads, Instagram, LinkedIn, Twitter, TikTok,
                and many more. Check our complete list of data sources on our
                website.
              </div>
            </details>
          </div>
          <div className="border-b border-gray-200 last:border-none">
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer py-8 text-xl font-medium hover:text-gray-700">
                Is my data secure with SuperMetrics?
                <span className="flex items-center justify-center w-8 h-8">
                  <svg
                    className="w-6 h-6 group-open:hidden"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    ></path>
                  </svg>
                  <svg
                    className="w-6 h-6 hidden group-open:block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 12H4"
                    ></path>
                  </svg>
                </span>
              </summary>
              <div className="pb-8 text-gray-600 text-lg leading-relaxed">
                Yes, we take data security very seriously. We use
                industry-standard encryption and security practices to protect
                your data. We&apos;re also compliant with GDPR and other relevant
                data protection regulations.
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageFive;
