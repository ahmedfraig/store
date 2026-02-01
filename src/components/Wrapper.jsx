import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { serviceData } from "../utils/products";
import "../App.css";

const Wrapper = () => {
  return (
    <section className="wrapper background">
      <Container className="px-sm-2 px-5">
        <Row>
          {serviceData.map((val, index) => {
            return (
              <Col md={3} sm={6} xs={12} className="mb-3" key={index}>
                <div className="service-card" style={{ backgroundColor: val.bg }}>
                  <div className="icon">
                    {val.icon}
                  </div>
                  <h3>{val.title}</h3>
                  <p>{val.subtitle}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Wrapper;