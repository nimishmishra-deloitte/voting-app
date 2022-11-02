import React, { Component } from 'react'
import Dashboard from './components/dashboard/Dashboard'
import './App.css'
import Header from './components/layout/Header'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import AddElection from './components/elections/AddElection'
import Login from './components/userManagement/Login'
import Election from './components/elections/Election'
import Sidebar from './components/layout/Sidebar'
export default class App extends Component {
  render() {
    return (
      <Router>
        <Header/>
        <Routes>
        {/* Public routes */}
        <Route exact path="/" element={<Dashboard/>}/>
       
        {/* Private routes */}
        <Route exact path="/dashboard" element={<Dashboard/>}/>
        <Route exact path="/addElection" element={<AddElection/>}/>
        <Route exact path="/showElections" element={<Election/>}/>
        <Route exact path="/adminLogin" element={<Login/>}/>
        </Routes>
      </Router>
    )
  }
}

