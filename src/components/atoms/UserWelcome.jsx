import { useSelector } from "react-redux";
import { getCurrentDate } from "../../../utils/currentDate";

const UserWelcome = () => {
  const user = useSelector((state) => state.auth.user);
  const { firstName } = user.userDetails;

  return (
    <div>
      <h3 className="text-[#353535] font-bold text-[32px]">
        Hello <span className="capitalize">{firstName}</span> <span>👋🏽</span>
      </h3>

      <p className="text-[#959595] text-[16px] pt-2">{getCurrentDate()}</p>
    </div>
  );
};

export default UserWelcome;
