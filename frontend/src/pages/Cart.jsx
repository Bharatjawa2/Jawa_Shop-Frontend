import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <>
            <section className="section cartPage">
                <div className="container">
                    <div className="row">
                        {/* Cart Items */}
                        <div className="col-md-8">
                            <h2 className="hd mb-0">Your Cart</h2>
                            <p>There are <b>3</b> Products in your Cart</p>

                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th width="50%">Product</th>
                                            <th>Unit Price</th>
                                            <th>Quantity</th>
                                            <th>Subtotal</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <Link to="/product/1">
                                                    <div className="d-flex align-items-center cartItemimgWrapper">
                                                        <div className="imgWrapper">
                                                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-600x600.jpg" alt="Product" />
                                                        </div>
                                                        <div className="info px-3">
                                                            <h6>All Natural Italian-Style Chicken Meatballs</h6>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td>₹25.00</td>
                                            <td>2</td>
                                            <td>₹50.00</td>
                                            <td>
                                                <button className="remove-btn">Remove</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="subtotal">
                                Subtotal: <b className='ml-3'>₹100.00</b>
                            </div>
                            <button className="checkout-btn">Proceed to Checkout</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cart;
