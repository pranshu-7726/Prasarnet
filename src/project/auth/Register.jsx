import React from 'react'

const Register = () => {
  return (
    <div>
        <div>
      <div className="Signup" style={{}}>
        <h1>SignUp From</h1>
        <div className="from">
            <p style={{padding:"0",margin:"0",marginLeft:"-19vh"}}>Name</p>
            <input type="text" placeholder='Name'/>
            <p style={{padding:"0",margin:"0",marginLeft:"-19vh"}}>Email</p>
            <input type="text" placeholder='Email'/>
            <p style={{padding:"0",margin:"0",marginLeft:"-16vh"}}>Password</p>
            <input type="password" />
             
        </div>
        <button style={{marginTop:"2vh"}}>SignUp</button>
        <a href="/login">Login</a>
      </div>
    </div>
    </div>
  )
}

export default Register
