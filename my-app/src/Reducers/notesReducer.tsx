import {
  initialStateType,
  labelType,
  notesType,
} from "../Contexts/notesContext";

export type ACTIONTYPE =
  | { type: "ADD_NOTE"; payload: notesType }
  | { type: "DELETE_NOTE"; payload: String }
  | { type: "TOGGLE_TRASH_NOTE"; payload: String }
  | { type: "EDIT_NOTE_TEXT"; payload: { _id: String; text: String } }
  | { type: "TOGGLE_ARCHIVE_NOTE"; payload: String }
  | { type: "TOGGLE_PIN_NOTE"; payload: String }
  | { type: "ADD_LABEL"; payload: labelType }
  | { type: "DELETE_LABEL"; payload: String }
  | { type: "EDIT_LABEL"; payload: { _id: String; label: String } }
  | { type: "EDIT_NOTE_LABEL"; payload: { _id: String; label: String } };

export const notesReducer = (
  state: initialStateType,
  action: ACTIONTYPE
): initialStateType => {
  switch (action.type) {
    case "ADD_NOTE":
      break;

    default:
      break;
  }
};
