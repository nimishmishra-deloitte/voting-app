import React, { Component } from "react";

import {
  Typography,
  AppBar,
  Toolbar,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { InputLabel, FormControl, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { alignProperty } from "@mui/material/styles/cssUtils";
export default class AssignRole extends Component {
  render() {
    return (
      <div style={{ margin: "250px" }}>
        <Typography variant="h5">ASSIGN ROLE</Typography>
        <form onSubmit={this.handleSubmit}>
          <TextField
            style={{ width: "350px", margin: "15px" }}
            type="text"
            label="Election Name"
            variant="outlined"
          />
          <TextField
            style={{ width: "350px", margin: "15px" }}
            type="number"
            label="Number Of Phases"
            variant="outlined"
          />

          <br />
          <FormControl required style={{ width: "350px", margin: "15px" }}>
            <InputLabel>State</InputLabel>
            <Select label="state">
              <MenuItem value="direct">Direct</MenuItem>
              <MenuItem value="indirect">Indirect</MenuItem>
            </Select>
          </FormControl>
          <FormControl required style={{ width: "350px", margin: "15px" }}>
            <InputLabel>Constituency</InputLabel>
            <Select label="constituency">
              <MenuItem value="direct">Direct</MenuItem>
              <MenuItem value="indirect">Indirect</MenuItem>
            </Select>
          </FormControl>
          <br />
          <FormControl required style={{ width: "350px", margin: "15px" }}>
            <InputLabel>Assign To</InputLabel>
            <Select label="constituency">
              <MenuItem value="direct">Direct</MenuItem>
              <MenuItem value="indirect">Indirect</MenuItem>
            </Select>
          </FormControl>
          <br />
          <Button
            style={{ width: "350px", margin: "15px" }}
            variant="contained"
            color="primary"
            type="submit"
          >
            SUBMIT
          </Button>
        </form>
      </div>
    );
  }
}
