// import React from 'react';
// import { Col, Container, Row } from 'react-bootstrap';
// import EducationCard from './EducationCard';
// import './Education.css';

// const Education = () => {
//   return (
//     <section className="education-content" id="education">
//         <Container>
//         <h2 className="text-center heading mb-5" style={{"fontFamily": "cursive",}}> &nbsp; Education Details.</h2>
// 		<div className="timeline">
	
// 			<div className="container-e left-container">
// 				<div className="timeline-bullet"></div>
// 				<EducationCard/>
//         <span className="left-container-arrow"></span>
// 			</div>
	
// 			<div className="container-e right-container">
// 				<div className="timeline-bullet"></div>
//         <EducationCard/>
//         <span className="right-container-arrow"></span>
// 			</div>
	
// 			<div className="container-e left-container">
// 				<div className="timeline-bullet "></div>
// 				<EducationCard/>
//         <span className="left-container-arrow"></span>
// 			</div>
	
// 		</div>
//         </Container>
//     </section>
//   )
// }

// export default Education

import React from 'react';
import { Container } from 'react-bootstrap';
import EducationCard from './EducationCard';
import './Education.css';

const Education = () => {
  // Sample education data
  const educationData = [
    {
      degree: "Secondary",
      college: "St. Teresa's School",
      year: "2008-2020",
      grade: "Grade: O"
    },
    {
      degree: "Higher Secondary",
      college: "Nava Nalanda High School",
      year: "2020-2022",
      grade: "Grade: O"
    },
    {
      degree: "BTECH",
      college: "UEM Kolkata",
      year: "2023-2027",
      grade: "Grade (1st yr): A+"
    }
  ];

  return (
    <section className="education-content" id="education">
      <Container>
        <h2 className="text-center heading mb-5" style={{ fontFamily: "cursive" }}>
          &nbsp; Education Details.
        </h2>
        <div className="timeline">

          <div className="container-e left-container">
            <div className="timeline-bullet"></div>
            <EducationCard educationDetail={educationData[0]} />
            <span className="left-container-arrow"></span>
          </div>

          <div className="container-e right-container">
            <div className="timeline-bullet"></div>
            <EducationCard educationDetail={educationData[1]} />
            <span className="right-container-arrow"></span>
          </div>

          <div className="container-e left-container">
            <div className="timeline-bullet"></div>
            <EducationCard educationDetail={educationData[2]} />
            <span className="left-container-arrow"></span>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default Education;
