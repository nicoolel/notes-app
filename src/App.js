import React from "react"
import { useState } from "react"
import { nanoid } from "nanoid"
import NotesList from "./components/NotesList"

const App = () => {

  // State hook - store notes as an initial array
  // need to know the text and date
  const [notes, setNotes] = useState([
      {
      id: nanoid(),
      text: "This is my first note",
      date: "16/05/2022"
      },
      {
        id: nanoid(),
        text: "This is my second note",
        date: "16/05/2022"
      },
      {
        id: nanoid(),
        text: "This is my third note",
        date: "16/05/2022"
      },
      {
        id: nanoid(),
        text: "This is my fourth note",
        date: "18/05/2022"
      }
    ]);


  return (
    <div className="container">
      {/* need to pass notes variable to NotesList component so they can render each note */}
      <NotesList notes={notes} />
    </div>
  );
};

export default App;