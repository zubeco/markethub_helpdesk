import {
  RiPercentLine,
  RiQuestionnaireLine,
  RiTicket2Fill,
  RiTicket2Line,
} from "react-icons/ri";

export const OverviewMockData = [
  {
    icon: <RiQuestionnaireLine className="text-[#E60000] text-[16px]" />,
    title: "Complaints Received",
    value: "60",
    score: "$3,460",
  },
  {
    icon: <RiTicket2Line className="text-[#E60000] text-[16px]" />,
    title: "Open Tickets",
    value: "40",
    score: "$3,460",
  },
  {
    icon: <RiTicket2Fill className="text-[#E60000] text-[16px]" />,
    title: "Closed Tickets",
    value: "10",
    score: "$3,460",
  },
  {
    icon: <RiPercentLine className="text-[#E60000] text-[16px]" />,
    title: "Resolution Rate",
    value: "67",
    score: "$3,460",
  },
];
