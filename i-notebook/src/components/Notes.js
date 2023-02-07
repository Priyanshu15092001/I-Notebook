import React from 'react'
import noteContext from '../context/notes/noteContext';
import { useContext } from 'react';
import NoteItem from './NoteItem';
export const Notes = () => {
    const context = useContext(noteContext);
    const {notes,setnotes}=context;
    
    
  return (
    <div className="row my-3">
    <h1>Your Notes</h1>
    {notes.map((notes)=>{
        return <NoteItem notes ={notes} key={notes._id} />
    })}
  </div>
  )
}
