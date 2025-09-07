import React from 'react'
import "./Dashboard.css"
const DsahBoard = () => {
   return (
    <div className='body'>
      <h1>Welcome to your dashboard</h1>
      <div className='recent-projects'>
        <h3>Your recent Projects</h3>
        <p className="value"></p>
      </div>
        <div className='completed-project'>
        <h3>Your completed Projects</h3>
        <p className="value"></p>
      </div>
      <div className='upcoming-projects'>
        <h3>Your upcoming Projects</h3>
        <p className="value"></p>
      </div>
      <div className='projects-have'>
        <h3>Projects You Have</h3>
        <p className="value"></p>
      </div>
      <div className='like-projects'>
        <h3>Projects You Like</h3>
        <p className="value"></p>
      </div>
    </div>
      

  );
};

export default DsahBoard;