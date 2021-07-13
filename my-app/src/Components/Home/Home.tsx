import { useAuth0 } from "@auth0/auth0-react";
import { useToodle } from "../../Contexts/notesContext";
import Sidebar from "../Sidebar/Sidebar";
import { getNotesAndLabels } from "../../serverRequests/actionRequests";
import styles from "./Home.module.css";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export const Home = () => {
  const { state, dispatch } = useToodle();
  const { user } = useAuth0();
  console.log(user);
  useEffect(() => {
    console.log(user);
    getNotesAndLabels(dispatch, user?.email);
    console.log(user?.email);
  }, [user]);
  return (
    <div className={styles.maindiv}>
      {" "}
      <Sidebar />
      <Outlet />
    </div>
  );
};
