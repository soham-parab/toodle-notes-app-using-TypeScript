import { ACTIONTYPE, notesReducer } from "../Reducers/notesReducer";
import { labelType, notesType, initialState } from "../Contexts/notesContext";
import { v4 as uuid } from "uuid";
const id: string = uuid();

describe(`testing reducer`, () => {
  test("should add note", () => {
    const note: notesType = {
      _id: id,
      text: "sdbfjhdsbvkjb",
      email: "abc@gmail.com",
      label: "label",
      pinned: true,
      trash: false,
      archive: false,
    };
    const action: ACTIONTYPE = {
      type: "ADD_NOTE",
      payload: note,
    };
    const state = notesReducer(initialState, action);
    expect(state.notes[state.notes.length - 1]).toEqual(note);
  });

  test("should delete note", () => {
    const note: notesType = {
      _id: "123",
      text: "sdbfjhdsbvkjb",
      email: "abc@gmail.com",
      label: "label",
      pinned: true,
      trash: false,
      archive: false,
    };
    const actionOne: ACTIONTYPE = {
      type: "ADD_NOTE",
      payload: note,
    };
    const actionTwo: ACTIONTYPE = {
      type: "DELETE_NOTE",
      payload: "123",
    };
    const stateOne = notesReducer(initialState, actionOne);
    const stateTwo = notesReducer(stateOne, actionTwo);
    const filteredState = stateTwo.notes.filter((item) => item._id === "123");
    expect(filteredState.length).toEqual(0);
  });

  test("should edit note", () => {
    const note: notesType = {
      _id: "123",
      text: "sdbfjhdsbvkjb",
      email: "abc@gmail.com",
      label: "label",
      pinned: true,
      trash: false,
      archive: false,
    };
    const actionOne: ACTIONTYPE = {
      type: "ADD_NOTE",
      payload: note,
    };
    const actionTwo: ACTIONTYPE = {
      type: "EDIT_NOTE_TEXT",
      payload: { _id: "123", text: "Note is edited" },
    };
    const stateOne = notesReducer(initialState, actionOne);
    const stateTwo = notesReducer(stateOne, actionTwo);
    const filteredState = stateTwo.notes.filter((item) => item._id === "123");
    expect(filteredState[0].text).toEqual("Note is edited");
  });

  test("should toggle trash", () => {
    const note: notesType = {
      _id: "123",
      text: "sdbfjhdsbvkjb",
      email: "abc@gmail.com",
      label: "label",
      pinned: true,
      trash: false,
      archive: false,
    };

    const actionOne: ACTIONTYPE = {
      type: "ADD_NOTE",
      payload: note,
    };

    const actionTwo: ACTIONTYPE = {
      type: "TOGGLE_TRASH_NOTE",
      payload: "123",
    };

    const stateOne = notesReducer(initialState, actionOne);
    const stateTwo = notesReducer(stateOne, actionTwo);
    const isNoteTrashed = stateTwo.notes.find((item) => item._id === "123");
    expect(isNoteTrashed?.trash).toEqual(true);
  });

  test("should toggle archive", () => {
    const note: notesType = {
      _id: "123",
      text: "sdbfjhdsbvkjb",
      email: "abc@gmail.com",
      label: "label",
      pinned: true,
      trash: false,
      archive: false,
    };

    const actionOne: ACTIONTYPE = {
      type: "ADD_NOTE",
      payload: note,
    };

    const actionTwo: ACTIONTYPE = {
      type: "TOGGLE_ARCHIVE_NOTE",
      payload: "123",
    };

    const stateOne = notesReducer(initialState, actionOne);
    const stateTwo = notesReducer(stateOne, actionTwo);
    const isNoteArchived = stateTwo.notes.find((item) => item._id === "123");
    expect(isNoteArchived?.archive).toEqual(true);
  });

  test("should toggle pinned", () => {
    const note: notesType = {
      _id: "123",
      text: "sdbfjhdsbvkjb",
      email: "abc@gmail.com",
      label: "label",
      pinned: true,
      trash: false,
      archive: false,
    };

    const actionOne: ACTIONTYPE = {
      type: "ADD_NOTE",
      payload: note,
    };

    const actionTwo: ACTIONTYPE = {
      type: "TOGGLE_PIN_NOTE",
      payload: "123",
    };

    const stateOne = notesReducer(initialState, actionOne);
    const stateTwo = notesReducer(stateOne, actionTwo);
    const isNotePinned = stateTwo.notes.find((item) => item._id === "123");
    expect(isNotePinned?.pinned).toEqual(false);
  });

  test("Should edit note's label", () => {
    const note: notesType = {
      _id: "123",
      text: "sdbfjhdsbvkjb",
      email: "abc@gmail.com",
      label: "label",
      pinned: true,
      trash: false,
      archive: false,
    };
    const actionOne: ACTIONTYPE = {
      type: "ADD_NOTE",
      payload: note,
    };

    const actionTwo: ACTIONTYPE = {
      type: "EDIT_NOTE_LABEL",
      payload: { _id: "123", label: "newLabel" },
    };

    const stateOne = notesReducer(initialState, actionOne);
    const stateTwo = notesReducer(stateOne, actionTwo);
    const isNoteLabelChanged = stateTwo.notes.find(
      (item) => item._id === "123"
    );
    expect(isNoteLabelChanged?.label).toEqual("newLabel");
  });

  test("should add label", () => {
    const label: labelType = {
      _id: id,
      label: "label",
    };
    const action: ACTIONTYPE = {
      type: "ADD_LABEL",
      payload: label,
    };
    const state = notesReducer(initialState, action);
    expect(state.labels[state.labels.length - 1]).toEqual(label);
  });

  test("should delete label", () => {
    const label: labelType = {
      _id: "123",
      label: "label",
    };
    const actionOne: ACTIONTYPE = {
      type: "ADD_LABEL",
      payload: label,
    };
    const actionTwo: ACTIONTYPE = {
      type: "DELETE_LABEL",
      payload: "123",
    };
    const stateOne = notesReducer(initialState, actionOne);
    const stateTwo = notesReducer(stateOne, actionTwo);
    const filteredLabel = stateTwo.labels.filter((item) => item._id === "123");
    expect(filteredLabel.length).toEqual(0);
  });

  test("should edit label", () => {
    const label: labelType = {
      _id: "123",
      label: "label",
    };
    const actionOne: ACTIONTYPE = {
      type: "ADD_LABEL",
      payload: label,
    };
    const actionTwo: ACTIONTYPE = {
      type: "EDIT_LABEL",
      payload: { _id: "123", label: "Label is edited" },
    };
    const stateOne = notesReducer(initialState, actionOne);
    const stateTwo = notesReducer(stateOne, actionTwo);
    const filteredState = stateTwo.labels.filter((item) => item._id === "123");
    expect(filteredState[0].label).toEqual("Label is edited");
  });
});
