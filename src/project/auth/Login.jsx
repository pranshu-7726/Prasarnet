import React from 'react'

const Login = () => {
  return (
    <div>
      <div className="login" style={{}}>
        <h1>Login From</h1>
        <div className="from">
            <p style={{padding:"0",margin:"0",marginLeft:"-19vh"}}>Email</p>
            <input type="text" placeholder='Email'/>
            <p style={{padding:"0",margin:"0",marginLeft:"-19vh"}}>Password</p>
            <input type="password" />
        </div>
        <button style={{marginTop:"2vh"}}>Login</button>
        <a href="/register">Signup</a>
      </div>
    </div>
  )
}

export default Login
