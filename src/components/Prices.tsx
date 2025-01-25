import React from "react";

function Prices( {name, price, logo } : {name: string, price: number, logo : string } ) {
  return (
    <div
      className="relative rounded-2xl bg-white p-4 shadow-sm border border-gray-200"
      data-astro-cid-hkoc4sea=""
    >
      <div className="mb-4 sm:mb-6" data-astro-cid-hkoc4sea="">
        <img
          src={logo}
          className="w-16"
          data-astro-cid-hkoc4sea=""
        />
        <h3
          className="mt-4 text-lg sm:text-xl font-bold text-gray-900"
          data-astro-cid-hkoc4sea=""
        >
            {name}
        </h3>
        <p
          className="mt-2 text-xs sm:text-sm text-gray-500"
          data-astro-cid-hkoc4sea=""
        >
          To grow referrals and leads of business looking
        </p>
      </div>
      <div className="mb-4 sm:mb-6" data-astro-cid-hkoc4sea="">
        <p data-astro-cid-hkoc4sea="">
          <span
            className="price-amount text-3xl sm:text-4xl font-bold text-gray-900"
            data-plan="Free"
            data-astro-cid-hkoc4sea=""
          >
            ${price}
          </span>
          <span
            className="text-sm sm:text-base text-gray-500"
            data-astro-cid-hkoc4sea=""
          >
            /forever
          </span>
        </p>
      </div>
      <button
        className="w-full rounded-lg px-3 sm:px-4 py-3 sm:py-4 text-base sm:text-lg font-semibold border border-[#1B91F0] text-[#1B91F0] hover:bg-gray-50"
        data-astro-cid-hkoc4sea=""
      >
        Get Started for Free
      </button>
      <div className="mt-6 sm:mt-8" data-astro-cid-hkoc4sea="">
        <p
          className="text-xs sm:text-sm font-semibold text-gray-500 mb-3 sm:mb-4"
          data-astro-cid-hkoc4sea=""
        >
          Features
        </p>
        <ul className="space-y-3 sm:space-y-4" data-astro-cid-hkoc4sea="">
          <li
            className="flex items-center text-xs sm:text-sm text-gray-600"
            data-astro-cid-hkoc4sea=""
          >
            <svg
              className="mr-2 sm:mr-3 h-4 sm:h-5 w-4 sm:w-5 text-red-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              data-astro-cid-hkoc4sea=""
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
                data-astro-cid-hkoc4sea=""
              />
            </svg>
            Data Sources: Up to 3 Accounts
          </li>
          <li
            className="flex items-center text-xs sm:text-sm text-gray-600"
            data-astro-cid-hkoc4sea=""
          >
            <svg
              className="mr-2 sm:mr-3 h-4 sm:h-5 w-4 sm:w-5 text-red-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              data-astro-cid-hkoc4sea=""
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
                data-astro-cid-hkoc4sea=""
              />
            </svg>
            1 Workspace
          </li>
          <li
            className="flex items-center text-xs sm:text-sm text-gray-600"
            data-astro-cid-hkoc4sea=""
          >
            <svg
              className="mr-2 sm:mr-3 h-4 sm:h-5 w-4 sm:w-5 text-red-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              data-astro-cid-hkoc4sea=""
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
                data-astro-cid-hkoc4sea=""
              />
            </svg>
            1 User
          </li>
          <li
            className="flex items-center text-xs sm:text-sm text-gray-600"
            data-astro-cid-hkoc4sea=""
          >
            <svg
              className="mr-2 sm:mr-3 h-4 sm:h-5 w-4 sm:w-5 text-red-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              data-astro-cid-hkoc4sea=""
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
                data-astro-cid-hkoc4sea=""
              />
            </svg>
            Analytics Dashboard
          </li>
          <li
            className="flex items-center text-xs sm:text-sm text-gray-600"
            data-astro-cid-hkoc4sea=""
          >
            <svg
              className="mr-2 sm:mr-3 h-4 sm:h-5 w-4 sm:w-5 text-red-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              data-astro-cid-hkoc4sea=""
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
                data-astro-cid-hkoc4sea=""
              />
            </svg>
            Google Add-on
          </li>
          <li
            className="flex items-center text-xs sm:text-sm text-gray-600"
            data-astro-cid-hkoc4sea=""
          >
            <svg
              className="mr-2 sm:mr-3 h-4 sm:h-5 w-4 sm:w-5 text-red-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              data-astro-cid-hkoc4sea=""
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
                data-astro-cid-hkoc4sea=""
              />
            </svg>
            Reporting
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Prices;
