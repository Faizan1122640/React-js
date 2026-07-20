import React from 'react';

const Team = () => {
  const members = [
    {
      name: 'Patric Green',
      role: 'Lead Designer',
      image: 'https://preview.uideck.com/items/slick/business/img/team/01.jpg',
      socials: [
        { icon: 'lni lni-facebook', url: '#' },
        { icon: 'lni lni-twitter', url: '#' },
        { icon: 'lni lni-google', url: '#' }
      ]
    },
    {
      name: 'Celina D Cruze',
      role: 'Front-end Developer',
      image: 'https://preview.uideck.com/items/slick/business/img/team/02.jpg',
      socials: [
        { icon: 'lni lni-facebook', url: '#' },
        { icon: 'lni lni-twitter', url: '#' },
        { icon: 'lni lni-google', url: '#' }
      ]
    },
    {
      name: 'Daryl Dixon',
      role: 'Content Writer',
      image: 'https://preview.uideck.com/items/slick/business/img/team/03.jpg',
      socials: [
        { icon: 'lni lni-facebook', url: '#' },
        { icon: 'lni lni-twitter', url: '#' },
        { icon: 'lni lni-google', url: '#' }
      ]
    },
    {
      name: 'Mark Parker',
      role: 'Support Engineer',
      image: 'https://preview.uideck.com/items/slick/business/img/team/04.jpg',
      socials: [
        { icon: 'lni lni-facebook', url: '#' },
        { icon: 'lni lni-twitter', url: '#' },
        { icon: 'lni lni-google', url: '#' }
      ]
    }
  ];

  return (
    <section id="team" className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="team-text section-header text-center">
              <div>
                <h2 className="section-title">Team Members</h2>
                <div className="desc-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</p>
                  <p>eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {members.map((member, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-xs-12">
              <div className="single-team">
                <div className="team-thumb">
                  <img src={member.image} className="img-fluid" alt={member.name} />
                </div>
                <div className="team-details">
                  <div className="team-social-icons">
                    <ul className="social-list">
                      {member.socials.map((social, sIndex) => (
                        <li key={sIndex}>
                          <a href={social.url}><i className={social.icon}></i></a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="team-inner text-center">
                    <h5 className="team-title">{member.name}</h5>
                    <p>{member.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
