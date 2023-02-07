import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState=(props)=>{
    const notesInitial=[
        {
          "_id": "63db445065092a0464fe53d4",
          "user": "63ac35ff4e067b9cd14e230e",
          "title": "My title",
          "description": "please wake up early",
          "tag": "personal",
          "date": "2023-02-02T05:04:16.683Z",
          "__v": 0
        },
        {
          "_id": "63e086f265092a0464fe53d7",
          "user": "63ac35ff4e067b9cd14e230e",
          "title": "My title11",
          "description": "please wake up early",
          "tag": "personal",
          "date": "2023-02-06T04:49:54.436Z",
          "__v": 0
        }
      ]
      const [notes, setnotes] = useState(notesInitial)
return (
    <NoteContext.Provider value={{notes,setnotes}}>
        {props.children}
    </NoteContext.Provider>
)
}
export default NoteState;