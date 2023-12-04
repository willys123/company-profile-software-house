import Image from "next/image";
import Link from "next/link";

const GallerySection = () => {
  return (
    <section id="about" className="pb-20 text-center items-center">
      <div className="max-w-6xl px-5 mx-auto mt-0 text-center">
        <div className="px-4 mb-10 py-4">
          <h2 className="font-bold text-black-500 text-4xl mb-5 text-center lg:text-5xl lg:mb-5">
            Product / Services
          </h2>
          <h3 className="font-semibold text-xl">Bestseller</h3>
          <p className="text-xs mt-1 lg:text-base">
            Ready to take your business to the next level? Explore our Best
            Seller services and unlock the full potential of technology for your
            success.
          </p>
        </div>

        <div className="w-full px-4 flex flex-wrap justify-center gap-10 lg:mx-auto lg:flex-nowrap">
          <GalleryItem
            quality="100"
            imagePath="/webdev.webp"
            altText="Web Application Development"
            caption="Web Application Development"
          />
          <GalleryItem
            quality="100"
            caption="Mobile App Development"
            altText="Mobile App Development"
            imagePath="/mobiledev.webp"
          />
        </div>
        <div className="my-5 items-center text-center">
          <Link
            href="/services"
            className="font-semibold text-black text-lg bg-yellow-500 mt-6 lg:mt-10 py-3 px-6 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
          >
            Explore Our Services!
          </Link>
        </div>
      </div>
    </section>
  );
};

const GalleryItem = ({ altText, caption, quality, imagePath }) => {
  return (
    <div className="mb-12 p-4">
      <h3 className="font-semibold text-sm text-blue-950 mt-4 mb-5 text-center lg:text-lg">
        {caption}
      </h3>
      <div className="rounded-md shadow-md overflow-hidden mx-auto lg:h-[250] w-[250]">
        <Image
          quality={quality}
          alt={altText}
          src={imagePath}
          width={250}
          height={250}
        />
      </div>
    </div>
  );
};

export default GallerySection;
