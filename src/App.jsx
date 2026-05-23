import React from "react";
import { useState } from "react";

import "./styles/App.css"
import GridContainer from "./components/GridContainer";
import CardGrid from "./components/CardGrid";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
    const [selected, setSelected] = useState("all");

    //list of all cards
    const cards = [
      {id: 1, size: "wd", category:"1", content: "Wide Card"},
      {id: 2, size: "sm", category:"2", content: "Small Card"},
      {id: 3, size: "sm", category:"2", content: "Small Card"},
      {id: 4, size: "sm", category:"2", content: "Small Card"},
      {id: 5, size: "sm", category:"2", content: "Small Card"},
      {id: 6, size: "lg", category:"3", content: "Large Card"},
      {id: 7, size: "lg", category:"3", content: "Large Card"},
      {id: 8, size: "wd", category:"1", content: "Wide Card"},
      {id: 9, size: "sm", category:"2", content: "Small Card"},
      {id: 10, size: "tl", category:"4", content: "Tall Card"},
      {id: 11, size: "lg", category:"3", content: "Large Card"},
      {id: 12, size: "sm", category:"2", content: "Small Card"},
    ]

    //sort cards to show active cards first
    const sortedCards = [...cards].sort((a, b) => {
      const aActive = selected === "all" || a.category === selected;
      const bActive = selected === "all" || b.category === selected;

      return bActive - aActive; 
    });

    return (
    <>
      <Navbar setSelected={setSelected} selected={selected}/>

      <GridContainer>
        <CardGrid>
          {sortedCards.map(card => (
            <Card
              key={card.id}
              size={card.size}
              category={card.category}
              selected={selected}
            >
              {card.content}
            </Card>
          ))}
        </CardGrid>
      </GridContainer>
    </>
  )
}

export default App