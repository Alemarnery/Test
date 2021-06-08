import React from "react";

const Benefit = ({ title, children, iconName, className, ...props }) => (
  <div className={`col h-100 ${className}`} {...props}>
    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
      <i className={`bi ${iconName}`}></i>
    </div>
    <h2 className="h5">{title}</h2>
    <p className="mb-0">{children}</p>
  </div>
);

export default Benefit;
