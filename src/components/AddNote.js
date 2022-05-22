import React from "react"
import { useState } from "react"

const AddNote = ({ handleAddNote }) => {

    const [noteText, setNoteText] = useState("")

    const characterLimit = 200
    // want to update the state value of text

    // this is where value gets saved in state
    const handleChange = (event) => {
        // target.value = value of the text area AKA wkat hte user has typed
        // console.log(event.target.value)
        // subtracts the length of the value from character limit. if it's passed the limit, then it won't update the note
        if (characterLimit - event.target.value.length >= 0){
            setNoteText(event.target.value)
        }
    }

    // update state with new note
    const handleSaveClick = () => {
        // handles spaces / empty note
        if (noteText.trim().length > 0){
            handleAddNote(noteText)
            // reset note text
            setNoteText("")
        }
    }

    return (
        <div className="note new">
            <textarea 
                rows="8" 
                cols="10" 
                placeholder="Enter a new note"
                value={noteText}
                onChange={handleChange}>
            </textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} Remaining</small>
                <button 
                    className="save" 
                    onClick={handleSaveClick}
                    >Save</button>
            </div>
        </div>
    )
}

export default AddNote