import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "../../Components/LandingPage/LandingPage.module.css";
export const Logout = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated && (
        <button className={style.logout} onClick={() => logout()}>
          Log Out
        </button>
      )}
    </>
  );
};
