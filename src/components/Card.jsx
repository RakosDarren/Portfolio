import "../styles/Card.css"
import { motion } from "framer-motion"

export default function Card({size, category, selected, children}) {
    const isActive = selected === "all" || selected === category;

    return (
        <motion.div 
            layout
            transition={{duration: 0.4, ease: "easeInOut"}}
            className={`card card-${size} ${isActive ? "" : "card-inactive"}`}
        >
            {children}
        </motion.div>
    )
}