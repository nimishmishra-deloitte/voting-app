import React, { Component, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import BallotIcon from "@mui/icons-material/Ballot";

import Image from "../../assets/voting.png";
import lockImage from "../../assets/Lock.png";
import faqsImage from "../../assets/faqsimage.jpg";
import workingImage from "../../assets/working.png";
import "../LandingPage/LandingPage.css";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import sx from "@mui/system/sx";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import CopyrightIcon from "@mui/icons-material/Copyright";
import EmailIcon from "@mui/icons-material/Email";
import RoomIcon from "@mui/icons-material/Room";
import { Repeat } from "@mui/icons-material";
import FaqsAccordian from "./FAQs/FaqsAccordian";
import { faqs } from "./FAQs/FAQs";
// import Gallery from "../Gallery";
// import Header from "./Header/Header";
const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
  },
};

export default function LandingPage() {
  const [data, setData] = useState(faqs);
  const clickHandler = () => {
    console.log("Clicked");
  };
  return (
    <Box>
      <AppBar
        position="fixed"
        component="nav"
        className="header"
        sx={{ backgroundColor: "purple" }}
      >
        <Toolbar variant="dense">
          <div className="header-container">
            <div className="logo">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <BallotIcon />
                <Typography variant="h6" color="inherit" component="div">
                  E-VOTING SYSTEM
                </Typography>
              </IconButton>
            </div>
            <div className="links">
              <a className="button" href="/adminLogin">
                ADMIN
              </a>
              <a className="button" href="/adminLogin">
                USER
              </a>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      {/* <Header /> */}
      <Box className="main">
        <Grid component="main" className="content">
          <Typography variant="h3">
            Fast, Secured and <br /> Accessible Voting System
          </Typography>
          <Typography variant="h6">
            Let's make voting and elections easy for you. This is designed to
            ensure a secured voting session
          </Typography>
          <br />
          {/* <Typography variant="h4" sx={{ mt: 5, ml: 7 }}>
            Select your role
          </Typography> */}
          <br />
        </Grid>
        <Grid component="main" className="image">
          <img src={Image} />
        </Grid>
      </Box>
      <Box className="features">
        <Typography variant="h2" className="heading">
          Our Features
        </Typography>
        <Typography variant="h6" className="heading">
          Secured System that gurantee seamless Elections
        </Typography>
        <Box className="feature">
          <Grid className="cards">
            <img src={lockImage} className="cardImage" />
            <Typography variant="h5" sx={{ textAlign: "center", marginTop: 5 }}>
              Secured Platform
            </Typography>
            <Typography variant="p" sx={{ textAlign: "center" }}>
              With our platform your data is secured
            </Typography>
          </Grid>
          <Grid className="cards">
            <img src={lockImage} className="cardImage" />
            <Typography variant="h5" sx={{ textAlign: "center", marginTop: 5 }}>
              Secured Platform
            </Typography>
            <Typography variant="p" sx={{ textAlign: "center" }}>
              With our platform your data is secured
            </Typography>
          </Grid>
          <Grid className="cards">
            <img src={lockImage} className="cardImage" />
            <Typography variant="h5" sx={{ textAlign: "center", marginTop: 5 }}>
              Secured Platform
            </Typography>
            <Typography variant="p" sx={{ textAlign: "center" }}>
              With our platform your data is secured
            </Typography>
          </Grid>
        </Box>
      </Box>
      <Box className="working">
        <Typography variant="h2" className="heading">
          How it works
        </Typography>
        <Typography variant="h6" className="heading">
          It's simple and easy to use with these 3 steps
        </Typography>
        <Box style={{ background: { workingImage } }}>
          <Box>
            <Box className="working-steps">
              <Typography variant="h4" className="steps">
                1
              </Typography>
              <Box className="step">
                <Typography variant="h6">Scan Aadhar card</Typography>
                <Typography variant="p">
                  Scan your aadhar card to vote.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box className="working-steps">
              <Typography variant="h4" className="steps">
                2
              </Typography>
              <Box className="step">
                <Typography variant="h6">Vote</Typography>
                <Typography variant="p">
                  Vote for your preferred candidate.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box className="working-steps">
              <Typography variant="h4" className="steps">
                3
              </Typography>
              <Box className="step">
                <Typography variant="h6">View Election Results</Typography>
                <Typography variant="p">
                  View election result of various candidates
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* <Box className="gallery">
        <Gallery />
      </Box> */}
      <Box className="faqs" sx={{ display: "flex" }}>
        <Box className="faqs-image">
          <Box sx={{ ml: 20, mr: 20, mt: 10, mb: 10 }}>
            <img src={faqsImage} style={{ height: 500, width: 600 }} />
          </Box>
        </Box>
        <Box className="faq">
          <Typography variant="h3" sx={{ m: 5 }}>
            Frequently Asked Questions (FAQs)
          </Typography>
          <Box className="faqs-ques">
            {data.map((res) => {
              const { id } = res;
              return <FaqsAccordian key={id} {...res} />;
            })}
          </Box>
        </Box>
      </Box>
      <Box
        className="footer"
        sx={{ backgroundColor: "purple", color: "white" }}
      >
        <Box
          className="footer-container"
          sx={{
            display: "flex",
            gridTemplateColumns: "repeat(3,1fr)",
            p: 10,
          }}
        >
          <Box className="footer-items">
            <Typography variant="h3" sx={{ marginBottom: 5 }}>
              E-Voting System
            </Typography>
            <Typography variant="p">
              Thank you for visiting our voting platform which is fast, secure
              and easy to vote.
            </Typography>
          </Box>
          <Box className="footer-items">
            <Typography variant="h3">Quick Links</Typography>
            <List>
              <ListItem>
                <ListItemButton component="a" href="#home">
                  <ArrowForwardIosIcon className="arrow-icon" />
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton component="a" href="#home">
                  <ArrowForwardIosIcon className="arrow-icon" />
                  <ListItemText primary="About" />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton component="a" href="#home">
                  <ArrowForwardIosIcon className="arrow-icon" />
                  <ListItemText primary="FAQs" />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton component="a" href="#home">
                  <ArrowForwardIosIcon className="arrow-icon" />
                  <ListItemText primary="Gallery" />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton component="a" href="#home">
                  <ArrowForwardIosIcon className="arrow-icon" />
                  <ListItemText primary="Contact us" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
          <Box
            className="footer-items"
            sx={{ marginLeft: 10, paddingLeft: 15 }}
          >
            <Typography variant="h3">Contact info.</Typography>
            <Typography variant="p" sx={{ marginTop: 5 }}>
              <EmailIcon sx={{ marginRight: 2 }} /> votingmadeeasy@mail.com
            </Typography>
            <br />
            <Typography variant="p">
              <RoomIcon sx={{ marginRight: 2 }} /> India
            </Typography>
            <Box className="share" sx={{ marginTop: 5 }}>
              <Link
                underline="none"
                className="share-icon"
                sx={{ color: "white" }}
              >
                <FacebookIcon />
              </Link>
              <Link
                underline="none"
                className="share-icon"
                sx={{ color: "white" }}
              >
                <YouTubeIcon />
              </Link>
              <Link
                underline="none"
                className="share-icon"
                sx={{ color: "white" }}
              >
                <TwitterIcon />
              </Link>
            </Box>
          </Box>
        </Box>
        <Divider sx={{ backgroundColor: "white", m: 2 }} />
        <Typography variant="h5" className="heading">
          <CopyrightIcon /> Election Commission of India
        </Typography>
      </Box>
    </Box>
  );
}
