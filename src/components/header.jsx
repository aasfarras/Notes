import { Typography } from "@mui/material";
import Input from "./input";
import img from "../assets/SeacrhIcon.png";

const Header = ({ search, updateQuery }) => {
  return (
    <header
      style={{
        paddingBlock: "20px",
        backgroundColor: "#a32c2c",
        textAlign: "center",
        fontFamily: "Roboto",
        display: "flex",
        justifyContent: "space-between",
        paddingInline: "10%",
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: "bold" }}>
        Catatan
      </Typography>
      <img
        src={img}
        alt="search"
        style={{
          width: "40px",
          height: "40px",
          paddingLeft: "650px",
          paddingTop: "5px",
        }}
      />
      <Input
        value={search}
        onChange={updateQuery}
        type="search"
        id="search_note"
        name="search_note"
        placeholder="Cari Notes..."
      />
    </header>
  );
};

export default Header;
