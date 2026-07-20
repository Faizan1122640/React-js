import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import BusinessPlan from './components/BusinessPlan';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';
import VideoModal from './components/VideoModal';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [lightbox, setLightbox] = useState({ isOpen: false, src: '' });
  const [videoModal, setVideoModal] = useState({ isOpen: false, url: '' });

  useEffect(() => {
    // Simulate preloader fadeout
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleOpenLightbox = (src) => {
    setLightbox({ isOpen: true, src });
  };

  const handleCloseLightbox = () => {
    setLightbox({ isOpen: false, src: '' });
  };

  const handleOpenVideo = (url) => {
    setVideoModal({ isOpen: true, url });
  };

  const handleCloseVideo = () => {
    setVideoModal({ isOpen: false, url: '' });
  };

  return (
    <>
      {/* Preloader */}
      {isLoading && (
        <div id="preloader">
          <div className="loader" id="loader-1"></div>
        </div>
      )}

      {/* Main Layout */}
      {!isLoading && (
        <div className="app-container">
          <Navbar />
          <Hero />
          <Services />
          <BusinessPlan />
          <Features />
          <Showcase onZoomClick={handleOpenLightbox} />
          <Pricing />
          <Testimonials onPlayVideoClick={handleOpenVideo} />
          <Team />
          <Blog />
          <Contact />
          <Footer />

          {/* Go To Top Link */}
          {showBackToTop && (
            <a 
              href="#" 
              className="back-to-top" 
              onClick={scrollToTop} 
              style={{ display: 'block' }}
            >
              <i className="lni lni-chevron-up"></i>
            </a>
          )}

          {/* Lightbox Modal */}
          <LightboxModal 
            isOpen={lightbox.isOpen} 
            imageSrc={lightbox.src} 
            onClose={handleCloseLightbox} 
          />

          {/* Video Promo Modal */}
          <VideoModal 
            isOpen={videoModal.isOpen} 
            videoUrl={videoModal.url} 
            onClose={handleCloseVideo} 
          />
        </div>
      )}
    </>
  );
}

export default App;
