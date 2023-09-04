import "./HeaderRow.scss";
import TableHeader from "../TableHeader/TableHeader";
import React from "react";
import PropTypes from "prop-types";

function HeaderRow({ headers }) {
  return (
    <div className="header-row">
      {headers.map((header, index) => (
        <TableHeader className="header__rowtitle" label={header.label} sortable={header.sortable} key={index} />
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
