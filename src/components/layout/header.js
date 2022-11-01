import React from "react";
import { Fragment } from "react";
import voteImage from "../../assets/vote.webp";
import './header.css';
const Header=props=>{
    return <Fragment>
        <header className="header">
           <h2>Voting App</h2> 
           <button>Login</button>
        </header>
    </Fragment>
}

export default Header;