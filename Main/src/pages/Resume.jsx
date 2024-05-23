import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';

// Brings in the resume page with a download button for the resume
export default function Contact() {

  return (
    <Container>
      <Row>
        <div>
          <h1>Resume</h1>

          <Card>

            <Card.Body>
              <Card.Title>Professional History</Card.Title>
              <Card.Text>
                You can check out my prior work and experience here:
              </Card.Text>
              <Button className="m-1 p-1" variant="secondary"><a className="text-white" href="/assets/resume.pdf" download>Download Resume</a></Button>
            </Card.Body>
          </Card>


        </div>
      </Row>
    </Container>

  );
}
