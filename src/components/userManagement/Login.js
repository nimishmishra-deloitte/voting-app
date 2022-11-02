import React, { Component } from 'react'
import './login.css'
export default class Login extends Component {
    constructor() {
        super();
        this.state = {
          username: "",
          password: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }
    
      onSubmit(e) {
        e.preventDefault();
        const LoginRequest = {
          username: this.state.username,
          password: this.state.password
        };
    
        this.props.login(LoginRequest);
      }
    
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
    
  render() {
    return (
        <div class="login">
        <div class="container">
            <div class="row">
                <div class="col-md-8 m-auto">
                    <h1 class="display-4 text-center">Log In</h1>
                    <form onSubmit={this.onSubmit}>
                        <div class="form-group">
                            <input 
                            type="text" 
                            class="form-control form-control-lg" 
                            placeholder="Email Address" 
                            name="username"
                            value={this.state.username} 
                            onChange={this.onChange}
                            />
                        </div>
                        <div class="form-group">
                            <input 
                            type="password" 
                            class="form-control form-control-lg" 
                            placeholder="Password" 
                            name="password" 
                            value={this.state.password} 
                            onChange={this.onChange}
                            />
                        </div>
                        <input type="submit" class="btn btn-info btn-block mt-4" />
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

