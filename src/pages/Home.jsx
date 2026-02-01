import "../App.css";
import React from "react";
import SliderHome from "../components/Slider";
import Wrapper from "../components/Wrapper";
import ProductCard from "../components/Product";
import { products } from "../utils/products";
import { Container, Row } from "react-bootstrap";

const Home = () => {
  const productItems_discounted = products.filter((item) => item.discount > 0);
  const productItems_newArrivals = products.filter((item) => item.newArrival);
  const productItems_bestSellers = products.filter((item) => item.bestSeller);
  return (
    <>
      <SliderHome />
      <Wrapper />

      <section className="productsSection discount-productSection">
        <Container className="products-container">
          <div className="heading d-flex justify-content-center">
            <h2 className="fw-bold">Big Discount</h2>
          </div>
          <Row className="mt-4 mb-4 row-section g-4 justify-content-center">
            <ProductCard productItems={productItems_discounted} />
          </Row>
        </Container>
      </section>

      <section className="productsSection newArrivalsProducts">
        <Container className="products-container">
          <div className="heading d-flex justify-content-center">
            <h2 className="fw-bold">New Arrivals</h2>
          </div>
          <Row className="mt-4 mb-4 row-section g-4 justify-content-center">
            <ProductCard productItems={productItems_newArrivals} />
          </Row>
        </Container>
      </section>

      <section className="productsSection bestSellersProducts">
        <Container className="products-container">
          <div className="heading d-flex justify-content-center">
            <h2 className="fw-bold">Best Sales</h2>
          </div>
          <Row className="mt-4 mb-4 row-section g-4 justify-content-center">
            <ProductCard productItems={productItems_bestSellers} />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;