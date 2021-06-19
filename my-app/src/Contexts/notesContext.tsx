import { createContext, useContext, useReducer } from "react";
import React from "react";
import { notesReducer, ACTIONTYPE } from "../Reducers/notesReducer";

export type notesType = {
  _id: String;
  text: String;
  pinned: Boolean;
  archive: Boolean;
  email: String;
  trash: Boolean;
  label: String;
};
export type labelType = {
  _id: String;
  label: String;
};
export type initialStateType = {
  notes: notesType[];
  email: String;
  labels: labelType[];
};

const NotesContext = createContext({} as ContextValue);

export type ContextValue = {
  state: initialStateType;
  dispatch: React.Dispatch<ACTIONTYPE>;
};
export const initialState: initialStateType = {
  notes: [],
  email: "",
  labels: [],
};

export const NotesProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(notesReducer, initialState);
  return (
    <NotesContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export const useScribble = () => useContext(NotesContext);
