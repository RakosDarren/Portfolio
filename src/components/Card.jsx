import "../styles/Card.css";
import { motion } from "framer-motion";

export default function Card({ id, card, selected, onClick }) {
  const isActive = selected === "all" || selected === card.category;
  const isLink = card.cardType === "link";
  const inner = card.image ? (
    <img src={card.image} alt={card.title} />
  ) : (
    card.content
  );

  return (
    <motion.div
      layout
      transition={{ duration: 0.4, ease: "easeInOut" }}
      whileHover={
        isActive
          ? {
              y: -8,
              transition: { duration: 0.2, ease: "easeOut" },
            }
          : {}
      }
      className={`card card-${card.size} ${isActive ? "" : "card-inactive"}`}
      onClick={isActive && !isLink ? onClick : undefined}
    >
      {isLink ? (
        <a href={card.url} target="_blank" rel="noopener noreferrer">
          {inner}
        </a>
      ) : (
        inner
      )}
    </motion.div>
  );
}
