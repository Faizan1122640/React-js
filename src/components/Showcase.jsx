import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const Showcase = ({ onZoomClick }) => {
  const works = [
    { id: 1, image: 'https://preview.uideck.com/items/slick/business/img/showcase/01.jpg', category: 'Icon , Web', title: 'Redesign Slack' },
    { id: 2, image: 'https://preview.uideck.com/items/slick/business/img/showcase/02.jpg', category: 'Icon , Web', title: 'Redesign Slack' },
    { id: 3, image: 'https://preview.uideck.com/items/slick/business/img/showcase/03.jpg', category: 'Icon , Web', title: 'Redesign Slack' },
    { id: 4, image: 'https://preview.uideck.com/items/slick/business/img/showcase/04.jpg', category: 'Icon , Web', title: 'Redesign Slack' },
    { id: 5, image: 'https://preview.uideck.com/items/slick/business/img/showcase/05.jpg', category: 'Icon , Web', title: 'Redesign Slack' },
  ];


  return (
    <section id="showcase">
      <div className="container-fluid right-position">
        <div className="row gradient-bg">
          <div className="col-lg-12">
            <div className="showcase-text section-header text-center">
              <div>
                <h2 className="section-title">Recent Works</h2>
                <div className="desc-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</p>
                  <p>eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row justify-content-center showcase-area">
          <div className="col-lg-12 col-md-12 col-xs-12 pr-0">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={15}
              slidesPerView={1}
              pagination={{ el: '.showcase-pagination-custom', clickable: true }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              breakpoints={{
                479: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                979: { slidesPerView: 3 },
                1199: { slidesPerView: 4 },
                1200: { slidesPerView: 5 }
              }}
              className="showcase-slider"
            >
              {works.map((work, index) => (
                <SwiperSlide key={index}>
                  <div className="screenshot-thumb">
                    <img src={work.image} className="img-fluid" alt={work.title} />
                    <div className="hover-content text-center">
                      <div className="fancy-table">
                        <div className="table-cell">
                          <div className="single-text">
                            <p>{work.category}</p>
                            <h5>{work.title}</h5>
                          </div>
                          <div className="zoom-icon">
                            <a 
                              className="lightbox"
                              href="#zoom"
                              onClick={(e) => {
                                e.preventDefault();
                                onZoomClick(work.image);
                              }}
                            >
                              <i className="lni lni-zoom-in"></i>
                            </a>
                            <a href="#link"><i className="lni lni-link"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="showcase-pagination-custom"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
