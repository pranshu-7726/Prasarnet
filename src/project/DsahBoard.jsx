import React from 'react'

const DsahBoard = () => {
  return (
<div style={{ display: "flex", height: "100vh", fontFamily: "Arial, sans-serif" }}>
          <div
        style={{
          width: "220px",
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
            <li style={{ margin: "15px 0", }}> <a href="/DashBoard" style={{color:"#fff",textDecoration:"none"}}>DashBoard</a></li>
            <li style={{ margin: "15px 0",  }}> <a href="/Profile" style={{color:"#fff",textDecoration:"none"}}>Profile</a></li>
            <li style={{ margin: "15px 0",}}> <a href="TodoList" style={{color:"#fff",textDecoration:"none"}}>Todo List</a></li>
            <li style={{ margin: "15px 0",}}> <a href="TodoFrom" style={{color:"#fff",textDecoration:"none"}}>Todo From</a></li>
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
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
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
          Dashboard
          <div style={{ fontSize: "14px" }}>Welcome, Akash</div>
        </nav>

        <div
          style={{
            flex: 1,
            padding: "20px",
            background: "#f4f6f8",
            overflowY: "auto",
          }}
        >
          <h2 style={{ marginBottom: "15px" }}>Overview</h2>
          <div
            style={{
              display: "grid",
              gap: "20px",
              
            }}
          >
            <div
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(15, 14, 14, 0.1)",
                textAlign: "center",
              }}
            >
              <h3>Total Users</h3>
              <p style={{ fontSize: "24px", fontWeight: "bold" }}>120</p>
            </div>
            <div
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                textAlign: "center",
              }}
            >
              <h3>Exams Taken</h3>
              <p style={{ fontSize: "24px", fontWeight: "bold" }}>15</p>
            </div>
            <div
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                textAlign: "center",
              }}
            >
              <h3>Certificates</h3>
              <p style={{ fontSize: "24px", fontWeight: "bold" }}>6</p>
            </div>
            <div
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                textAlign: "center",
              }}
            >
              <h3>Overall Percentage</h3>
              <p style={{ fontSize: "24px", fontWeight: "bold",color:"#3c63ceff"}}>75%</p>
            </div>
              <div
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                textAlign: "center",
              }}
            >
              <h3>Overall Grade</h3>
              <p style={{ fontSize: "24px", fontWeight: "bold",color:"#3c63ceff"}}>A+</p>
            </div>
               <div
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                textAlign: "center",
              }}
            >
              <h3>Most Attempted Subject</h3>
              <p style={{ fontSize: "20px", fontWeight: "bold"}}>Programming</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default DsahBoard