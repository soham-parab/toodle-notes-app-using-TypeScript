import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./Note.module.css";
import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { addNote } from "../../serverRequests/actionRequests";
import { useToodle } from "../../Contexts/notesContext";
import { useParams } from "react-router-dom";
export default function Note() {
  const { state, dispatch } = useToodle();
  const { noteId } = useParams();
  const note = state.notes.find((item) => item._id === noteId);
  const noteTitle: any = note?.title;
  const noteText: any = note?.text;
  const noteLabel: any = note?.label;
  const [title, setTitle] = useState(noteTitle);
  const [text, setText] = useState(noteText);
  const [label, setLabel] = useState(noteLabel);
  const { user } = useAuth0();
  return (
    <div>
      <div>
        <input
          name="title"
          value={title}
          placeholder="Enter your note's title"
          onChange={(e) => setTitle(e.target.value)}
        />
        {label}
        <select
          placeholder="Select Label"
          name="label"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        >
          <option value="">Change Label</option>
          <option value="label1">Misc</option>
        </select>
      </div>

      <ReactQuill
        value={text}
        onChange={(e) => setText(e)}
        // className={styles.editor}
        placeholder="What's up?"
      />
    </div>
  );
}
