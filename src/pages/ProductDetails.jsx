import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { products } from "../utils/products";
import { FaStar } from "react-icons/fa";
import { Row, Col, Container } from "react-bootstrap";
import ProductCard from "../components/Product";
import "../App.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();
  const [tab, setTab] = useState("desc");
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  useEffect(() => {
    const foundProduct = products.find((item) => item.id === id);
    setProduct(foundProduct);
    
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [id]);

  const productItems = products.filter(
    (item) => item.category === product?.category,
  );

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, qty: qty }));

    setQty(1);

    toast.success("Product has been added to cart!");
  };

  if (!product)
    return <h2 className="notFoundH2 text-center">Product Not Found</h2>;
  return (
    <>
      <section className="shopPageProducts">
        <div className="shop-heading d-flex justify-content-center">
          <h2 className="fw-bold">{product.productName}</h2>
        </div>

        <Container className="productDetails">
          <Row>
            <Col md={6} className="text-center">
              <img
                className="productDetails-image"
                src={product.imgUrl}
                alt={product.productName}
              />
            </Col>
            <Col md={6}>
              <div className="product-info">
                <h2 className="productDetails-title">{product.productName}</h2>
                <div className="rate">
                  {Array.from({ length: 5 }, (_, index) => {
                    let percent = (product.avgRating - index) * 100;
                    percent = Math.min(100, Math.max(0, percent));
                    return (
                      <div
                        key={index}
                        style={{
                          position: "relative",
                          display: "inline-block",
                          marginRight: "2px",
                        }}
                      >
                        <FaStar
                          style={{ color: "#dcdcdc", fontSize: "20px" }}
                        />

                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: `${percent}%`,
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                          }}
                        >
                          <FaStar
                            style={{ color: "#ffcd4e", fontSize: "20px" }}
                          />
                        </div>
                      </div>
                    );
                  })}
                  <span className="rating-text text-muted ms-5">
                    {product.avgRating} ratings
                  </span>
                </div>

                <div className="price-category d-flex align-items-center gap-4 mt-3">
                  <h3 className="price-tag">
                    {" "}
                    $
                    {(
                      product.price -
                      (product.price * product.discount) / 100
                    ).toFixed(2)}
                  </h3>
                  <span className="category-text">
                    category :{" "}
                    <span className="text-dark">{product.category}</span>
                  </span>
                </div>

                <p className="description-text mt-3 text-muted">
                  {product.shortDesc ||
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequuntur iure quas illo voluptates labore tempore!"}
                </p>

                <div className="qty-section mt-4">
                  <p className="mb-1 text-muted">Qty</p>
                  <input
                    type="number"
                    className="qty-input form-control"
                    placeholder="Qty"
                    min={1}
                    max={100}
                    value={qty}
                    onChange={(e) => {
                      const value = parseInt(e.target.value);
                      setQty(value > 0 ? value : 1);
                    }}
                  />
                </div>

                <button className="add-btn mt-4" onClick={handleAddToCart}>
                  Add To Cart
                </button>
              </div>
            </Col>
          </Row>

          <div className="tab-section mt-5 mb-5">
            <div className="d-flex align-items-center gap-3 mb-4">
              <h6
                className={`tab-header ${tab === "desc" ? "active-tab" : ""}`}
                onClick={() => setTab("desc")}
              >
                Description
              </h6>
              <h6
                className={`tab-header ${tab === "rev" ? "active-tab" : ""}`}
                onClick={() => setTab("rev")}
              >
                Reviews ({product.reviews ? product.reviews.length : 0})
              </h6>
            </div>

            <div className="tab-content">
              {tab === "desc" ? (
                <p className="description-text">
                  {product.description ||
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam!"}
                </p>
              ) : (
                <div className="review-content">
                  <div className="review-item mb-3">
                    {product.reviews && product.reviews.length > 0 ? (
                      product.reviews.map((review, index) => (
                        <div key={index} className="mb-3">
                          <h5 className="mb-0">{review.name}</h5>
                          <span className="text-warning mb-2 d-block">
                            {review.rating} (rating)
                          </span>
                          <p>{review.text}</p>
                        </div>
                      ))
                    ) : (
                      <p className="text-muted">No reviews yet.</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="related-products mb-5 px-sm-0 px-5">
            <Row className="mt-4 mb-4 row-section g-4 justify-content-center">
              <div className="heading d-flex justify-content-center">
                <h2 className="fw-bold">You might also like</h2>
              </div>
              <ProductCard productItems={productItems} />
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProductDetails;
