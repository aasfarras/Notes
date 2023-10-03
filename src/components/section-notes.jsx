import Kartu from "./Kartu";
import { Card, Typography } from "@mui/material";

const SectionNotes = ({ label, notes, setNotes }) => {
  return (
    <section style={{ backgroundColor: "#a32c2c" }}>
      <Typography variant="h4" sx={{ textAlign: "center", pt: "50px" }}>
        {label}
      </Typography>
      {notes.length === 0 ? (
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "32px",
            pt: "20px",
            pb: "50px",
          }}
        >
          Tidak ada catatan
        </Typography>
      ) : (
        <div>
          {notes?.map((note) => (
            <Card
              sx={{
                maxWidth: 345,
                height: "300px",
                display: "inline-block",
                marginLeft: "80px",
                marginTop: "90px",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              <Kartu key={note.id} action={setNotes} {...note} />
            </Card>
          ))}
        </div>
      )}
    </section>
  );
};

export default SectionNotes;
