import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/UserMenu.css"; // Import the CSS for styles

const UserMenu = () => {
  return (
    <div className="user-menu-container">
      <div className="user-menu text-center">
        <h4 className="user-menu-heading">Dashboard</h4>
        <NavLink
          to="/dashboard/user/profile"
          className="user-menu-item"
          activeClassName="active"
        >
          Profile
        </NavLink>
        <NavLink
          to="/dashboard/user/orders"
          className="user-menu-item"
          activeClassName="active"
        >
          Orders
        </NavLink>
      </div>
    </div>
  );
};

export default UserMenu;
