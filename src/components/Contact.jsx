import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    budget: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Mock API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({
        type: 'success',
        message: 'Message Submitted successfully! We will get back to you soon.'
      });
      setFormData({
        name: '',
        subject: '',
        email: '',
        budget: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="contact-text section-header text-center">
              <div>
                <h2 className="section-title">Get In Touch</h2>
                <div className="desc-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</p>
                  <p>eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input 
                      type="text" 
                      className="form-control" 
                      id="name" 
                      name="name" 
                      placeholder="Name" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input 
                      type="text" 
                      placeholder="Subject" 
                      id="msg_subject" 
                      className="form-control" 
                      name="subject"
                      required 
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      name="email" 
                      placeholder="Email" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input 
                      type="text" 
                      placeholder="Budget" 
                      id="budget" 
                      className="form-control" 
                      name="budget" 
                      required 
                      value={formData.budget}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea 
                      className="form-control" 
                      id="message" 
                      name="message" 
                      placeholder="Write Message" 
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  
                  {status.message && (
                    <div className={`alert ${status.type === 'success' ? 'alert-success' : 'alert-danger'} text-center`}>
                      {status.message}
                    </div>
                  )}

                  <div className="submit-button">
                    <button 
                      className="btn btn-common" 
                      id="submit" 
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Submit'}
                    </button>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          
          <div className="col-lg-1"></div>
          
          <div className="col-lg-4 col-md-12">
            <div className="contact-img">
              <img src="https://preview.uideck.com/items/slick/business/img/contact/01.png" className="img-fluid" alt="Contact Illustration" />
            </div>
          </div>
          
          <div className="col-lg-1"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
