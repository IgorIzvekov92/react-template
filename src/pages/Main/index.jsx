import React from "react";
import { Link } from "react-router-dom";

function Main({ history }) {
  return (
    <div>
      <header className="block overflow-hidden bg-[#020d24] bg-cover bg-center text-white">
        {/* Hero Content */}
        <div className="mx-auto w-full max-w-7xl px-5 md:px-10">
          {/* Hero Heading */}
          <div className="mx-auto mb-8 flex max-w-3xl flex-col items-center py-12 text-center md:mb-12 md:py-16 lg:mb-16 lg:pb-20 lg:pt-32">
            {/* Heading Text */}
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">
              Tailspark Jetpack Components
            </h1>
            <div className="mb-5 max-w-[528px] lg:mb-8">
              <p className="text-[#7c8aaa]">
                Welcome! Below you'll find links that will navigate to all the
                different components
              </p>
            </div>
            {/* Button Wrap */}
            <div className="flex items-stretch justify-center">
              <a
                href="https://tailspark.co/"
                target="_blank"
                rel="noreferrer"
                className="mr-4 rounded-full bg-[#2d6ae0] px-8 py-5 text-center font-bold text-white transition hover:bg-[#081631]"
              >
                Copy All Jetpack Components
              </a>
              <a
                href="https://tailspark.co/"
                target="_blank"
                rel="noreferrer"
                className="mr-4 rounded-full hover:bg-[#2d6ae0] px-8 py-5 text-center font-bold text-white transition bg-[#081631]"
              >
                Get Custom Designs
              </a>
            </div>
          </div>
          {/* Hero Image */}
          <div className="w-full mx-auto mb-10 flex flex-row flex-wrap justify-center">
            <Link
              to="/home"
              className="mr-6 mb-6 rounded-lg bg-[#2d6ae0] px-8 py-5 text-center font-bold text-white transition hover:bg-[#081631]"
            >
              Landing Home
            </Link>
          </div>
          <div className="">
            <img
              className="max-h-[416px] rounded-tl-[50px] rounded-tr-[50px] border-[12px] border-[#ffffff1f] object-fill"
              src="https://assets.website-files.com/647e296b89c00bcfafccf696/647f0755ed7ed2b1be74354e_image_processing20220429-712-h76k3c%202.png"
              alt="dashboard"
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Main;
