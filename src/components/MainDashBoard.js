import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import BallotIcon from "@mui/icons-material/Ballot";
import Image from "../components/assets/EveryVoteMatters.jpg";
import "../components/MainDashBoard.css";
import { Button } from "@material-ui/core";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import sx from "@mui/system/sx";

const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
  },
};
export default class MainDashBoard extends Component {
  render() {
    return (
      <Box>
        <AppBar position="static" component="nav">
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <BallotIcon />
              <Typography variant="h6" color="inherit" component="div">
                Voting MadeEasy
              </Typography>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box className="main">
          <Grid component="main" className="left-content">
            <Typography variant="h2">Vote</Typography>
            <Typography variant="h4">Every vote matters</Typography>
            <Typography variant="p">
              Voting is an integral part of democracy, and it is necessary for
              people to have a voice. Everyone has the right to vote, which
              means that all Indians can vote for the Prime Minister of their
              choice. By voting, you can create change and make a difference in
              your community. It is also important to vote because you can only
              repeal a law if most citizens agree with it.
            </Typography>
            <br />
            <Button
              variant="contained"
              endIcon={<KeyboardDoubleArrowRightIcon />}
              className="btn"
            >
              Get Started
            </Button>
          </Grid>
          <Grid component="main" className="right-content">
            <Box sx={{ boxShadow: 2, borderRadius: 300 }}>
              <img src={Image} />
            </Box>
          </Grid>
        </Box>
      </Box>
    );
  }
}
