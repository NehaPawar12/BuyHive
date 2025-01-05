import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/ProductDetails.css"; // Importing the custom CSS for styling

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  // Fetch product details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container mt-5 product-details-container">
        {/* Product Details */}
        <div className="row product-detail-row">
          <div className="col-md-6 product-image-container">
            <img
              src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`}
              className="img-fluid product-image"
              alt={product.name}
            />
          </div>
          <div className="col-md-6 product-info">
            <h1 className="product-title">{product.name}</h1>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <p className="product-category">Category: {product?.category?.name}</p>
            <button className="btn btn-primary add-to-cart-btn mt-3">
              ADD TO CART
            </button>
          </div>
        </div>

        <hr className="my-5" />

        {/* Similar Products */}
        <div>
          <h4 className="text-center similar-products-title mb-4">Similar Products</h4>
          {relatedProducts.length < 1 ? (
            <p className="text-center">No Similar Products Found</p>
          ) : (
            <div className="row related-products-row">
              {relatedProducts.map((p) => (
                <div className="col-md-4 col-sm-6 mb-4" key={p._id}>
                  <div className="card related-product-card">
                    <img
                      src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p?._id}`}
                      className="card-img-top related-product-img"
                      alt={p.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{p.name}</h5>
                      <p className="card-text">{p.description.substring(0, 30)}...</p>
                      <p className="card-text">
                        <strong>Price:</strong> ${p.price}
                      </p>
                      <div className="button-group mt-auto">
                        <button
                          className="btn btn-outline-primary"
                          onClick={() => navigate(`/product/${p.slug}`)}
                        >
                          More Details
                        </button>
                        <button className="btn btn-outline-secondary">ADD TO CART</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
