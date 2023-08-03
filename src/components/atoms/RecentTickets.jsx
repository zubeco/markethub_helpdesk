import { tableHeaders, ticketsData } from "@/constants/ticketsMockData";
import React from "react";
import RecentHeaders from "./RecentHeaders";
import { PiDotOutlineFill } from "react-icons/pi";
import { RiArrowRightCircleFill } from "react-icons/ri";

const RecentTickets = () => {
  return (
    <div className=" pt-[70px] pb-[100px]">
      <RecentHeaders text="Recently CLosed Tickets" />

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 border-[#D5D5D5] border-b-[1px]">
            <tr>
              {tableHeaders.map((header) => (
                <th
                  key={header.key}
                  className="px-3 py-3 text-left text-[14px] font-bold text-[#959595] uppercase tracking-wider"
                >
                  {header.title}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="bg-white py-10">
            {ticketsData.map((item, index) => (
              <tr
                key={index}
                className="border-b-[15px] border-[#FFF3F3] rounded-[]"
                style={{
                  borderBottomWidth: index === ticketsData.length - 1 ? 0 : 1,
                  borderBottom: "2px solid #FFF3F3",
                }} // Remove border for the last row
              >
                <td className="px-3 py-4 whitespace-nowrap ">
                  <p className="text-[#353535] text-[16px]"> {item.ticketId}</p>
                </td>
                <td className="px-3 py-4 whitespace-nowrap">
                  <p className="text-[#353535] text-[16px]">{item.subject}</p>
                </td>
                <td className="px-3 py-4 whitespace-nowrap">
                  <p className="text-[#616161] text-[16px]">{item.date}</p>
                </td>
                <td className="px-3 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <p className="text-[#2B2B2B text-[16px] font-bold bg-[#FFF3F3] px-3 py-1 rounded-[15px]">
                      {item.assignee.charAt(0)}
                    </p>
                    <p className="text-[#353535] text-[16px]">
                      {item.assignee}
                    </p>
                  </div>
                </td>

                <td className="px-3 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2 justify-start">
                    <PiDotOutlineFill
                      className={
                        item.priority === "High"
                          ? "text-[28px] text-[#E60000]"
                          : item.priority === "Medium"
                          ? "text-[28px] text-[#E9A426]"
                          : "text-[28px] text-[#959595]"
                      }
                    />

                    <p className="text-[#353535] text-[16px]">
                      {item.priority}
                    </p>
                  </div>
                </td>
                <td className="px-3 py-4 whitespace-nowrap ">
                  <p className="bg-[#F5F5F5] w-fit h-fit px-5 py-1 rounded-[30px] text-[#353535] text-[14px]">
                    {item.option}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center gap-3 bg-[#FFFFFF] border-[#D5D5D5] border-[1px] rounded-[25px] w-fit h-fit px-[20px] py-[5px] mt-[30px]">
        <p className="text-[#616161] text-[16px] font-bold">See All</p>
        <div>
          <RiArrowRightCircleFill className="text-[#E60000]" />
        </div>
      </div>
    </div>
  );
};

export default RecentTickets;
