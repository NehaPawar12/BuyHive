import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import "./Products.css"; // Add a CSS file for custom styling if needed

const Products = () => {
  const [products, setProducts] = useState([]);

  // Fetch all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/get-product`
      );
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout>
      <div className="container-fluid p-4">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center mb-4">All Products</h1>
            <div className="row">
              {products?.length > 0 ? (
                products.map((p) => (
                  <div
                    key={p._id}
                    className="col-md-4 col-sm-6 mb-4 d-flex align-items-stretch"
                  >
                    <div className="card product-card shadow-sm">
                      <Link to={`/dashboard/admin/product/${p.slug}`}>
                        <img
                          src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                          className="card-img-top"
                          alt={p.name}
                          style={{
                            height: "200px",
                            objectFit: "cover",
                            borderTopLeftRadius: "calc(0.25rem - 1px)",
                            borderTopRightRadius: "calc(0.25rem - 1px)",
                          }}
                        />
                      </Link>
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title text-truncate">{p.name}</h5>
                        <p className="card-text text-muted text-truncate">
                          {p.description}
                        </p>
                        <div className="mt-auto">
                          <Link
                            to={`/dashboard/admin/product/${p.slug}`}
                            className="btn btn-primary btn-block"
                          >
                            Edit Product
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12 text-center">
                  <p>No products available.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
