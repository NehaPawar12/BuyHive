import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import "../../styles/Products.css"; // Import custom CSS

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
      console.error(error);
      toast.error("Something went wrong while fetching products.");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout title="Dashboard - All Products">
      <div className="products-container container-fluid p-4">
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
                    className="col-lg-4 col-md-6 col-sm-12 mb-4"
                  >
                    <div className="card product-card">
  <Link to={`/dashboard/admin/product/${p.slug}`}>
    <img
      src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
      className="product-image"
      alt={p.name}
    />
  </Link>
  <div className="card-body">
    <h5 className="card-title">{p.name}</h5>
    <p className="card-text">{p.description.substring(0, 50)}...</p> {/* Show only 50 characters */}
    <p className="card-price">${p.price}</p>
    <Link to={`/dashboard/admin/product/${p.slug}`} className="btn btn-primary">
      Edit Product
    </Link>
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
