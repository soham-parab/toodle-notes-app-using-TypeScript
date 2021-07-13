import styles from "./Sidebar.module.css";
import { MdLabel } from "react-icons/md";
import { BiLabel, BiEditAlt } from "react-icons/bi";
import { AiFillPushpin, AiFillFileAdd } from "react-icons/ai";
import { RiChatDeleteLine } from "react-icons/ri";
import { MdAddCircle } from "react-icons/md";
import { FaFileArchive } from "react-icons/fa";
import { useToodle } from "../../Contexts/notesContext";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink, useLocation } from "react-router-dom";
import AddLabelModal from "./AddLabelModal";
import { deleteLabel, editLabel } from "../../serverRequests/actionRequests";

function Sidebar() {
  const { state, dispatch } = useToodle();
  const [viewModal, setViewModal] = useState<Boolean>(false);
  const path = useLocation().pathname;

  return (
    <div className={styles.sideBar}>
      <NavLink to="/notes/new">
        <div className={styles.newNote}>
          <AiFillFileAdd color={"#1D4ED8"} className={styles.icon} />
          New Note
        </div>
      </NavLink>
      <div className={styles.sideBarList}>
        <NavLink to="/notes">
          <div
            className={
              path === "/notes"
                ? `${styles.activeTag} ${styles.tag}`
                : styles.tag
            }
          >
            <MdLabel className={styles.icon} />
            All notes
          </div>
        </NavLink>
        <NavLink to="/notes/pinned">
          <div
            className={
              path === "/notes/pinned"
                ? `${styles.activeTag} ${styles.tag}`
                : styles.tag
            }
          >
            <AiFillPushpin className={styles.icon} />
            Pinned notes
          </div>
        </NavLink>
        <NavLink to="/notes/archived">
          <div
            className={
              path === "/notes/archived"
                ? `${styles.activeTag} ${styles.tag}`
                : styles.tag
            }
          >
            <FaFileArchive className={styles.icon} />
            Archived notes
          </div>
        </NavLink>
        <div className={styles.tagList}>
          {state.label && state.label.map((item) => (
            <div className={false ? styles.activeTag : styles.tag}>
              <BiLabel className={styles.icon} />
              <NavLink to={`/notes/label/${item.label}`}>
                <p>{item.label}</p>
              </NavLink>
              <RiChatDeleteLine
                onClick={() => deleteLabel(dispatch, item._id)}
                style={{ marginLeft: "auto" }}
              />
            </div>
          ))}
        </div>
        <div
          className={styles.addTag}
          onClick={() => setViewModal((prev) => !prev)}
        >
          <MdAddCircle color={"#1D4ED8"} className={styles.icon} />
          Add new Label
        </div>
      </div>
      {viewModal && <AddLabelModal setViewModal={setViewModal} />}
    </div>
  );
}

export default Sidebar;
