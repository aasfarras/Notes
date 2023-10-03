import { useState, useEffect } from "react";
import { FormInput, Header, SectionNotes } from "./components";
import { getInitialData } from "./utils";

function App() {
  const [query, setQuery] = useState("");
  const [searchNotes, setSearchNotes] = useState([]);
  const [notes, setNotes] = useState(getInitialData());

  const activeNotes = (searchNotes || notes).filter((note) => !note.archived);
  const archivedNotes = (searchNotes || notes).filter((note) => note.archived);

  useEffect(() => {
    setSearchNotes(
      notes.filter((note) =>
        note.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, notes]);

  return (
    <>
      <Header search={query} updateQuery={setQuery} updateNotes={setNotes} />
      <main>
        <FormInput updateNotes={setNotes} />
        <SectionNotes
          label="CATATAN AKTIF"
          notes={activeNotes}
          setNotes={setNotes}
        />
        <SectionNotes
          label="CATATAN YANG DI ARSIPKAN"
          notes={archivedNotes}
          setNotes={setNotes}
        />
      </main>
    </>
  );
}

export default App;
