import Link from "next/link";
import Image from "next/image";

const AboutPage = () => {
  return (
    <section id="aboutpage" className="pt-28 text-center md:pt-25 sm:pt-30">
      <div className="max-w-6xl px-5 mx-auto mt-0 text-center">
        <div className="px-4 mb-10 py-4">
          <h2 className="font-bold text-black-500 text-4xl mb-5 text-center lg:text-5xl lg:mb-5">
            About us
          </h2>
          <p className="text-sm text-center text-black p-4 lg:text-xl lg:p-5">
            <span className="font-semibold">Willyam's Software House</span>{" "}
            stands as one of the top website and app developers in Indonesia,
            adhering to international quality standards. Trusted by dozens of
            renowned companies to bring their ideas to life through cutting-edge
            website and app development. Let's turn your ideas into reality with
            us!
          </p>
          <hr className="mt-4 mb-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10">
          <div className="bg-white rounded-lg border border-gray-200 shadow-xl hover:bg-gray-100 hover:scale-105 p-6">
            <h3 className="font-bold uppercase text-center mt-2 text-blue-950 lg:text-xl">
              BRIEF HISTORY
            </h3>
            <p className="text-justify text-xs mt-2 text-black lg:text-base">
              Willyam's Software House, founded with a vision for excellence,
              has emerged as a leading website and app development company in
              Indonesia since its inception. Established to meet international
              quality standards, our journey began with a commitment to
              transforming innovative ideas into tangible solutions. Over the
              years, we've earned the trust of numerous prestigious companies,
              becoming their go-to partner for crafting and developing
              exceptional websites and applications.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              quality={100}
              loading="eager"
              src="/journeys.svg"
              alt="Software House"
              width={750}
              height={750}
            />
          </div>
        </div>
        <div className="w-full  mb-10 max-w-6xl p-6 bg-white rounded-lg border border-gray-200 shadow-xl hover:bg-gray-100 hover:scale-105">
          <h3 className="font-bold uppercase text-center mt-2 text-blue-950 lg:text-xl">
            CULTURE
          </h3>
          <p className="text-justify text-xs mt-2 text-black lg:text-base">
            At Willyam's Software House, our culture thrives on innovation,
            adaptability, and a relentless pursuit of excellence. We foster an
            environment where creativity knows no bounds, encouraging every team
            member to contribute their unique ideas. Open communication,
            continuous learning, and a strong sense of corporate responsibility
            define our ethos, creating a dynamic and inclusive workplace. We
            believe in making a positive impact on the industry and embodying
            the spirit of constant growth and collaboration
          </p>
        </div>
        <div className="w-full  mb-10 max-w-6xl p-6 bg-white rounded-lg border border-gray-200 shadow-xl hover:bg-gray-100 hover:scale-105">
          <h3 className="font-bold uppercase text-center mt-2 text-blue-950 lg:text-xl">
            TEAM
          </h3>
          <p className="text-justify text-xs mt-2 text-black lg:text-base">
            At Willyam's Software House, our team is the heartbeat of our
            success. A diverse blend of tech enthusiasts, we combine expertise
            with creativity to drive innovation. Collaborative and
            forward-thinking, our team members contribute to a culture where
            every idea matters. Together, we are united by a passion for
            excellence and a shared vision to deliver cutting-edge solutions for
            our clients.
          </p>
          <div className="mt-5 items-center text-center">
            <Link
              href="/teams"
              className="font-semibold text-bisque text-sm bg-yellow-500 py-2 px-4 rounded-full hover:shadow-lg 
          hover:opacity-80 transition duration-300 ease-in-out lg:text-lg"
            >
              Meet our Teams!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
