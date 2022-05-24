import React from "react"
import { useState, useEffect } from "react"
import { nanoid } from "nanoid"
import Header from "./components/Header"
import NotesList from "./components/NotesList"
import Search from "./components/Search"

const App = () => {

  // State hook - store notes as an initial array
  // need to know the text and date
  const [notes, setNotes] = useState([
      {
      id: nanoid(),
      text: "This is my first note",
      date: "05/16/2022"
      },
      {
        id: nanoid(),
        text: "This is my second note",
        date: "05/17/2022"
      },
      {
        id: nanoid(),
        text: "This is my third note",
        date: "05/18/2022"
      },
      {
        id: nanoid(),
        text: "This is my fourth note",
        date: "05/19/2022"
      }
    ]);

  const [searchText, setSearchText] = useState("")

  // toggle dark mode
  const [darkMode, setDarkMode] = useState(false)

  // empty dependency array = loads on first run
  useEffect(() => {
    // localStorage.clear()
    const savedNotes = JSON.parse(localStorage.getItem('notesData'))
    if (savedNotes){
      setNotes(savedNotes)
    }
  }, [])

  // lets us run code at certain points at component's life cycles
  // whenever notes gets updated, we run useEffect and save to local storage
  useEffect(() => {
    localStorage.setItem('notesData', JSON.stringify(notes))
  }, [notes])
  
  // add note. takes in text
  const addNote = (text) => {
    // console.log(text)
    const date = new Date()
    const newNote = {
      id: nanoid(),
      text: text,
      // convert date to whatever local string we got
      date: date.toLocaleDateString()
    }
    // creates a new array with exisiting notes and new one
    const newNotes = [...notes, newNote]
    // updating state and rerender
    setNotes(newNotes)
  }

  // delete note
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  return (
    // if darkMode is true, add class dark-mode to the div
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header 
          handleToggleDarkMode={setDarkMode}/>
        {/* hook function that lets us update the search text */}
        <Search
          handleSearchNote={setSearchText} />
        {/* need to pass notes variable to NotesList component so they can render each note */}
        <NotesList 
          // take current list of notes, filter list to return notes that only includes search text
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
          handleAddNote={addNote}
          handleDeleteNote={deleteNote} />
      </div>
    </div>
  );
};

export default App;