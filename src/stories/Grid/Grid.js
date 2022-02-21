import React from "react";
import PropTypes from "prop-types";
import "./grid.css";

export const Grid = ({ containerClass, children }) => {
  return (
    <div className={`grid-container ${containerClass}`}>{children}</div>
  );
};

Grid.propTypes = {
    containerClass: PropTypes.string,
}

export default Grid;