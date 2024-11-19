import React, { useState } from 'react'
import Rating from '@mui/material/Rating';
import { TfiFullscreen } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import { Button } from '@mui/material';
import ProductModel from './ProductModel';

const ProductItem = (props) => {

    const[isOpenProductModel,setIsOpenProductModel]=useState(false);
    const ViewProductDetails=(id)=>{
        setIsOpenProductModel(true);
    }
    const closeProductModel=()=>{
        setIsOpenProductModel(false);
    }
    return (
        <>
            <div className={`item productItem ${props.itemView}`}>
                <div className="imgWrapper">
                    <img
                        src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg"
                        className='w-100'
                        alt="Product"
                    />

                <span className='badge badge-primary'>12%</span>

                <div className="actions">
                    <Button onClick={()=>ViewProductDetails(1)}><TfiFullscreen/></Button>
                    <Button><IoMdHeartEmpty style={{fontSize:'20px'}}/></Button>
                </div>

                </div>

                <div className="info">
                    <h4>Werther's Original Caramel Hard candies</h4>
                    <span className='text-success d-block'>In Stock</span>
                    <Rating className="mt-2 mb-2" name="read-only" value={4} size="small" readOnly />
                    <div className="d-flex">
                        <span className='oldPrice'>₹25.0</span>
                        <span className='netPrice ml-2 text-danger'>₹22.0</span>
                    </div>
                </div>
            </div>
            
            {isOpenProductModel==true && <ProductModel closeProductModel={closeProductModel}/>}
        </>
    )
}

export default ProductItem