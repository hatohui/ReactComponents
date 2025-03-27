import Image from "next/image";
import React from "react";

export type NavHeaderProps = {
  className?: string;
  title?: string;
  url?: string;
};

const NavHeader = ({ className, title, url }: NavHeaderProps) => {
  return (
    <div className={"flex gap-3 items-center " + (className ?? "")}>
      <Image
        src={url ?? "/temp"}
        className="min-h-[40px]"
        width={40}
        height={40}
        alt="projects icon"
      />
      <div>{title ?? ""}</div>
    </div>
  );
};

export default NavHeader;
