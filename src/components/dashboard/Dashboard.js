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
      dispatch(pollsInfo());
      dispatch(sessionInfo());
    } else {
      navigate("/dashboard");
    }
  }, [dispatch, userInfo, currentUID]);

  return (
    <React.Fragment>
      <div className="mainDiv">
        {userInfo ? (
          <div>
            <Grid container sx={{ marginLeft: "250px", width: "80%" }}>
              <select
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
                    // defaultValue={item.session_name === "2022"}
                  >
                    {item.session_name}
                  </option>
                ))}
              </select>
            </Grid>
            <Grid
              container
              sx={{
                display: "flex",
                flexWrap: "wrap",
                width: "80%",
                marginLeft: "250px",
              }}
            >
              <Grid container sx={{ width: "75%" }}>
                <Grid item xs={6} md={5}>
                  <Item
                    sx={{
                      height: 200,
                      m: 2,
                      backgroundColor: (theme) =>
                        theme.palette.mode === "dark" ? "#1A2027" : "#DBF2FC",
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
                <Grid item xs={6} md={7}>
                  <Item
                    sx={{
                      height: 200,
                      m: 2,
                      backgroundColor: (theme) =>
                        theme.palette.mode === "dark" ? "#1A2027" : "#FDD9F5",
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
                <Grid item xs={6} md={12}>
                  <Item
                    sx={{
                      height: "70vh",
                      m: 2,
                      backgroundColor: (theme) =>
                        theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                    }}
                  >
                    <div className="heading">Recent Polls</div>

                    <Grid container spacing={3}>
                      <Grid item xs={6} md={6}>
                        <Card
                          sx={{
                            minWidth: 200,
                            bgcolor: "#E5E3FB",
                            color: "white",
                            opacity: "80%",
                          }}
                        >
                          {election.map((elections) => (
                            <CardContent sx={{ color: "#415063" }}>
                              <Typography sx={{ fontSize: 14 }} gutterBottom>
                                Election
                              </Typography>
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
                                    sx={{ fontSize: 14, fontWeight: "bold" }}
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
                                    sx={{ fontSize: 14, fontWeight: "bold" }}
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
                                    sx={{ fontSize: 14, fontWeight: "bold" }}
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
                                    sx={{ fontSize: 14, fontWeight: "bold" }}
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
                                    sx={{ fontSize: 14, fontWeight: "bold" }}
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
                                    sx={{ fontSize: 14, fontWeight: "bold" }}
                                    gutterBottom
                                  >
                                    Status
                                  </Typography>
                                  <Typography
                                    sx={{ fontSize: 14 }}
                                    gutterBottom
                                  >
                                    {elections.current_status}
                                  </Typography>
                                </Grid>
                              </Grid>
                            </CardContent>
                          ))}
                        </Card>
                      </Grid>
                    </Grid>
                  </Item>
                </Grid>
              </Grid>

              <Grid container sx={{ width: "25%" }}>
                <Grid item xs={6} md={12}>
                  <Item
                    sx={{
                      height: "80vh",
                      m: 2,
                      backgroundColor: (theme) =>
                        theme.palette.mode === "dark" ? "#1A2027" : "#FFF",
                    }}
                  >
                    <div className="heading"> Roles List</div>
                    <Grid container>
                      <Grid item xs={12} md={12}>
                        <Card sx={{ maxWidth: 345, bgcolor: "#FFE6DE", mb: 2 }}>
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
                        <Card sx={{ maxWidth: 345, bgcolor: "#FFE6DE", mb: 2 }}>
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
              </Grid>
            </Grid>
          </div>
        ) : (
          <div class="main-divs">
            <div className="leftDiv">
              <h2>Online Voting Platform</h2>
              <p>
                Taking forward its continuous efforts of building an active
                democratic citizenry in the country,Election Commission of India
                has undertaken a new initiative by designing a Web Application
                for developing a culture of avid electoral engagement and making
                informed and ethical ballot decisions among citizens of the
                country. The app aims to provide a single point of service and
                information delivery to voters across the country.{" "}
              </p>

              <Link to="/adminLogin">
                <button className="login-btn">Admin Login</button>
              </Link>
            </div>
            <div className="bgimage">
              <img src={votingImage} />
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
