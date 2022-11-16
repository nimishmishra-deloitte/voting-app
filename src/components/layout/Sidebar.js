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
import { Link } from "react-router-dom";
import { logout } from "../../actions/userActions";
import SelectUnstyled from "@mui/base/SelectUnstyled";
import OptionUnstyled from "@mui/base/OptionUnstyled";
import { Dropdown, NavDropdown } from "react-bootstrap";
import { sessionInfo, onChangeAction } from "../../actions/userActions";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import { InputLabel, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./sidebar.css";
import { ConstructionOutlined } from "@mui/icons-material";
const drawerWidth = 240;

export default function ResponsiveDrawer(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const styles = (theme) => ({
    listItemText: {
      fontSize: "1em", //Insert your required size
    },
  });
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigate = useNavigate();

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List className="sidebarList">
        <Typography variant="h6" sx={{ ml: 2 }}>
          General
        </Typography>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon sx={{ fontSize: "30px" }} />
            </ListItemIcon>
            <Link to="/dashboard">
              <span
                style={{
                  fontSize: "18px",
                  marginTop: "5px",
                }}
              >
                General Settings
              </span>
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PollIcon sx={{ fontSize: "30px" }} />
            </ListItemIcon>
            <Link to="/addElection">
              <span style={{ fontSize: "18px", marginTop: "5px" }}>
                Add Election
              </span>
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccessibilityIcon sx={{ fontSize: "30px" }} />
            </ListItemIcon>
            <Link to="/addRole">
              <span style={{ fontSize: "18px", marginTop: "5px" }}>
                Assign Role
              </span>
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HttpsIcon sx={{ fontSize: "30px" }} />
            </ListItemIcon>
            <Link to="/activateElection">
              <span style={{ fontSize: "18px", marginTop: "5px" }}>
                Lock/Unlock
              </span>
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <Typography variant="h6" sx={{ ml: 2 }}>
          Management
        </Typography>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <VpnKeyIcon sx={{ fontSize: "30px" }} />
            </ListItemIcon>
            <ListItemText>
              <span style={{ fontSize: "18px", marginTop: "5px" }}>
                Reset Password
              </span>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <BadgeIcon sx={{ fontSize: "30px" }} />
            </ListItemIcon>
            <ListItemText>
              <span style={{ fontSize: "18px", marginTop: "30px" }}>
                Update User
              </span>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  //const container = window !== undefined ? () => window().document.body : undefined;
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
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
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
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold", color: "#000" }}
          >
            VotingMadeEasy
          </Typography>
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
          <NavDropdown
            className="dropdown-nav"
            title={
              <span style={{ color: "black" }}>
                {userInfo.user.first_name} {userInfo.user.last_name}
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
              <select
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
              </select>

              <Button sx={{ fontWeight: "bold" }} onClick={logoutHandler}>
                Logout
              </Button>
            </div>
          </NavDropdown>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
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
