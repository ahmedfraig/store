import "../App.css";
import { useState } from "react";
import Select from "react-select";
import { products } from "../utils/products";
import { Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { FaSearch } from "react-icons/fa";
import ProductCard from "../components/Product";

const Shop = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  const listToFilter = selectedOption
    ? products.filter((product) => product.category === selectedOption.value)
    : products;
  const filteredProducts = listToFilter.filter((product) =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const options = [
    { value: "sofa", label: "Sofa" },
    { value: "chair", label: "Chair" },
    { value: "watch", label: "Watch" },
    { value: "mobile", label: "Mobile" },
    { value: "wireless", label: "Wireless" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#0599FC",
      color: "white",
      borderRadius: "30px",
      width: "100%",
      border: "none",
      boxShadow: "none",
      cursor: "pointer",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "white",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "white",
    }),
    input: (provided) => ({
      ...provided,
      color: "white",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "white",
      zIndex: 9999,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#0599FC" : "white",
      color: state.isSelected ? "white" : "#0599FC",
      "&:hover": {
        backgroundColor: "#0599FC",
        color: "white",
      },
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "white",
      "&:hover": { color: "#0599FC" },
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      backgroundColor: "white",
    }),
  };
  return (
    <>
      <section className="shopPageProducts">
        <div className="shop-heading d-flex justify-content-center">
          <h2 className="fw-bold">
            {selectedOption ? selectedOption.label : "All Products"}
          </h2>
        </div>

        <div className="filter-container">
          <div className="categoryFilter">
            <Select
              options={options}
              styles={customStyles}
              onChange={handleChange}
              isClearable={true}
              placeholder="Search By Category"
              isSearchable={true}
            />
          </div>
          <div className="searchPart">
            <Form.Control
              className="searchInput"
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="searchIcon">
              <FaSearch color="#0599FC" />
            </div>
          </div>
        </div>

        <Container className="products-container">
          <Row className="mt-4 mb-4 row-section g-4 justify-content-center">
            {filteredProducts.length === 0 ? (
              <h2 className="notFoundH2 text-center">No Products Found !</h2>
            ) : (
              <ProductCard productItems={filteredProducts} />
            )}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Shop;
