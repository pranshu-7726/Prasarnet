import React from 'react'
import "./Header.css"

const Header = ({headerName}) => {
  return (
   <div className="header-container">
      <div className="header-wrapper">
        <nav className="header-nav">
          {headerName}
          <div className="header-user">Welcome, Akash</div>
        </nav>
      </div>
    </div>
  )
}

export default Header
