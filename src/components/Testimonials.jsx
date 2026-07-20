import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = ({ onPlayVideoClick }) => {
  const testimonials = [
    {
      description: 'Appropriately implement one-to-one catalysts for change vis-a-vis wireless catalysts for change. Enthusiastically architect adaptive e-tailers after sustainable total linkage. Appropriately implement one-to-one catalysts for change.',
      author: 'Tahmina Anny',
      role: 'UIdeck Customer',
      avatar: 'https://preview.uideck.com/items/slick/business/img/testimonial/01.png'
    },
    {
      description: 'Appropriately implement one-to-one catalysts for change vis-a-vis wireless catalysts for change. Enthusiastically architect adaptive e-tailers after sustainable total linkage. Appropriately implement one-to-one catalysts for change.',
      author: 'Tahmina Anny',
      role: 'UIdeck Customer',
      avatar: 'https://preview.uideck.com/items/slick/business/img/testimonial/01.png'
    },
    {
      description: 'Appropriately implement one-to-one catalysts for change vis-a-vis wireless catalysts for change. Enthusiastically architect adaptive e-tailers after sustainable total linkage. Appropriately implement one-to-one catalysts for change.',
      author: 'Tahmina Anny',
      role: 'UIdeck Customer',
      avatar: 'https://preview.uideck.com/items/slick/business/img/testimonial/01.png'
    }
  ];

  return (
    <section id="testimonial" className="section">
      <div className="container right-position">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="video-promo-content text-center">
              <button 
                id="play-video" 
                className="video-play-button video-popup btn" 
                onClick={() => onPlayVideoClick('https://www.youtube.com/embed/Y4fodpIwal8')}
                style={{ cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
              >
                <span></span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="row justify-content-center testimonial-area">
          <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12 pr-20 pl-20" style={{ overflow: 'visible', paddingBottom: '60px' }}>
            <div id="client-testimonial" style={{ position: 'relative' }}>
              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation={{
                  nextEl: '.swiper-button-next-custom',
                  prevEl: '.swiper-button-prev-custom',
                }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                className="text-center"
              >
                {testimonials.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial-item">
                      <div className="content-inner">
                        <p className="description">{item.description}</p>
                        <div className="author-info">
                          <h5>{item.author} ; <span> {item.role}</span></h5>
                        </div>
                      </div>
                      <div className="client-thumb">
                        <img src={item.avatar} alt={item.author} />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              
              {/* Custom navigation button container wrappers matching Swiper pagination triggers */}
              <div className="swiper-button-prev-custom owl-prev">
                <i className="lni lni-chevron-left"></i>
              </div>
              <div className="swiper-button-next-custom owl-next">
                <i className="lni lni-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
