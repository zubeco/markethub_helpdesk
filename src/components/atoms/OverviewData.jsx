import { OverviewMockData } from "@/constants/OverviewMockData";
import { RiArrowUpSFill } from "react-icons/ri";

export default function OverviewData() {
  return (
    <div className="pt-12">
      <div className="grid grid-cols-4 gap-4 w-full">
        {OverviewMockData.map((data, index) => (
          <div
            className="bg-[#FFFFFF] h-[150px] rounded-[15px] flex px-[15px] py-[15px] gap-5"
            key={index}
          >
            <div className="bg-[#F5F5F5] w-fit h-fit px-[10px] py-[10px] rounded-[15px]">
              {data.icon}
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[#959595] font-bold text-[14px] uppercase">
                {data.title}
              </h3>
              <h3 className="text-[#353535] text-[32px] font-bold">
                {data.value}
              </h3>
              <div className="flex gap-2 items-center">
                <div>
                  <RiArrowUpSFill className="text-[#32A071] text-[16px]" />
                </div>
                <p className="text-[#757575] text-[14px]">{data.score}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
