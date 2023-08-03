import Image from "next/image";
import Link from "next/link";
import loginlogo from "../../../public/images/loginlogo.png";
import Subfooter from "./SubFooter";

const SubLayout = ({ children }) => {
  return (
    <div className="container flex flex-col px-4 pb-10 mx-auto h-fit pt-14">
      <div className="flex justify-center cursor-pointer">
        <Link href="/">
          <div>
            <Image src={loginlogo} alt="shopcart-icon" />
          </div>
        </Link>
      </div>
      {children}
      <Subfooter />
    </div>
  );
};

export default SubLayout;
