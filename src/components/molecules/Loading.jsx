import React from "react";
import MoonLoader from "react-spinners/MoonLoader";

export default function Loading() {
  return (
    <div className="h-screen bg-[#FFF] flex justify-center items-center">
      <MoonLoader color={"#E60000"} size={30} />
    </div>
  );
}
