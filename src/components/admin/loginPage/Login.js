import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Redirect, useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

const Login = (props) => {
  const [account, setAccount] = useState({ email: '', pass: '' });
  const [message, setMessage] = useState('');

  const onChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    const newAccount = { ...account, [key]: value };

    setAccount(newAccount);
  }
  const check = (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      url: 'https://fightingfishpnv22laravel.herokuapp.com/api/adminlogin',
      data: account,
    })
      .then((res) => {
        console.log(res.data.status);
        if (res.data.status == 200) {
          localStorage.setItem('token', true);
          // props.setToken(true);
          window.location = "https://fightingfishpnv22reactjs.herokuapp.com/admin";
        } else if (res.data.status == 100) {
          setMessage({ incorrect: "Incorrect account or password" });
        } else {
          setMessage(res.data.message);
        }
      })
      .catch((err) => {
        alert(err);
      });
  }
  return (
    <form className="login_container" onSubmit={check}>
      {/* {localStorage.getItem('token') ? <Redirect to="/Admin" /> : ''} */}
      <div className="login_content">
        <div className="login_title">Login</div>
        <div className="login_form">
          <input type="text" name="email" id="email" className="form-control" onChange={onChange} placeholder="Enter your email" />
          <span className="text-danger">{message.email ? message.email[0] : ''}</span>
          <input type="password" name="pass" id="pass" className="form-control" onChange={onChange} placeholder="Enter your password" />
          <span className="text-danger">{message.pass ? message.pass[0] : ''}</span>
          <span className="text-danger">{message.incorrect ? message.incorrect : ''}</span>
        </div>
        <div className="login_body">
          <div className="login_remember"><input type="checkbox" name="login_check"></input> <span>Remember Me</span></div>
          <button to="#" type="submit" className="login_button" >Submit</button>
        </div>
        <div className="login_footer">
          <div>Don't have an account? <a href="#">Sign Up</a></div>
          <div>Don't remember password?<a href="#">Forgot Password</a></div>
        </div>
      </div>

    </form>
  );

}
export default Login;