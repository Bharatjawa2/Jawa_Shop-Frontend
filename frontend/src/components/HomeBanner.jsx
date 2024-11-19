import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

const HomeBanner = () => {
  return (
    <>
      <div className="container mt-3">
        <div className="homeBannerSection">
          <Swiper
            slidesPerView={1}
            spaceBetween={15}
            navigation={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            className='mySwiperr'
          >

            <SwiperSlide>
              <div className="item">
                <img
                  src="https://media.starquik.com/bannerslider/n/p/npobe_cadbury_cadbury_1400x400.jpg"
                  className="w-100"
                  alt="Banner 4"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <img
                  src="https://www.bigbasket.com/media/uploads/banner_images/ibbn-sb101713837-27148_hp_c&h_c_beverages_06112024_all.jpg?tr=w-1600,q-80"
                  className="w-100"
                  alt="Banner 1"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <img
                  src="https://media.starquik.com/bannerslider/f/l/fl_web_combocreativeownbrands_1400x400.jpg"
                  className="w-100"
                  alt="Banner 2"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <img
                  src="https://media.starquik.com/bannerslider/s/t/startquik_nivea_fl_24_post_1400x400.jpg"
                  className="w-100"
                  alt="Banner 3"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <img
                  src="https://d1z88p83zuviay.cloudfront.net/BannerImages/fad6a97b-3ab5-45da-b991-29d0702bdade.jpg"
                  className="w-100"
                  alt="Banner 4"
                />
              </div>
            </SwiperSlide>



          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
