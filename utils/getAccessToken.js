export const getAccessToken = () => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem("accessToken");
  }
  return null;
};
