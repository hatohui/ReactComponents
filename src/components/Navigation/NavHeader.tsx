import Image from "next/image";
import React from "react";

export type NavHeaderProps = {
  className?: string;
};

const NavHeader = ({ className }: NavHeaderProps) => {
  return (
    <div className={"flex gap-3 items-center " + (className ?? "")}>
      <Image
        src="/temp"
        className="min-h-[40px]"
        width={40}
        height={40}
        alt="projects icon"
      />
      <div>TITLE</div>
    </div>
  );
};

export default NavHeader;
