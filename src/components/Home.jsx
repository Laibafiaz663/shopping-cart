import React, { useContext, useState } from "react";
import { products } from "../products";
import "./Home.css";
import Navbar from "./Navbar";
import { cartcontext } from "../App";
import Sidebar from "./Sidebar";

function Home() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productlist, setProductlist] = useState(products);
  const cartContext = useContext(cartcontext);
  const openSidebar = (product) => {
    setSelectedProduct(product);
    setShowSidebar(true);
  };
  const closeSidebar = () => {
    setShowSidebar(false);
  };

  const handlecart = (prod) => {
    cartContext.setCart([...cartContext.cart, prod]);
  };

  return (
    <div>
      <Navbar />
      <Sidebar
        show={showSidebar}
        product={selectedProduct}
        onClose={closeSidebar}
      />
      <div className="card-wrapper">
        <div className="container">
          <div className="card-inner">
            <div className="row">
              {productlist.map((product) => {
                return (
                  <div className="col-md-3">
                    <div
                      className="card"
                      style={{ cursor: "pointer" }}
                      onClick={() => openSidebar(product)}
                    >
                      <img
                        src={product.image}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <div className="buttons">
                          <button
                            className="btn btn-primary"
                            onClick={() => handlecart(product)}
                          >
                            Add To Cart
                          </button>
                          <a href="#" className="btn btn-primary">
                            {product.price}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
