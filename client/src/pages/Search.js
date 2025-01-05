import React from "react";
import Layout from "./../components/Layout/Layout";
import { useSearch } from "../context/search";
import "../styles/Search.css"; // Import custom CSS

const Search = () => {
  const [values, setValues] = useSearch();
  return (
    <Layout title={"Search results"}>
      <div className="search-container">
        <div className="search-header text-center">
          <h1>Search Results</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length} products`}
          </h6>
        </div>
        <div className="search-results d-flex flex-wrap justify-content-center mt-4">
          {values?.results.map((p) => (
            <div className="product-card card m-3" key={p._id}>
              <img
                src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                className="card-img-top product-image"
                alt={p.name}
              />
              <div className="card-body">
                <h5 className="card-title product-name">{p.name}</h5>
                <p className="card-text product-description">
                  {p.description.substring(0, 50)}...
                </p>
                <p className="card-text product-price">Rs. {p.price}</p>
                <div className="button-group">
                  <button className="btn btn-primary">More Details</button>
                  <button className="btn btn-secondary">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Search;
