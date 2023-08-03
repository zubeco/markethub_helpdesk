import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import loginlogo from "../../../public/images/loginlogo.png";
import Controls from "./Controls";
import Logo from "./Logo";
import Navlinks from "./Navlinks";

export default function Navbar() {
  const user = useSelector((state) => state.auth.user);
  const { email } = user.userDetails;
  return (
    <div className="h-[70px]  px-[50px] flex items-center">
      <div className="w-[32.5%] ">
        <Logo />
      </div>

      <div className="w-[35%] h-full">
        <Navlinks />
      </div>

      <div className="w-[32.5%] flex justify-end">
        <Controls />
      </div>
    </div>
  );
}
