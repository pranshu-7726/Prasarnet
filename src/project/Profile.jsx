import React from 'react'
import './Profile.css'

const Profile = () => {
  return (
    <div className='p'>
      <div className='hd'>
        <h1 className='pwel'>WELCOME</h1>
        <br />
        <br />

    
      </div>
      <div className='lopo'>
        <h3 className='ln'>Name : </h3>
        
       
        <p className='le'>Email : </p>
        
        <p className='lp'>Phone : </p>
        <br />
       <div className='bkl'>
        <button className='blk' type="submit"><a className='editbu' href="/Useredit">EDIT PROFILE</a></button>
        </div>
      </div>
     
       <br />
          <a className='log' href="/login">LOGOUT</a>
    </div>
  )
}

export default Profile