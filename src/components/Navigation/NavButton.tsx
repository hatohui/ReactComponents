import Link from "next/link";
import React from "react";

export type ButtonProp = { label: string; href: string };

export type NavButtonProp = {
  data: ButtonProp;
};

const NavButton = ({ data }: NavButtonProp) => {
  return (
    <Link className="p-2" href={data.href} title={data.label} itemProp="url">
      {data.label}
    </Link>
  );
};

export default NavButton;
