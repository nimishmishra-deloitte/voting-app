import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./dashboard.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import votingImage from "../../assets/vote.png";
import Sidebar from "../layout/Sidebar";
import { Grid } from "@mui/material";
import {
  pollsInfo,
  electionsInfo,
  sessionInfo,
} from "../../actions/userActions";
import { red } from "@mui/material/colors";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  Card,
  IconButton,
  CardContent,
  CardActions,
  CardHeader,
  Typography,
  Button,
} from "@mui/material";
import { Avatar } from "@mui/material";
import LandingPage from "../LandingPage/LandingPage";
import noDataImage from "../../assets/nodata.png";
export default function Dashboard() {
  const [currentUID, setCurrentUID] = React.useState(1);
  const dispatch = useDispatch();
  const electionInfo = useSelector((state) => state.electionInfo);
  const { election } = electionInfo;
  const pollInfo = useSelector((state) => state.pollInfo);
  const { pollType } = pollInfo;
  const sessionsInfo = useSelector((state) => state.sessionsInfo);
  const { session } = sessionsInfo;

  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));
  useEffect(() => {
    if (userInfo) {
      dispatch(electionsInfo(currentUID));
      dispatch(pollsInfo(currentUID));
      dispatch(sessionInfo());
    } else {
      navigate("/dashboard");
    }
  }, [dispatch, userInfo, currentUID]);
  const checkColor = (description) => {
    switch (description) {
      case "ACTIVE":
        return "#1fbf90";
      case "COMPLETED":
        return "#ffcc00";
      case "DRAFTED":
        return "#f44336";
      default:
    }
  };
  return (
    <React.Fragment>
      <div className="mainDiv">
        {userInfo ? (
          <div>
            <Grid container>
              {/* <select
                className="custom-select"
                onChange={(e) => {
                  const selectedYear = e.target.value;
                  console.log(selectedYear);
                  setCurrentUID(selectedYear);
                }}
              >
                {session.map((item) => (
                  <option
                    key={item.uid}
                    value={item.uid}
                    selected={item.session_name === "2022"}
                  >
                    {item.session_name}
                  </option>
                ))}
              </select> */}
              <Select
                className="custom-select"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // variant="filled"
                defaultValue={"1"}
                onChange={(e) => {
                  const selectedYear = e.target.value;
                  console.log(selectedYear);
                  setCurrentUID(selectedYear);
                }}
                sx={{
                  color: "black",
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(228, 219, 233, 0.70)",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(228, 219, 233, 0.70)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(228, 219, 233, 0.70)",
                  },
                  ".MuiSvgIcon-root ": {
                    fill: "gray !important",
                  },
                  padding: "0 20px 0 20px",
                  border: "2px solid black",
                  boxShadow: 2,
                }}
              >
                {session.map((item) => (
                  <MenuItem
                    key={item.uid}
                    value={item.uid}
                    // aria-selected={item.session_name === "2022"}
                  >
                    {item.session_name}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid
              container
              sx={{
                display: "flex",
                flexWrap: "wrap",
                width: "80%",
                marginLeft: { md: "280px", sm: "0" },
              }}
            >
              <Grid container>
                <Grid item sm={6} md={4}>
                  <Item
                    sx={{
                      height: 200,
                      m: 1,
                      backgroundColor: (theme) =>
                        theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                    }}
                  >
                    <div className="heading polls"> Polls Info</div>

                    <div className="info">
                      <div className="content">
                        <p className="count count-active">{pollType.active}</p>
                        <p className="status">Active</p>
                      </div>
                      <div className="content">
                        <p className="count count-completed">
                          {pollType.completed}
                        </p>
                        <p className="status">Completed</p>
                      </div>
                      <div className="content">
                        <p className="count count-drafted">
                          {pollType.drafted}
                        </p>
                        <p className="status">Drafted</p>
                      </div>
                    </div>
                  </Item>
                </Grid>
                <Grid item sm={6} md={5}>
                  <Item
                    sx={{
                      height: 200,
                      m: 1,
                      backgroundColor: (theme) =>
                        theme.palette.mode === "dark" ? "#1A2027" : "#DBF2FC",
                      overflow: "hidden",
                    }}
                  >
                    <div className="heading"> Announcement</div>
                    <ul className="announcement-list">
                      <li>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </li>
                      <li>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry
                      </li>
                      <li>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry
                      </li>
                    </ul>
                  </Item>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Item
                    sx={{
                      m: 1,
                      backgroundColor: (theme) =>
                        theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                      boxShadow: 0,
                    }}
                  >
                    <div className="heading"> Roles List</div>
                    <Grid container>
                      <Grid item xs={12} md={12}>
                        <Card sx={{ maxWidth: 345, bgcolor: "#FFF", mb: 2 }}>
                          <CardHeader
                            avatar={
                              <Avatar
                                sx={{ bgcolor: red[500] }}
                                aria-label="recipe"
                              >
                                N
                              </Avatar>
                            }
                            title="Nimisha Mishra"
                            subheader="Software Engineer"
                          />
                        </Card>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <Card sx={{ maxWidth: 345, bgcolor: "#FFF", mb: 2 }}>
                          <CardHeader
                            avatar={
                              <Avatar
                                sx={{ bgcolor: red[500] }}
                                aria-label="recipe"
                              >
                                N
                              </Avatar>
                            }
                            title="Nimisha Mishra"
                            subheader="Software Engineer"
                          />
                        </Card>
                      </Grid>
                    </Grid>
                  </Item>
                </Grid>
                <Grid container sx={{ width: "75%" }}>
                  <Grid item xs={6} md={12}>
                    <Item
                      sx={{
                        height: "70vh",
                        ml: 1,
                        backgroundColor: (theme) =>
                          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                        boxShadow: 0,
                      }}
                    >
                      <div className="heading">Recent Polls</div>

                      <Grid container spacing={3}>
                        {election.length > 0 ? (
                          election.map((elections) => (
                            <Grid item sm={12} md={6}>
                              <Card
                                sx={{
                                  minWidth: 500,
                                  bgcolor: "#fff",
                                  color: "white",
                                  opacity: "80%",
                                  paddingLeft: "50px",
                                }}
                              >
                                <CardContent sx={{ color: "#000" }}>
                                  <Typography
                                    variant="h5"
                                    component="div"
                                    sx={{ mb: 2, fontWeight: "bold" }}
                                  >
                                    {elections.title}
                                  </Typography>
                                  <Grid container spacing={2}>
                                    <Grid item xs={6} md={6}>
                                      <Typography
                                        sx={{
                                          fontSize: 14,
                                          fontWeight: "bold",
                                        }}
                                        gutterBottom
                                      >
                                        Date
                                      </Typography>
                                      <Typography
                                        sx={{ fontSize: 14 }}
                                        gutterBottom
                                      >
                                        22 Jan 2023
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={6} md={6}>
                                      <Typography
                                        sx={{
                                          fontSize: 14,
                                          fontWeight: "bold",
                                        }}
                                        gutterBottom
                                      >
                                        Duration
                                      </Typography>
                                      <Typography
                                        sx={{ fontSize: 14 }}
                                        gutterBottom
                                      >
                                        24 hrs
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={6} md={6}>
                                      <Typography
                                        sx={{
                                          fontSize: 14,
                                          fontWeight: "bold",
                                        }}
                                        gutterBottom
                                      >
                                        Created By
                                      </Typography>
                                      <Typography
                                        sx={{ fontSize: 14 }}
                                        gutterBottom
                                      >
                                        {elections.created_by_first_name}{" "}
                                        {elections.created_by_last_name}
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={6} md={6}>
                                      <Typography
                                        sx={{
                                          fontSize: 14,
                                          fontWeight: "bold",
                                        }}
                                        gutterBottom
                                      >
                                        Session
                                      </Typography>
                                      <Typography
                                        sx={{ fontSize: 14 }}
                                        gutterBottom
                                      >
                                        {elections.session}
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={6} md={6}>
                                      <Typography
                                        sx={{
                                          fontSize: 14,
                                          fontWeight: "bold",
                                        }}
                                        gutterBottom
                                      >
                                        Phases
                                      </Typography>
                                      <Typography
                                        sx={{ fontSize: 14 }}
                                        gutterBottom
                                      >
                                        {elections.phases}
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={6} md={6}>
                                      <Typography
                                        sx={{
                                          fontSize: 14,
                                          fontWeight: "bold",
                                        }}
                                        gutterBottom
                                      >
                                        Status
                                      </Typography>
                                      <Typography
                                        sx={{ fontSize: 14 }}
                                        gutterBottom
                                      >
                                        <p
                                          style={{
                                            color: `${checkColor(
                                              elections.current_status
                                            )}`,
                                            fontWeight: "bold",
                                          }}
                                        >
                                          {elections.current_status}
                                        </p>
                                      </Typography>
                                    </Grid>
                                  </Grid>
                                </CardContent>
                              </Card>
                            </Grid>
                          ))
                        ) : (
                          <div className="absentData">
                            <div className="image">
                              <img src={noDataImage} />
                            </div>
                            <div className="image-content">
                              Data Not Found !!
                            </div>
                          </div>
                        )}
                      </Grid>
                    </Item>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        ) : (
          <LandingPage />
        )}
      </div>
    </React.Fragment>
  );
}
