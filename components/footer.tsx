import { Typography } from "@material-tailwind/react";
import { FaPaperPlane } from "react-icons/fa";

const LINKS = ["Home", "About Us", "Blog", "Service"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative bottom-0 left-0 w-full  bg-white text-white shadow-lg">
      <div className="container mx-auto px-8 pt-10 pb-6">
        <div className="flex flex-col items-center">
          <Typography className="text-center font-normal !text-gray-800 mb-4">
            &copy; {CURRENT_YEAR} BDH Devverse{" "}
            {/* <a
              href="https://www.material-tailwind.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Material Tailwind
            </a>{" "}
            by{" "}
            <a
              href="https://www.creative-tim.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Creative Tim
            </a>
            . */}
          </Typography>
          <ul className="flex gap-8 items-center mb-4">
            {LINKS.map((link) => (
              <li key={link}>
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  className="font-normal text-gray-800 hover:text-blue-600 transition-colors"
                >
                  {link}
                </Typography>
              </li>
            ))}
          </ul>
          <button
            type="submit"
            className="flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg transition-transform transform hover:scale-105 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <FaPaperPlane className="mr-2" />
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
