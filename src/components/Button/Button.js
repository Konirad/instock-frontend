import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({ text, style, icon, onClick }) => {

  return (
    <button className={`button ${style}`} onClick={onClick}>
      {icon && <span className="icon">{` +`}</span>}
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  icon: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
