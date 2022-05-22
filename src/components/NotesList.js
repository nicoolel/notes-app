import React from "react"
import Note from "./Note"
import AddNote from "./AddNote"

// getting notes that we just passed in App.js
const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
    return (
        // map to loop over notes list and render a note component
        // adding the Notes component in here allows for easier styling using grid
        <div className="notes-list">
            {notes.map((note) => (
                // want to pass in props (note, text, id)
                <Note 
                    id = {note.id}
                    text = {note.text}
                    date= {note.date}
                    handleDeleteNote={handleDeleteNote} />
            ))}
            <AddNote handleAddNote= {handleAddNote} />
        </div>
    );
};

export default NotesList;