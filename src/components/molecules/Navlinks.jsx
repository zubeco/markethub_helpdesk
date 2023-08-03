import React from "react";
import { useRouter } from "next/router";
import { navLinkData } from "@/constants/navlinkData";

export default function Navlinks() {
  const router = useRouter();

  const handleClick = (path) => {
    router.push(path);
  };

  return (
    <div className="flex items-center gap-14 h-[70px]">
      {navLinkData.map((link, index) => (
        <div
          key={index}
          className={`relative flex items-center gap-3 h-[100%] cursor-pointer ${
            router.pathname === link.path ? "text-[#E60000]" : "text-[#757575]"
          }`}
          onClick={() => handleClick(link.path)}
        >
          <link.icon className="text-[24px]" />
          <p className={`font-bold text-[16px]`}>{link.text}</p>
          {router.pathname === link.path && (
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#E60000]" />
          )}
        </div>
      ))}
    </div>
  );
}
