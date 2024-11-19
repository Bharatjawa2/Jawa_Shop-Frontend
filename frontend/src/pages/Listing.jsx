import {React,useState} from 'react'
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

const Listing = () => {
    const [productView,setProductView]=useState('four');
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
                                    <Button className={productView==='one' && 'act'} onClick={()=>setProductView('one')}><IoIosMenu /></Button>
                                    <Button className={productView==='three' && 'act'}  onClick={()=>setProductView('three')}><TbGridDots /></Button>
                                    <Button className={productView==='four' && 'act'}  onClick={()=>setProductView('four' )}><TfiLayoutGrid4Alt /></Button>
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
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                            </div>

                            <div className="d-flex align-items-center justify-content-center mt-5">
                            <Pagination count={10} variant="outlined" color="primary" size='large'/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Listing