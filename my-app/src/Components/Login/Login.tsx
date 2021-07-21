import { useAuth0 } from "@auth0/auth0-react";
import style from "../../Components/LandingPage/LandingPage.module.css";

export const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <>
      {!isAuthenticated && (
        <button className={style.login} onClick={() => loginWithRedirect()}>
          Log In
        </button>
      )}
    </>
  );
};
