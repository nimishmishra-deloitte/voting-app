import React, { Component } from "react";
import Dashboard from "./components/dashboard/Dashboard";
import "./App.css";
import { useSelector } from "react-redux";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import AddElection from "./components/elections/AddElection";
import Login from "./components/userManagement/Login";
import ActivateElection from "./components/ActivateElection";
import AssignRole from "./components/AssignRole";
export default function App() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <Router>
      {userInfo ? <Sidebar /> : <Header />}
      <Routes>
        {/* Public routes */}
        <Route exact path="/" element={<Dashboard />} />

        {/* Private routes */}
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/addElection" element={<AddElection />} />
        <Route exact path="/adminLogin" element={<Login />} />
        <Route exact path="/addPosts" element={<AssignRole />} />
        <Route exact path="/unlock" element={<ActivateElection />} />
      </Routes>
    </Router>
  );
}
