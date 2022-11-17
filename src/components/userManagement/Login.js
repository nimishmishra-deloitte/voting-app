import React, { useState, useEffect,Component } from 'react'
import { Link, useLocation,useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/layout/Loader'
import Message from '../../components/layout/Message'
import { login } from '../../actions/userActions'
import './login.css'
export default function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const location=useLocation();
    const navigate=useNavigate();
    const redirect = location.search ? parseInt(location.search.split('=')[1]) : '/dashboard'

    const userLogin = useSelector(state => state.userLogin)
    const { error, loading, userInfo } = userLogin
    useEffect(() => {
        if (userInfo) {
            navigate(redirect)
        }
    }, [navigate, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(username, password))
    }
    return (
        <div className="auth-form-container">
       
        <h1>Sign In</h1>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
         <form className="login-form" onSubmit={submitHandler}>
                <label htmlFor="email">Username</label>
                 <input value={username} onChange={(e) => setUsername(e.target.value)}type="text" placeholder="username" id="username" name="username" />
                 <label htmlFor="password">Password</label>
                 <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                 <button type="submit">Log In</button>
         </form>
         </div>
    )
  }

