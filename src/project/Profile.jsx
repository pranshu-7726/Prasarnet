import React from 'react';

const Profile = () => {
  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial, sans-serif" }}>

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
    
        <div style={{display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div
            style={{
              width: "300px",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              textAlign: "center",
              background: "#fff",
              marginTop: "10vh",
              border: "4px solid #eaeef1ff",
            }}
          >
            <img
              src="https://i0.wp.com/florrycreativecare.com/wp-content/uploads/2020/08/blank-profile-picture-mystery-man-avatar-973460.jpg?ssl=1"
              alt="Profile"
              style={{
                borderRadius: "50%",
                marginBottom: "15px",
                border: "3px solid #b9bcbfff",
                height:"10vh",
                width: "10vh",
              }}
            />
            <h2 style={{ marginBottom: "10px" }}>Name: Akash Maity</h2>
            <p style={{ color: "#555", marginBottom: "20px" }}>Email: am6030920@gmail.com</p>
            <p style={{ color: "#555", marginBottom: "20px" }}>Phone No: +91 9831403680</p>

            <button
              style={{
                padding: "10px 15px",
                border: "none",
                borderRadius: "8px",
                background: "#4facfe",
                color: "#fff",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
