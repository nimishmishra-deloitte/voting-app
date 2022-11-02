import React, { Component } from 'react'
import './header.css'
export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark mb-4">
        <div className="container">
            <a className="navbar-brand" href="Dashboard.html">
              VotingMadeEasy
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="mobile-nav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/dashboard">
                            Dashboard
                        </a>
                    </li>
                </ul>

                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="login.html">
                            Login
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    )
  }
}
