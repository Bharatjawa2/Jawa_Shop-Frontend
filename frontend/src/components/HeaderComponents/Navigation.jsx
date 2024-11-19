import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { FaAngleDown } from 'react-icons/fa';
import { IoHomeOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";

const Navigation = () => {

  const[isOpen,setIsOpen]=useState(false);


  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 navPart1">
            <div className="catWrapper">
            <Button className='allcatTab align-items-center' onClick={()=>setIsOpen(!isOpen)}>
              <span className='text'>ALL CATEGORIES</span>
              <span className='ml-2'><FaAngleDown/></span>
            </Button>

            <div className={`sidebarNav ${isOpen===true ? 'open' : '' }`}>
              <ul>
                <li><Link to="/"><Button>Grocery & Gourmet<FaAngleRight className='ml-auto'/>  </Button></Link>
                  <div className="submenu">
                    <Link to="/"><Button>Salt</Button></Link>
                    <Link to="/"><Button>Pastes</Button></Link>
                    <Link to="/"><Button>Nuts</Button></Link>
                  </div>
                </li>
                <li><Link to="/"><Button>Organic<FaAngleRight className='ml-auto'/> </Button></Link>
                <div className="submenu">
                    <Link to="/"><Button>Organic Pastes</Button></Link>
                    <Link to="/"><Button>Organic Masala</Button></Link>
                    <Link to="/"><Button>Organic tattva</Button></Link>
                    <Link to="/"><Button>Organic Red rice</Button></Link>
                  </div>
                </li>
                <li><Link to="/"><Button>Coffee<FaAngleRight className='ml-auto'/></Button></Link>
                <div className="submenu">
                    <Link to="/"><Button>Nestle</Button></Link>
                    <Link to="/"><Button>Bru</Button></Link>
                  </div></li>
                <li><Link to="/"><Button>Tea</Button></Link></li>
                <li><Link to="/"><Button>Beverages<FaAngleRight className='ml-auto'/></Button></Link>
                <div className="submenu">
                    <Link to="/"><Button>Frooti</Button></Link>
                    <Link to="/"><Button>Coca Cola</Button></Link>
                    <Link to="/"><Button>Pepsi</Button></Link>
                  </div></li>
                  <li><Link to="/"><Button>Chocolates</Button></Link></li>
              </ul>
            </div>
            </div>
          </div>

          <div className="col-sm-10 navPart2 d-flex align-items-center">
            <ul className="list list-inline ml-auto">
              <li className='list-inline-item'><Link to="/"><Button>Home</Button></Link></li>
              <li className='list-inline-item'><Link to="/"><Button>Grocery</Button></Link>
                <div className="submenu shadow">
                  <Link to="/"><Button>Wheat</Button></Link>
                  <Link to="/"><Button>Rice</Button></Link>
                  <Link to="/"><Button>Sugar</Button></Link>
                  <Link to="/"><Button>Salt</Button></Link>
                </div>
              </li>
              <li className='list-inline-item'><Link to="/"><Button>Home Appliances</Button></Link>
              <div className="submenu shadow">
                  <Link to="/"><Button>Tubelight</Button></Link>
                  <Link to="/"><Button>Bulb</Button></Link>
                  <Link to="/"><Button>Mosquitos Products</Button></Link>
                  <Link to="/"><Button>Power Cells</Button></Link>
                </div></li>
              <li className='list-inline-item'><Link to="/"><Button>Mixed Nuts</Button></Link>
              <div className="submenu shadow">
                  <Link to="/"><Button>Peanuts</Button></Link>
                  <Link to="/"><Button>Almonds</Button></Link>
                  <Link to="/"><Button>Cashew</Button></Link>
                  <Link to="/"><Button>Walnuts</Button></Link>
                  <Link to="/"><Button>Hazlenuts</Button></Link>
                  <Link to="/"><Button>PineNuts</Button></Link>
                </div></li>
              <li className='list-inline-item'><Link to="/"><Button>Beauty</Button></Link>
              <div className="submenu shadow">
                  <Link to="/"><Button>Face-wash</Button></Link>
                  <Link to="/"><Button>Rose Water</Button></Link>
                  <Link to="/"><Button>Moistureser</Button></Link>
                  <Link to="/"><Button>Vaseline</Button></Link>
                </div></li>
              <li className='list-inline-item'><Link to="/"><Button>Diary Products</Button></Link></li>
              <li className='list-inline-item'><Link to="/"><Button>Contact Us</Button></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
