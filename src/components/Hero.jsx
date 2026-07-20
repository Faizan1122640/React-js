import React from 'react';

const Hero = () => {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header id="home" className="hero-area">
      <div className="overlay">
        <span></span>
        <span></span>
      </div>
      <div className="container">
        <div className="row space-100">
          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="contents">
              <h2 className="head-title">
                Handcrafted Web Template <br />For Business and Startups
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab <br />
                dolores ea fugiat nesciunt quisquam.
              </p>
              <div className="header-button">
                <a href="#contact" className="btn btn-border-filled" onClick={handleScrollToContact}>Get Started</a>
                <a href="#contact" className="btn btn-border page-scroll" onClick={handleScrollToContact}>Contact Us</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-xs-12 p-0">
            <div className="intro-img">
              <img src="https://preview.uideck.com/items/slick/business/img/intro.png" alt="Intro Graphic" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
