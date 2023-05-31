import React, { useEffect, useState } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import Product from "./Product";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";

// const product = {
//   name: "Blue Shirt",
//   images: [
//     {
//       url: "https://cdn.shopify.com/s/files/1/0419/6171/7922/products/SEMI-CASUAL-DENIM-SHIRT-LIGHT-BLUE-at-Charcoal-Clothing-993_540x.jpg?v=1680063539",
//     },
//   ],
//   price: "300 rs.",
//   _id: "wahabk",
// };
const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  return (
    <>
      <MetaData title={"ECOMMERCE"} />
      <div className='banner'>
        <p>Welcome to Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>
        <a href='#container'>
          <button>
            Scroll <CgMouse />{" "}
          </button>
        </a>
      </div>
      <h2 className='homeHeading'>Featured Products</h2>
      <div className='container' id='container'>
        {products && products.map((product) => <Product product={product} />)}
      </div>
    </>
  );
};

export default Home;
