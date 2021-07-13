import styles from "./Navbar.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Logout } from "../Logout/Logout";
import style from "./Navbar.module.css";
export const Navbar = () => {
  const { user } = useAuth0();
  return (
    <div className={style.nav}>
      <p className={style.para}> {user?.name}</p>
      <Logout />
    </div>
  );
};
