import React, { useRef } from 'react'
import Dialog from '@mui/material/Dialog';
import { Button} from '@mui/material';
import { MdClose } from "react-icons/md";
import Rating from '@mui/material/Rating';
import Slider from 'react-slick';
import InnerImageZoom from'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';

import QuantityDropDown from './QuantityDropDown';

const ProductModel = (props) => {

    const zoomSliderBig=useRef();
    const zoomSlider=useRef();

    var settings={
        dots:false,
        infinite:false,
        speed:700,
        slidesToShow:1,
        slidesToScroll:1,
        fade:false,
        arrows:false,
    }

    var settings2={
        dots:false,
        infinite:false,
        speed:500,
        slidesToShow:5,
        slidesToScroll:1,
        fade:false,
        arrows:true,
    }

    const goto=(index)=>{
        zoomSlider.current.slickGoto(index);
        zoomSliderBig.current.slickGoto(index);
    }
    return (
        <>
            <Dialog open={true} className='ProductModel' onClose={()=>props.closeProductModel()}>
                <Button className='cross' onClick={()=>props.closeProductModel()}><MdClose /></Button>
                <h4 className='mb-1 font-weight-bold'> All Natural Italian-style Chicekn Meatballs</h4>
                <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center mr-4">
                        <span>Brands :</span>
                        <span className='ml-2'><b>Welch's</b></span>
                    </div>
                    <Rating name="read-only" value={5} size="small" precision={0.5 } readOnly />

                </div>
                <hr/>

                <div className="row mt-2 productDetailsModel">
                    <div className="col-md-5">
                        <div className="productZoom">
                        <Slider {...settings} className='zoomSliderBig' ref={zoomSliderBig}>
                            <div className="item">
                                <InnerImageZoom
                                    zoomType='hover' zoomScale={1}
                                    src={'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg'}
                                />
                            </div>

                            <div className="item">
                                <InnerImageZoom
                                    zoomType='hover' zoomScale={1}
                                    src={'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg'}
                                />
                            </div>

                            <div className="item">
                                <InnerImageZoom
                                    zoomType='hover' zoomScale={1}
                                    src={'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg'}
                                />
                            </div>
                        </Slider>
                        </div>
                        
                        <Slider {...settings2} className='zoomSlider' ref={zoomSlider}>
                            <div className="item">
                                <img src={'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg'}
                                    className='w-100' onClick={()=>goto(0)}
                                />
                            </div>

                            <div className="item">
                                <img src={'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg'}
                                    className='w-100' onClick={()=>goto(1)}
                                />
                            </div>

                            <div className="item">
                                <img src={'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg'}
                                    className='w-100' onClick={()=>goto(2)}
                                />
                            </div>
                        </Slider>
                    </div>
                    <div className="col-md-7">
                        <div className="d-flex info align-items-center mb-2">
                            <span className='oldPrice lg mr-2'>₹25.0</span>
                            <span className='netPrice ml-1  lg font-bold text-danger'>₹22.0</span>
                        </div>

                        <div className="badge bg-success"> 
                            IN STOCK
                        </div>

                        <p className='mt-3'>Savory, all-natural Italian-style chicken meatballs, seasoned with herbs, garlic, and spices for wholesome flavor.</p>

                        <div className="d-flex align-items-center">
                            <QuantityDropDown/>
                            <Button className='btn-blue btn-big btn-round'>Add to cart</Button>
                        </div>

                        <div className="align-items-center mt-5">
                            <p className='pl'>Mfd Date: 25 June 2024</p>
                            <p className='pl'>Exp Date: 25 June 2026</p>
                        </div>
                        <hr/>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default ProductModel