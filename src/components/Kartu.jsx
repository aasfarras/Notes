import { showFormattedDate } from "../utils";
import Tombol from "./Tombol";
import { CardMedia } from "@mui/material";

const Kartu = ({ id, title, createdAt, body, archived, action }) => {
  const deleteNote = (item) =>
    action((notes) => notes.filter((note) => note.id !== item));
  const toggleArchive = (item) => {
    action((notes) =>
      notes.map((note) => {
        if (note.id === item) {
          return { ...note, archived: !note.archived };
        }
        return note;
      })
    );
  };

  return (
    <CardMedia height="140">
      <article id={id}>
        <header>
          <h3>{title}</h3>
          <small>{showFormattedDate(createdAt)}</small>
          <p>{body}</p>
        </header>
        <footer>
          <Tombol eventHandler={() => deleteNote(id)} label="delete" />
          <Tombol
            eventHandler={() => toggleArchive(id)}
            label={archived ? "unarchived" : "archive"}
          />
        </footer>
      </article>
    </CardMedia>
  );
};

export default Kartu;
