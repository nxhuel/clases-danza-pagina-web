import "../Testimonies/testimonies.css";
import { TestimoniesCard } from "./TestimoniesCard/TestimoniesCard";

export const Testimonies = () => {
  const testimonies = [
    {
      image: "../../../assets/avatar-mujer.jpg",
      name: "Valentina López",
      description: "Alumna",
      testimony:
        "Las clases con la profesora son increíbles. Su pasión y dedicación hacen que cada sesión sea un aprendizaje enriquecedor. Me ayudó a mejorar mi técnica y a ganar confianza en cada movimiento. ¡Una docente excepcional!",
    },
    {
      image: "../../../assets/avatar-hombre.png",
      name: "Martín Gómez",
      description: "Alumno",
      testimony:
        "Aprender danza con ella ha sido una experiencia maravillosa. Explica con claridad, tiene mucha paciencia y siempre motiva a dar lo mejor. Sin duda, una de las mejores profesoras que he tenido.",
    },
    {
      image: "../../../assets/avatar-mujer-dos.jpg",
      name: "Carla Fernández",
      description: "Docente compañera",
      testimony:
        "Trabajar junto a ella es un placer. Su compromiso con la enseñanza y el amor por la danza se reflejan en cada clase. Inspira tanto a sus alumnos como a quienes compartimos este camino con ella.",
    },
  ];

  return (
    <>
      <div className="testimonies-container" id="Testimonios">
        <div className="testimonies-section dark:bg-[#282828] dark:text-[#c0bfc4]">
          <h1>TESTIMONIOS</h1>
          <div className="testimonies-section-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 15 15"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M2 7.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5"
                clipRule="evenodd"
              />
            </svg>
            <h2 className=" text-center">
              Profesionales Dedicados A Inspirarte y Perfeccionar Tu Técnica
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 15 15"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M2 7.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className=" flex flex-col gap-14 pt-20 pb-20 lg:flex-row">
            {testimonies.map((item, index) => (
              <TestimoniesCard
                key={index}
                index={index}
                image={item.image}
                name={item.name}
                description={item.description}
                testimony={item.testimony}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
