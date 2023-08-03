import Image from "next/image";
import loginlogo from "../../../public/images/loginlogo.png";

export default function Logo() {
  return (
    <div className="flex items-center gap-4">
      <div className="w-[190px]  h-[28px] relative mx-2">
        <Image
          src={loginlogo}
          layout="fill"
          objectFit="contain"
          alt="shopcart-icon"
        />
      </div>

      <div className="h-[36px] w-[1px] bg-[#D5D5D5]"></div>
      <h3 className="text-[#959595] text-[16px] font-bold uppercase">
        HelpDesk
      </h3>
    </div>
  );
}
