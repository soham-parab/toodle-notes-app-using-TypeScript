import {
  initialStateType,
  labelType,
  notesType,
} from "../Contexts/notesContext";

export type ACTIONTYPE =
  | { type: "GET_NOTES"; payload: notesType[] }
  | { type: "GET_LABELS"; payload: labelType[] }
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
    case "GET_NOTES":
      return {
        ...state,
        notes: action.payload,
      };
    case "GET_LABELS":
      return {
        ...state,
        label: action.payload,
      };

    case "ADD_NOTE":
      return {
        ...state,
        notes: state.notes.concat(action.payload),
      };
    case "DELETE_NOTE":
      return {
        ...state,
        notes: state.notes.filter((note) => note._id !== action.payload),
      };
    case "EDIT_NOTE_TEXT":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note._id === action.payload._id
            ? {
                ...note,
                text: action.payload.text,
              }
            : note
        ),
      };
    case "TOGGLE_ARCHIVE_NOTE":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note._id === action.payload
            ? {
                ...note,
                archive: !note.archive,
              }
            : note
        ),
      };
    case "TOGGLE_TRASH_NOTE":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note._id === action.payload
            ? {
                ...note,
                trash: !note.trash,
              }
            : note
        ),
      };
    case "TOGGLE_PIN_NOTE":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note._id === action.payload
            ? {
                ...note,
                pinned: !note.pinned,
              }
            : note
        ),
      };
    case "ADD_LABEL":
      return {
        ...state,
        label: state.label.concat(action.payload),
      };
    case "DELETE_LABEL":
      return {
        ...state,
        label: state.label.filter((item) => item._id !== action.payload),
      };
    case "EDIT_NOTE_LABEL":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note._id === action.payload._id
            ? {
                ...note,
                label: action.payload.label,
              }
            : note
        ),
      };
    case "EDIT_LABEL":
      return {
        ...state,
        label: state.label.map((item) =>
          item._id === action.payload._id
            ? {
                ...item,
                label: action.payload.label,
              }
            : item
        ),
      };

    default:
      break;
  }
  return state;
};
