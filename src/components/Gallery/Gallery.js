import React from 'react'
import "./Gallery.css";
import galleryData from "../../data/gallery.json";
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { getImageUrl } from '../../data/utils';

function Gallery() {
    return (
        <section className="gallery container section" id="gallery">
            <h2 className="section__title">Snapshots of my journey</h2>
            <Swiper className="gallery__container grid"
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                grabCursor={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
            >
                {galleryData.map(({ galleryID, galleryImage, galleryTitle, gallerySubtitle }) => {
                    return (
                        <SwiperSlide className="gallery__item" key={galleryID}>
                            <div className="thumb">
                                <img src={getImageUrl(galleryImage)} alt="" className='gallery__img' />
                            </div>
                            <h3 className="gallery__title">{galleryTitle}</h3>
                            <p className="subtitle">{gallerySubtitle}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Gallery