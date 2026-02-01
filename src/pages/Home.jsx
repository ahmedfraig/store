import "../App.css";
import React from "react";
import SliderHome from "../components/Slider";
import Wrapper from "../components/Wrapper";
import ProductCard from "../components/Product";
import { products } from "../utils/products";
import { Container, Row } from "react-bootstrap";

const Home = () => {
  const productItems = products.filter((item) => item.discount > 0);
  return (
    <>
      <SliderHome />
      <Wrapper />
      <section className="discount-productSection">
        <Container className="products-container">
          <div className="heading d-flex justify-content-center mb-5">
            <h2 className="fw-bold">Big Discount</h2>
          </div>
          <Row className="mt-4 mb-4 row-section g-4">
            <ProductCard productItems={productItems} />
          </Row>
        </Container>
      </section>
      <section className="newArrivalsProducts">
        <Container className="products-container">
          <div className="heading d-flex justify-content-center mb-5">
            <h2 className="fw-bold">New Arrivals</h2>
          </div>
          <Row className="mt-4 mb-4 row-section g-4">
            <ProductCard productItems={products} />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;