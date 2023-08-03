import Image from "next/image";
import Link from "next/link";
import mpesalogo from "../../../public/images/mpesalogo.png";
import googlelogo from "../../../public/images/googlelogo.png";
import fblogo from "../../../public/images/fblogo.png";
import { useContext } from "react";
import AuthContext from "../../../context/userSummary";

export default function Connect({ text1, text2, link }) {
  const { language } = useContext(AuthContext);

  let content = {
    English: {
      text1: "Connect with MPESA",
      text2: "Connect with FACEBOOK",
      text3: "Connect with GOOGLE",
    },
    French: {
      text1: "Connectez-vous avec MPESA",
      text2: "Connectez-vous avec FACEBOOK",
      text3: "Connectez-vous avec GOOGLE",
    },
  };

  language === "French"
    ? (content = content.French)
    : (content = content.English);
  return (
    <div>
      <div className="w-full  mt-0">
        <button className="bg-[#FFFFFF] border-[#959595] border-[1px] rounded-[30px] h-[56px] mb-5 w-full text-white  flex items-center justify-center">
          <Image src={mpesalogo} alt="mpesalogo" />
          <p className="pl-4 text-sm font-bold text-[#353535]">
            {content.text1}
          </p>
        </button>

        <div>
          <div className="flex items-center justify-between mt-5 text-sm">
            <div className="flex items-center">
              <Link href="">
                <p className="pl-2 text-gray-500 cursor-pointer">{text1}</p>
              </Link>
            </div>
            <Link href={`/${link}`}>
              <p className="font-bold cursor-pointer text-myRed">{text2}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
