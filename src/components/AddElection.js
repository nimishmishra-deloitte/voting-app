import React, { Component } from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  TextField,
  Button,
  Box,
} from "@material-ui/core";
import { InputLabel, FormControl, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
export default class AddElection extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ email: event.state.email, password: event.state.password });
  }

  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div className="login">
        <Typography variant="h5">ADD ELECTION</Typography>
        <form onSubmit={this.handleSubmit}>
          <TextField
            style={{ width: "350px", margin: "15px" }}
            type="text"
            label="Election Name"
            variant="outlined"
            value={this.state.electionName}
            onChange={(e) => {
              this.setState({
                [e.target.name]: e.target.value,
              });
            }}
          />
          <FormControl required style={{ width: "350px", margin: "15px" }}>
            <InputLabel>Election Type</InputLabel>
            <Select label="Election Type *">
              <MenuItem value="direct">Direct</MenuItem>
              <MenuItem value="indirect">Indirect</MenuItem>
            </Select>
          </FormControl>
          <br />
          <TextField
            style={{ width: "350px", margin: "15px" }}
            type="number"
            label="Number Of Phases"
            variant="outlined"
            value={this.state.numberOfPhases}
            onChange={(e) => {
              this.setState({
                [e.target.name]: e.target.value,
              });
            }}
          />
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
