import React, { useState } from 'react'
import Rating from '@mui/material/Rating';
import { TfiFullscreen } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import { Button } from '@mui/material';
import ProductModel from './ProductModel';
import { Link } from 'react-router-dom';

const ProductItem1 = ({ title, img, discount, oldPrice, netPrice, rating, itemView }) => {

    const [isOpenProductModel, setIsOpenProductModel] = useState(false);
    const ViewProductDetails = (id) => {
        setIsOpenProductModel(true);
    }
    const closeProductModel = () => {
        setIsOpenProductModel(false);
    }
    return (
        <>
            <div className={`item productItem ${itemView}`}>
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
                        <Button onClick={ViewProductDetails
                        }>
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
                    <ProductModel closeProductModel={closeProductModel} />
                )}
            </div>
        </>
    )
}

export default ProductItem1