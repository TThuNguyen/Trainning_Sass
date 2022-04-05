import React from 'react';
import PropTypes from 'prop-types';

SignUp.propTypes = {

};

function SignUp(props) {
  return (
    <form className="signup_body">
      <h1>New Account</h1>
      <div className="signup_inset">
        <p>
          <input type="text" name="email" id="email" className="signup_email" placeholder="Enter your email" />
        </p>
        <p>
          <input type="password" name="password" id="password" className="signup_password" placeholder="Enter your password" />
        </p>
        <p>
          <input type="text" name="name" id="name" className="signup_name" placeholder="Enter your name" />
        </p>
        <p>
          <input type="text" name="phone" id="phone" className="signup_phone" placeholder="Enter your phone number" />
        </p>
        <button type="submit" className="signup_button" name="go" id="go">Sign up</button>
      </div>
    </form>
  );
}

export default SignUp;