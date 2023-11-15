import React from "react";
import Logo from "./Logo";
import Button from "./Button";

// Bright orange: hsl(31, 77%, 52%)
// Dark cyan: hsl(184, 100%, 22%)
// Very dark cyan: hsl(179, 100%, 13%)

const Card = ({ type, id, description, img }) => {
  let color;

  switch (type) {
    case "sedan":
      color = "hsl(31, 77%, 52%)";
      break;
    case "suvs":
      color = "hsl(184, 100%, 22%)";
      break;
    case "luxury":
      color = "hsl(179, 100%, 13%)";
      break;
    default:
      break;
  }

  return (
    <div className="card" style={{ backgroundColor: color }}>
      <div>
        <Logo img={img} type={type} />
        <h1 className="title">{type.toUpperCase()}</h1>
        <div className="description">{description}</div>
      </div>
      <Button value="Learn More" color={color}/>
    </div>
  );
};

export default Card;
