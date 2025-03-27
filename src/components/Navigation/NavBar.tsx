"use client";
import React, { useEffect, useRef, useState } from "react";
import NavLinks from "./NavLinks";
import NavHeader from "./NavHeader";

export type NavBarProps = {
  title: string;
  iconSrc: string;
};

const NavBar = () => {
  const [mobile, setMobile] = useState(false);
  const [show, setShow] = useState(true);
  const [atTop, setAtTop] = useState(true);

  const location = useRef(
    typeof window !== "undefined" ? window.pageYOffset : 0
  );

  //change these:
  const navOptions = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const navBarProps: NavBarProps = {
    title: "I'm a gorilla",
    iconSrc: "/hello.webp",
  };

  useEffect(() => {
    const listener = () => {
      if (typeof window !== "undefined") {
        if (location.current === 0 || window.pageYOffset === 0) {
          setAtTop(true);
        } else {
          setAtTop(false);
        }
        if (location.current > window.pageYOffset) {
          setShow(true);
        } else {
          if (!mobile) setShow(false);
        }

        location.current = window.pageYOffset;
      }
    };
    document.addEventListener("scroll", listener);
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [location, mobile]);

  return (
    <nav
      aria-label="Main Navigation"
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
      className={`flex gap-4 text-center items-center duration-300 py-2.5 px-3 transition-all backdrop-blur-md ${
        show ? "sticky top-0 translate-y-0" : "-translate-y-full"
      } ${atTop ? "bg-red-400" : ""}`}
    >
      <NavHeader
        className="md:flex-3 flex-1 text-nowrap"
        title={navBarProps.title}
        url={navBarProps.iconSrc}
      />
      <NavLinks
        mobile={mobile}
        className="md:flex-4 flex-2 text-nowrap"
        options={navOptions}
      />
      <div className="md:flex-3 flex-1"></div>
      <button
        className="sm:hidden z-20 border rounded-lg p-1 group transition-colors duration-200 hover:bg-amber-200"
        onClick={() => setMobile(!mobile)}
      >
        {mobile ? xIcon : hamburgIcon}
      </button>
    </nav>
  );
};

export default NavBar;

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
