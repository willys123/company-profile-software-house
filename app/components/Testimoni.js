import React from "react";
import Image from "next/image";

const TestimonialsSection = () => {
  return (
    <>
      <section id="testimoni">
        <div className="max-w-6xl px-5 mx-auto mt-20 text-center">
          <h2 className="text-4xl font-bold text-center">
            Why our customers find complete satisfaction ?
          </h2>
          <div className="flex flex-col mt-15 md:flex-row md:space-x-6">
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <Image
                quality={100}
                loading="eager"
                src="/aforeWilly.webp"
                width={100}
                height={100}
                className="w-16 mt-5 rounded-full"
                alt=""
              />
              <h5 className="text-lg font-bold text-blue-950">Ical</h5>
              <p className="text-sm text-darkGrayishBlue">
                "Impressed with the professionalism and quality of service.
                Willyam Software House understood our business needs, delivering
                innovative and reliable software that exceeded our
                expectations.”
              </p>
            </div>
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3 ">
              <Image
                quality={100}
                loading="eager"
                src="/aforeWilly.webp"
                width={100}
                height={100}
                className="w-16 mt-5 rounded-full"
                alt=""
              />
              <h5 className="text-lg font-bold text-blue-950">Jebraks</h5>
              <p className="text-sm text-darkGrayishBlue">
                "Willyam Software House is an outstanding software development
                partner. They not only provide highly functional and
                user-friendly products but also offer exceptional customer
                support. Responsive, friendly, and always ready to help.”
              </p>
            </div>
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <Image
                quality={100}
                loading="eager"
                width={100}
                height={100}
                src="/aforeWilly.webp"
                className="w-16 mt-5 rounded-full"
                alt=""
              />
              <h5 className="text-lg font-bold text-blue-950">Baron</h5>
              <p className="text-sm text-darkGrayishBlue">
                "Working with Willyam Software House was a satisfying
                experience. Their competent and dedicated team ensured a smooth
                process from planning to implementation. We're thrilled with the
                end result and highly recommend Willyam Software House for
                high-quality software solutions.”
              </p>
            </div>
          </div>
          <div className="my-8 font-bold">
            <a
              href="http://wa.me/6201234567890?text=Hello+Willyam+software+house%2C+can+you+make+my+idea+come+true%3F"
              target="_blank"
              className="p-3 px-6 pt-2 text-black bg-green-400 rounded-full baseline hover:bg-brightRedLight"
            >
              Whatsapp Now !
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;
