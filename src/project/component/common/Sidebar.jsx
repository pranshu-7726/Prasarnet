import React, { useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import "./SideBar.css";

const Sidebar = ({ setHeaderName }) => {
  const location = useLocation();
  const isActiveRoute = (path) => {
    const returnValue = location.pathname.startsWith(path) ? true : false;
    return returnValue;
  };
  const Navigate =useNavigate();
  const handelLogout = () => {
    Navigate("/login");
  };
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div>
          <h2 className="sidebar-title">Menu</h2>
          <ul className="sidebar-list">
            <li onClick={() => setHeaderName("Dashboard")}>
              <Link
                to="/DashBoard"
                className={isActiveRoute("/DashBoard") ? "active-link" : ""}
              >
                Dashboard
              </Link>
            </li>
            <li onClick={() => setHeaderName("Profile")}>
              <Link
                to="/Profile"
                className={isActiveRoute("/Profile") ? "active-link" : ""}
              >
                Profile
              </Link>
            </li>
            <li onClick={() => setHeaderName("Todo List")}>
              <Link
                to="/TodoList"
                className={isActiveRoute("/TodoList") ? "active-link" : ""}
              >
                Todo List
              </Link>
            </li>
            <li onClick={() => setHeaderName("Todo Form")}>
              <Link
                to="/TodoFrom"
                className={isActiveRoute("/TodoFrom") ? "active-link" : ""}
              >
                Todo Form
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidebar-footer">
          <button className="logout-btn" onClick={handelLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
