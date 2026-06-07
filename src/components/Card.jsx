import "../styles/Card.css";
import { motion } from "framer-motion";
import { useState } from "react";
import Tooltip from "./Tooltip";

export default function Card({ id, card, selected, onClick }) {
  const isActive = selected === "all" || selected === card.category;
  const isLink = card.cardType === "link";
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });

  const inner = card.image ? (
    <div className="card-image-wrapper">
      <img src={card.image} alt={card.title} />
    </div>
  ) : (
    <span>{card.content}</span>
  );

  return (
    <motion.div
      layout
      transition={{ duration: 0.4, ease: "easeInOut" }}
      whileHover={
        isActive
          ? { y: -8, transition: { duration: 0.2, ease: "easeOut" } }
          : {}
      }
      className={`card card-${card.size} ${!card.image ? "card-text" : ""} ${isActive ? "" : "card-inactive"}`}
      onClick={isActive && !isLink ? onClick : undefined}
      onMouseEnter={() => setTooltip((t) => ({ ...t, visible: true }))}
      onMouseLeave={() => setTooltip((t) => ({ ...t, visible: false }))}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setTooltip({
          visible: true,
          x: e.clientX - rect.left + 12,
          y: e.clientY - rect.top + 12,
        });
      }}
    >
      {tooltip.visible && (
        <Tooltip
          text={card.tooltip || card.content || card.title}
          x={tooltip.x}
          y={tooltip.y}
        />
      )}
      {isLink ? (
        <a
          href={card.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          {inner}
        </a>
      ) : (
        inner
      )}
    </motion.div>
  );
}
