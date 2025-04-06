"use client";
import { motion } from "framer-motion";
import "../ClassesCard/classesCard.css";

export const ClassesCard = ({ image, title, items = [] }) => { 
  return (
    <motion.div
      className="card dark:bg-[#3d465150] shadow-lg rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <img src={image} alt={title} className="card-img w-full h-48 object-cover" loading="lazy"/>
      <h2 className="card-title text-lg font-semibold text-white mt-4">{title}</h2>
      <ul className="card-list text-gray-300">
        {items.slice(0, 3).map((item, index) => (
          <li key={index} className="card-item">{item}</li>
        ))}
      </ul>
      <div className="card-button-container flex justify-between mt-4">
        <a href="#Contactame" className="card-button-suscribe bg-purple-600 text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-purple-700">INSCRIBITE AHORA</a>
        <a href="../../../assets/clase-planes-pdf.pdf" target="_BLANK" className="card-button-info bg-gray-600 text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-gray-700">+ INFO</a>
      </div>
    </motion.div>
  );
};