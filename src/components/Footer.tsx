import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#F5F7FA] border-t border-gray-200">
      <div className=" mx-4 sm:mx-8 lg:mx-24 xl:mx-12 3xl:mx-48 px-4 pt-12 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Social Links */}
          <div className="space-y-6 col-span-2 sm:col-span-1">
            <Link href="/" className="text-xl font-semibold text-gray-900">
              SuperMetrics.com
            </Link>
            <div className="flex items-center space-x-4">
              {/* Twitter */}
              <Link
                href="https://twitter.com/SuperMetrics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              {/* LinkedIn */}
              <Link
                href="https://linkedin.com/company/SuperMetrics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
              {/* Instagram */}
              <Link
                href="https://instagram.com/SuperMetrics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
              {/* facebook */}
              <Link
                href="https://facebook.com/SuperMetrics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
        {/* Additional footer sections here */}
        <div>
          {" "}
          <h3 className="text-sm font-semibold text-[#838E9E] uppercase tracking-wider pb-4 border-dashed border-b border-gray-200 w-3/4">
            Products
          </h3>{" "}
          <ul className="mt-4 space-y-3">
            {" "}
            <li>
              {" "}
              <a
                href="/integrations"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                {" "}
                Integrations{" "}
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                href="/analytics"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                {" "}
                Analytics{" "}
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                href="/workspace"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                {" "}
                Workspace{" "}
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                href="/embed-charts"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                {" "}
                Embed Charts{" "}
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                href="/datastudio"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                {" "}
                DataStudio{" "}
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                href="/google-addon"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                {" "}
                Google add-on{" "}
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                href="/pricing"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                {" "}
                Pricing{" "}
              </a>{" "}
            </li>{" "}
          </ul>{" "}
        </div>
        <div>
          {" "}
          <h3 className="text-sm font-semibold text-[#838E9E] uppercase tracking-wider pb-4 border-dashed border-b border-gray-200 w-3/4">
            Resources
          </h3>{" "}
          <ul className="mt-4 space-y-3">
            {" "}
            <li>
              {" "}
              <a
                href="/blog"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                {" "}
                Blog{" "}
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                href="/changelog"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                {" "}
                Changelog{" "}
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                href="/affiliate"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                {" "}
                Affiliate Program{" "}
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                href="/knowledge-base"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                {" "}
                Knowledge base{" "}
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                href="/contact"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                {" "}
                Contact us{" "}
              </a>{" "}
            </li>{" "}
          </ul>{" "}
        </div>
        {/* legal */}
        <div>
          {/* Legal Section */}
          <h3 className="text-sm font-semibold text-[#838E9E] uppercase tracking-wider pb-4 border-dashed border-b border-gray-200 w-3/4">
            Legal
          </h3>
          <ul className="mt-4 space-y-3">
            <li>
              <Link href="/privacy-policy" legacyBehavior>
                <a className="text-base text-gray-500 hover:text-gray-900">
                  Privacy Policy
                </a>
              </Link>
            </li>
            <li>
              <Link href="/terms" legacyBehavior>
                <a className="text-base text-gray-500 hover:text-gray-900">
                  Terms &amp; Conditions
                </a>
              </Link>
            </li>
          </ul>

          {/* Separator */}
          <div className="mt-5 border-dashed border-t border-gray-200 w-3/4"></div>

          {/* Google Add-on Button */}
          <Link href="/google-addon" legacyBehavior>
            <a className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-5">
              <Image
                width={20}
                height={20}
                src="/image/google.jzHr-7lh.png"
                alt="Google Logo"
                className="w-5 h-5 mr-2 object-contain"
              />
              Google Add-on
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </Link>
        </div>


      </div>
      <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-400">
            Copyright 2025 © SuperMetrics.com
          </p>
        </div>
        {/* Footer SVG Pattern */}
        <div className="relative w-full overflow-hidden h-52 mt-4">
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <Image
              src="/image/Footertext.C0gQTh9j.svg"
              width={1000}
              height={200}
              alt="SuperMetrics"
              className="w-full max-w-5xl h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
