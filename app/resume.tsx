"use client";

import { useState } from "react";
import { ChartBarIcon, PuzzlePieceIcon, CursorArrowRaysIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";
import { InView } from "react-intersection-observer"; // Import InView

// Sample LinkedIn URLs array
const LINKEDIN_PROFILES = [
  "https://www.linkedin.com/in/marvelous-ikejiama-a4a4702a1/",
  "https://www.linkedin.com/in/angela-aniekwe-506585238/",
  "https://www.linkedin.com/in/chinedu-nwachukwu-5739b1195/",
  "https://www.linkedin.com/in/olayinkaoniyide/",
  "https://www.linkedin.com/in/marvis-alimhiantare/",
  "https://www.linkedin.com/in/chukwumaegwuonwu/",
];

const RESUME_ITEMS = [
  {
    icon: ChartBarIcon,
    children: "Highly Educated and Qualified Professionals",
  },
  {
    icon: PuzzlePieceIcon,
    children: "Great Team Players with Great Leadership Qualities",
  },
  {
    icon: CursorArrowRaysIcon,
    children: "With Proven Experience Work Across Different Niche",
  },
];

export function Resume() {
  const [visible, setVisible] = useState(false);

  const handleButtonClick = () => {
    // Open a random LinkedIn profile URL
    const randomIndex = Math.floor(Math.random() * LINKEDIN_PROFILES.length);
    window.open(LINKEDIN_PROFILES[randomIndex], "_blank");
  };

  return (
    <InView
      as="div"
      threshold={0.3} // Element will be visible when 30% is in view
      onChange={(inView) => setVisible(inView)}
      id="resume-section"
      className={`px-8 py-24 transition-opacity duration-1000 ease-in-out ${visible ? 
        "opacity-100" : "opacity-0 translate-y-6"}`}
    >
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <h2 
            className={`text-3xl font-bold transition-all duration-700 ${visible ? 
            "scale-105 text-blue-600" : "scale-95 text-blue-gray-900"}`}
          >
            Take A Look At Some Of Our Talent&apos;s Resume
          </h2>
          <p 
            className={`mb-4 mt-3 w-9/12 text-gray-500 transition-all duration-700 ${visible ? 
            "text-gray-700" : "text-gray-500"}`}
          >
            At BDH Devverse, we pride ourselves on managing a diverse pool of highly skilled professionals.
            Whether you need specialized expertise or full-stack capabilities, we have the perfect mix to
            assemble your dream team and bring your projects to life.
            <br /><br />
            Explore a Sample of Our Talent: Click the link below to view a random sample of LinkedIn profiles
            showcasing some of the exceptional talents we manage.
          </p>
          <button
            onClick={handleButtonClick}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 
            transition-colors duration-300 px-4 py-2 rounded-md"
          >
            View LinkedIn Profiles
            <ArrowRightIcon strokeWidth={3} className="h-4 w-4" />
          </button>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </InView>
  );
}

export default Resume;

