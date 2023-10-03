import { Button } from "@mui/material";

const Tombol = ({ label, eventHandler }) => {
  return (
    <Button
      sx={{ color: "black" }}
      type="button"
      onClick={eventHandler}
      data-action={label}
    >
      {label}
    </Button>
  );
};

export default Tombol;
