import React, { useState } from "react";
import PropTypes from "prop-types";

import "../styles/buscar.css";

const CategoryForm = ({ setCategoria }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hecho");

    if (inputValue.trim().length > 2) {
      setCategoria((catgs) => [...catgs, inputValue]);
    }
  };

  return (
    <form className="form_buscar" onSubmit={handleSubmit}>
      <input
        id="categoryInput"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Buscar Gif"
      />
      <button>Agregar</button>
    </form>
  );
};

CategoryForm.propTypes = {
  setCategoria: PropTypes.func.isRequired,
};

export default CategoryForm;
