import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import "../../styles/AdminDashboard.css"; // Import the CSS file for styling

const AdminDashboard = () => {
  const [auth] = useAuth();

  return (
    <Layout>
      <div className="admin-dashboard-container container-fluid">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="admin-details-card card">
              <h3 className="admin-detail">
                <span className="label">Admin Name:</span> {auth?.user?.name}
              </h3>
              <h3 className="admin-detail">
                <span className="label">Admin Email:</span> {auth?.user?.email}
              </h3>
              <h3 className="admin-detail">
                <span className="label">Admin Contact:</span> {auth?.user?.phone}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
