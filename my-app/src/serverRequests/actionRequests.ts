import axios from "axios";
import React from "react";
import { ACTIONTYPE } from "../Reducers/notesReducer";
import { Axios } from "../Contexts/notesContext";
import { queryAddNoteType, queryAddLabelType } from "./queryMutationRequests";
import {
  queryGetNotes,
  queryAddNote,
  queryDeleteNote,
  queryAddLabel,
  queryDeleteLabel,
  queryEditLabel,
} from "./queryMutationRequests";

export const getNotesAndLabels = async (
  dispatch: React.Dispatch<ACTIONTYPE>,
  email: String | undefined
) => {
  try {
    const res = await Axios.post(
      "/",
      JSON.stringify({
        query: queryGetNotes,
        variables: {
          email: email,
        },
      })
    );

    dispatch({ type: "GET_NOTES", payload: res.data.data.notes });
    dispatch({ type: "GET_LABELS", payload: res.data.data.labels });
  } catch (err) {
    console.log(err);
  }
};

export const addNote = async (
  dispatch: React.Dispatch<ACTIONTYPE>,
  payload: queryAddNoteType
) => {
  const res = await Axios.post(
    "/",
    JSON.stringify({
      query: queryAddNote,
      variables: { ...payload },
    })
  );
  dispatch({ type: "ADD_NOTE", payload: res.data.data.insert_notes_one });
};

export const deleteNote = async (
  dispatch: React.Dispatch<ACTIONTYPE>,
  payload: String
) => {
  const res = await Axios.post(
    "/",
    JSON.stringify({
      query: queryDeleteNote,
      variables: { _id: payload },
    })
  );

  dispatch({
    type: "DELETE_NOTE",
    payload: res.data.data.delete_notes_by_pk._id,
  });
};

export const addLabel = async (
  dispatch: React.Dispatch<ACTIONTYPE>,
  payload: queryAddLabelType
) => {
  const res = await Axios.post(
    "/",
    JSON.stringify({
      query: queryAddLabel,
      variables: payload,
    })
  );
  dispatch({ type: "ADD_LABEL", payload: res.data.data.insert_labels_one });
};

export const deleteLabel = async (
  dispatch: React.Dispatch<ACTIONTYPE>,
  payload: String
) => {
  const res = await Axios.post(
    "/",
    JSON.stringify({
      query: queryDeleteLabel,
      variables: { _id: payload },
    })
  );
  dispatch({
    type: "DELETE_LABEL",
    payload: res.data.data.delete_labels_by_pk._id,
  });
};

export const editLabel = async (
  dispatch: React.Dispatch<ACTIONTYPE>,
  payload: { _id: String; label: String }
) => {
  const res = await Axios.post(
    "/",
    JSON.stringify({
      query: queryEditLabel,
      variables: payload,
    })
  );

  dispatch({
    type: "DELETE_LABEL",
    payload: res.data.data.update_labels_by_pk._id,
  });
};
