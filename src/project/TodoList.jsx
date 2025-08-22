import React from 'react'

const TodoList = () => {
  return (
   <div style={{ display: "flex", height: "100vh", fontFamily: "Arial, sans-serif",background: "#f0f4f8" }}>
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
        <div style={{ textAlign: "center"}}>
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




            <div style={{ display: "flex", justifyContent: "center", flex: 1 ,marginTop:"20px"}}>
        <div
      style={{
        fontFamily: "Arial, sans-serif",
        
        height: "100vh",
       
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "300px",
          border:"1px solid #ccc",

        }}
      >

        <h2 style={{marginLeft:"10vh" }}> My Todo List</h2>
        <div style={{display:"flex"}}>
        <input type="text" placeholder="Add a new task" style={{  padding: "10px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc",width:"29vh"}} />
        <div style={{paddingLeft:"8px"}}>
        <button style={{width:"8vh",height:"5vh", padding: "8px 12px",
              border: "none",
              background: "#4c57afff",
              color: "white",
              borderRadius: "5px"
              }}>Add</button>
              </div>

                


        </div>
        <ul style={{ listStyle: "none", padding: 0, marginTop: "15px" }}>
          <li
            style={{
              background: "#f9f9f9",
              padding: "8px",
              margin: "5px 0",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
          >
            Learn HTML
          </li>
           <li
            style={{
              background: "#f9f9f9",
              padding: "8px",
              margin: "5px 0",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
          >
            Learn CSS
          </li>
           <li
            style={{
              background: "#f9f9f9",
              padding: "8px",
              margin: "5px 0",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
          >
            Learn JavaScript
          </li>
          </ul>
        </div>
        </div>
        </div>
        </div>
  )
}

export default TodoList