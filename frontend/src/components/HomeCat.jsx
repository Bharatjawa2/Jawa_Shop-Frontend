import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const HomeCat = () => {
    return (
        <>
            <section className='homeCat'>
                <div className="container">
                    <h3 className='mb-3 hd'>Featured Categories</h3>
                    <Swiper
                        slidesPerView={10}
                        spaceBetween={5}
                        navigation={true}
                        slidesPerGroup={3}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-14.png" />
                                <h6>Coffee & Tea</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-14.png" />
                                <h6>Coffee & Tea</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-14.png" />
                                <h6>Coffee & Tea</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-14.png" />
                                <h6>Coffee & Tea</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-14.png" />
                                <h6>Coffee & Tea</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-14.png" />
                                <h6>Coffee & Tea</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-14.png" />
                                <h6>Coffee & Tea</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-14.png" />
                                <h6>Coffee & Tea</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-14.png" />
                                <h6>Coffee & Tea</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-14.png" />
                                <h6>Coffee & Tea</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item text-center">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-14.png" />
                                <h6>Coffee & Tea</h6>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default HomeCat