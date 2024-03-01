import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/Carousel.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Carousel() {
    return (
        <>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="swiper-format"
        >
                <SwiperSlide>
                    <div className='carousel-format'>
                        <img src="./farm-gate.jpg" className="responsive-img" alt="tractor-arando" />
                        <div>
                            <h5 className="slide-text">Comprometidos con lo que hacen el campo</h5>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='carousel-format'>
                        <img src="./open-field.jpg" className="responsive-img" alt="campo-cosechado" />
                        <div>
                            <h5 className="slide-text">Asesoramiento y servicio de confianza</h5>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='carousel-format'>
                        <img src="./open-field-2.jpg" className="responsive-img" alt="tranquera-de-campo" />
                        <div>
                            <h5 className="slide-text">Brindando soluciones al productor</h5>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Carousel;