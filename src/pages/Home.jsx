import "../App.css";
import SliderHome from "../components/Slider";
import Wrapper from "../components/Wrapper";
import ProductCard from "../components/Product";
import { Container, Row } from "react-bootstrap";
import { products } from "../utils/products";

const Home = () => {
  const productItems_discounted = products.filter((item) => item.discount > 0);
  const productItems_newArrivals = products.filter((item) => item.newArrival);
  const productItems_bestSellers = products.filter((item) => item.bestSeller);
  const productSection = [
    {
      title: "Big Discount",
      productItems: productItems_discounted,
      backgroundColor: "discount-productSection",
    },
    {
      title: "New Arrivals",
      productItems: productItems_newArrivals,
      backgroundColor: "newArrivalsProducts",
    },
    {
      title: "Best Sales",
      productItems: productItems_bestSellers,
      backgroundColor: "bestSellersProducts",
    },
  ];
  return (
    <>
      <SliderHome />
      <Wrapper />
      {productSection.map((section, index) => (
        <section className={`productsSection ${section.backgroundColor}`}>
          <Container className="products-container">
            <Row className="mt-4 mb-4 row-section g-4 justify-content-center">
              <div className="heading d-flex justify-content-center">
                <h2 className="fw-bold">{section.title}</h2>
              </div>
              <ProductCard
                key={index}
                productItems={section.productItems}
              />
            </Row>
          </Container>
        </section>
      ))}
    </>
  );
};

export default Home;
