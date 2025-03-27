"use client";
// import React, { useState } from "react";
import NavButton, { ButtonProp } from "./NavButton";

export type NavBarProps = {
  options: ButtonProp[];
  className?: string;
};

const NavLinks = ({ options, className }: NavBarProps) => {
  // const [mobileToggled, setMobileToggled] = useState(false);

  return (
    <>
      <ul className={(className ?? "") + " hidden sm:flex mx-2 px-2"}>
        {options.map((option) => (
          <li key={option.label} className="flex-1" itemProp={option.label}>
            <NavButton data={option} />
          </li>
        ))}
      </ul>

      {/* 
      <ul className={(className ?? "") + " flex-col flex sm:hidden"}>
        {options.map((option) => (
          <li key={option.label} className="flex-1" itemProp={option.label}>
            <NavButton data={option} />
          </li>
        ))}
      </ul> */}
    </>
  );
};

export default NavLinks;
