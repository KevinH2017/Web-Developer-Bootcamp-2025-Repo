// Uses Material UI for pre-built components
// Button Component: https://mui.com/material-ui/react-button/

import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

export default function BasicButtons() {
  return (
    // Box and Grid libraries create multiple rows using 12 spaces
    // React Grid: https://mui.com/material-ui/react-grid/
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Button
            variant="contained"
            onClick={() => alert("Hi!")}
            size="medium"
          >
            Alert Button
          </Button>
          <Button variant="text">Text</Button>
          <Button variant="contained" size="small">
            Contained
          </Button>
          <Button variant="outlined">Outlined</Button>
        </Grid>

        <Grid size={12}>
          <Button color="secondary">Secondary</Button>
          <Button variant="contained" color="success">
            Success
          </Button>
          <Button variant="outlined" color="error">
            Error
          </Button>
          <IconButton aria-label="alarm" sx={{ color: "white" }}>
            <AccessAlarmIcon onClick={() => alert("Tick-Tock")} />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}
