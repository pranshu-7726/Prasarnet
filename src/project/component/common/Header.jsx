import React from 'react'

const Header = ({headerName}) => {
  return (
    <div className='' style={{ display: "flex",width:"85vw",fontFamily: "Arial, sans-serif" }}>

   <div style={{  display: "flex", flex: 1,flexDirection: "column" }}>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 20px",
            background: "#4facfe",
            color: "#fff",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          {headerName}
          <div style={{ fontSize: "14px" }}>Welcome, Akash</div>
        </nav>
        </div>
     </div>
  )
}

export default Header
