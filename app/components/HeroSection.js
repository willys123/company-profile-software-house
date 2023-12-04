import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomeSection = () => {
  return (
    <>
      <section
        id="home"
        className="pt-16 lg:pt-36 bg-gradient-to-b from-gray-800 via-gray-900 to-black pb-16 text-center"
      >
        <div className="container mx-auto">
          <div className="md:flex md:flex-row items-center justify-center">
            <div className="w-full lg:w-1/2 lg:text-left lg:order-2 px-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-yellow-500 mt-10 mb-6 lg:mb-10">
                Willyam
                <br />
                Software House
              </h1>
              <p className="text-xl lg:text-2xl text-white mb-4 lg:mb-8">
                "Empowering Visions, Crafting Solutions &#59;
                <br /> Your Ultimate Software Partner"
              </p>
              <Link
                href="http://wa.me/6201234567890?text=Hello+Willyam+software+house%2C+can+you+make+my+idea+come+true%3F"
                target="_blank"
                className="font-semibold text-black text-lg bg-green-400 mt-6 lg:mt-10 py-3 px-6 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
              >
                Contact us &nbsp;&#9742;
              </Link>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center items-center mt-20 lg:mt-0 lg:order-1">
              <Image
                quality={100}
                loading="eager"
                src="/softwarehouse.png"
                alt="Software House"
                width={300}
                height={300}
                className=""
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            className="bg-black"
            fill="#fffffff"
            fillOpacity="1"
            d="M0,192L48,181.3C96,171,192,149,288,138.7C384,128,480,128,576,133.3C672,139,768,149,864,138.7C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          >
            dia
          </path>
        </svg>
      </section>
    </>
  );
};

export default HomeSection;
