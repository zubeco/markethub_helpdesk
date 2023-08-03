import { createContext, useState, useEffect } from "react";
import Router from "next/router";

const AuthContext = createContext({});

export const UserSummary = ({ children }) => {
  const logged =
    typeof window !== "undefined" ? localStorage.getItem("isLoggedIn") : null;
  const [auth, setAuth] = useState({});
  const [details, setDetails] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(!!logged);
  const [userDetails, setUserDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  //Multi Language
  let [language, setLanguage] = useState();

  useEffect(() => {
    let language = "";
    if (typeof window !== "undefined") {
      if (localStorage.getItem("language") === null) {
        language = "French";
      }

      if (localStorage.getItem("language") !== null) {
        language = localStorage.getItem("language");
      }
    }
    setLanguage(language);
  }, []);

  const handleSetLanguage = (language) => {
    setLanguage(language);
    storeLanguageInLocalStorage(language);
  };

  function storeLanguageInLocalStorage(language) {
    localStorage.setItem("language", language);
  }

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        details,
        setDetails,
        isLoggedIn,
        setIsLoggedIn,
        userDetails,
        setUserDetails,
        language,
        setLanguage,
        storeLanguageInLocalStorage,
        handleSetLanguage,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
