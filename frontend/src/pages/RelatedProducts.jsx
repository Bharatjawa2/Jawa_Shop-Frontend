import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductItem from '../components/ProductItem';

const RelatedProducts = ({ title }) => {
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
  ];

  return (
    <>
      <div className="d-flex align-items-center">
        <div className="info">
          <h3 className="mb-0 mt-5 hd">{title}</h3>
        </div>
      </div>

      <div className="product_row w-100 mt-4">
        <Swiper
          slidesPerView={6}
          spaceBetween={10}
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
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default RelatedProducts;
