import React from "react"
import Note from "./Note"

// getting notes that we just passed in App.js
const NotesList = ({ notes }) => {
    return (
        // map to loop over notes list and render a note component
        // adding the Notes component in here allows for easier styling using grid
        <div className="notes-list">
            {notes.map((note) => (
                // want to pass in props (note, text, id)
                <Note 
                    id = {note.id}
                    text = {note.text}
                    date= {note.date} />
            ))}
        </div>
    );
};

export default NotesList;