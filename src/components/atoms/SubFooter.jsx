import React from "react";
import Link from "next/link";
import LangOption from "./LangOption";

export default function Subfooter() {
  return (
    <div className="mt-32">
      <div className="flex justify-center">
        <div className="w-[159px]">
          <LangOption />
        </div>
      </div>
      <div className="flex justify-start mt-8 lg:justify-center">
        <div className="capitalize text-sm flex flex-col lg:flex-row text-[#616161] h-[150px] lg:h-0  lg:w-[450px] justify-between">
          <Link href="/">
            <p>about us</p>
          </Link>
          <Link href="/">
            <p>sell on markethub</p>
          </Link>
          <Link href="/">
            <p>contact us</p>
          </Link>
          <Link href="/">
            <p>terms</p>
          </Link>
          <Link href="/">
            <p>policies</p>
          </Link>
        </div>
      </div>
      <div className="flex justify-start lg:justify-center mt-10 text-sm text-[#616161] lg:mt-10">
        <div className="flex">
          <p>Copyright©2021 Vodacom DRC.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
