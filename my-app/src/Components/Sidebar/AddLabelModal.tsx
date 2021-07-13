import React, { useState } from "react";
import "./AddLabelModal.css";
import { IoClose } from "react-icons/io5";
import { useToodle } from "../../Contexts/notesContext";
import { addLabel } from "../../serverRequests/actionRequests";
import { useAuth0 } from "@auth0/auth0-react";

type Props = {
  setViewModal: React.Dispatch<React.SetStateAction<Boolean>>;
};

function EditModal({ setViewModal }: Props) {
  const [input, setInput] = useState("");
  const { state, dispatch } = useToodle();
  const { user } = useAuth0();

  function submitHandler(e: any) {
    e.preventDefault();
    if (input.trim().length === 0) {
      return;
    }
    if (e.target.name === "btn") {
      addLabel(dispatch, { label: input, email: user?.email! });
      setViewModal(false);
    }
  }

  return (
    <div
      className="edit-modal-bg"
      onClick={(e) => {
        submitHandler(e);
      }}
    >
      <form className="edit-modal" onSubmit={(e) => submitHandler(e)}>
        <div className="modal-text">
          Create new Label
          <IoClose onClick={() => setViewModal(false)} />
        </div>
        <div className="modal-input">
          Name
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="Label name"
            autoFocus
          />
        </div>
        <button name="btn" type="submit">
          Create
        </button>
      </form>
    </div>
  );
}

export default EditModal;
