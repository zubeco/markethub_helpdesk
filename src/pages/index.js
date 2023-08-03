import { useSelector } from "react-redux";
import { handleRedirect } from "../../utils/redirectUtil";

export default function Home() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  handleRedirect(isLoggedIn);

  return null;
}
