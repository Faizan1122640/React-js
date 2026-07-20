import React from 'react';

const Blog = () => {
  const posts = [
    {
      image: 'https://preview.uideck.com/items/slick/business/img/blog/01.jpg',
      title: 'How Slick Will Transform Your Business',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
      readTime: '5 Min read',
      author: 'Posted by Admin',
      date: '10 April, 2020'
    },
    {
      image: 'https://preview.uideck.com/items/slick/business/img/blog/02.jpg',
      title: 'Growth Techniques for New Startups',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
      readTime: '5 Min read',
      author: 'Posted by Admin',
      date: '10 April, 2020'
    },
    {
      image: 'https://preview.uideck.com/items/slick/business/img/blog/03.jpg',
      title: 'Writing Professional Emails to Customers',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
      readTime: '5 Min read',
      author: 'Posted by Admin',
      date: '10 April, 2020'
    }
  ];

  return (
    <section id="blog" className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="blog-text section-header text-center">
              <div>
                <h2 className="section-title">Latest Blog Posts</h2>
                <div className="desc-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</p>
                  <p>eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row">
          {posts.map((post, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-xs-12 blog-item">
              <div className="blog-item-wrapper">
                <div className="blog-item-img">
                  <a href="#blog-single">
                    <img src={post.image} className="img-fluid" alt={post.title} />
                  </a>
                </div>
                <div className="blog-item-text">
                  <h3>
                    <a href="#blog-single">{post.title}</a>
                  </h3>
                  <p>{post.description}</p>
                  <a href="#blog-single" className="read-more">{post.readTime}</a>
                </div>
                <div className="author">
                  <span className="name">
                    <i className="lni lni-user"></i>
                    <a href="#author">{post.author}</a>
                  </span>
                  <span className="date float-right">
                    <i className="lni lni-calendar"></i>
                    <a href="#date">{post.date}</a>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
