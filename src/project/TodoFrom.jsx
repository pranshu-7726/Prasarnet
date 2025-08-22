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
            {/* Sidebar */}
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
                        <li style={{ margin: "15px 0" }}>
                            <a href="/DashBoard" style={{ color: "#fff", textDecoration: "none" }}>DashBoard</a>
                        </li>
                        <li style={{ margin: "15px 0" }}>
                            <a href="/Profile" style={{ color: "#fff", textDecoration: "none" }}>Profile</a>
                        </li>
                        <li style={{ margin: "15px 0" }}>
                            <a href="/TodoList" style={{ color: "#fff", textDecoration: "none" }}>Todo List</a>
                        </li>
                        <li style={{ margin: "15px 0" }}>
                            <a href="/TodoForm" style={{ color: "#fff", textDecoration: "none" }}>Todo From</a>
                        </li>
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

            {/* Main Content */}
            <div
                style={{
                    flex: "1",
                    padding: "40px",
                    fontFamily: "futura",
                    fontSize: "2.5vh",
                }}
            >
                <h1 style={{ textAlign: "center" }}>Todo Form Office</h1>

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
                            marginRight: "10px",
                            fontSize: "16px",
                        }}
                    />
                    <button
                        type="submit"
                        style={{
                            padding: "10px 20px",
                            border: "none",
                            borderRadius: "8px",
                            background: "#4facfe",
                            color: "#fff",
                            fontWeight: "bold",
                            fontSize: "16px",
                        }}
                    >

                        Add
                    </button>



                </form>
                <input
                    type="email"
                    placeholder="Enter a Your Email..."
                    style={{
                        padding: "10px",
                        width: "300px",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                        fontSize: "16px",
                        marginLeft: "54.5vh",
                        marginTop: "1vh",
                    }}
                />
                <button
                    type="submit"
                    style={{
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "8px",
                        background: "#4facfe",
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: "16px",
                        marginLeft: "1vh",
                    }}
                >

                    Add
                </button>

 <input
                    type="text"
                    placeholder="Meating Address"
                    style={{
                        padding: "10px",
                        width: "300px",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                        fontSize: "16px",
                        marginLeft: "54.5vh",
                        marginTop: "1vh",
                    }}
                />
                <button
                    type="submit"
                    style={{
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "8px",
                        background: "#4facfe",
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: "16px",
                        marginLeft: "1vh",
                    }}
                >

                    Add
                </button>

                <div
                    style={{ display: "flex", justifyContent: "center", flex: 1 }}
                >







                    <input type="date"

                        placeholder="Date..."

                        style={{
                            padding: "10px",
                            width: "300px",
                            borderRadius: "8px",
                            border: "1px solid #ccc",
                            marginRight: "10px",
                            fontSize: "16px",
                            display: "flex",
                            marginTop: "1vh",
                            width: "20vh",

                        }} />
                    <input type="Time"


                        style={{
                            padding: "10px",
                            width: "300px",
                            borderRadius: "8px",
                            border: "1px solid #ccc",
                            marginRight: "10px",
                            fontSize: "16px",
                            display: "flex",
                            marginTop: "1vh",
                            width: "20vh"
                        }} />

                </div>

            </div>
        </div>
    );
};

export default TodoForm;
