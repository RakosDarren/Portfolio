import "../styles/CardModal.css";
import { motion } from "framer-motion";

export default function CardModal({ card, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        className="modal-content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={onClose}>
          ✕
        </button>

        <img src={card.image} />

        <h1>{card.title}</h1>

        <p>{card.description}</p>
      </motion.div>
    </div>
  );
}
