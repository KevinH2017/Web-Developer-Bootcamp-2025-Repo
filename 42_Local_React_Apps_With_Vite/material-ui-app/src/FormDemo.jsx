import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import "./FormDemo.css";

export default function FormDemo() {
  const [name, setName] = useState("");
  const [volume, setVolume] = useState(50);
  const updateName = (e) => {
    setName(e.target.value);
  };
  const changeVolue = (e, newVal) => {
    setVolume(newVal);
  };
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        border: "1px solid white",
      }}
      noValidate
      autoComplete="off"
    >
      <h1>Name: {name}</h1>
      <br />
      <TextField
        id="outlined-basic"
        className="input-color" // Text input is white
        label="Outlined Secondary"
        variant="outlined"
        placeholder="Outline Placeholder"
        // color="scondary"
        sx={{ color: "blue" }} // Textfield is blue
        onChange={updateName}
        focused
      />
      <br />
      <TextField
        id="filled-basic"
        className="input-color"
        label="Filled Success"
        variant="filled"
        color="success"
        onChange={updateName}
        focused
      />
      <br />
      <TextField
        id="standard-basic"
        className="input-color"
        label="Standard Warning"
        variant="standard"
        color="warning"
        onChange={updateName}
        focused
      />
      <br />
      <h2>Volume: {volume}</h2>
      <div className="slider-container">
        <VolumeDown />
        <Slider aria-label="Volume" value={volume} onChange={changeVolue} />
        <VolumeUp />
      </div>
    </Box>
  );
}
