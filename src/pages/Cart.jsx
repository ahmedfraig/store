import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, decreaseQty, deleteProduct } from "../redux/cartSlice";
import { FaTimes, FaPlus, FaMinus } from "react-icons/fa";
import "../App.css";

const Cart = () => {
  const { cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cartList.reduce(
    (price, item) => price + item.qty * item.price,
    0,
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="cart-items-section">
      <Container className="cart-container">
        <Row className="justify-content-center">
          <Col xs={12} md={4} className="cart-total order-md-2 mb-4">
            <div
              className="cart-summary-box p-4"
              style={{
                backgroundColor: "white",
                borderRadius: "5px",
                boxShadow: "0 5px 30px rgba(0,0,0,0.05)",
              }}
            >
              <h4 className="fw-bold mb-4 border-bottom pb-2" style={{ color: "#0f3460" }}>
                Cart Summary
              </h4>
              <div className="d-flex align-items-center justify-content-between">
                <p className="mb-0 text-muted">Total Price :</p>
                <h3 className="fw-bold" style={{ color: "#0f3460" }}>
                  ${totalPrice.toFixed(2)}
                </h3>
              </div>
            </div>
          </Col>

          <Col xs={12} md={8} className="cart-list order-md-1">
            {cartList.length === 0 ? (
              <h1 className="text-center mt-5 no-items-msg">
                Your Cart is Empty
              </h1>
            ) : (
              cartList.map((item) => {
                const productQty = item.price * item.qty;
                return (
                  <div className="cart-item-card mb-4" key={item.id}>
                    <div className="img-box">
                      <img src={item.imgUrl} alt={item.productName} />
                    </div>

                    <div className="item-details">
                      <h4 className="product-name">{item.productName}</h4>

                      <p className="price-calculation my-3">
                        ${item.price} * {item.qty} &nbsp;
                        <span className="total-item-price">
                          ${productQty.toFixed(2)}
                        </span>
                      </p>
                    </div>

                    <button
                      className="remove-btn"
                      onClick={() => dispatch(deleteProduct({ id: item.id }))}
                    >
                      <FaTimes />
                    </button>

                    <div className="qty-controls">
                      <button
                        className="qty-btn"
                        onClick={() => dispatch(addToCart({ ...item, qty: 1 }))}
                      >
                        <FaPlus />
                      </button>
                      <button
                        className="qty-btn"
                        onClick={() => dispatch(decreaseQty({ id: item.id }))}
                      >
                        <FaMinus />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cart;
