import React, { useState, useEffect,Component } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/layout/Loader'
import Message from '../../components/layout/Message'
import FormContainer from '../../components/layout/FormContainer'
import { login } from '../../actions/userActions'
import './login.css'
export default function Login({ location, history }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    

    const userLogin = useSelector(state => state.userLogin)
    const { error, loading, userInfo } = userLogin



    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }
    return (
        <div className="auth-form-container">
        <h1>Sign In</h1>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <form className="login-form" onSubmit={submitHandler}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
    </div>
    )
  }

