import { Container, Row, Col, Form } from "react-bootstrap";
import UICard from "../component/UI/UICard";
import Button from "../component/UI/Button";

export default function ReportAbuse() {
  return (
    <Container className="py-5">

      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="text-white hero-title mt-5">Report Abuse</h1>
        <p className="text-white-50">
          Help us keep the platform safe by reporting suspicious activity.
        </p>
      </div>

      {/* Form */}
      <Row className="justify-content-center">
        <Col lg={8}>
          <UICard className="p-4">

            <div className="about-card-photo mb-3">
              <img
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136"
                alt="Report abuse"
              />
            </div>

            <Form>
              <Form.Group className="mb-3">
                <Form.Label className="text-white">Issue Type</Form.Label>
                <Form.Select className="ui-input">
                  <option>Fake Donor Profile</option>
                  <option>Harassment</option>
                  <option>False Request</option>
                  <option>Other</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="text-white">Details</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  className="ui-input"
                  placeholder="Describe the issue..."
                />
              </Form.Group>

              <Button className="btn-donate w-100 mt-3">
                Submit Report
              </Button>
            </Form>

          </UICard>
        </Col>
      </Row>

    </Container>
  );
}