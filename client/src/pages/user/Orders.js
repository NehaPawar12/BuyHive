import React, { useState, useEffect } from "react";
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useAuth } from "../../context/auth";
import moment from "moment";
import '../../styles/Orders.css'

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth] = useAuth();

  const getOrders = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/auth/orders`
      );
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  return (
    <Layout title={"Your Orders"}>
      <div className="container-fluid p-3 m-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center mb-4">Your Orders</h1>
            {orders?.length > 0 ? (
              orders.map((o, i) => (
                <div className="border rounded mb-4 shadow-sm p-3" key={i}>
                  <h5 className="mb-3">
                    <strong>Order #{i + 1}</strong>
                  </h5>
                  <table className="table table-bordered">
                    <thead>
                      <tr className="table-secondary">
                        <th scope="col">No.</th>
                        <th scope="col">Status</th>
                        <th scope="col">Buyer</th>
                        <th scope="col">Date</th>
                        <th scope="col">Payment</th>
                        <th scope="col">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{i + 1}</td>
                        <td>{o?.status}</td>
                        <td>{o?.buyer?.name}</td>
                        <td>{moment(o?.createAt).format("MMM DD, YYYY")}</td>
                        <td>{o?.payment.success ? "Success" : "Failed"}</td>
                        <td>{o?.products?.length}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="container mt-3">
                    <h6>Products</h6>
                    {o?.products?.map((p, idx) => (
                      <div
                        className="row mb-2 p-2 card flex-row align-items-center"
                        key={p._id}
                      >
                        <div className="col-md-4">
                          <img
                            src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                            className="img-fluid rounded"
                            alt={p.name}
                            style={{
                              width: "100px",
                              height: "100px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <div className="col-md-8">
                          <p className="mb-1">
                            <strong>{p.name}</strong>
                          </p>
                          <p className="mb-1">
                            {p.description.substring(0, 50)}...
                          </p>
                          <p className="mb-0">
                            <strong>Price:</strong> ${p.price}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <h4 className="text-center text-muted">No orders found.</h4>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
