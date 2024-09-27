"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";

function Hero() {
  const [visible, setVisible] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const questions = [
    "How May We Delight You Today?",
    "What Can We Create for You?",
    "Ready to Start Your Project?",
    "Let's Bring Your Ideas to Life!"
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("hero-section");
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.8) {
          setVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Change questions every 3 seconds
    const interval = setInterval(() => {
      setQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header
      id="hero-section"
      className={`bg-white p-8 transition-opacity duration-1000 ease-in-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="container mx-auto flex flex-col items-center gap-10 min-h-[60vh] w-full">
        <div className="text-center">
          {/* Breathing animation for the welcome text */}
          <Typography
            variant="h1"
            color="blue-gray"
            className={`mb-4 text-3xl lg:text-5xl !leading-tight transition-transform duration-700 ${
              visible ? "animate-breathe text-blue-600" : ""
            }`}
          >
            <span className="text-blue-600">Welcome to BDH Devverse</span> <br />
            where innovation meets execution.
          </Typography>
          {/* Dancing text effect for the question */}
          <Typography
            variant="lead"
            className={`mb-4 !text-gray-900 md:pr-16 xl:pr-28 transition-all duration-700 ${
              visible ? "text-gray-700 animate-dance" : "text-gray-500"
            }`}
          >
            {questions[questionIndex]}
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            We're more than developers, we're your 360° success partners.
            With a commitment to empower you to deliver 24/7 excellence. Let's turn your tech challenges into success stories,
            with our tailored solutions and a global talent pool.
            We're your premier partner in technology solutions and talent management.
          </Typography>
        </div>
        <Image
          width={1024}
          height={512}
          alt="team work"
          src="/image/Hero-Image2.jpg"
          className={`w-full h-auto rounded-xl object-cover transition-transform duration-700 ${
            visible ? "animate-hero-image" : ""
          }`}
        />
      </div>
    </header>
  );
}

export default Hero;
