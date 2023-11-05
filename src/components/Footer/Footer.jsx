import React from "react";
import { Container, Row, Col } from "react-bootstrap";  
const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright">
         
          </Col>
          <Col md="4" className="footer-copywright">
            <span>@2023 All Rights Reserved</span> 
          </Col>
          <Col md="4" className="footer-body">
           
          </Col>
        </Row>
      </Container>
    );  
}

export default Footer