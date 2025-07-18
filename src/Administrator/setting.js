import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../Component/Sidebar';

const setting = () => {
    return (
        <>
        <Container fluid>
            <Row>
            <Col md={2}><Sidebar /></Col>
            <Col md={10}>
                <h2 className="mt-3">Settings</h2>
                {/* Add your settings content here */}
            </Col>
            </Row>
        </Container>
        </>
    ); 
}

export default setting;
