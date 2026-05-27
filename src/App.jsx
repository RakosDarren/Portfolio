import React from "react";
import { useState } from "react";

import "./styles/App.css";
import { cardDescriptions } from "./cardContent";

//components
import GridContainer from "./components/GridContainer";
import CardGrid from "./components/CardGrid";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import CardModal from "./components/CardModal";

//images
import bikeRepairImg from "./assets/BikeRepair.jpg";
import memoryGameImg from "./assets/MemoryGame.jpg";
import eCommerceImg from "./assets/ECommerce.jpg";
import analyticsImg from "./assets/Analytics.png";
import linkedInImg from "./assets/LinkedIn.webp";
import githubImg from "./assets/Github.png";

function App() {
  const [selected, setSelected] = useState("all");

  const [clickedCard, setClickedCard] = useState(null);

  //list of all cards
  //id: unique ID so react knows which card is which for filtering/sorting
  //size: determines the size/shape of the card
  //category: determines how the navbar sorts the card
  //tooltip: what shows on the tooltip when hovering the card
  //content: what's shown on the front of the card
  //cardType: determines how the card functions
  //title: what's shown on an "expandable" cardTypes modal as its title
  //description: what's shown on an "expandable" cardTypes modal as its description
  //image: image is shown on the front of the card and also in an expandable cardTypes modal, currently image overwrites content
  //url: where the redirect points to on a "link" cardType
  const cards = [
    {
      id: 1,
      size: "wd",
      category: "About",
      tooltip: "Learn more about me!",
      content: (
        <>
          Hey, I'm <span style={{ color: "#00897B" }}>Darren Rakos</span>.
        </>
      ),
      cardType: "expandable",
      title: (
        <>
          My name is <span style={{ color: "#00897B" }}>Darren Rakos</span>,
        </>
      ),
      description: cardDescriptions[1],
    },
    {
      id: 2,
      size: "lg",
      category: "Work",
      tooltip: "Explore this case study",
      content: "Case Study 1",
      cardType: "expandable",
      title: "Case Study 1",
      description: cardDescriptions[2],
      image: bikeRepairImg,
    },
    {
      id: 3,
      size: "sm",
      category: "About",
      tooltip: "Connect with me on LinkedIn!",
      content: "LinkedIn",
      cardType: "link",
      url: "https://www.linkedin.com/in/darrenrakos-software/",
      image: linkedInImg,
    },
    {
      id: 4,
      size: "sm",
      category: "About",
      tooltip: "Check out my other projects!",
      content: "Github",
      cardType: "link",
      url: "https://github.com/RakosDarren",
      image: githubImg,
    },
    {
      id: 5,
      size: "lg",
      category: "Work",
      tooltip: "Explore this case study",
      content: "Case Study 2",
      cardType: "expandable",
      title: "Case Study 2",
      description: cardDescriptions[5],
      image: memoryGameImg,
    },
    {
      id: 6,
      size: "wd",
      category: "About",
      tooltip: "What UI/UX is to me",
      content: (
        <>
          My <span style={{ color: "#00897B" }}>UI/UX</span> Experience
        </>
      ),
      cardType: "expandable",
      title: (
        <>
          My <span style={{ color: "#00897B" }}>UI/UX</span> Experience
        </>
      ),
      description: cardDescriptions[6],
    },
    {
      id: 7,
      size: "lg",
      category: "Work",
      tooltip: "Explore this case study",
      content: "Case Study 3",
      cardType: "expandable",
      title: "Case Study 3",
      description: cardDescriptions[7],
      image: eCommerceImg,
    },
    {
      id: 8,
      size: "sm",
      category: "3",
      content: "Placeholder",
      cardType: "extra",
    },
    {
      id: 9,
      size: "sm",
      category: "4",
      content: "Placeholder",
      cardType: "extra",
    },
    {
      id: 10,
      size: "lg",
      category: "Work",
      tooltip: "Explore this case study",
      content: "Case Study 4",
      cardType: "expandable",
      title: "Case Study 4",
      description: cardDescriptions[10],
      image: analyticsImg,
    },
    {
      id: 11,
      size: "tl",
      category: "3",
      content: "Placeholder",
      cardType: "extra",
    },
    {
      id: 12,
      size: "tl",
      category: "4",
      content: "Placeholder",
      cardType: "extra",
    },
  ];

  //sort cards to show active cards first
  const sortedCards = [...cards].sort((a, b) => {
    const aActive = selected === "all" || a.category === selected;
    const bActive = selected === "all" || b.category === selected;

    return bActive - aActive;
  });

  return (
    <>
      <Navbar setSelected={setSelected} selected={selected} />

      <GridContainer>
        <CardGrid>
          {sortedCards.map((card) => (
            <Card
              key={card.id}
              card={card}
              selected={selected}
              onClick={() => {
                if (card.cardType === "link") {
                  window.open(card.url, "_blank");
                  return;
                }
                setClickedCard(card);
              }}
            />
          ))}
        </CardGrid>
      </GridContainer>

      {clickedCard && (
        <>
          {/* Card modal */}
          {clickedCard.cardType === "expandable" && (
            <CardModal
              card={clickedCard}
              onClose={() => setClickedCard(null)}
            />
          )}
        </>
      )}
    </>
  );
}

export default App;
