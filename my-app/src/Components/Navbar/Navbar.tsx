import styles from "./Navbar.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Logout } from "../Logout/Logout";
import style from "./Navbar.module.css";
import { Login } from "../Login/Login";
export const Navbar = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div className={style.nav}>
      <div>
        <p className={style.paraleft}> toodle</p>
      </div>
      {isAuthenticated ? (
        <div className={style.right}>
          <p className={style.para}> {user?.name}</p>
          <Logout />
        </div>
      ) : (
        <div className={style.right}>
          <p className={style.para}> {user?.name}</p>
          <Login />
        </div>
      )}
    </div>
  );
};
