import { useSelector } from "react-redux";
import Navbar from "@/components/molecules/Navbar";

const Tickets = () => {
  const user = useSelector((state) => state.auth.user);
  const { email } = user.userDetails;
  return (
    <div>
      <Navbar />
      <div className="w-full bg-[#F9F8F8] min-h-[100vh]">
        <h1>Welcome to the Tickets{email}</h1>
      </div>
    </div>
  );
};

export default Tickets;
