import React, { useState, useEffect } from 'react';
import ProductZoom from '../components/ProductZoom';
import Rating from '@mui/material/Rating';
import QuantityDropDown from '../components/QuantityDropDown';
import { Button } from '@mui/material';
import { FaShoppingCart } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import RelatedProducts from './RelatedProducts';

const Product = () => {
    const [activeSize, setActiveSize] = useState(null);
    const [activeTabs, setActiveTabs] = useState(0);

    const isActive = (index) => {
        setActiveSize(index);
    };

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);


    return (
        <>
            <section className='productDetails section'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 pl-5">
                            <ProductZoom />
                        </div>

                        <div className="col-md-7 pl-5 pr-5">
                            <h2 className='hd text-capitalize'>All Natural Italian-Style Chicken Meatballs</h2>
                            <ul className='list list-inline d-flex align-items-center'>
                                <li className='list-inline-item'>
                                    <div className="d-flex align-items-center">
                                        <span className='text-light mr-2'>Brands:</span>
                                        <span className='ml-2'>Welch's</span>
                                    </div>
                                </li>

                                <li className='list-inline-item'>
                                    <div className="d-flex align-items-center">
                                        <Rating name="read-only" className='ml-3' value={4.5} size='small' precision={0.5} readOnly />
                                        <span className='text-light cursor ml-4'>1 Review</span>
                                    </div>
                                </li>
                            </ul>

                            <div className="d-flex info mb-3">
                                <span className='oldPrice'>₹25.0</span>
                                <span className='netPrice text-danger ml-2'>₹22.0</span>
                            </div>
                            <div className="badge bg-success mt-2">IN STOCK</div>
                            <p className='mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi excepturi sequi aliquam eius pariatur corporis modi explicabo eligendi illo quae perferendis labore quibusdam est iste, et fuga, hic, asperiores nemo.</p>

                            <div className="productSize d-flex align-items-center">
                                <span>Size / Weight:</span>
                                <ul className='list list-inline-item mb-0 pl-4'>
                                    <li className='list-inline-item'><a className={`tag${activeSize === 0 ? ' active' : ''}`} onClick={() => isActive(0)}>500g</a></li>
                                    <li className='list-inline-item'><a className={`tag${activeSize === 1 ? ' active' : ''}`} onClick={() => isActive(1)}>1kg</a></li>
                                    <li className='list-inline-item'><a className={`tag${activeSize === 2 ? ' active' : ''}`} onClick={() => isActive(2)}>2kg</a></li>
                                </ul>
                            </div>
                            <div className='d-flex mt-4 align-items-center'>
                                <QuantityDropDown />
                                <Button className="btn-blue btn-big btn-round"><FaShoppingCart />&nbsp;Add to Cart</Button>
                                <Tooltip title="Add to WishList" placement="top">
                                    <Button className="btn-blue btn-big btn-circle"><FaRegHeart /></Button>
                                </Tooltip>
                                <Tooltip title="Add to Compare" placement="top">
                                    <Button className="btn-blue btn-big btn-circle"><MdCompareArrows /></Button>
                                </Tooltip>
                            </div>
                        </div>
                    </div>

                    <br />

                    <div className="card mt-5 p-5 detailsPageTabs">
                        <div className="customTabs">
                            <ul className="list list-inline">
                                <li className="list-inline-item">
                                    <Button className={`${activeTabs === 0 && 'active'}`} onClick={() => { setActiveTabs(0); }} color='#000'>Description</Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button className={`${activeTabs === 1 && 'active'}`} onClick={() => { setActiveTabs(1); }} color='#000'>Additional info</Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button className={`${activeTabs === 2 && 'active'}`} onClick={() => { setActiveTabs(2); }} color='#000'>Reviews (3)</Button>
                                </li>
                            </ul>

                            <br />

                            {activeTabs === 0 && (
                                <div className='tabContent'>
                                    <h3 className="product-title">All Natural Italian-Style Chicken Meatballs</h3>
                                    <p><strong>Delicious, all-natural chicken meatballs</strong> made with premium ingredients and authentic Italian flavors. These tender, juicy meatballs are perfect for any meal, whether served with pasta, in a sub, or on their own with a side of marinara sauce. Made with no artificial flavors, preservatives, or fillers, you can taste the quality in every bite.</p>
                                    <h4>Key Features:</h4>
                                    <ul>
                                        <li>100% natural ingredients</li>
                                        <li>No artificial preservatives or colors</li>
                                        <li>High in protein, low in fat</li>
                                        <li>Perfect for family meals or meal prepping</li>
                                        <li>Gluten-free, dairy-free, and non-GMO</li>
                                    </ul>
                                    <p><strong>Serving Suggestion:</strong> Best served with a side of pasta or enjoyed as a snack with dipping sauce. Pair with a refreshing beverage for a satisfying meal!</p>
                                </div>
                            )}

                            {activeTabs === 1 && (
                                <div className='tabContent'>
                                    <h4>Product Details:</h4>
                                    <div className="table-responsive">
                                        <table className='table table-bordered '>
                                            <tbody>
                                                <tr>
                                                    <td><strong>Brand:</strong></td>
                                                    <td>Welch's</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Weight/Size:</strong></td>
                                                    <td>500g / 1kg / 2kg</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Ingredients:</strong></td>
                                                    <td>Chicken, garlic, Italian seasoning, breadcrumbs, olive oil</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Storage:</strong></td>
                                                    <td>Keep frozen until ready to cook. Once thawed, consume within 3 days.</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Allergen Information:</strong></td>
                                                    <td>Contains gluten and may contain traces of dairy. Please check packaging for further details.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}

                            {activeTabs === 2 && (
                                <div className='tabContent'>
                                    <h4>Customer Reviews</h4>
                                    <p><strong>Average Rating:</strong> <Rating name="read-only" value={4.5} size='small' readOnly /> (4.5/5)</p>
                                    <div className="reviews">
                                        <div className="review">
                                            <h5>John D. <span className="review-date">– 3 days ago</span></h5>
                                            <Rating name="read-only" value={5} size='small' readOnly />
                                            <p>"These meatballs are absolutely delicious! They have the perfect balance of flavor and texture. A hit with the whole family!"</p>
                                        </div>
                                        <div className="review">
                                            <h5>Sarah L. <span className="review-date">– 1 week ago</span></h5>
                                            <Rating name="read-only" value={4} size='small' readOnly />
                                            <p>"Great taste, but I wish they were a bit bigger. Still a great product and I'll buy them again!"</p>
                                        </div>
                                        <div className="review">
                                            <h5>Emily R. <span className="review-date">– 2 weeks ago</span></h5>
                                            <Rating name="read-only" value={4.5} size='small' readOnly />
                                            <p>"Love these meatballs! Perfectly seasoned and easy to cook. Highly recommend!"</p>
                                        </div>
                                    </div>
                                    <Button variant="contained" color="primary" className="add-review-btn">Add Your Review</Button>
                                </div>
                            )}
                        </div>
                    </div>

                    <RelatedProducts title="RELATED PRODUCTS"/>
                    <RelatedProducts title="RECENTLY VIEWED PRODUCTS"/>
                </div>
            </section>
        </>
    );
};

export default Product;
