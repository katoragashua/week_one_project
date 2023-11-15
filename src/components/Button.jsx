import React, { useState } from "react";

const Button = ({ value, color }) => {
  const [hovered, setHovered] = useState(() => false);
  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);
  const textColor = {
    color: hovered ? "white" : color,
  };

  return (
    <div className="btn">
      <button
        style={textColor}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {value}
      </button>
    </div>
  );
};

export default Button;
