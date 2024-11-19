import React from 'react';
import HomeBanner from '../components/HomeBanner';
import { Button } from '@mui/material';
import { IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Rating from '@mui/material/Rating';
import { TfiFullscreen } from "react-icons/tfi";
import madangle from '../images/madangle.webp';
import daal from '../images/daal.webp';
import ProductItem from '../components/ProductItem';
import HomeCat from '../components/HomeCat';
import banner3 from '../images/banner3.png'
import banner4 from '../images/baner4.png'
import newLetterImg from '../images/newletterimg.png'
import { IoMailOutline } from "react-icons/io5";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeCat/>
      <section className='homeProducts'>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sticky">
              <div className="banner">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdNf7keSy94mpxovUWrTJBlV9P5wGFa0UaURQ5KjfZ1oaX2ngU_mvmchetuHXE_6FX2Go&usqp=CAU"
                  className='cursor w-100'
                  alt="Promotional Banner"
                />
              </div>

              <div className='banner mt-4'>
                <img src={daal} style={{ width: '320px', height: '500px' }} alt="Daal" />
              </div>
              </div>

            </div>
            <div className="col-md-9 productRow">
              <div className="d-flex align-items-center">
                <div className="info">
                  <h3 className='mb-0 hd'>BEST SELLER</h3>
                  <p className='text-ligh text-sml mb-0'>Do not miss the current offers until the end of November</p>
                </div>
                <Button className='viewAllBtn ml-auto'>View All <IoIosArrowRoundForward /></Button>
              </div>

              <div className="product_row w-100 mt-4" >
                <Swiper
                  slidesPerView={4}
                  spaceBetween={5}

                  pagination={{ clickable: true }}
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>


                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>


                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>


                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                </Swiper>
              </div>

              <div className="d-flex align-items-center mt-5">
                <div className="info">
                  <h3 className='mb-0 hd'>NEW PRODUCTS</h3>
                  <p className='text-ligh text-sml mb-0'>New Products with updated Stocks</p>
                </div>
                <Button className='viewAllBtn ml-auto'>View All <IoIosArrowRoundForward /></Button>
              </div>

              <div className="product_row productRow2 w-100 mt-4 d-flex" >
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
              </div>
              <div className="d-flex mt-4 mb-5 bannerSec">
              <div className='banner '>
                <img src={banner3} className='cursor w-100' />
              </div>
              <div className='banner '>
              <img src={banner4} className='cursor w-100' />
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white mb-1">Discount Upto <span> ₹200 </span> on your first Order</p>
              <h3 className="text-white">Join our newsletter and get....</h3>
              <p className='text-light'>Join our email Subsciption <br/>now to get updates on promotions and coupons.</p>

              <form>
                <IoMailOutline/> 
                <input type='text' placeholder='Your Email Address..' />
                <Button>Subscribe</Button>
              </form>

            </div>
            <div className="col-md-6">
                <img src={newLetterImg} style={{ width: '720px', height: '400px' }} />
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;
