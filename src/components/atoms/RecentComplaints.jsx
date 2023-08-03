import { complaintData } from "@/constants/complaintsMockData";
import { RiArrowRightCircleFill, RiMoreLine } from "react-icons/ri";
import RecentHeaders from "./RecentHeaders";

export default function RecentComplaints() {
  return (
    <div className="pt-[70px]">
      <RecentHeaders text="Recent Complaints" />

      <div className="flex flex-col">
        {complaintData.map((data, index) => (
          <div
            className="flex items-center justify-between h-[88px] bg-[#FFFFFF] rounded-[15px] px-[20px] mb-2"
            key={index}
          >
            <div className="flex items-center gap-4">
              <h3 className="bg-[#FFF3F3] px-[18px] py-[10px] rounded-[15px] font-bold text-[#2B2B2B] text-[16px]">
                {data.head}
              </h3>
              <div>
                <p className="text-[#616161] font-bold text-[16px]">
                  {data.message}
                </p>
                <p className="text-[#3362AB] text-[12px]"> {data.user}</p>
              </div>
            </div>

            <div>
              <h3 className="text-[#616161] text-[14px]">January, 2023</h3>
            </div>

            <div className="flex items-center gap-4">
              <h3 className="bg-[#F5F5F5] px-[18px] py-[6px] rounded-[15px] font-normal text-[#353535] text-[14px]">
                More
              </h3>
              <div className="bg-[#F5F5F5] px-[18px] py-[6px] rounded-[15px] font-normal text-[#353535] text-[14px]">
                <RiMoreLine className="text-[16px]" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 bg-[#FFFFFF] border-[#D5D5D5] border-[1px] rounded-[25px] w-fit h-fit px-[20px] py-[5px] mt-[30px]">
        <p className="text-[#616161] text-[16px] font-bold">See All</p>
        <div>
          <RiArrowRightCircleFill className="text-[#E60000]" />
        </div>
      </div>
    </div>
  );
}
