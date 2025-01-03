import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

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
      <div className="container mt-4">
        {/* Product Details */}
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`}
              className="img-fluid rounded shadow"
              alt={product.name}
              style={{ maxHeight: "300px", objectFit: "contain" }}
            />
          </div>
          <div className="col-md-6">
            <h1 className="text-center mb-4">Product Details</h1>
            <h6><strong>Name:</strong> {product.name}</h6>
            <h6><strong>Description:</strong> {product.description}</h6>
            <h6><strong>Price:</strong> ${product.price}</h6>
            <h6><strong>Category:</strong> {product?.category?.name}</h6>
            <button className="btn btn-secondary mt-3">ADD TO CART</button>
          </div>
        </div>

        <hr className="my-5" />

        {/* Similar Products */}
        <div>
          <h4 className="text-center mb-4">Similar Products</h4>
          {relatedProducts.length < 1 ? (
            <p className="text-center">No Similar Products Found</p>
          ) : (
            <div className="row">
              {relatedProducts.map((p) => (
                <div className="col-md-4 col-sm-6 mb-4" key={p._id}>
                  <div className="card shadow-sm h-100">
                    <img
                      src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p?._id}`}
                      className="card-img-top"
                      alt={p.name}
                      style={{ objectFit: "contain", maxHeight: "200px" }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{p.name}</h5>
                      <p className="card-text">
                        {p.description.substring(0, 30)}...
                      </p>
                      <p className="card-text"><strong>Price:</strong> ${p.price}</p>
                      <div className="mt-auto">
                        <button
                          className="btn btn-primary me-2"
                          onClick={() => navigate(`/product/${p.slug}`)}
                        >
                          More Details
                        </button>
                        <button className="btn btn-secondary">ADD TO CART</button>
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
