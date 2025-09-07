import { useEffect} from 'react'
import "./Login.css";
const Login = () => {
  useEffect(()=>{
  alert("WELCOME")
},[])
  return (  
    <div className="body">
    <div className="login">
      <h1>Login Page</h1>
      <form>
        <div className="form">
          <label htmlFor="emailid">Email ID:</label>
          <input type="text" id="emailid" name="email" required />
          <br />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      <div className="signup">
        <p>If Don't have an account?<a href="/register">Register</a></p>
      </div>
      </form>
    </div>
    </div>

  );
};

export default Login;
