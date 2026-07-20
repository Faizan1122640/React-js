import React from 'react';

const Services = () => {
  const serviceList = [
    {
      icon: 'lni lni-cog',
      title: 'Bootstrap 4',
      description: 'Share processes and data secure lona need to know basis Our team assured your web site is always safe.'
    },
    {
      icon: 'lni lni-brush',
      title: 'Slick Design',
      description: 'Share processes and data secure lona need to know basis Our team assured your web site is always safe.'
    },
    {
      icon: 'lni lni-heart',
      title: 'Crafted with Love',
      description: 'Share processes and data secure lona need to know basis Our team assured your web site is always safe.'
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="row">
          {serviceList.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-xs-12">
              <div className="services-item text-center">
                <div className="icon">
                  <i className={service.icon}></i>
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
