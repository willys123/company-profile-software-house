import Link from "next/link";
const AboutSection = () => {
  return (
    <section id="about" className="pb-20 text-center items-center">
      <div className="max-w-6xl px-5 mx-auto mt-0 text-center">
        <div className="px-4 mb-10 py-4">
          <h2 className="font-bold text-black-500 text-4xl mb-5 text-center lg:text-5xl lg:mb-5">
            About us
          </h2>
          <p className="text-lg text-center text-black p-4 lg:text-xl lg:p-5">
            <span className="font-semibold">Willyam's Software House</span>{" "}
            stands as one of the top website and app developers in Indonesia,
            adhering to international quality standards.
          </p>
          <hr className="mt-4 mb-2" />
        </div>

        <div className="flex flex-grow justify-center">
          <div className="px-4 lg:flex lg:gap-6">
            <div className="w-full lg:w-1/3 mb-5 max-w-xl p-6 bg-white rounded-lg border border-gray-200 shadow-xl hover:bg-gray-100 hover:scale-105">
              <h3 className="font-bold uppercase text-center mt-2 text-blue-950 lg:text-xl">
                BRIEF HISTORY
              </h3>
              <p className="text-justify text-xs mt-2 text-black lg:text-base">
                Willyam's Software House, founded with a vision for excellence,
                has emerged as a leading website and app development company in
                Indonesia since its inception.
              </p>
            </div>

            <div className="w-full lg:w-1/3 mb-5 max-w-xl p-6 bg-white rounded-lg border border-gray-200 shadow-xl hover:bg-gray-100 hover:scale-105">
              <h3 className="font-bold uppercase text-center mt-2 text-blue-950 lg:text-xl">
                CULTURE
              </h3>
              <p className="text-justify text-xs mt-2 text-black lg:text-base">
                At Willyam's Software House, our culture thrives on innovation,
                adaptability, and a relentless pursuit of excellence.
              </p>
            </div>
            <div className="w-full lg:w-1/3 mb-5 max-w-xl p-6 bg-white rounded-lg border border-gray-200 shadow-xl hover:bg-gray-100 hover:scale-105">
              <h3 className="font-bold uppercase text-center mt-2 text-blue-950 lg:text-xl">
                TEAM
              </h3>
              <p className="text-justify text-xs mt-2 text-black lg:text-base">
                At Willyam's Software House, our team is the heartbeat of our
                success.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5 items-center text-center">
        <Link
          href="/about"
          className="font-semibold text-white text-sm bg-blue-950 py-2 px-4 rounded-full hover:shadow-lg 
          hover:opacity-80 transition duration-300 ease-in-out lg:text-lg"
        >
          Dive Deeper into Our Story!
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
