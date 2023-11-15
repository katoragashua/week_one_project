import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import { data } from "./data.js";
import { nanoid } from "nanoid";

const cardData = data.map((datum) => {
  return { ...datum, id: nanoid() };
});

function App() {
  const allCards = cardData.map(datum => <Card key={datum.id}  {...datum} />)
  return (
    <div className="cards-container">
      {allCards}
    </div>
  );
}

export default App;
