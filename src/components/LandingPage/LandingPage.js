import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import BallotIcon from "@mui/icons-material/Ballot";
import Image from "../../assets/vote.svg";
import securityImage from "../../assets/security.svg";
import lockImage from "../../assets/Lock.png";
import faqsImage from "../../assets/faq.svg";
import workingImage from "../../assets/working.png";
import "../LandingPage/LandingPage.css";
import { Button } from "@mui/material";
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
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import CopyrightIcon from "@mui/icons-material/Copyright";
import EmailIcon from "@mui/icons-material/Email";
import RoomIcon from "@mui/icons-material/Room";
// import { Repeat } from "@material-ui/icons";
import FaqsAccordian from "./FAQs/FaqsAccordian";
import { faqs } from "./FAQs/FAQs";
// import Gallery from "../Gallery";
// import Header from "./Header/Header";
// import Dropdown from "muicss/lib/react/dropdown";
// import DropdownItem from "muicss/lib/react/dropdown-item";
import scanImage from "../../assets/scanning.svg";
import upVote from "../../assets/upvote.svg";
import report from "../../assets/report.svg";
import { width } from "@mui/system";
const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
  },
};
const drawerWidth = 240;
const navItems = ["Home", "Gallery", "Contact", "FAQs"];

export default function LandingPage() {
  const [data, setData] = useState(faqs);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const navigateToAdmin = () => {
    //  navigate to Admin
    navigate("/adminLogin");
  };
  const navigateToUser = () => {
    //  navigate to User
    navigate("/userLogin");
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        E-Voting
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box className="font">
      <Box sx={{ display: "flex" }}>
        <AppBar
          position="fixed"
          component="nav"
          className="header"
          sx={{ backgroundColor: "#7851a9" }}
        >
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              color="inherit"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
            >
              <BallotIcon /> E-Voting System
            </Typography>

            <Box
              sx={{
                display: { xs: "none", sm: "block" },
              }}
              className="nav-items"
            >
              {navItems.map((item) => (
                <Button key={item} className="nav-btn">
                  {item}
                </Button>
              ))}

              {/* <Button
                variant="contained"
                className="btn"
                onClick={navigateToAdmin}
              >
                Login
              </Button> */}
            </Box>
            <Box
              onClick={navigateToAdmin}
              sx={{
                backgroundColor: "white",
                pl: 2,
                pb: 1,
                pt: 1,
                pr: 1.5,
                color: "#7851a9",
                fontWeight: 700,
                borderRadius: 2,
                cursor: "pointer",
              }}
            >
              Login
              {/* <NavDropdown title="Login">
                <NavDropdown.Item>Action</NavDropdown.Item>
              </NavDropdown> */}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>

      <Box className="main">
        <Grid component="main" className="content">
          <Typography variant="h3">
            Fast, Secured and <br /> Accessible Voting System
          </Typography>
          <Typography variant="h6" sx={{ textAlign: "justify" }}>
            The Election Commission of India is an autonomous constitutional
            authority responsible for administering Union and State election
            processes in India. The body administers elections to the Lok Sabha,
            Rajya Sabha, State Legislative Assemblies in India, and the offices
            of the President and Vice President in the country.
          </Typography>
          <br />
          {/* <Typography variant="h4" sx={{ mt: 5, ml: 7 }}>
            Select your role
          </Typography> */}
          <br />
          {/* <Box sx={{ display: "flex", mr: 5 }}>
            <Link underline="none" href="#">
              <Button
                variant="contained"
                endIcon={<KeyboardDoubleArrowRightIcon />}
                className="btn"
                onClick={navigateToAdmin}
              >
                Admin
              </Button>
            </Link>

            <Button
              variant="contained"
              endIcon={<KeyboardDoubleArrowRightIcon />}
              className="btn"
              onClick={navigateToUser}
            >
              User
            </Button>
          </Box> */}
        </Grid>
        <Grid component="main" className="image">
          <img src={Image} />
        </Grid>
      </Box>
      <Box className="features">
        <Typography
          variant="h2"
          className="main-heading"
          sx={{ color: "white" }}
        >
          Our Features
        </Typography>
        <Typography
          variant="h6"
          className="main-heading"
          sx={{ color: "white" }}
        >
          Secured System that gurantee seamless Elections
        </Typography>
        <Box className="feature">
          <Grid className="cards">
            <img
              src={securityImage}
              style={{ borderRadius: "50%" }}
              className="cardImage"
            />
            <Typography variant="h5" sx={{ textAlign: "center", marginTop: 5 }}>
              Secured Platform
            </Typography>
            <Typography variant="p" sx={{ textAlign: "center" }}>
              With our platform your data is secured
            </Typography>
          </Grid>
          <Grid className="cards">
            <img
              src={securityImage}
              style={{ borderRadius: "50%" }}
              className="cardImage"
            />
            <Typography variant="h5" sx={{ textAlign: "center", marginTop: 5 }}>
              Secured Platform
            </Typography>
            <Typography variant="p" sx={{ textAlign: "center" }}>
              With our platform your data is secured
            </Typography>
          </Grid>
          <Grid className="cards">
            <img
              src={securityImage}
              style={{ borderRadius: "50%" }}
              className="cardImage"
            />
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
        <Typography variant="h2" className="main-heading">
          How it works
        </Typography>
        <Typography
          variant="h6"
          style={{ color: "#000" }}
          className="main-heading"
        >
          It's simple and easy to use with these 3 steps
        </Typography>
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Box className="works">
            <Box className="working-steps">
              <img src={scanImage} style={{ width: "50%" }} />
              <Typography variant="h4" className="steps">
                1
              </Typography>
              <Box className="step">
                <Typography variant="h6" style={{ color: "#000" }}>
                  Scan Aadhar card
                </Typography>
                <Typography variant="p">
                  Scan your aadhar card to vote.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box className="working-steps">
              <img
                src={upVote}
                style={{ width: "70%", height: "auto", margin: "14px" }}
              />
              <Typography variant="h4" className="steps">
                2
              </Typography>
              <Box className="step">
                <Typography variant="h6" style={{ color: "#000" }}>
                  Vote
                </Typography>
                <Typography variant="p">
                  Vote for your preferred candidate.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box className="working-steps">
              <img
                src={report}
                style={{ width: "55%", height: "auto", margin: "14px" }}
              />
              <Typography variant="h4" className="steps">
                3
              </Typography>
              <Box className="step">
                <Typography variant="h6" style={{ color: "#000" }}>
                  View Election Results
                </Typography>
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
          <Typography variant="h3" sx={{ m: 3 }}>
            Frequently Asked Questions (FAQ's)
          </Typography>
          <Box className="faqs-ques">
            {data.map((res) => {
              const { id } = res;
              return <FaqsAccordian key={id} {...res} />;
            })}
          </Box>
        </Box>
      </Box>
      <Box className="footer">
        <Box className="footer-container">
          <Box className="footer-items">
            <Typography variant="h3" sx={{ marginBottom: 5 }}>
              Voting Made Easy
            </Typography>
            <Typography variant="h6" style={{ textAlign: "justify" }}>
              Thank you for visiting our voting platform <br /> which is fast,
              secure and easy to vote.
            </Typography>
          </Box>
          <Box className="footer-items">
            <Typography variant="h3">Quick Links</Typography>
            <List>
              <ListItem>
                <ListItemButton
                  component="a"
                  href="#home"
                  className="quick-link"
                >
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  component="a"
                  href="#home"
                  className="quick-link"
                >
                  <ListItemText primary="About" />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  component="a"
                  href="#home"
                  className="quick-link"
                >
                  <ListItemText primary="FAQs" />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  component="a"
                  href="#home"
                  className="quick-link"
                >
                  <ListItemText primary="Gallery" />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  component="a"
                  href="#home"
                  className="quick-link"
                >
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
              <EmailIcon sx={{ marginRight: 2, marginTop: 2 }} />{" "}
              evotingsystem@gmail.com
            </Typography>
            <br />
            <Typography variant="p">
              <RoomIcon sx={{ marginRight: 2, marginTop: 2 }} /> India
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
        <Typography
          variant="h5"
          className="main-heading"
          sx={{ color: "white" }}
        >
          <CopyrightIcon /> Election Commission of India
        </Typography>
      </Box>
    </Box>
  );
}
