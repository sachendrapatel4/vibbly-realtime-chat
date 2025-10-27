import { NavLink, useLocation } from "react-router";
import useAuthUser from "../hooks/useAuthUser";
import React from "react";
import { FaHome, FaUserFriends, FaBell } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  const { authUser } = useAuthUser();
  const location = useLocation();
  const currentPath = location.pathname;

  console.log(currentPath);

  return (
    <aside className="sidebar">

      <div className="sidebar-header">
        <NavLink to="/" className="text-decoration-none d-flex align-items-center justify-content-center gap-2">
          <img
            src="/media/logo.png"
            alt="Vibbly Logo"
            style={{ width: "45px", height: "45px", objectFit: "contain" }}
          />
          <span>Vibbly</span>
        </NavLink>
      </div>

      <nav className="flex-grow-1">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <FaHome /> Home
        </NavLink>

        <NavLink
          to="/friends"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <FaUserFriends /> Friends
        </NavLink>

        <NavLink
          to="/notifications"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <FaBell /> Notifications
        </NavLink>
      </nav>

      <div className="sidebar-user">
        <img
          src={authUser?.profilePic || "/media/fallback-avatar.png"}
          alt="User Avatar"
          className="img-fluid"
        />



        <div className="user-info">
          <h6>{authUser?.fullName || "User Name"}</h6>
          <span>Online</span>
        </div>
      </div>
    </aside>
  );
}
export default Sidebar;