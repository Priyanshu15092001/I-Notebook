import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setnotes] = useState(notesInitial);

  //Get all notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhYzM1ZmY0ZTA2N2I5Y2QxNGUyMzBlIn0sImlhdCI6MTY3MjQwMzUyM30.vNHRzn_hfq9CXFazMdmGKfwefWjWnwibyG8RGWRMo1g",
      },
    });
    const json = await response.json();
    console.log(json);
    setnotes(json);
  };

  //Add a note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhYzM1ZmY0ZTA2N2I5Y2QxNGUyMzBlIn0sImlhdCI6MTY3MjQwMzUyM30.vNHRzn_hfq9CXFazMdmGKfwefWjWnwibyG8RGWRMo1g",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note =await response.json();
    

  

    setnotes(notes.concat(note));
  };

  //Delete a note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhYzM1ZmY0ZTA2N2I5Y2QxNGUyMzBlIn0sImlhdCI6MTY3MjQwMzUyM30.vNHRzn_hfq9CXFazMdmGKfwefWjWnwibyG8RGWRMo1g",
      },
    });
    const json = response.json();
    console.log(json);

    console.log("Deleting note with id " + id);
    const newNotes = notes.filter((notes) => {
      return notes._id !== id;
    });
    setnotes(newNotes);
  };

  //Edit a note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhYzM1ZmY0ZTA2N2I5Y2QxNGUyMzBlIn0sImlhdCI6MTY3MjQwMzUyM30.vNHRzn_hfq9CXFazMdmGKfwefWjWnwibyG8RGWRMo1g",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    console.log(json);


    let newNotes=JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setnotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
