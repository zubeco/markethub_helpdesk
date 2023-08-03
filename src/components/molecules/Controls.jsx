import React from "react";
import { RiNotification2Line, RiUserSettingsLine } from "react-icons/ri";

export default function Controls() {
  return (
    <div className="flex items-center gap-5">
      <div className="bg-[#F5F5F5] px-[10px] py-[10px] rounded-[10px]">
        <RiNotification2Line className="text-[20px] text-[#616161]" />
      </div>

      <div className="bg-[#F5F5F5] px-[10px] py-[10px] rounded-[10px]">
        <RiUserSettingsLine className="text-[20px] text-[#616161]" />
      </div>
    </div>
  );
}
