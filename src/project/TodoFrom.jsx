import React from "react";

const TodoForm = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
        background: "#f0f4f8",
      }}
    >
      <div
        style={{
          flex: "1",
          padding: "40px",
          fontFamily: "futura",
          fontSize: "2.5vh",
        }}
      >
       
       <div style={{boxShadow:"0 4px 10px rgba(0,0,0,0.1)",
       height:"50vh",
        borderRadius:"2vh",
       }}>
         <h1 style={{ textAlign: "center",paddingTop:"3vh"}}>Todo Form Office</h1>

        <form
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <input
            type="text"
            placeholder="Enter a Your Name..."
            style={{
              padding: "10px",
              width: "300px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />
      
        </form>
        
        <form
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "9px",
          }}
        >
          <input
            type="text"
            placeholder="Enter a Your Email..."
            style={{
              padding: "10px",
              width: "300px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />
      
        </form>
        
        <form
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "9px",
          }}
        >
          <input
            type="text"
            placeholder="Enter a Your Password..."
            style={{
              padding: "10px",
              width: "300px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />
      
        </form>
        <div style={{ display: "flex", justifyContent: "center", flex: 1 }}>
          <input
            type="date"
            placeholder="Date..."
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #a165faff",
              marginRight: "10px",
              marginLeft:"14px",
              fontSize: "16px",
              display: "flex",
              marginTop: "1vh",
              width: "18vh",
            }}
          />
          <input
            type="Time"
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #a165faff",
              marginRight: "10px",
              fontSize: "16px",
              display: "flex",
              marginTop: "1vh",
              width: "18vh",
            }}
          />
        </div>
        <div  style={{display:"flex",
        justifyContent:"center",
        marginTop:"2vh"
        }}>
        <button style={{  padding: "10px 15px",
              border: "none",
              borderRadius: "8px",
              background: "#135e9fff",
              color: "#fff",
              fontSize:"15px",
              width:"12vh"
        }}>
            Save
        </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default TodoForm;
