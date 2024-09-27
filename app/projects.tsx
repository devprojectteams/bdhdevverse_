"use client";

import { useEffect, useRef } from "react";
import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";

const PROJECTS = [
  {
    img: "/image/blog-1.svg",
    title: "Launch Now, Build Your Mobile/Web App",
    desc: "Whether it's an app for an eco-friendly product with A.I recommendations or electric transport service, contact us now and let's build it. Let's partner with you to launch your dream project. Check out this new FinTech.",
    url: "https://www.tranxactrust.com/",
    projectUrl: "https://www.tranxactrust.com/",
  },
  {
    img: "/image/blog2.svg",
    title: "We Create Corporate Landing Pages",
    desc: "Whether you need a promotional landing page for a seminar, campaign, or full website, we got you covered. For example, Bethesda Home for the Blind is a voluntary non-profit organization set up to care for physically challenged persons who are visually impaired and helpless.",
    url: "https://bethesdahomefortheblind.com/about",
    projectUrl: "https://bethesdahomefortheblind.com/about",
  },
  {
    img: "/image/blog3.svg",
    title: "Develop, Hire, Outsource and Pay as You Go, From Our Rich Talent Pool",
    desc: "Hire from our professional talent pool and pay as you go, or recruit our talents to join your enterprise. Whether your goal is to develop a web/mobile app designed to help users discover and explore local restaurants and cuisines or an anti-counterfeit supply chain for healthcare providers in emerging economies.",
    url: "https://www.drugstoc.com/",
    projectUrl: "https://www.drugstoc.com/",
  },
  {
    img: "/image/blog4.svg",
    title: "E-commerce Development",
    desc: "We help you create e-commerce websites, P.O.S systems, CRM, inventory management systems, and more. Manage your business better and serve your customers efficiently. Check out this client's store and chat with us now to set up your e-commerce store.",
    url: "https://www.tiqbuy.com.ng/",
    projectUrl: "https://www.tiqbuy.com.ng/#",
  },
];

export function Projects() {
  const typingRef = useRef<HTMLParagraphElement>(null);
  const controls = useAnimation();

  // Typing effect logic
  useEffect(() => {
    const typingEffect = () => {
      if (typingRef.current) {
        const text = typingRef.current.dataset.text || "";
        let index = 0;

        const interval = setInterval(() => {
          typingRef.current!.textContent = text.slice(0, index++);
          if (index > text.length) {
            clearInterval(interval);
          }
        }, 50);
      }
    };

    typingEffect();
  }, []);

  return (
    <InView
      as="section"
      className="py-28 px-8"
      onChange={(inView) => inView && controls.start({ opacity: 1, y: 0 })}
    >
      <motion.div
        className="container mx-auto mb-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h5" text-blue-600  color="blue" className="mb-8 text-3xl font-semibold lg:text-4xl">
          Our Projects
        </Typography>
        <motion.p
          ref={typingRef}
          className="mx-auto w-full px-4 text-xl font-normal text-gray-500 lg:w-6/12"
          data-text="We provide businesses of all sizes, including SMEs and individuals, with the flexibility to scale their tech teams as needed. Our dedicated developers understand your business and industry. Whether you’re launching a startup, recruiting from our pool of professional talents, outsourcing to our in-house team, or bringing an AI, mobile app, or website idea to life, We're here to turn your digital dreams into reality."
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
        >
          {/* Typing effect will display the text here */}
        </motion.p>
      </motion.div>
      <motion.div
        className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </motion.div>
    </InView>
  );
}

export default Projects;
