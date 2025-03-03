"use client";
import { motion } from "framer-motion";
import "../TestimoniesCard/testimoniesCard.css";

export const TestimoniesCard = ({
  index,
  image,
  name,
  description,
  testimony,
}) => {
  const stars = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21z"
      />
    </svg>
  );
  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div
          className={`testimonies-card ${
            index % 2 === 0 ? "bkg-main" : "bkg-secondary"
          }`}
        >
          <img src={image} alt={name} className="testimonies-card-img" />
          <h2 className="testimonies-card-name">{name}</h2>
          <h3 className="testimonies-card-description">{description}</h3>
          <p className="testimonies-card-tesimony">{testimony}</p>
          <div className="stars flex flex-row gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>{stars}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};
