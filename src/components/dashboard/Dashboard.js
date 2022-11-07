import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './dashboard.css'
import votingImage from '../../assets/vote.png'
import Sidebar from '../layout/Sidebar'
export default function Dashboard(){
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    return (
      <React.Fragment>
       
      <div className='mainDiv'>
      {userInfo ? 
          (
          <div class="side-panel"><Sidebar/></div>
        )
        :(
        <div class="main-divs">
        <div className="leftDiv">
            <h2>
               Online Voting Platform
            </h2>
            <p>Taking forward its continuous efforts of building an active democratic
            citizenry in the country,Election Commission of India has undertaken a
            new initiative by designing a Web Application for developing a culture
            of avid electoral engagement and making informed and ethical ballot 
            decisions among citizens of the country. The app aims to provide 
            a single point of service and information delivery to 
            voters across the country. </p>
        
            <Link to="/adminLogin">
                <button className='login-btn'>Admin Login</button>
            </Link>
        </div>
        <div className="bgimage">
            <img src={votingImage}/>
        </div>
        </div>
        )}
        </div>
    </React.Fragment>
    
    )
  
}
