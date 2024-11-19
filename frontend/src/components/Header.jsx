import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import CountryDropdown from './HeaderComponents/CountryDropdown';
import Button from '@mui/material/Button';
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from './HeaderComponents/SearchBox';
import Navigation from './HeaderComponents/Navigation';
import { MyContext } from '../App';
import Home from '../pages/Home';

const Header = () => {

  const context=useContext(MyContext);
  return (
    <>
      <div className='headerWrapper'>
        <div className='top-strip bg-blue'>
          <div className='container'>
            <p className='mb-0 mt-0 text-center'>
              ✨ Happy <b>Diwali!</b> Our Exciting <b>Sale</b> is Live Now! 🎉 Don't Miss Out on Incredible Discounts! 🪔
            </p>
          </div>
        </div>

        <header className='header'>
          <div className='container'>
            <div className='row'>
              <div className='logoWrapper d-flex align-items-center col-sm-2'>
                <Link to={'/'}><img src={logo} alt='logo' /></Link>
              </div>

              <div className='col-sm-10 d-flex align-items-center part2'>
                {context.countryList.length!==0 && <CountryDropdown /> }
                <SearchBox />
                <div className="d-flex align-items ml-auto part3">
                  <Button className='circle mr-3'><FiUser/></Button>
                  <div className="ml-auto cartTab d-flex align-items-center">
                    <span className='price'>₹0</span>
                    <div className="position-relative ml-2">
                      <Button className='circle ml-3'><IoBagOutline/></Button>
                      <span className='count d-flex align-items-center justify-content-center'>1</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <Navigation />
      </div>
    </>
  );
}

export default Header;
