"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    service: "Web & Mobile App Development",
    text: "BDH Devverse crafted a seamless, responsive, and user-friendly application for our enterprise. Their expertise in Web 3 and Fintech development exceeded our expectations, delivering a top-notch product on time.",
    name: "Michael - Technical Manager",
    role: "CTO @ AE Tech INC.",
    image: "/image/avatar1.jpg",
  },
  {
    service: "AI & Machine Learning Solutions & Data Analytics",
    text: "Integrating smart business tools with BDH Devverse was a game-changer. Their AI and data analytics solutions drove innovation and ensured robust protection against digital threats. Highly recommended!",
    name: "Sophia - Product Lead",
    role: "Innovation @ DataCorp Ltd.",
    image: "/image/avatar2.jpg",
  },
  {
    service: "Recruitment & Management",
    text: "BDH Devverse streamlined our hiring process and efficiently managed our tech talent. Their recruitment services are top-tier, making our project execution smooth and hassle-free.",
    name: "Lily - HR Director",
    role: "Operations @ TechWave Inc.",
    image: "/image/avatar3.jpg",
  },
  {
    service: "Cybersecurity & Consultancy & Training",
    text: "BDH Devverse transformed our data into actionable insights, providing strategic decisions that propelled our business forward. Their expert advice and training on the latest tech trends and cybersecurity threats were invaluable.",
    name: "James - CISO",
    role: "Security @ SafeNet Solutions",
    image: "/image/avatar4.jpg",
  },
  {
    service: "Testing and Secured/Quality Assurance",
    text: "Every project delivered by BDH Devverse was bug-free and met maximum user satisfaction. Their commitment to quality assurance is unparalleled.",
    name: "Ella - QA Manager",
    role: "Quality @ BuildRight Ltd.",
    image: "/image/avatar5.jpg",
  },
];

export function Testimonial() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prevActive) => (prevActive + 1) % testimonials.length);
    }, 5000); // 5 seconds interval

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 px-4 sm:px-8 lg:py-24 bg-gray-50">
      <div className="container max-w-screen-lg mx-auto">
        {/* Section Title */}
        <div className="text-center text-blue-600 mb-12 lg:mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-blue-gray-600 animate-slide-in">
            What Clients Say
          </h2>
          <p className="mx-auto w-full px-4 font-normal text-gray-600 lg:w-8/12 animate-fade-in">
            Discover what clients have to say about their experiences working
            with us. Our client’s satisfaction is our greatest gratification!
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="flex flex-col lg:flex-row items-center py-8 lg:py-12 gap-12 bg-white rounded-xl overflow-hidden shadow-lg">
          {/* Testimonial Content */}
          <div className="w-full lg:w-6/12 p-6 lg:pl-12 text-center lg:text-left animate-zoom-in">
            <h3 className="mb-4 text-2xl lg:text-4xl font-bold text-blue-gray-600">
              {testimonials[active].service}
            </h3>
            <p className="mb-3 text-gray-600 leading-relaxed">
              {testimonials[active].text}
            </p>
            <h6 className="mb-0.5 text-blue-gray-600">
              {testimonials[active].name}
            </h6>
            <p className="font-normal mb-5 text-gray-500">
              {testimonials[active].role}
            </p>
            {/* Avatar Navigation */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`cursor-pointer p-0.5 rounded-full border-2 ${
                    active === index
                      ? "border-blue-600"
                      : "border-transparent"
                  } hover:border-blue-600 transition-all duration-300`}
                  onClick={() => setActive(index)}
                >
                  <img
                    src={testimonials[index].image}
                    alt={`client avatar ${index + 1}`}
                    className={`rounded-full w-12 h-12 ${
                      active === index ? "opacity-100" : "opacity-70"
                    } hover:opacity-100 transition-all duration-300`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Image */}
          <div className="w-full h-64 sm:w-72 lg:w-[20rem] lg:h-[22rem] rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:scale-105">
            <Image
              width={768}
              height={768}
              alt="testimonial image"
              src={testimonials[active].image}
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
