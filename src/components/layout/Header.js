import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import Sidebar from './Sidebar'
import './header.css'
import {
    FaTh,
    FaBars,
    FaUserPlus,
    FaUserTag
}from "react-icons/fa";
import { logout } from '../../actions/userActions'
export default function Header(){
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
    <div className='main-div'>
      
      <nav className="fixed-top navbar navbar-expand-sm navbar-dark mb-4">
        
        <div className="container">
            <a className="navbar-brand" href="Dashboard.html">
              VotingMadeEasy
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="mobile-nav">
                
                {userInfo ? (
                    <ul className="navbar-nav ms-auto">
                    
                    <li className="nav-item">
                        <Link className="nav-link" onClick={logoutHandler} to="/">
                            Logout
                        </Link>
                    </li>
                </ul>
                ) :
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/adminLogin">
                            Login
                        </Link>
                    </li>
                </ul>
                }
                
            </div>
        </div>
    </nav>
   </div>
    )
  }

