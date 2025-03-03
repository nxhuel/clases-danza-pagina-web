'use client';
import { useState, useEffect } from "react";
import "../Navbar/navbar.css";

export const Navbar = () => {
  const logoOscuro = "../../../assets/logo-oscuro-aem.png";
  const [active, setActive] = useState("Inicio");
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(storedTheme);
      setTheme(storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const toggleMenu =  () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {/* Example: bg-white text-black dark:bg-gray-900 dark:text-white */}
      <nav className="navbar dark:text-white">
        <div className="navbar-logo ">
          <img className="navbar-logo-img dark:filter dark:brightness-0 dark:invert" src={logoOscuro} alt="logo-aem" />
        </div>

        <button
          className="responsive"
          onClick={toggleMenu}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        <ul className={`navbar-sections ${isOpen ? "open" : ""} `}>
          {["Inicio", "Clases", "Coreografías", "Testimonios", "Contactame"].map((item) => (
            <li key={item}  >
              <a href={"#" + item}
                className={`nav-link ${active === item ? "active" : ""} dark:text-white`}
                onClick={() => setActive(item)}>
                {item}
              </a>
            </li>
          ))}
          <button onClick={toggleTheme} className="flex items-center">
            <span className="material-symbols-outlined">
              {theme === "light" ? "dark_mode" : "light_mode"}
            </span>
          </button>
        </ul>

      </nav>
    </>
  );
};
