import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-gray-800 via-gray-900 to-black text-center items-center sm:px-6 ">
      <div className="mx-auto p-2 flex flex-col text-center md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-zinc-300">
          © 2023 Willyam Software House
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a
            aria-label="githubfooter"
            href="https://github.com/willys123"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-zinc-300"
              size={30}
            />
          </a>
          <a
            aria-label="twitterfooter"
            href="https://twitter.com/elonmusk"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineTwitter
              className="hover:-translate-y-1 transition-transform cursor-pointer text-zinc-300"
              size={30}
            />
          </a>

          <a
            aria-label="linkedinfooter"
            href="https://www.linkedin.com/in/willy-simatupang-561b55198/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-zinc-300"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
