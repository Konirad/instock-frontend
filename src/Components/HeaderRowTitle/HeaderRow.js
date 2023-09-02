import React from "react";
import PropTypes from "prop-types";
import sort from "../../assets/Icons/sort-24px.svg";
import "./HeaderRow.scss";

function HeaderRow({ headers }) {
  return (
    <div className="header-row">
      {headers.map((header, index) => (
        <div className="header__rowtitle" key={index}>
          {header.label}
          {header.sortable && <img src={sort} alt="sort icon" />}
        </div>
      ))}
    </div>
  );
}

HeaderRow.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      sortable: PropTypes.bool,
    })
  ).isRequired,
};

export default HeaderRow;
