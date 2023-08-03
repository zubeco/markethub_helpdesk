import { useState, useContext} from "react";
import Link from "next/link";
import React from "react";
import AuthContext from "../../../context/userSummary";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Head from "next/head";
import { FiEyeOff, FiEye } from "react-icons/fi";
import Connect from "@/components/atoms/Connect";
import SubLayout from "@/components/atoms/SubLayout";
import Loading from "@/components/molecules/Loading";
import { content } from "@/constants/login_translate";
import { login_url } from "@/constants/url";
import { configWithoutAccessToken } from "../../../utils/apiConfig";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../../../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

export default function login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isLoading, isLoggedIn, error } = useSelector((state) => state.auth);
  const [passwordShown, setPasswordShown] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const { password, email } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const response = await axios.post(
        login_url,
        {
          email: email,
          password,
        },
        configWithoutAccessToken
      );
      if (response?.data.status !== true) {
        toast.error("Incorrect username or password");
        return;
      }
      const userData = response.data;
      dispatch(loginSuccess(userData));

      router.push("/dashboard");
    } catch (error) {
      // Simulating API failure response
      dispatch(loginFailure(error.message));
    }
  };

  const { language } = useContext(AuthContext);
  const selectedLanguageContent =
    language === "English" ? content.English : content.French;

  if (isLoading) return <Loading />;

  return (
    <SubLayout>
      <Head>
        <title>MarketHub | Login</title>
        <meta name="Markethub Login" content="Markethub Login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center mt-20">
        <div className="">
          <div className="">
            <form onSubmit={onSubmit}>
              <div>
                <h1 className="text-3xl font-normal font-Roboto text-center">
                  {selectedLanguageContent.text1}
                </h1>
                <div className="w-full lg:w-[400px]  mt-12">
                  <input
                    id="email"
                    name="email"
                    maxLength="50"
                    value={email}
                    type="email"
                    className="h-[56px] w-full mb-5 px-4 py-2 border-2 border-gray-200 rounded-lg"
                    placeholder={selectedLanguageContent.text3}
                    onChange={onChange}
                  />
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={passwordShown ? "text" : "password"}
                      value={password}
                      className="h-[56px] w-full px-4 py-2 border-2 border-gray-200 rounded-lg"
                      placeholder={selectedLanguageContent.text4}
                      onChange={onChange}
                      maxLength="50"
                    />
                    <div
                      className="absolute right-[15px] cursor-pointer top-[20px]"
                      onClick={() => setPasswordShown(!passwordShown)}
                    >
                      {passwordShown ? (
                        <FiEyeOff className="text-[20px] text-gray-400 " />
                      ) : (
                        <FiEye className="text-[20px] text-gray-400 " />
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mt-5 text-sm">
                    <Link href="/auth/register">
                      <p className="font-bold cursor-pointer text-myRed">
                        {selectedLanguageContent.text5}
                      </p>
                    </Link>
                    <Link href="/auth/forgot-password">
                      <p className="font-bold cursor-pointer text-myRed">
                        {selectedLanguageContent.text6}
                      </p>
                    </Link>
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-[#E60000] h-[56px] w-full mt-7 font-bold  text-white rounded-full"
                >
                  {selectedLanguageContent.text7}
                </button>
              </div>
            </form>
            <div className="flex flex-row items-center justify-center  lg:flex my-[40px]">
              <div className="w-[50%] border-t border-[#D5D5D5]"></div>
              <p className="text-xl uppercase text-[#959595]  px-5 font-Manrope font-normal">
                {selectedLanguageContent.text8}
              </p>
              <div className="w-[50%] border-t border-[#D5D5D5]"></div>
            </div>

            <Connect
              text1={selectedLanguageContent.text6}
              text2={selectedLanguageContent.text5}
              link="auth/register"
            />
          </div>
        </div>
      </div>
    </SubLayout>
  );
}
