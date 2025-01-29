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
import { Link } from 'react-router-dom';

const Home = () => {

  const bestSellers = [
    {
      title: "Natural Chicken Meatballs",
      img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg",
      discount: "20",
      oldPrice: "100",
      netPrice: "80",
      rating: "4.5",
      brand:"Welch's",
      desc:"Savory, all-natural Italian-style chicken meatballs, seasoned with herbs, garlic, and spices for wholesome flavor.",
      mfg:"25/6/24",
      exp:"12/4/25",
      stock:'2',
    },
    {
      title: "Blue Diamond Almonds",
      img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-59-346x310.jpg",
      discount: "20",
      oldPrice: "100",
      netPrice: "80",
      rating: "4.5",
      brand:"Blue Diamond",
      desc:"Blue Diamond Almonds: Premium roasted almonds, packed with flavor and nutrients, perfect for snacking or adding to recipes.",
      mfg:"3/8/24",
      exp:"19/7/25",
      stock:'2',
    },
    {
      title: "Challenge Spreadable Butter",
      img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-51-346x310.jpg",
      discount: "10",
      oldPrice: "90",
      netPrice: "81",
      rating: "4",
      brand:"Challenge Spreadable",
      desc:"Challenge Spreadable Butter: Smooth, creamy butter made with fresh, high-quality ingredients, ideal for spreading and cooking.",
      mfg:"9/11/24",
      exp:"29/3/25",
      stock:'0',
    },
    {
      title: "Tomato Ketchup",
      img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-37-346x310.jpg",
      discount: "15",
      oldPrice: "50",
      netPrice: "42.5",
      rating: "3.8",
      brand:"Heinz",
      desc:"Tomato Ketchup: Rich, tangy sauce made from ripe tomatoes, perfect for enhancing snacks, fries, and everyday meals.",
      mfg:"19/12/24",
      exp:"21/9/26",
      stock:'2',
    },
    {
      title: "Cashew Almond Trail Mix",
      img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-8-346x310.jpg",
      discount: "15",
      oldPrice: "150",
      netPrice: "120",
      rating: "3.8",
      brand:"Archer Farms",
      desc:"Cashew Almond Trail Mix: A delicious blend of crunchy cashews and almonds, perfect for healthy snacking on the go.",
      mfg:"11/8/24",
      exp:"12/4/26",
      stock:'2',
    },
    {
      title: "Wheat Thins",
      img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-2-346x310.jpg",
      discount: "6",
      oldPrice: "55",
      netPrice: "50",
      rating: "3.8",
      brand:"Habibico",
      desc:"Wheat Thins: Crunchy, baked whole-grain crackers with a hint of salt, perfect for snacking or pairing with dips.",
      mfg:"1/10/24",
      exp:"14/7/25",
      stock:'2',
    },
    
  ];

  const newProducts = [
    {
      title: "Organic Honey",
      img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-38-346x310.jpg",
      discount: "25",
      oldPrice: "200",
      netPrice: "150",
      rating: "4.8",
      brand:"Haagon-Dazs",
      desc:"",
      mfg:"1/10/24",
      exp:"14/7/25",
      stock:'2',
    },
    {
      title: "Nestle Coffee",
      img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-32-346x310.jpg",
      discount: "22",
      oldPrice: "50",
      netPrice: "39",
      rating: "4.2",
      brand:"Blue Diamond",
      desc:"",
      mfg:"1/10/24",
      exp:"14/7/25",
      stock:'2',
    },
    {
      title: "Coca-Cola 2L",
      img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-49-346x310.jpg",
      discount: "5",
      oldPrice: "60",
      netPrice: "57",
      rating: "4.2",
      brand:"Blue Diamond",
      desc:"",
      mfg:"1/10/24",
      exp:"14/7/25",
      stock:'2',
    },
    {
      title: "Naturally Flavored Salted Caramel Light Roast Coffee",
      img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-33-346x310.jpg",
      discount: "5",
      oldPrice: "60",
      netPrice: "57",
      rating: "4.2",
      brand:"Blue Diamond",
      desc:"",
      mfg:"1/10/24",
      exp:"14/7/25",
      stock:'2',
    },
    {
      title: "Naturally Flavored Cinnamon Vanilla Light Roast Coffee",
      img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-34-346x310.jpg",
      discount: "5",
      oldPrice: "60",
      netPrice: "57",
      rating: "4.2",
      brand:"Blue Diamond",
      desc:"",
      mfg:"1/10/24",
      exp:"14/7/25",
      stock:'2',
    },
    {
      title: "Chips",
      img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-27-346x310.jpg",
      discount: "5",
      oldPrice: "60",
      netPrice: "57",
      rating: "4.2",
      brand:"Blue Diamond",
      desc:"",
      mfg:"1/10/24",
      exp:"14/7/25",
      stock:'2',
    },
    {
      title: "Breads",
      img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-25-346x310.jpg",
      discount: "5",
      oldPrice: "60",
      netPrice: "57",
      rating: "4.2",
      brand:"Blue Diamond",
      desc:"",
      mfg:"1/10/24",
      exp:"14/7/25",
      stock:'2',
    },
    {
      title: "Cookie",
      img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-20-346x310.jpg",
      discount: "5",
      oldPrice: "60",
      netPrice: "57",
      rating: "4.2",
      brand:"Blue Diamond",
      desc:"",
      mfg:"1/10/24",
      exp:"14/7/25",
      stock:'2',
    },
  ];

  return (
    <>
      <HomeBanner />
      {/* <HomeCat /> */}
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
              <div className="d-flex align-items-center justify-content-between">
                <div className="info">
                  <h3 className='mb-0 hd'>BEST SELLER</h3>
                  <p className='text-ligh text-sml mb-0'>Do not miss the current offers until the end of November</p>
                </div>
                <Link to="/cat/1">
                <Button className='viewAllBtn ml-7'>View All <IoIosArrowRoundForward /></Button>
                </Link>
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
                  {bestSellers.map((product, index) => (
                    <SwiperSlide key={index}>
                      <ProductItem
                        title={product.title}
                        img={product.img}
                        discount={product.discount}
                        oldPrice={product.oldPrice}
                        netPrice={product.netPrice}
                        rating={product.rating}
                        brand={product.brand}
                        desc={product.desc}
                        mfg={product.mfg}
                        exp={product.exp}
                        stock={product.stock}
                      />
                    </SwiperSlide>
                  ))}
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
                {newProducts.map((product, index) => (
                  <ProductItem
                    key={index}
                    title={product.title}
                    img={product.img}
                    discount={product.discount}
                    oldPrice={product.oldPrice}
                    netPrice={product.netPrice}
                    rating={product.rating}
                  />
                ))}
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
              <p className='text-light'>Join our email Subsciption <br />now to get updates on promotions and coupons.</p>

              <form>
                <IoMailOutline />
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
