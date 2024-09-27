import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDownIcon, XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import Logo from "../public/image/brand-logo.png";

// Define the navigation menu structure
const NAV_MENU = [
  {
    name: "Products",
    subMenu: [
      { name: "Pay as You Go Dev.", href: "/maintenance" }, // Route to maintenance page
      { name: "A.I BusinessManager", href: "/maintenance" }, // Route to maintenance page
      { name: "App Store", href: "/maintenance" }, // Route to maintenance page
    ],
  },
  {
    name: "Services",
    subMenu: [
      { name: "Engineering", href: "/maintenance" }, // Route to maintenance page
      { name: "Outsourcing", href: "/maintenance" }, // Route to maintenance page
    ],
  },
];



// const NAV_MENU = [
//   {
//     name: "Products",
//     subMenu: [
//       { name: "Pay as You Go Dev.", href: "/products/pay-as-you-go" },
//       { name: "A.I BusinessManager", href: "/products/ai-business-manager" },
//       { name: "App Store", href: "/products/app-store" },
//     ],
//   },
//   {
//     name: "Services",
//     subMenu: [
//       { name: "Engineering", href: "/services/engineering" },
//       { name: "Outsourcing", href: "/services/outsourcing" },
//     ],
//   },
// ];

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleToggleNav = () => setOpenNav(!openNav);
  const handleToggleSubMenu = (menuName: string) => {
    setActiveMenu((prev) => (prev === menuName ? null : menuName));
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="sticky top-0 z-10 w-full py-4 px-4 lg:px-8 bg-white shadow-md">
      <div className="flex items-center justify-between">
        <Image src={Logo} alt="Logo" width={120} height={50} />

        {/* Hamburger menu button */}
        <div className="lg:hidden">
          <button onClick={handleToggleNav} className="text-gray-700 focus:outline-none">
            {openNav ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex lg:items-center lg:gap-6">
          {NAV_MENU.map((menuItem) => (
            <div key={menuItem.name} className="relative">
              <button
                className="text-gray-800 hover:text-gray-600"
                onClick={() => handleToggleSubMenu(menuItem.name)}
              >
                {menuItem.name}
                <ChevronDownIcon className="ml-2 inline h-4 w-4" />
              </button>
              {activeMenu === menuItem.name && (
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                  {menuItem.subMenu.map((subItem) => (
                    <li key={subItem.name}>
                      <a
                        href={subItem.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {subItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      {openNav && (
        <div className="lg:hidden mt-4">
          {NAV_MENU.map((menuItem) => (
            <div key={menuItem.name} className="relative">
              <button
                className="text-gray-800 w-full text-left"
                onClick={() => handleToggleSubMenu(menuItem.name)}
              >
                {menuItem.name}
                <ChevronDownIcon className="ml-2 inline h-4 w-4" />
              </button>
              {activeMenu === menuItem.name && (
                <ul className="mt-2 space-y-2">
                  {menuItem.subMenu.map((subItem) => (
                    <li key={subItem.name}>
                      <a href={subItem.href} className="block text-gray-700">
                        {subItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;