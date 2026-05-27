import "../styles/CardModal.css";
import { motion } from "framer-motion";

export default function CardModal({ card, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        className="modal-content"
        initial={{ opacity: 0, scale: 0.96, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 8 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={onClose} aria-label="Close">
          ✕
        </button>

        {card.image && (
          <img className="modal-image" src={card.image} alt={card.title} />
        )}

        <div className="modal-body">
          <p className="modal-eyebrow">Case Study</p>
          <h2 className="modal-title">{card.title}</h2>
          <p className="modal-description">{card.description}</p>
        </div>
      </motion.div>
    </div>
  );
}

