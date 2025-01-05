import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";

const Dashboard = () => {
  const [auth] = useAuth();

  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div
        className="container-fluid m-3 p-3"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <div className="row w-100" style={{ maxWidth: "1200px" }}>
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div
              className="card"
              style={{
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#f9f9f9",
              }}
            >
              <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
                Welcome, {auth?.user?.name}
              </h2>
              <div style={{ fontSize: "18px", lineHeight: "2" }}>
                <p>
                  <strong>Name:</strong> {auth?.user?.name}
                </p>
                <p>
                  <strong>Email:</strong> {auth?.user?.email}
                </p>
                <p>
                  <strong>Address:</strong> {auth?.user?.address || "N/A"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
