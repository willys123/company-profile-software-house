"use client";
import { useState } from "react";
import Link from "next/link";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const NAV_ITEMS = [
  {
    label: "Home",
    page: "",
  },
  {
    label: "About Us",
    page: "about",
  },
  {
    label: "Services",
    page: "services",
  },
  {
    label: "Teams",
    page: "teams",
  },
];

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white">
      <div className="container mx-auto justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <div className="cursor-pointer flex items-center space-x-2">
                <h2 className="text-2xl font-bold text-blue-950">
                  {" "}
                  Willyam Software &#127968;{" "}
                  <sup className="font-extrabold">&#59;</sup>
                </h2>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                aria-label="buttonNavbar"
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>
        <nav className="hidden md:flex space-x-4">
          {NAV_ITEMS.map((item) => (
            <Link href={`/${item.page}`} key={item.page}>
              <div className="cursor-pointer text-gray-700 hover:text-gray-900">
                {item.label}
              </div>
            </Link>
          ))}
        </nav>
      </div>
      {navbar && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => (
              <Link href={`/${item.page}`} key={item.page}>
                <div className="cursor-pointer text-gray-700 hover:text-gray-900">
                  {item.label}
                </div>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
