import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import { TfiFullscreen } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import { Button } from '@mui/material';
import ProductModel from './ProductModel';
import { Link } from 'react-router-dom';

const ProductItem = ({ title, img, discount, oldPrice, netPrice, rating , brand,desc,mfg,exp,stock }) => {
    const [isOpenProductModel, setIsOpenProductModel] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const viewProductDetails = () => {
        setSelectedProduct({ title, img, discount, oldPrice, netPrice, rating , brand,desc,mfg,exp,stock });
        setIsOpenProductModel(true);
    };

    const closeProductModel = () => {
        setIsOpenProductModel(false);
        setSelectedProduct(null);
    };

    return (
        <div className="item productItem">
            <div className="imgWrapper">
                <img
                    src={img}
                    className="w-100"
                    alt={title || "Product"}
                />
                {discount && (
                    <span className="badge badge-primary position-absolute">
                        {discount}%
                    </span>
                )}

                <div className="actions position-absolute">
                    <Button onClick={viewProductDetails}>
                        <TfiFullscreen />
                    </Button>
                    <Button>
                        <IoMdHeartEmpty style={{ fontSize: '20px' }} />
                    </Button>
                </div>
            </div>

            <Link to="/product/1" style={{ textDecoration: 'none' }}>
                <div className="info mt-3">
                    <h4 className="mb-2 text-black">{title}</h4>
                    <span className="text-success d-block">In Stock</span>
                    <Rating
                        className="mt-2 mb-2"
                        name="read-only"
                        value={rating || 0}
                        size="small"
                        readOnly
                    />
                    <div className="d-flex align-items-center">
                        {oldPrice && <span className="oldPrice">₹{oldPrice}</span>}
                        <span className="netPrice ml-2 text-danger">₹{netPrice}</span>
                    </div>
                </div>
            </Link>

            {isOpenProductModel && (
                <ProductModel
                    product={selectedProduct}
                    closeProductModel={closeProductModel}
                />
            )}
        </div>
    );
};


export default ProductItem;