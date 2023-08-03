import { useRouter } from "next/router";

export const handleRedirect = (isLoggedIn) => {
  const router = useRouter();

  if (isLoggedIn) {
    redirectToDashboard();
  } else {
    redirectToLogin();
  }

  function redirectToDashboard() {
    router.push("/dashboard");
  }

  function redirectToLogin() {
    router.push("/auth/login");
  }
};
