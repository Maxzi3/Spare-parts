
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import BackToTop from "./BackToTop";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="container flex flex-col px-5 py-10 mx-auto">
          <a
            to="/"
            className="flex flex-col items-center w-20 ml-3 text-sm font-medium hover:text-orange-800 hover:bg-white"
          >
            <span className="text-xl">IKW</span>{" "}
            <span className="p-1 border-t-2 border-orange-800 hover:border-white">
              VENTURES
            </span>
          </a>
          <p className="w-64 mt-2 text-gray-500 md:text-sm md:w-full">
            &copy; 2024 IYKE WELL VENTURES NIG.LTD All rights reserved.
          </p>
          <BackToTop />
        </div>
        <div className="text-gray-700 bg-orange-600">
          <div className="container flex flex-row items-center justify-between px-5 py-4 mx-auto">
            <a
              href="https://wa.me/2348033056790"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white hover:text-gray-800"
            >
              @IYKE WEll VENTURES
            </a>
            <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
              <FaFacebookF className="ml-3" />
              <FaTwitter className="ml-3" />
              <FaInstagram className="ml-3" />
              <FaGithub className="ml-3" />
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
