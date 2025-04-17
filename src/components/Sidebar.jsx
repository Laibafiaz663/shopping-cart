import React from "react";

function Sidebar({ onClose, show, product }) {
  return (
    <div>
      <div className={`sidebar ${show ? "show" : ""}`}>
        <div className="sidebar-inner">
          {product && (
            <div className="card mt-5">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <div className="buttons d-flex justify-content-between align-items-center">
                  <a href="#" className="btn btn-primary">
                    {product.price}
                  </a>
                </div>
              </div>
            </div>
          )}

          <button onClick={onClose}>×</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
