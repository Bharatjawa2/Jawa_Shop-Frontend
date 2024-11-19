import React from 'react'
import { LuMilk } from "react-icons/lu";
import { MdDeliveryDining } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <>
        <footer>
            <div className="container">
                <div className="top-info row">
                    <div className="col d-flex align-items-center">
                        <span><LuMilk/></span>
                        <span className='ml-2'>Everyday Fresh Products</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><MdDeliveryDining/></span>
                        <span className='ml-2'>Free delivery over ₹1000</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><CiDiscount1/></span>
                        <span className='ml-2'>Daily Mega Discounts</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><RiMoneyRupeeCircleLine/></span>
                        <span className='ml-2'>Best Price on the Market</span>
                    </div>
                </div>


                <div className="row mt-5 linksWrap">
                    <div className="col">
                        <h5>Daily Used Products</h5>
                        <ul>
                            <li><Link to="#">Wheat</Link></li>
                            <li><Link to="">Coffee & Tea</Link></li>
                            <li><Link to="">Rice</Link></li>
                            <li><Link to="">Sugar</Link></li>
                            <li><Link to="">Jaggery</Link></li>
                            <li><Link to="">Peanut Butter</Link></li>
                            <li><Link to="">Biscuits</Link></li>
                            <li><Link to="">Rusk</Link></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h5>Lentil(Daals)</h5>
                        <ul>
                            <li><Link to="">Green Gram Beans(Moong Dal)</Link></li>
                            <li><Link to="">Pigeon Pea (Toor Dal)</Link></li>
                            <li><Link to="">Red Lentils (Masoor Dal)</Link></li>
                            <li><Link to="">Split Chickpeas (Chana Dal)</Link></li>
                            <li><Link to="">Black Gram (Urad Dal)</Link></li>
                            <li><Link to="">Kidney Beans (Rajma)</Link></li>
                            <li><Link to="">Black Lentils (Kalaadi)</Link></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h5>Stationary</h5>
                        <ul>
                            <li><Link to="">Notebook</Link></li>
                            <li><Link to="">Pen</Link></li>
                            <li><Link to="">Pencil</Link></li>
                            <li><Link to="">Eraser</Link></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h5>Beauty Products</h5>
                        <ul>
                            <li><Link to="">Shampoo</Link></li>
                            <li><Link to="#">Face-wash</Link></li>
                            <li><Link to="">Perfume</Link></li>
                            <li><Link to="">Moisturizers</Link></li>
                            <li><Link to="">Sunscreen</Link></li>
                            <li><Link to="">Oil</Link></li>
                            <li><Link to="">Rose Water</Link></li>
                        </ul>
                    </div>

                    

                    
                </div>

                <div className="copyright mt-3 pt-3 pb-3 d-flex ml-1">
                    <p className='mb-0'>Copyright 2024. All rights reserved.</p>
                    <ul className='list list-inline ml-auto'>
                        <li className='list-inline-item'>
                            <Link to="https://www.instagram.com/bharat_jawa_" target='_blank'><FaSquareInstagram/></Link>
                        </li>
                        <li className='list-inline-item'>
                            <Link to='https://www.linkedin.com/in/bharat-jawa-49537b24a/' target='_blank'><FaLinkedin/></Link>
                        </li>
                        <li className='list-inline-item'>
                            <Link to='https://github.com/Bharatjawa2' target='_blank'><FaGithub/></Link>
                        </li>
                        <li className='list-inline-item'>
                            <Link to='https://x.com/bharat_jaw91783' target='_blank'><FaTwitter/></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    
    </>
  )
}

export default Footer