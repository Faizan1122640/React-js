import React from 'react';

const Footer = () => {
  return (
    <footer>
      <section id="footer-Content">
        <div className="container">
          <div className="row">
            
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
              <div className="footer-logo">
                <img src="https://preview.uideck.com/items/slick/business/img/footer-logo.png" alt="Slick Logo Footer" />
              </div>
            </div>
            
            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6 col-mb-12">
              <div className="widget">
                <h3 className="block-title">Company</h3>
                <ul className="menu">
                  <li><a href="#about"> - About Us</a></li>
                  <li><a href="#careers">- Career</a></li>
                  <li><a href="#blog">- Blog</a></li>
                  <li><a href="#press">- Press</a></li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6 col-mb-12">
              <div className="widget">
                <h3 className="block-title">Product</h3>
                <ul className="menu">
                  <li><a href="#customer-service"> - Customer Service</a></li>
                  <li><a href="#enterprise">- Enterprise</a></li>
                  <li><a href="#pricing">- Price</a></li>
                  <li><a href="#security">- Security</a></li>
                  <li><a href="#why-slick">- Why SLICK?</a></li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6 col-mb-12">
              <div className="widget">
                <h3 className="block-title">Download App</h3>
                <ul className="menu">
                  <li><a href="#android"> - Android App</a></li>
                  <li><a href="#ios">- IOS App</a></li>
                  <li><a href="#windows">- Windows App</a></li>
                  <li><a href="#playstore">- Play Store</a></li>
                  <li><a href="#ios-store">- IOS Store</a></li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
              <div className="widget">
                <h3 className="block-title">Subscribe Now</h3>
                <p>Appropriately implement catalysts for change via wireless catalysts for change.</p>
                <div className="subscribe-area">
                  <input type="email" className="form-control" placeholder="Enter Email" />
                  <span>
                    <button className="btn p-0 text-white" style={{ background: 'none', border: 'none' }}>
                      <i className="lni lni-chevron-right"></i>
                    </button>
                  </span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="site-info text-center">
                  <p>
                    Crafted by <a href="http://uideck.com" rel="nofollow">UIdeck</a>. Converted to React.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
