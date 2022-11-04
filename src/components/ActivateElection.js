import React, { Component } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Typography, Button, Box, TextField } from "@material-ui/core";
import { InputLabel, FormControl, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
export default class ActivateElection extends Component {
  render() {
    return (
      <Box className="login">
        <Typography variant="h5">ACTIVATE ELECTION</Typography>
        <form onSubmit={this.handleSubmit}>
          <FormControl style={{ width: "350px", margin: "15px" }}>
            <InputLabel>Election </InputLabel>
            <Select label="Election">
              <MenuItem value="direct">Direct</MenuItem>
              <MenuItem value="indirect">Indirect</MenuItem>
            </Select>
          </FormControl>
          <FormControl style={{ width: "350px", margin: "15px" }}>
            <InputLabel>Phase </InputLabel>
            <Select label="phase">
              <MenuItem value="direct">1</MenuItem>
              <MenuItem value="indirect">2</MenuItem>
            </Select>
          </FormControl>
          <br />
          <FormControl style={{ width: "350px", margin: "15px" }}>
            <InputLabel>Lock Type</InputLabel>
            <Select label="lockType">
              <MenuItem value="direct">1</MenuItem>
              <MenuItem value="indirect">2</MenuItem>
            </Select>
          </FormControl>
          <Button
            style={{ width: "350px", margin: "15px" }}
            variant="contained"
            color="primary"
            type="submit"
          >
            UNLOCK
          </Button>
        </form>
      </Box>
    );
  }
}
