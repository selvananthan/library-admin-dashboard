import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Container className="mt-5">
      <h1>Library Management System</h1>
      <Row className="mt-4">
        <Col>
          <Link to="/books">
            <Button variant="primary" size="lg" block>Manage Books</Button>
          </Link>
        </Col>
        <Col>
          <Link to="/authors">
            <Button variant="secondary" size="lg" block>Manage Authors</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
