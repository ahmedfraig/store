import { useState } from "react";
import { Col } from "react-bootstrap";
import { FaStar, FaHeart, FaRegHeart } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toast } from "react-toastify";

const Product = ({ productItems }) => {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleProductClick = (id) => {
    navigate(`/shop/${id}`);
  };

  const handleLike = (e) => {
    e.stopPropagation();
    setLiked(!liked);
  };

  const handleAddToCart = (e, productItem) => {
    e.stopPropagation();
    dispatch(addToCart({ ...productItem, qty: 1 }));
    toast.success("Product has been added to cart!");
  };

  return (
    <>
      {productItems.map((productItem) => {
        return (
          <Col
            md={4}
            sm={6}
            xs={12}
            className="product mtop d-flex justify-content-center"
            key={productItem.id}
          >
            <div
              className="product-item"
              onClick={() => handleProductClick(productItem.id)}
            >
              <div className="image-part">
                <img
                  className="product-image"
                  src={productItem.imgUrl}
                  alt={productItem.title}
                />
                <div
                  className={`discount-percent ${productItem.discount > 0 ? "visible" : "hidden"}`}
                >
                  {productItem.discount}% off
                </div>
                <div
                  className="favorite-icon"
                  onClick={(e) => {
                    handleLike(e);
                  }}
                >
                  {liked ? (
                    <FaHeart style={{ color: "red" }} />
                  ) : (
                    <FaRegHeart />
                  )}
                </div>
              </div>
              <div className="product-details">
                <h3 className="product-title">{productItem.productName}</h3>
                <div className="rate">
                  {Array.from({ length: 5 }, (_, index) => {
                    let percent = (productItem.avgRating - index) * 100;
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
                </div>
                <div className="price-cart d-flex align-items-center justify-content-between mt-3">
                  <div className="price">
                    <span className="new-price">
                      $
                      {(
                        productItem.price -
                        (productItem.price * productItem.discount) / 100
                      ).toFixed(2)}
                    </span>
                    <span
                      className={`old-price ${productItem.discount > 0 ? "visible" : "hidden"}`}
                    >
                      ${productItem.price}
                    </span>
                  </div>
                  <button
                    className="cart-add"
                    onClick={(e) => handleAddToCart(e,productItem)}
                  >
                    <FiPlus />
                  </button>
                </div>
              </div>
            </div>
          </Col>
        );
      })}
    </>
  );
};

export default Product;
