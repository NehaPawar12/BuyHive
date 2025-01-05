import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/AdminMenu.css"; // Import the CSS for styles

const AdminMenu = () => {
  return (
    <div className="admin-menu-container">
      <div className="admin-menu text-center">
        <h4 className="admin-menu-heading">Admin Panel</h4>
        <NavLink
          to="/dashboard/admin/create-category"
          className="admin-menu-item"
          activeClassName="active"
        >
          Create Category
        </NavLink>
        <NavLink
          to="/dashboard/admin/create-product"
          className="admin-menu-item"
          activeClassName="active"
        >
          Create Product
        </NavLink>
        <NavLink
          to="/dashboard/admin/products"
          className="admin-menu-item"
          activeClassName="active"
        >
          Products
        </NavLink>
        <NavLink
          to="/dashboard/admin/orders"
          className="admin-menu-item"
          activeClassName="active"
        >
          Orders
        </NavLink>
        <NavLink
          to="/dashboard/admin/users"
          className="admin-menu-item"
          activeClassName="active"
        >
          Users
        </NavLink>
      </div>
    </div>
  );
};

export default AdminMenu;
