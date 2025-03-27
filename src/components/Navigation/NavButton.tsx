import Link from "next/link";
import React from "react";

export type ButtonProp = { label: string; href: string };

export type NavButtonProp = {
  data: ButtonProp;
  className?: string;
};

const NavButton = ({ data, className }: NavButtonProp) => {
  return (
    <Link
      className={`p-2 bg-blend-difference translate-x-1 ${className ?? ""}`}
      href={data.href}
      title={data.label}
      itemProp="url"
    >
      {data.label}
    </Link>
  );
};

export default NavButton;
