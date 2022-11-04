import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddElection from "./components/AddElection";
import AssignRole from "./components/AssignRole";
import Header from "./components/UserManagement/Header";
import UserLogin from "./components/UserManagement/UserLogin";
import AdminLogin from "./components/AdminPanel/AdminLogin";
import ActivateElection from "./components/ActivateElection";
import AdminHeader from "./components/AdminPanel/AdminHeader";
import MainDashBoard from "./components/MainDashBoard";
import { Component } from "react";
import ShowElections from "./components/ShowElections";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route exact path="/" element={<MainDashBoard />} />
          {/* Private Routes */}
          <Route exact path="/dashboard" element={<MainDashBoard />} />
          <Route exact path="/assignrole" element={<AssignRole />} />
          <Route exact path="/addElection" element={<AddElection />} />
          <Route exact path="/showElections" element={<ShowElections />} />
          <Route exact path="/adminLogin" element={<AdminLogin />}></Route>
        </Routes>
        {/* <NavBar></NavBar> */}
        {/* <AddElection /> */}
        {/* <AssignRole /> */}
        {/* <AdminHeader /> */}
        {/* <ActivateElection /> */}
        {/* <Header /> */}
        {/* <MainDashBoard /> */}
        {/* <AdminLogin /> */}
      </Router>
    );
  }
}
