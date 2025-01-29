import { React, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Button } from '@mui/material'
import { IoIosMenu } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { HiViewGrid } from "react-icons/hi";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { FaAngleDown } from "react-icons/fa";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ProductItem from '../components/ProductItem';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import ProductItem1 from '../components/ProductItem1';

const Listing = () => {
    const bestSellers = [
        {
            title: "All Natural Italian-Style Chicken Meatballs",
            img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg",
            discount: "20",
            oldPrice: "100",
            netPrice: "80",
            rating: "4.5",
        },
        {
            title: "Blue Diamond Almonds Lightly Salted",
            img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-59-346x310.jpg",
            discount: "20",
            oldPrice: "100",
            netPrice: "80",
            rating: "4.5",
        },
        {
            title: "Challenge Spreadable Butter",
            img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-51-346x310.jpg",
            discount: "10",
            oldPrice: "90",
            netPrice: "81",
            rating: "4",
        },
        {
            title: "Tomato Ketchup",
            img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-37-346x310.jpg",
            discount: "15",
            oldPrice: "50",
            netPrice: "42.5",
            rating: "3.8",
        },
        {
            title: "Unsalted Cashew Cranberry Almond Trail Mix",
            img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-8-346x310.jpg",
            discount: "15",
            oldPrice: "150",
            netPrice: "120",
            rating: "3.8",
        },
        {
            title: "Wheat Thins Original Crackers",
            img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-2-346x310.jpg",
            discount: "6",
            oldPrice: "55",
            netPrice: "50",
            rating: "3.8",
        },
        {
            title: "Organic Honey",
            img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-38-346x310.jpg",
            discount: "25",
            oldPrice: "200",
            netPrice: "150",
            rating: "4.8",
        },
        {
            title: "Nestle Coffee",
            img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-32-346x310.jpg",
            discount: "22",
            oldPrice: "50",
            netPrice: "39",
            rating: "4.2",
        },
        {
            title: "Coca-Cola 2L",
            img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-49-346x310.jpg",
            discount: "5",
            oldPrice: "60",
            netPrice: "57",
            rating: "4.2",
        },
        {
            title: "Naturally Flavored Salted Caramel Light Roast Coffee",
            img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-33-346x310.jpg",
            discount: "5",
            oldPrice: "60",
            netPrice: "57",
            rating: "4.2",
        },
        {
            title: "Naturally Flavored Cinnamon Vanilla Light Roast Coffee",
            img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-34-346x310.jpg",
            discount: "5",
            oldPrice: "60",
            netPrice: "57",
            rating: "4.2",
        },
        {
            title: "Chips",
            img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-27-346x310.jpg",
            discount: "5",
            oldPrice: "60",
            netPrice: "57",
            rating: "4.2",
        },
        {
            title: "Breads",
            img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-25-346x310.jpg",
            discount: "5",
            oldPrice: "60",
            netPrice: "57",
            rating: "4.2",
        },
        {
            title: "Cookie",
            img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-20-346x310.jpg",
            discount: "5",
            oldPrice: "60",
            netPrice: "57",
            rating: "4.2",
        },
    ];
    const [productView, setProductView] = useState('four');
    const [anchorEl, setAnchorEl] = useState(null)
    const openDropdown = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <section className='prouctListingPage'>
                <div className="container">
                    <div className="productListing d-flex">
                        <Sidebar />

                        <div className="contentRight">
                            <img src="https://www.bigbasket.com/media/uploads/banner_images/ibbn-sb101713837-27146_hp_c&h_c_detergent-&-cleaning_01112024_all.jpg?tr=w-1600,q-80" className='w-100' />

                            <div className="showBy mt-3 mb-3 d-flex align-items-center">
                                <div className="d-flex btnWrapper">
                                    <Button className={productView === 'one' && 'act'} onClick={() => setProductView('one')}><IoIosMenu /></Button>
                                    <Button className={productView === 'three' && 'act'} onClick={() => setProductView('three')}><TbGridDots /></Button>
                                    <Button className={productView === 'four' && 'act'} onClick={() => setProductView('four')}><TfiLayoutGrid4Alt /></Button>
                                </div>

                                <div className="ml-auto showByFilter">
                                    <Button onClick={handleClick}>Show 9 <FaAngleDown /></Button>
                                    <Menu
                                        className='w-100 showPerPageDropdown'
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={openDropdown}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>10</MenuItem>
                                        <MenuItem onClick={handleClose}>20</MenuItem>
                                        <MenuItem onClick={handleClose}>30</MenuItem>
                                    </Menu>
                                </div>
                            </div>

                            <div className="productListing">
                                {bestSellers.map((product, index) => (
                                    <ProductItem1
                                        key={index}

                                        title={product.title}
                                        img={product.img}
                                        discount={product.discount}
                                        oldPrice={product.oldPrice}
                                        netPrice={product.netPrice}
                                        rating={product.rating}
                                        itemView={productView}
                                    />
                                ))}
                            </div>


                            <div className="d-flex align-items-center justify-content-center mt-5">
                                <Pagination count={10} variant="outlined" color="primary" size='large' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Listing