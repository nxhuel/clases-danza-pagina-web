import "../Choreographies/choreographies.css";
import { Carrusel } from "./Carrusel/Carrusel";

export const Choreographies = () => {
  return (
    <>
      <div className="choreographies-container " id="Coreografías">
        <div className="choreographies-section dark:bg-[#282828] dark:text-[#c0bfc4]">
          <h1 className=" text-center">COREOGRAFÍAS DESTACADAS</h1>
          <Carrusel />
        </div>
      </div>
    </>
  );
};
