import React, { useState } from 'react'
import noteContext from '../context/notes/noteContext';
import { useContext } from 'react';

const AddNote = () => {
    const context = useContext(noteContext);
    const {addNote}=context;
    const [note,setnote]=useState({title:"",description:"",tag:"default"})
    const handleClick=(e)=>{
        e.preventDefault();
    
        addNote(note.title,note.description,note.tag);
    }
    const onChange=(e)=>{
        setnote({...note,[e.target.name]:e.target.value})
    }
  return (
    <div className="container my-3">
    <h1>Add a Note</h1>
    <form>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          aria-describedby="emailHelp"
          name='title'
          onChange={onChange}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="description"
          title='description'
          name='description'
          onChange={onChange}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleClick}>
        Submit
      </button>
    </form>
  </div>
  )
}

export default AddNote