import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container className="border-top">
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; myshop ( did you see hippo :))
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
