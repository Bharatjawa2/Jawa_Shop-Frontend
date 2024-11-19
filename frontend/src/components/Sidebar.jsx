import React, { useState } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { Link } from '@mui/material';

const Sidebar = () => {
    const [value,setValue]=useState([100,10000])
    const [value2,setValue2]=useState(0);
     
    return (
        <>
            <div className="sidebar">
                <div className="sticky">
                <div className="filterbox">
                    <h6 className='ml-3'>PRODUCT CATEGORIES</h6>
                    <div className="scroll">
                        <ul>
                            <li><FormControlLabel className='w-100'  control={<Checkbox/>} label="Grocery" /></li>
                            <li><FormControlLabel className='w-100'  control={<Checkbox/>} label="Coffee Tea & Beverages" /></li>
                            <li><FormControlLabel className='w-100'  control={<Checkbox/>} label="Beauty" /></li>
                            <li><FormControlLabel className='w-100'  control={<Checkbox/>}  label="Chocolates Sweets & Snacks" /></li>
                            <li><FormControlLabel className='w-100'  control={<Checkbox/>}  label="Health & Personal Care" /></li>
                            <li><FormControlLabel className='w-100'  control={<Checkbox/>} label="Household Care" /></li>
                            <li><FormControlLabel className='w-100'  control={<Checkbox/>} label="Ready to Cook & Eat" /></li>
                        </ul>
                    </div>
                </div>

                <div className="filterbox">
                    <h6 className='ml-3 mt-5'>FILTER BY PRICE</h6>
                    <RangeSlider  value={value} onInput={setValue} min={100} max={10000} step={5}/>
                    <div className="d-flex pt-2 pb-2 priceRange">
                        <span>From: <strong className='text-dark'>
                            Rs: {value[0]}    
                        </strong></span>
                        <span className='ml-auto'>From: <strong className='text-dark'>
                            Rs: {value[1]}    
                        </strong></span>
                    </div>
                </div>

                <div className="filterbox">
                    <h6 className='ml-3 mt-5'>PRODUCT STATUS </h6>
                    <div className="scroll">
                        <ul>
                            <li><FormControlLabel className='w-100'  control={<Checkbox/>} label="In Stock" /></li>
                            <li><FormControlLabel className='w-100'  control={<Checkbox/>} label="On  Sale" /></li>
                        </ul>
                    </div>
                </div>

                <div className="filterbox">
                    <h6 className='ml-3 mt-5'>BRANDS</h6>
                    <div className="scroll">
                        <ul>
                            <li><FormControlLabel className='w-100'  control={<Checkbox/>} label="TATA" /></li>
                            <li><FormControlLabel className='w-100'  control={<Checkbox/>} label="PARAS" /></li>
                            <li><FormControlLabel className='w-100'  control={<Checkbox/>} label="CREMICA" /></li>
                            <li><FormControlLabel className='w-100'  control={<Checkbox/>} label="GOOD NIGHT" /></li>
                            <li><FormControlLabel className='w-100'  control={<Checkbox/>} label="HALIDRAM" /></li>
                        </ul>
                    </div>
                </div>

                <br/>

                <Link to="#">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6RbiYReBI8A0UyZ3_Jn3AhzK6KXTuqR-hfQ&s" className='w-100'/>
                </Link>
            </div>
            </div>
        </>
    )
}

export default Sidebar