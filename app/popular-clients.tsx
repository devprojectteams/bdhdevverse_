"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const CLIENTS = [
  "google16",
  "google15",
  "google5",
  "google6",
  "google7",
  "google9",
  "google10",
  "google11",
  "google12",
  "google13",
  "google14",
];

const LOGO_SIZE = 80;

const PopularClients = () => {
  const [logoIndex, setLogoIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLogoIndex((prevIndex) => (prevIndex + 1) % CLIENTS.length);
    }, 2000); // Change logo every 2 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto grid items-center place-items-center">
        <div className="text-center">
          <h6 className="mb-4 uppercase text-gray-500">
            SOME OF OUR CLIENTS
          </h6>
          <h2 className="text-blue-gray-600 mb-4">
            Trusted by over 10,000+ <br /> clients
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
          {CLIENTS.map((logo, index) => (
            <Image
              key={index}
              alt={logo}
              width={LOGO_SIZE}
              height={LOGO_SIZE}
              src={`/logos/logo-${logo}.png`}
              className={`w-${LOGO_SIZE} grayscale opacity-75 transition-transform duration-500 ease-in-out transform ${
                index === logoIndex ? "scale-110" : "scale-100"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularClients;
