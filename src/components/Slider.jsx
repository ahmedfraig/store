import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { SliderData } from "../utils/products"; // Your data file
import "../App.css"; 

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow next" onClick={onClick}>
      <FaChevronRight />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev" onClick={onClick}>
      <FaChevronLeft />
    </div>
  );
};

const SliderHome = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="homeSlider">
      <Container>
        <Slider {...settings} className="carouselSlider">
          {SliderData.map((value) => {
            return (
              <div key={value.id}>
                <Row className="d-flex align-items-center" style={{ minHeight: "400px" }}>
                  
                  <Col md={6}>
                    <div className="detail-box">
                      <h2 className="fw-bold display-5 mb-4">{value.title}</h2>
                      <p className="mb-4">{value.desc}</p>
                      <button className="btn btn-primary btn-lg custom-btn">
                        Visit our Collections
                      </button>
                    </div>
                  </Col>

                  <Col md={6} className="text-center">
                    <img
                      className="img-fluid"
                      src={value.cover}
                      alt={value.title}
                      style={{ maxHeight: "350px", objectFit: "contain", margin: "0 auto" }}
                    />
                  </Col>
                </Row>
              </div>
            );
          })}
        </Slider>
      </Container>
    </section>
  );
};

export default SliderHome;