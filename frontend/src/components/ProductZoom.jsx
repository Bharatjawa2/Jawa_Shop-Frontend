import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const ProductZoom = () => {
    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

    const goto = (index) => {
        if (zoomSlider.current) {
            zoomSlider.current.swiper.slideTo(index); // Swiper's slideTo method
        }
        if (zoomSliderBig.current) {
            zoomSliderBig.current.swiper.slideTo(index); // Same here for zoomSliderBig
        }
    }
    return (
        <>
            <div className="productZoom position-relative">
                <div className="badge badge-primary">12%</div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    navigation={false}
                    slidesPerGroup={1}
                    modules={[Navigation]}
                    className='zoomSliderBig'
                    ref={zoomSliderBig}
                >
                    <SwiperSlide>
                        <img src={'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg'}/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img 
                            src={'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg'}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img
                            src={'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg'}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>

            <Swiper
                slidesPerView={5}
                spaceBetween={10}
                navigation={false}
                modules={[Navigation]}
                className='zoomSlider'
                ref={zoomSlider}
            >
                <SwiperSlide>
                    <img
                        src={'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg'}
                        className='w-100'
                        onClick={() => goto(0)}
                        alt="Product Thumbnail"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        src={'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg'}
                        className='w-100'
                        onClick={() => goto(1)}
                        alt="Product Thumbnail"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        src={'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg'}
                        className='w-100'
                        onClick={() => goto(2)}
                        alt="Product Thumbnail"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default ProductZoom