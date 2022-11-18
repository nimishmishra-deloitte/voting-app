import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import SettingsIcon from "@mui/icons-material/Settings";
import PollIcon from "@mui/icons-material/Poll";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import HttpsIcon from "@mui/icons-material/Https";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import BadgeIcon from "@mui/icons-material/Badge";
import List from "@mui/material/List";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import { red } from "@mui/material/colors";
import { Button } from "@mui/material";
import { connect, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import { logout } from "../../actions/userActions";
import SelectUnstyled from "@mui/base/SelectUnstyled";
import OptionUnstyled from "@mui/base/OptionUnstyled";
import { Dropdown, NavDropdown } from "react-bootstrap";
import profileImage from "../../assets/female.png";
import { sessionInfo, onChangeAction } from "../../actions/userActions";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import { InputLabel, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./sidebar.css";
import { ConstructionOutlined } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const drawerWidth = 280;

export default function ResponsiveDrawer(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const styles = (theme) => ({
    listItemText: {
      fontSize: "5em", //Insert your required size
    },
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const classes = styles();
  const navigate = useNavigate();
  const location = useLocation();
  const menuItems = [
    {
      text: "Dashboard",
      icon: <SettingsIcon />,
      path: "/dashboard",
    },
    {
      text: "Add Election",
      icon: <PollIcon />,
      path: "/addElection",
    },
    {
      text: "Assign Role",
      icon: <AccessibilityIcon />,
      path: "/assignRole",
    },
    {
      text: "Lock/Unlock",
      icon: <HttpsIcon />,
      path: "/unlock",
    },
  ];
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const sessionsInfo = useSelector((state) => state.sessionsInfo);
  const { session } = sessionsInfo;
  // const onChangesAction = useSelector((state) => state.onChangeInfo);
  // const { initialState } = onChangesAction;
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();
  const { name, setName } = React.useState(1);
  const logoutHandler = () => {
    dispatch(logout());
  };
  useEffect(() => {
    if (userInfo) {
      dispatch(sessionInfo());
    } else {
      navigate("/landingPage");
    }
  }, [dispatch, userInfo]);
  const drawer = (
    <div className="sidebar">
      <Typography
        variant="h5"
        noWrap
        component="div"
        sx={{
          fontWeight: "bold",
          color: "#6f6cbc",
          textAlign: "center",
          padding: "20px",
        }}
      >
        E-Voting System
      </Typography>
      {/* <div class="profile-image">
        <a target="_blank" href="#">
          <img src={profileImage} class="hoverZoomLink" />
        </a>
        <h5>
          {userInfo.user.first_name.toUpperCase()}{" "}
          {userInfo.user.last_name.toUpperCase()}
        </h5>
        <h6 sx={{ padding: "10px" }}>ADMIN</h6>
      </div> */}
      {/* <List>
        <Typography sx={{ m: 2, fontWeight: "bold" }}>GENERAL</Typography>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => navigate(item.path)}
            sx={{
              "&:selected": { backgroundColor: "grey" },
              "&:active": { backgroundColor: "grey" },
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List> */}
      <h6>GENERAL</h6>
      <ul className="SidebarList">
        {menuItems.map((item) => (
          <li
            className="row"
            key={item.text}
            id={window.location.pathname == item.path ? "active" : ""}
            onClick={() => {
              window.location.pathname = item.path;
            }}
          >
            {" "}
            <div id="icon">{item.icon}</div> <div id="title">{item.text}</div>
          </li>
        ))}
      </ul>
    </div>
  );

  //const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className="test"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          bgcolor: "#fff",
          boxShadow: "none",
          borderBottom: "1px solid #D9D9D9",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none " }, color: "#000" }}
          >
            <MenuIcon />
          </IconButton>

          {/* <Button 
          color="inherit" 
          sx={{fontWeight:'bold',color:'#000'}} 
          >
          Session
          </Button> */}
          {/* <Button 
          color="inherit" 
          sx={{fontWeight:'bold',color:'#000'}} 
          onClick={logoutHandler}
          >
          Logout
          </Button>  */}
          {/* <Select
            defaultValue={"1"}
            className="custom-select"
            onChange={(e) => {
              const selectedYear = e.target.value;
              setName(selectedYear);
            }}
          >
            {session.map((item) => (
              <option key={item.Uid} value={item.Uid}>
                {item.session_name}
              </option>
            ))}
          </Select> */}
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold", color: "#000" }}
          ></Typography>
          <NavDropdown
            className="dropdown-nav"
            title={
              <span style={{ color: "#000" }}>
                <PersonIcon
                  sx={{
                    m: 2,
                    border: "1px solid #fff",
                    backgroundColor: "#5458b1",
                    borderRadius: "50%",
                    color: "#fff",
                    fontSize: "30px",
                  }}
                />
                {userInfo.user.first_name.toUpperCase()}{" "}
                {userInfo.user.last_name.toUpperCase()}
              </span>
            }
            id="username"
          >
            <div className="dropDownHeader">
              <div className="navDropdownLeft">
                <Avatar sx={{ bgcolor: red[500], width: "40px" }}>N</Avatar>
              </div>
              <div className="navDropdownRight">
                <NavDropdown.Item component={Link} to={"/Profile"}>
                  Edit Profile
                </NavDropdown.Item>
                <NavDropdown.Item component={Link} to={"/Profile"}>
                  Reset Password
                </NavDropdown.Item>
              </div>
            </div>
            <div className="dropDownFooter">
              {/* <select
                defaultValue="2022"
                className="custom-select"
                onChange={(e) => {
                  const selectedYear = e.target.value;
                  setName(selectedYear);
                }}
              >
                {session.map((item) => (
                  <option key={item.Uid} value={item.Uid}>
                    {item.session_name}
                  </option>
                ))}
              </select> */}

              <Button sx={{ fontWeight: "bold" }} onClick={logoutHandler}>
                Logout
              </Button>
            </div>
          </NavDropdown>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { md: drawerWidth },
          flexShrink: { md: 0 },
        }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          className="sidenav"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { sm: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}
