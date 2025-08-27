import React from 'react'

const TodoList = () => {
  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial, sans-serif", background: "#f0f4f8" }}>

      <div style={{ display: "flex", justifyContent: "center", flex: 1, marginTop: "20px" }}>
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
              border: "1px solid #ccc",

            }}
          >

            <h2 style={{ marginLeft: "10vh" }}> My Todo List</h2>
            <div style={{ display: "flex" }}>
              <input type="text" placeholder="Add a new task" style={{ padding: "10px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc", width: "29vh" }} />
              <div style={{ paddingLeft: "8px" }}>
                <button style={{
                  width: "8vh", height: "5vh", padding: "8px 12px",
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