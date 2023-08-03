import { useSelector } from "react-redux";
import Navbar from "@/components/molecules/Navbar";
import UserWelcome from "@/components/atoms/UserWelcome";
import OverviewData from "@/components/atoms/OverviewData";
import RecentComplaints from "@/components/atoms/RecentComplaints";
import RecentTickets from "@/components/atoms/RecentTickets";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const { email } = user.userDetails;
  return (
    <div>
      <Navbar />
      <div className="w-full bg-[#F9F8F8] min-h-[100vh] px-[160px] pt-[60px]">
        <div>
          <UserWelcome />
        </div>
        <div>
          <OverviewData />
        </div>

        <div>
          <RecentComplaints />
        </div>

        <div>
          <RecentTickets />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
