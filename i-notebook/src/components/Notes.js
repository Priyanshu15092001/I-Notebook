import React, { useRef,useState,useEffect } from 'react'
import noteContext from '../context/notes/noteContext';
import { useContext } from 'react';
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';
export const Notes = () => {
    const context = useContext(noteContext);
    const {notes,editNote,getNotes}=context;
    const [note,setnote]=useState({id:"",etitle:"",edescription:"",etag:"default"})
    let navigate=useNavigate();
   useEffect(() => {
     if(localStorage.getItem('token'))
     getNotes()
     else
     navigate("/login")
   
   })
   
    const handleClick=(e)=>{
      e.preventDefault();
      editNote(note.id,note.etitle,note.edescription,note.etag)
  refClose.current.click()
    //  addNote(note.title,note.description,note.tag);
  }
  const onChange=(e)=>{
      setnote({...note,[e.target.name]:e.target.value})
  }
    const updateNote=(currentNote)=>{
   ref.current.click()
   setnote({id:currentNote._id,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag})
    }
    const ref = useRef(null)
    const refClose=useRef(null)
  return (
    <>
<AddNote/>

<button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" ref={ref} data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"  aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" ref={refClose} aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="etitle"
          aria-describedby="emailHelp"
          name='etitle'
          onChange={onChange}
          minLength={5} required
          value={note.etitle}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="edescription"
          title='description'
          name='edescription'
          onChange={onChange}
          minLength={5} required
          value={note.edescription}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tag" className="form-label">
          Tag
        </label>
        <input
          type="text"
          className="form-control"
          id="etag"
          title='tag'
          name='etag'
          onChange={onChange}
          value={note.etag}
        />
      </div>
      </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={handleClick}>Save changes</button>
      </div>
    </div>
  </div>
</div>



    <div className="row my-3">
    <h1>Your Notes</h1>
    <div className="container mx-2">
    {notes.length===0&& "No notes to display"}
    </div>
    {notes.map((notes)=>{
        return <NoteItem notes ={notes} key={notes._id} updateNote={updateNote} />
    })}
  </div>
  </>
  )
}
