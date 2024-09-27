"use client";

import Image from "next/image";

const CLIENTS = [
  "atlassian",
  "ansible",
  "cisco",
  "google",
  "amazon",
  "oracle",
];

export function Clients() {
  return (
    <section className="px-8 py-28">
      <div className="container mx-auto text-center">
        <h6 className="text-blue-600  mb-8 text-lg font-semibold">
          Some Of Our Tech Partners
        </h6>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {CLIENTS.map((logo, key) => (
            <div key={key} className="flex items-center justify-center w-40 h-40 p-4 bg-white border rounded-lg shadow-md">
              <Image
                alt={logo}
                width={100}
                height={100}
                className="object-contain"
                src={`/logos/logo-${logo}.svg`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;