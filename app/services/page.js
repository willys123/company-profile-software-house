import Image from "next/image";
import Link from "next/link";
import TestimonialsSection from "../components/Testimoni";

const Services = ({ altText, caption, quality, imagePath, description }) => {
  return (
    <div className="mb-12 p-4 text-center">
      <h3 className="font-semibold text-sm text-black mt-4 mb-3 lg:text-lg">
        {caption}
      </h3>
      <p className="text-sm text-gray-600 mb-3 lg:text-base">{description}</p>

      <div className="flex justify-center items-center rounded-md shadow-md overflow-hidden mx-auto">
        <Image
          quality={quality}
          alt={altText}
          src={imagePath}
          width={150}
          height={150}
        />
      </div>
    </div>
  );
};

const GallerySection = () => {
  return (
    <section id="services" className="pt-28 text-center md:pt-28 sm:pt-30">
      <div className="max-w-6xl px-5 mx-auto mt-0 text-center">
        <div className="px-4 mb-10">
          <h2 className="font-bold text-blue-950 text-4xl mb-5 text-center lg:text-5xl lg:mb-5">
            Product / Services
          </h2>
          <p className="text-xs mt-1 lg:text-base">
            Ready to take your business to the next level? Explore our services
            and unlock the full potential of technology for your success !
          </p>
        </div>
      </div>

      <div className="w-full px-4 flex flex-wrap justify-center gap-10 lg:mx-auto lg:flex-nowrap">
        <Services
          quality={100}
          imagePath="/webdev.webp"
          altText="Web Application Development"
          caption="Web Application Development"
          description="Crafting responsive and user-friendly websites tailored to meet your business needs. Our web development services ensure a seamless online experience for your customers."
        />
        <Services
          quality={100}
          caption="Mobile App Development"
          altText="Mobile App Development"
          imagePath="/mobiledev.webp"
          description="Building cutting-edge mobile applications that engage users and elevate your brand. Our mobile development services cover both iOS and Android platforms."
        />
      </div>

      <div className="my-5 items-center text-center">
        <TestimonialsSection />
      </div>
    </section>
  );
};

export default GallerySection;
