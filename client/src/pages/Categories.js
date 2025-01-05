import React from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";
import '../styles/Categories.css'

const Categories = () => {
  const categories = useCategory();

  return (
    <Layout title={"All Categories"}>
      <div className="container py-5">
        <h1 className="text-center mb-4">Explore Categories</h1>
        <div className="row">
          {categories.map((c) => (
            <div className="col-md-6 col-lg-4 mb-4 d-flex justify-content-center" key={c._id}>
              <Link
                to={`/category/${c.slug}`}
                className="category-card"
              >
                {c.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
