'use client';
import React, { useState } from "react";
import "../Contact/contact.css";

export const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);
  const imgFondo = "../../../assets/fondo-contact.png";
  const info = [
    {
      number: "+54 11 3350-1445",
      email: "almaenmovimiento@gmail.com",
      location: "CABA",
    },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://formsubmit.co/b23b1d17142a1ffdf8cfa1cc6f6977aa", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setShowAlert(true);
        event.target.reset();
        setTimeout(() => setShowAlert(false), 3000);
      }
    } catch (error) {
      console.error("Error al enviar:", error);
    }
  };

  return (
    <>
      <div className="contact-container dark:bg-[#282828] dark:text-[#c0bfc4]" id="Contactame">
        <img src={imgFondo} alt="logo de fondo" className="img-fondo" />
        <div className="contact-section ">
          <div className="contact-info ">
            <h1 className="dark:text-[#c0bfc4]">INFORMACIÓN DE CONTACTO</h1>
            <ul className="contact-info-list ">
              {info.map((item, index) => (
                <React.Fragment key={index}>
                  <li className="contact-info-item dark:text-[#c0bfc4]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
                      />
                    </svg>
                    {item.number}
                  </li>
                  <li className="contact-info-item dark:text-[#c0bfc4]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"
                      />
                    </svg>{" "}
                    {item.email}
                  </li>
                  <li className="contact-info-item dark:text-[#c0bfc4]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 2C7.589 2 4 5.589 4 9.995C3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12c0-4.411-3.589-8-8-8m0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4"
                      />
                    </svg>{" "}
                    {item.location}
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </div>

          <div className="form-section ">
            <h1 className="dark:text-[#c0bfc4]">CONTACTANOS</h1>
            <form onSubmit={handleSubmit} className="form-content">
              <div className="form-name">
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  required
                />
              </div>
              <div className="form-email">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-message">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Mensaje"
                  required
                ></textarea>
              </div>
              <div className="form-send">
                <input type="submit" value="ENVIAR" />
              </div>

              <input type="hidden" name="_text" value="http://localhost:3000" />
              <input type="hidden" name="_captcha" value="false" />
            </form>
            {showAlert && (
              <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 rounded-lg shadow-lg">
                ✅ ¡Mensaje enviado con éxito!
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
