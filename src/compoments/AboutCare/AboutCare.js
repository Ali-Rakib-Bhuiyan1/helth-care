import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './AboutCare.css'

const AboutCare = () => {
    return (
        <div>
            <h1 className ="text-danger"> 
Welcome to HEALTHCARE</h1>
<h3>Our medical specialists care about you & your family’s health</h3>

<CardGroup>
  <Card>
    <Card.Img className="img-card" variant="top" src="https://image.shutterstock.com/image-vector/caduceus-hermes-healthcare-flat-vector-600w-272462960.jpg" />
    <Card.Body>
      <Card.Title className ="text-danger">HealthCare Professionals</Card.Title>
      <Card.Text>
      Sed posuere nunc libero pellentesque vitae
ultrices posuere. Praesent justo laoreet dignissim
lectus etiam ipsum habitant tristique
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card>
    <Card.Img className="img-card" variant="top" src="https://image.shutterstock.com/image-vector/doctor-approval-check-mark-isolated-600w-607774457.jpg" />
    <Card.Body>
      <Card.Title className ="text-danger">Medical Excellence</Card.Title>
      <Card.Text>
      Sed posuere nunc libero pellentesque vitae
ultrices posuere. Praesent justo laoreet dignissim
lectus etiam ipsum habitant tristique
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img className="img-card" variant="top" src="https://www.greenlightmedical.com/wp-content/uploads/2020/01/breast_robotic_surgery-1080x675.jpg" />
    <Card.Body>
      <Card.Title className ="text-danger">Latest Technologies</Card.Title>
      <Card.Text>
      Sed posuere nunc libero pellentesque vitae
ultrices posuere. Praesent justo laoreet dignissim
lectus etiam ipsum habitant tristique

      </Card.Text>
    </Card.Body>

  </Card>
</CardGroup>



        </div>
    );
};

export default AboutCare;
