import Container from "react-bootstrap/Container";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [expand, setExpand] = useState(false);
  const cartList = useSelector((state) => state.cart.cartList);
  const totalItems = cartList.reduce((total, item) => total + item.qty, 0);
  const navigate = useNavigate();
  return (
    <Navbar
      expanded={expand}
      expand="md"
      className="bg-white fixed-top"
      style={{ borderBottom: "3px solid #0599FC" }}
    >
      <Container>
        <Navbar.Brand href="#">
          <span className="fw-bold d-flex align-items-center gap-2">
            <FaShoppingBag color="#0599FC" size={23} /> STORE
          </span>
        </Navbar.Brand>
        <div className="d-flex align-items-center gap-3 ms-auto order-md-last">
          <div
            className="position-relative"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setExpand(false);
              navigate("/cart");
            }}
          >
            <FaShoppingCart size={20} />
            <span className="translate-middle badge rounded-pill cart-num">
              {totalItems === 0 ? "" : totalItems}
            </span>
          </div>
          <Navbar.Toggle
            className="border-0 shadow-none"
            aria-controls="responsive-navbar-nav"
            onClick={() => setExpand(expand ? false : "expanded")}
          >
            <div className={`hamburger-icon ${expand ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Navbar.Toggle>
        </div>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navElements ms-auto fw-bold gap-4 text-center mt-2 mt-md-0">
            <Nav.Link as={Link} to="/" onClick={() => setExpand(false)}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/shop" onClick={() => setExpand(false)}>
              Shop
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/cart"
              className="me-md-4"
              onClick={() => setExpand(false)}
            >
              Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
