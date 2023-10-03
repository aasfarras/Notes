import { useState } from "react";
import Input from "./input";
import { Container, Typography } from "@mui/material";

const FormInput = ({ updateNotes }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const createNote = (event) => {
    event.preventDefault();
    const timestamp = new Date().toISOString();

    updateNotes((notes) => [
      ...notes,
      {
        id: timestamp,
        title,
        body: note,
        archived: false,
        createdAt: timestamp,
      },
    ]);
  };

  return (
    <form onSubmit={createNote}>
      <Container sx={{ fontWeight: "bold" }}>
        <Typography variant="h4" sx={{ textAlign: "center", mt: "20px" }}>
          BUAT CATATAN
        </Typography>
        <small>
          Karakter Yang Tersisa <span>{50 - title.length}</span>
        </small>
        <br />
        <Input
          value={title}
          onChange={setTitle}
          type="text"
          placeholder="Judul"
          id="title"
          name="title"
          required
        />
      </Container>
      <br />
      <Container sx={{ mb: "50px" }}>
        <Input
          value={note}
          onChange={setNote}
          type="textarea"
          placeholder="Tuliskan Catatan"
          id="note"
          name="note"
          required
        />
        <br />
        <Input
          type="submit"
          id="submit_form"
          name="submit_form"
          value="Create"
        />
      </Container>
    </form>
  );
};

export default FormInput;
