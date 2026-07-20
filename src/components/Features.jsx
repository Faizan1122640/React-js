import React from 'react';

const Features = () => {
  const featureList = [
    {
      icon: 'lni lni-coffee-cup',
      title: 'Easy to Customize',
      borderClass: 'featured-border1',
      description: 'Producing long lasting organic SEO results for brand of different kinds for more than a decade, we understand that’s your.'
    },
    {
      icon: 'lni lni-briefcase',
      title: 'Business Template',
      borderClass: 'featured-border2',
      description: 'Producing long lasting organic SEO results for brand of different kinds for more than a decade, we understand that’s your.'
    },
    {
      icon: 'lni lni-invention',
      title: 'Clean & Trendy Design',
      borderClass: 'featured-border1',
      description: 'Producing long lasting organic SEO results for brand of different kinds for more than a decade, we understand that’s your.'
    },
    {
      icon: 'lni lni-layers',
      title: 'Tons of Sections',
      borderClass: 'featured-border2',
      description: 'Producing long lasting organic SEO results for brand of different kinds for more than a decade, we understand that’s your.'
    },
    {
      icon: 'lni lni-reload',
      title: 'Free Future Updates',
      borderClass: 'featured-border3',
      description: 'Producing long lasting organic SEO results for brand of different kinds for more than a decade, we understand that’s your.'
    },
    {
      icon: 'lni lni-support',
      title: 'Premier Support',
      borderClass: '',
      description: 'Producing long lasting organic SEO results for brand of different kinds for more than a decade, we understand that’s your.'
    }
  ];

  return (
    <section id="features" className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="features-text section-header text-center">
              <div>
                <h2 className="section-title">Services We Provide</h2>
                <div className="desc-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br />
                    eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row featured-bg">
          {featureList.map((feature, index) => (
            <div key={index} className="col-lg-6 col-md-6 col-xs-12 p-0">
              <div className={`feature-item ${feature.borderClass}`}>
                <div className="feature-icon float-left">
                  <i className={feature.icon}></i>
                </div>
                <div className="feature-info float-left">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
