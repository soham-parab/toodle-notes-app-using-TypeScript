import styles from "./Navbar.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Logout } from "../Logout/Logout";

export const Navbar = () => {
  const { user } = useAuth0();
  return (
    <div>
      {user?.name}
      <Logout />
    </div>
  );
};
