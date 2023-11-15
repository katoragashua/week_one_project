import React from "react";

const Button = ({ value, color }) => {
  return (
    <div className="btn">
      <button style={{color: color}}>{value}</button>
    </div>
  );
};

export default Button;
