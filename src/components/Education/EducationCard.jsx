import React from 'react'
import Card from 'react-bootstrap/Card';

const EducationDetails = [
  {
    "degree":"Secondary",
    "collage":"St. Teresa's School",
    "year":"2008-2020",
    "grade":"Grade : O"
  },
  {
    "degree":"Higher Secondary",
    "collage":"Nava Nalanda High School",
    "year":"2020-2022",
    "grade":"Grade : O"
  },
  {
    "degree":"BTECH",
    "collage":"UEM Kolkata",
    "year":"2023-2027",
    "grade":"Grade (1st yr) : A+"
  }
]

// const EducationCard = () => {
//   return (
//     <div>
//       {EducationDetails.map((item, index) => (
//         <Card key={index} className="shadow-lg p-3 rounded mb-5">
//           <Card.Body>
//             <Card.Title>{item.degree}</Card.Title>
//             <Card.Text className="college mb-0">
//               {item.college}
//             </Card.Text>
//             <Card.Text className="year mb-3">
//               {item.year}
//             </Card.Text>
//             <Card.Text className="grade mb-1">
//               {item.grade}
//             </Card.Text>
//           </Card.Body>
//         </Card>
//       ))}
//     </div>
//   );
// };

const EducationCard = ({ educationDetail }) => {
  return (
    <Card className="shadow-lg p-3 rounded mb-5">
      <Card.Body>
        <Card.Title>{educationDetail.degree}</Card.Title>
        <Card.Text className="college mb-0">
          {educationDetail.college}
        </Card.Text>
        <Card.Text className="year mb-3">
          {educationDetail.year}
        </Card.Text>
        <Card.Text className="grade mb-1">
          {educationDetail.grade}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default EducationCard;


