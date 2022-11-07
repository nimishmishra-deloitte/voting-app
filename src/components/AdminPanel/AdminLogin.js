import React, { Component } from "react";
import "./AdminLogin.css";
import {
  Typography,
  AppBar,
  Toolbar,
  TextField,
  Button,
  Box,
} from "@material-ui/core";
export default class AdminLogin extends Component {
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
      <Box className="login">
        <Typography variant="h5">ADMIN LOGIN</Typography>
        <form onSubmit={this.handleSubmit}>
          <TextField
            style={{ width: "350px", margin: "15px" }}
            type="email"
            label="email"
            variant="outlined"
            value={this.state.email}
            onChange={(e) => {
              this.setState({
                [e.target.name]: e.target.value,
              });
            }}
          />
          <br />
          <TextField
            style={{ width: "350px", margin: "15px" }}
            type="password"
            label="password"
            variant="outlined"
            value={this.state.password}
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
            LOGIN
          </Button>
        </form>
      </Box>
    );
  }
}
