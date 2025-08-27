import React,{useEffect} from 'react'
import { useLocation} from 'react-router-dom'

const Sidebar = ({setHeaderName}) => {
    const location =useLocation();
    const isActiveRoute=(path) =>{
        const returnValue=location.pathname.startsWith(path)?true : false;
        return returnValue;
    }
  return (
    <div>
    <div style={{ display: "flex",width:"14vw", height: "100vh", fontFamily: "Arial, sans-serif" }}>
          <div
        style={{
          width: "14vw",
          background: "#333",
          color: "#fff",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h2 style={{ marginBottom: "30px", textAlign: "left" }}>Menu</h2>
          <ul style={{ listStyle: "none", padding: "0" }}>
           <li style={{ margin: "15px 0", }} onClick={()=>setHeaderName("Dashboard")}> <a href="/dashBoard" style={{color:"#fff",textDecoration:"none"}}>DashBoard</a></li>
            <li style={{ margin: "15px 0",  }} onClick={()=>setHeaderName("Profile")}> <a href="/profile" style={{color:"#fff",textDecoration:"none"}}>Profile</a></li>
            <li style={{ margin: "15px 0",}} onClick={()=>setHeaderName("Todo List")}> <a href="/todoList" style={{color:"#fff",textDecoration:"none"}}>Todo List</a></li>
            <li style={{ margin: "15px 0",}} onClick={()=>setHeaderName("Todo From")}> <a href="/todoFrom" style={{color:"#fff",textDecoration:"none"}}>Todo From</a></li>
          </ul>
        </div>
        <div style={{ textAlign: "center" }}>
          <button
            style={{
              padding: "10px 15px",
              border: "none",
              borderRadius: "8px",
              background: "#4facfe",
              color: "#fff",
              fontWeight: "bold",
              width: "100%",
            }}
          >
            Logout
          </button>
        </div>
      </div>
      </div>
      </div>
  )
}

export default Sidebar
