import React from "react"
import { MdDeleteForever } from "react-icons/md"

// destructure props from NotesList
const Note = ({ id, text, date }) => {
    return (
        // basic structure of notes 
        <div className="note">
            {/* pass in text prop */}
            <span>{text}</span>
            {/* holds date and delete icon */}
            <div className="note-footer">
                {/* pass in date prop */}
                <small>{date}</small>
                <MdDeleteForever className="delete-icon" size="1.3em" />
            </div>
        </div>
    );
};

export default Note;