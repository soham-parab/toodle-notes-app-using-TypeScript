import axios from "axios";
import { ContextValue } from "../Contexts/notesContext";

export type queryAddNoteType = {
  text: String;
  email: String;
  label: String;
  pinned: Boolean;
};
const Axios = axios.create({
  baseURL: "https://renewing-lab-10.hasura.app/v1/graphql",
  headers: {
    "Content-Type": "application/json",
    "x-hasura-admin-secret":
      "qycdbDuwSsOrivbdnWmJbFLez3C4NBJSz6KzTDHpljYkEKoMloheBvQo9QxDBY5B",
  },
});

export const queryAddNote = ({
  text,
  email,
  label,
  pinned,
}: queryAddNoteType) => {
  return `mutation MyMutation {
    insert_notes_one(object: {text: "2901849237582wjsdijashdijakshd", email: "lellelele@skldllasd.com", label: "newLABEL:"}) {
      _id 
      archive
      email
      label
      pinned
      text
      trash
    }
  }`;
};

export const addNote = async ({
  text,
  email,
  label,
  pinned,
}: queryAddNoteType) => {
  const res = await Axios.post("", {
    query: queryAddNote({ text, email, label, pinned }),
  });
  console.log(res);
};
