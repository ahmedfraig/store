import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaShoppingBag } from "react-icons/fa";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row>
          
          <Col md={3} sm={6} className="mb-4">
            <div className="footer-brand d-flex align-items-center gap-2 mb-3">
              <div className="icon-bg">
                 <FaShoppingBag className="text-white" size={20} />
              </div>
              <h2 className="text-white fw-bold m-0">STORE</h2>
            </div>
            <p className="footer-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </p>
          </Col>

          <Col md={3} sm={6} className="mb-4">
            <h4 className="footer-title mb-4">About Us</h4>
            <ul className="list-unstyled footer-links">
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>

          <Col md={3} sm={6} className="mb-4">
            <h4 className="footer-title mb-4">Customer Care</h4>
            <ul className="list-unstyled footer-links">
              <li>Help Center</li>
              <li>How to Buy</li>
              <li>Track Your Order</li>
              <li>Corporate & Bulk Purchasing</li>
              <li>Returns & Refunds</li>
            </ul>
          </Col>

          <Col md={3} sm={6} className="mb-4">
            <h4 className="footer-title mb-4">Contact Us</h4>
            <ul className="list-unstyled footer-contact">
              <li className="mb-3">
                70 Washington Square South, New York, NY 10012, United States
              </li>
              <li className="mb-3">
                Email: uilib.help@gmail.com
              </li>
              <li className="mb-3">
                Phone: +1 1123 456 780
              </li>
            </ul>
          </Col>

        </Row>
      </Container>
    </footer>
  );
};

export default Footer;