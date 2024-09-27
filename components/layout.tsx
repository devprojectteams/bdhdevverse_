"use client";

import React, { ReactNode } from "react";

import { useRouter } from "next/router";
import { Footer, Navbar, FixedPlugin } from "../components";
import { ThemeProvider } from "@material-tailwind/react";

import Hero from "./hero";

import Clients from "../app/clients";
import Services from "../app/services";
import Projects from "../app/projects";
import Resume from "../app/resume";
import Testimonial from "../app/testimonial";
import PopularClients from "../app/popular-clients";
import ContactForm from "../app/contact-form";


interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const isHomepage = router.pathname === "/";

  return (
    <ThemeProvider>
      <Navbar />
      <main className="min-h-screen bg-gray-100">
        {isHomepage ? (
          <div>
            {/* Components specific to the homepage */}
            <Hero />
          <Services />
          <Clients />
          <Projects />
          <Resume />
         <Testimonial />
        <FixedPlugin />
        <PopularClients />
        <ContactForm />
            {children}
          </div>
        ) : (
          children
        )}
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;










// "use client";

// import React from "react";
// import { ThemeProvider } from "@material-tailwind/react";

// export function Layout({ children }: { children: React.ReactNode }) {
//   return <ThemeProvider>{children}</ThemeProvider>;
// }

// export default Layout;
