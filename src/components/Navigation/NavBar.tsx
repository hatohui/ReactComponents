"use client";
import React from "react";
import NavLinks from "./NavLinks";
import NavHeader from "./NavHeader";

const xIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  </svg>
);

const hamburgIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6 group"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

const NavBar = () => {
  const navOptions = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav
      aria-label="Main Navigation"
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
      className="flex gap-4 text-center items-center py-2.5 px-3"
    >
      <NavHeader className="md:flex-3 flex-1 text-nowrap" />
      <NavLinks className="md:flex-4 flex-2 text-nowrap" options={navOptions} />
      <div className="md:flex-3 flex-1"></div>
      <button
        className="sm:hidden z-20 border rounded-lg p-1 group hover:bg-amber-200"
        onClick={() => console.log("hello")}
      >
        {hamburgIcon}
      </button>
    </nav>
  );
};

export default NavBar;
