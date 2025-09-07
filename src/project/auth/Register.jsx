import React from 'react';
import "./Register.css";

const Register = () => {
  return (
    <div className="body">
    <div className="register">
      <h1>Register Page</h1>
      <form>
        <div className="form">
          <div className='enterDetails'>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
          <br />

          <label htmlFor="firstname">First Name:</label>
          <input type="text" id="firstname" name="firstname" required />
          <br />
          <label htmlFor="lastname">Last Name:</label>
          <input type="text" id="lastname" name="lastname" required />
          <br />

          <label htmlFor="emailid">Email ID:</label>
          <input type="email" id="emailid" name="email" required />
          <br />

       
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        </div>
        <button type="submit">Register</button>

        <div className="signup">
          <p>
            If you have an account? <a href="/Login">Login</a>
          </p>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Register;

