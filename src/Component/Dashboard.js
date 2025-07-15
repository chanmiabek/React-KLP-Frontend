import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Sidebar from './Component/Sidebar';
import Layout from './Component/Layout';
import CourseCard from './Component/CourseCard';

const Dashboard = () => {
  const courseCard = [
    {
      title: "React Basics",
      progress: 80,
      instructor: "Jane Doe",
    },
    {
      title: "Node.js & Express",
      progress: 50,
      instructor: "John Smith",
    },
  ];

  return (
    <>
      <Layout />
      <Container fluid>
        <Row>
          <Col md={2}><Sidebar /></Col>

          <Col md={10}>
            <h2 className="mt-3">Dashboard</h2>

            {/* Course Cards */}
            <Row className="mt-4">
              {courseCard.map((courseCard, idx) => (
                <Col md={6} key={idx}>
                  <CourseCard course={courseCard} />
                </Col>
              ))}
            </Row>

            {/* Announcements */}
            <Row className="mt-5">
              <h4>📢 Announcements</h4>
              <Card>
                <Card.Body>
                  <Card.Title>System Update</Card.Title>
                  <Card.Text>
                    The KLP platform will be down for maintenance on Sunday.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
