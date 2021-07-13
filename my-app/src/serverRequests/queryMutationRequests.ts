import axios from "axios";
import { ContextValue } from "../Contexts/notesContext";

export type queryAddNoteType = {
  title: String;
  text: String;
  email: String;
  label: String;
  pinned: Boolean;
};

export type queryAddLabelType = {
  email: String;
  label: String;
};

// export const queryAddNote = ({
//   text,
//   email,
//   label,
//   pinned,
// }: queryAddNoteType) => {
//   return `mutation MyMutation {
//     insert_notes_one(object: {text: "2901849237582wjsdijashdijakshd", email: "lellelele@skldllasd.com", label: "newLABEL:"}) {
//       _id
//       archive
//       email
//       label
//       pinned
//       text
//       trash
//     }
//   }`;
// };

// export const addNote = async ({
//   text,
//   email,
//   label,
//   pinned,
// }: queryAddNoteType) => {
//   const res = await Axios.post("", {
//     query: queryAddNote({ text, email, label, pinned }),
//   });
// };

export const queryGetNotes = `
query MyQuery($email: String!) {
  notes(where: {email: {_eq: $email}}) {
    _id
    title
    text
    pinned
    archived
    label
  }
  label(where: {email: {_eq: $email}}) {
    _id
    label
  }
}

`;
export const queryAddNote = `mutation MyMutation($email: String!, $label: String!,$pinned: Boolean!, $text: String!, $title: String!) {
  insert_notes_one(object: {email: $email, label: $label, pinned: $pinned, text: $text, title: $title}) {
    _id
    archived
    title
    label
    pinned
    text
  }
}`;

export const queryDeleteNote = `mutation MyMutation($_id: uuid!) {
  delete_notes_by_pk(_id: $_id) {
    _id
  }
}
`;

export const queryAddLabel = `mutation MyMutation($label: String!, $email: String!) {
  insert_labels_one(object: {label: $label, email: $email}) {
    _id
    label
  }
}`;

export const queryDeleteLabel = `mutation MyMutation($_id: uuid!) {
  delete_labels_by_pk(_id: $_id) {
    _id
  }
}`;

export const queryEditLabel = `mutation MyMutation($_id: uuid!, $label: String!) {
  update_labels_by_pk(pk_columns: {_id: $_id}, _set: {label: $label}) {
    _id
    label
  }
}
`;
