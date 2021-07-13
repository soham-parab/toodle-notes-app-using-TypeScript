import { Input } from "semantic-ui-react";
import styles from "./Grid.module.css";
import { notesType, useToodle } from "../../Contexts/notesContext";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { deleteNote } from "../../serverRequests/actionRequests";

function Grid() {
  const { state, dispatch } = useToodle();
  let renderNotes: notesType[] = [];

  const path = useLocation().pathname;
  const { labelName } = useParams();

  renderNotes = (() => {
    switch (path) {
      case "/notes":
        return renderNotes.concat(state.notes);
      case "/notes/pinned":
        return renderNotes.concat(state.notes.filter((note) => note.pinned));
      case "/notes/archived":
        return renderNotes.concat(state.notes.filter((note) => note.archive));
      default:
        return renderNotes.concat(
          state.notes.filter((note) => note.label === labelName)
        );
    }
  })();
  console.log(state.notes);

  return (
    <div>
      <div>
        {renderNotes.length === 0 && (
          <h1 style={{ marginTop: "5rem" }}>No Notes Found</h1>
        )}
      </div>
      <div className={styles.homeGrid}>
        {renderNotes && renderNotes.map((note) => (
          <div className={styles.noteBox}>
            <RiDeleteBack2Fill
              color={"#000"}
              style={{ marginLeft: "auto" }}
              onClick={() => deleteNote(dispatch, note._id)}
            />
            <NavLink to={`/notes/${note._id}`}>
              <h1>{note.title}</h1>
            </NavLink>
            <p>{note.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grid;
