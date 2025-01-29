import React from "react";
import Dialog from "@mui/material/Dialog";
import { Button } from "@mui/material";
import { MdClose } from "react-icons/md";
import Rating from "@mui/material/Rating";
import QuantityDropDown from "./QuantityDropDown";

const ProductModel = ({ product, closeProductModel }) => {
  const isInStock = product.stock > 0;

  return (
    <Dialog open={true} className="ProductModel" onClose={closeProductModel}>
      {/* Close Button */}
      <Button className="close-btn" onClick={closeProductModel}>
        <MdClose size={24} />
      </Button>

      <div className="product-model-content">
        {/* Product Title and Rating */}
        <h4 className="product-title mb-1">{product.title}</h4>
        <div className="d-flex align-items-center mb-3">
          <div className="brand-info mr-4">
            <span>Brand:</span>
            <b className="ml-2">{product.brand}</b>
          </div>
          <Rating
            name="read-only"
            value={product.rating}
            size="small"
            precision={0.5}
            readOnly
          />
        </div>
        <hr />

        <div className="row product-details">
          {/* Product Image */}
          <div className="col-md-5">
            <div className="product-image">
              <img
                src={product.img}
                alt={product.title}
                className="img-fluid rounded shadow"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="col-md-7">
            <div className="price-info mb-3">
              <span className="old-price">₹{product.oldPrice}</span>
              <span className="net-price ml-2 text-danger font-weight-bold">
                ₹{product.netPrice}
              </span>
            </div>

            {/* Stock Badge */}
            <span
              className={`badge ${
                isInStock ? "bg-success" : "bg-danger"
              } text-white`}
            >
              {isInStock ? "IN STOCK" : "OUT OF STOCK"}
            </span>

            {/* Product Description */}
            <p className="product-desc mt-3">{product.desc}</p>

            {/* Quantity and Add to Cart */}
            <div className="d-flex align-items-center mt-4">
              <QuantityDropDown />
              <Button
                className="btn btn-primary btn-big btn-round ml-3"
                disabled={!isInStock}
              >
                Add to Cart
              </Button>
            </div>

            {/* Manufacturing and Expiry Dates */}
            <div className="additional-info mt-5">
              <p className="mfg-date">Mfd Date: {product.mfg}</p>
              <p className="exp-date">Exp Date: {product.exp}</p>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ProductModel;
