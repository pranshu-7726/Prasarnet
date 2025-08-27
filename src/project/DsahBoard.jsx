import React from 'react'
import "./Dashboard.css"

const DsahBoard = () => {
  return (
<div className='main'>
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
  )
}

export default DsahBoard