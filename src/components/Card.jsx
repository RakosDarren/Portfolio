import "../styles/Card.css";
import { motion } from "framer-motion";

export default function Card({ id, card, selected, onClick }) {
  const isActive = selected === "all" || selected === card.category;

  return (
    <motion.div
      layout
      transition={{ duration: 0.4, ease: "easeInOut" }}
      whileHover={
        isActive
          ? {
              y: -6,
              scale: 1.02,
              transition: { duration: 0.2, ease: "easeOut" },
            }
          : {}
      }
      className={`card card-${card.size} ${isActive ? "" : "card-inactive"}`}
      onClick={isActive ? onClick : undefined}
    >
      {card.image ? <img src={card.image} alt={card.title} /> : card.content}
    </motion.div>
  );
}
