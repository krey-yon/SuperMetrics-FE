import React from 'react'
import Image from 'next/image'

function InstallNowPage() {
  return (
<div className="flex justify-end relative">
      <div className="px-6 sm:px-0 w-full sm:w-[35%] my-auto h-fit -mr-[15%] sm:-mr-[10%]">
        <h4 className="text-xl mt-12 sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-8 md:!leading-[3rem] sm:!leading-[2.5rem]">
          Accessing all your marketing data without leaving Google Workspace
        </h4>
        <a
          href="#"
          className="inline-block px-6 py-3 rounded-lg font-medium transition-all duration-200 bg-[#0085FF] text-white hover:bg-[#0066CC] shadow-lg hover:shadow-xl inline-flex items-center mt-5"
        >
          Install Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-2"
            viewBox="0,0,256,256"
          >
            <g
              fill="#ffffff"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
              style={{ mixBlendMode: "normal" }}
            >
              <g transform="scale(5.33333,5.33333)">
                <path d="M40.96094,4.98047c-0.07387,0.00243 -0.14755,0.00895 -0.2207,0.01953h-12.74023c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h8.17188l-13.58594,13.58594c-0.52248,0.50163 -0.73295,1.24653 -0.55024,1.94742c0.18271,0.70088 0.73006,1.24823 1.43094,1.43094c0.70088,0.18271 1.44578,-0.02776 1.94742,-0.55024l13.58594,-13.58594v8.17188c-0.0102,0.72127 0.36875,1.39216 0.99175,1.75578c0.623,0.36361 1.39351,0.36361 2.01651,0c0.623,-0.36361 1.00195,-1.0345 0.99175,-1.75578v-12.75391c0.0781,-0.58158 -0.10312,-1.16812 -0.49567,-1.60429c-0.39255,-0.43617 -0.95683,-0.67796 -1.5434,-0.66133zM12.5,8c-4.11731,0 -7.5,3.38269 -7.5,7.5v20c0,4.11731 3.38269,7.5 7.5,7.5h20c4.11731,0 7.5,-3.38269 7.5,-7.5v-9.5c0.0102,-0.72127 -0.36875,-1.39216 -0.99175,-1.75578c-0.623,-0.36361 -1.39351,-0.36361 -2.01651,0c-0.623,0.36361 -1.00195,1.0345 -0.99175,1.75578v9.5c0,1.94669 -1.55331,3.5 -3.5,3.5h-20c-1.94669,0 -3.5,-1.55331 -3.5,-3.5v-20c0,-1.94669 1.55331,-3.5 3.5,-3.5h9.5c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175z"></path>
              </g>
            </g>
          </svg>
        </a>
      </div>
      <img
        src="/image/workspace.BgbgDOSr.png"
        alt="Workspace"
        className="w-[60%]"
        width={500}
        height={500}
      />
      <Image
        src="/image/workspaceblur.3cS7DjSK.svg"
        alt="Blurred Workspace"
        className="absolute bottom-0 right-0 z-20 w-[40%] sm:w-[60%]"
        width={500}
        height={500}
      />
    </div>
  )
}

export default InstallNowPage