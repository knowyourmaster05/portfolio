import React from 'react';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import image from '../../assets/image/output-onlinegiftools.gif';
import { Typewriter } from 'react-simple-typewriter';
import './Header.css';
import { homedata } from '../../data/data';
import CircleButton from '../CircleButton/CircleButton'; // Ensure this import is correct

const Header = () => {
  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section className="home" id="home" style={{ backgroundColor: "transparent", color: "#fff" }}>
      <Container>
        <Row>
          <Col md={6} sm={4} className="home-content">
            <h5 className="mb-2">{homedata.intro}</h5>
            <h1 className="mb-3 name">{homedata.name}</h1>
            <h3 className="mb-4">I Am <span className='text-primary'>
              <Typewriter 
                words={homedata.tech}
                loop={5}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span></h3>
            <div className='icons-button-container'>
              <CircleButton icon={faFacebookF} onClick={() => handleClick('https://www.facebook.com/profile.php?id=100094263142383&mibextid=ZbWKwL')} />
              <CircleButton icon={faTwitter} onClick={() => handleClick('https://x.com/knowyourmaster_?t=kycTxpS1vGbgwZZW5Hd3yw&s=09')} />
              <CircleButton icon={faInstagram} onClick={() => handleClick('https://www.instagram.com/knowyourmaster?igsh=MXkyNm93Y3VjYnkyaA==')} />
              <CircleButton icon={faLinkedinIn} onClick={() => handleClick('https://www.linkedin.com/in/dibyojyoti-datta-13225b246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')} />
            </div>
            <button className="outline-button" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Get in Touch</button>
            <button className="outline-button m-2" onClick={() => window.open('frontend\public\DibyojyotiDatta_InternshalaResume.pdf', '_blank')}> Resume</button>

          </Col>
          <Col className="home-pic" md={6} sm={4}>
            <img src={image} alt="Program" style={{ width: '100%', height: 'auto' }} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Header;
