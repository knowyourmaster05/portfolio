import React from 'react';
import './About.css';
import { Row, Col } from "react-bootstrap";
import { aboutdata } from '../../data/data';
import { Zoom } from "react-awesome-reveal";
// import Image from '..src/assets/images/dibbyo.jpeg';
// import dibbyoImage from './assets/images/dibbyo.jpeg';


const About = () => {
  return (
    <div className="about" id="about">
        <h2 className="heading">Who I am?</h2>
        <Zoom>
        <Row>
          <Col md={8}>
          <p className="info">{aboutdata.intro}</p>
          <p className='info'>{aboutdata.description}</p>
         <div>
           <h6><b>Tech Stack</b></h6>
           <img src="https://img.icons8.com/color/48/000000/css3.png" alt="html"/>
            <img src="https://img.icons8.com/ultraviolet/48/000000/react--v1.png" />
            <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" />
         </div>
          </Col>
          <Col>
          <img src="https://media.licdn.com/dms/image/v2/D5603AQFBymFedjl0QA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1709971719954?e=1729123200&v=beta&t=SqwDwQnFL_LtR-_PaqaUsViHtKJMieXXLjfaRAvVsfA" height="300" width="300" alt="your image" className='profile-image'/>
          </Col>
        </Row>
        </Zoom>
    </div>
  )
}

export default About