import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import { Pagination, Autoplay } from "swiper";

import dk from "../assets/logo/partners/dreamkollab.png";
import gorillar from "../assets/logo/partners/gorillar.jpg";
import tree from "../assets/logo/partners/tree2me.png";
import over from "../assets/logo/partners/over.png";
import mvmf from "../assets/logo/partners/mvmf.png";
import nifact from "../assets/logo/partners/nickelfactory.png";
import fridao from "../assets/logo/partners/fridao.jpg";
import smechain from "../assets/logo/partners/thesmechain.png";

import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';

export default function Partners() {

    return(
        <Fragment>
            <Swiper
                spaceBetween={50}
                slidesPerView={'auto'}
                breakpoints={{
                    640: {
                        spaceBetween: 100,
                    },
                }}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                centeredSlides={true}
                loop={true}
                modules={[Pagination, Autoplay]}
            >
                <SwiperSlide>
                    <img src={dk} className="partner-logo no-select" draggable="false"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={gorillar} className="partner-logo no-select" draggable="false"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={tree} className="partner-logo no-select" draggable="false"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={over} className="partner-logo no-select" draggable="false"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={smechain} className="partner-logo no-select" draggable="false"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={mvmf} className="partner-logo no-select" draggable="false"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={nifact} className="partner-logo no-select" draggable="false"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={fridao} className="partner-logo no-select" draggable="false"/>
                </SwiperSlide>
            </Swiper>
        </Fragment>
    );

};