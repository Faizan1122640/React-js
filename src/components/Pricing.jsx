import React from 'react';

const Pricing = () => {
  const plans = [
    {
      title: 'Free',
      price: '00',
      features: [
        'Free Installation',
        '500MB Storage',
        'Single User',
        '5 GB Bandwidth',
        'Minimal Features',
        'No Dashboard'
      ],
      btnClass: 'btn btn-border'
    },
    {
      title: 'STANDARD',
      price: '19.99',
      features: [
        'Free Installation',
        '2 GB Storage',
        'Upto 2 users',
        '50 GB Bandwidth',
        'All Features',
        'Sales Dashboard'
      ],
      btnClass: 'btn btn-common'
    },
    {
      title: 'BUSINESS',
      price: '29.99',
      features: [
        'Free Installation',
        '5 GB Storage',
        'Upto 4 users',
        '100 GB Bandwidth',
        'All Features',
        'Sales Dashboard'
      ],
      btnClass: 'btn btn-border'
    }
  ];

  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="pricing-text section-header text-center">
              <div>
                <h2 className="section-title">Pricing Plans</h2>
                <div className="desc-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</p>
                  <p>eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row pricing-tables">
          {plans.map((plan, index) => (
            <div key={index} className="col-lg-4 col-md-4 col-xs-12">
              <div className="pricing-table text-center">
                <div className="pricing-details">
                  <h3>{plan.title}</h3>
                  <h1><span>$</span>{plan.price}</h1>
                  <ul>
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="plan-button">
                  <a href="#purchase" className={plan.btnClass}>Purchase</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
