"use client";
import "../Classes/classes.css";
import { ClassesCard } from "./ClassesCard/ClassesCard";

export const Classes = () => {
  return (
    <>
        <div className="classes-container " id="Clases">
          <div className="section dark:bg-[#282828] dark:text-white">
            <h1 className="dark:text-[#c0bfc4]">CLASES</h1>
            <div className=" flex flex-col lg:flex-row gap-8 ">
              <ClassesCard
                image={"../../../assets/clase-prueba.png"}
                title={"Intensivo de verano"}
                items={[
                  "Danza clasica",
                  "Danza contemporanea",
                  "Entrenamiento",
                ]}
              />
              <ClassesCard
                image={"../../../assets/clase-prueba-dos.jpg"}
                title={"Intensivo de verano"}
                items={[
                  "Danza clasica",
                  "Danza contemporanea",
                  "Entrenamiento",
                ]}
              />
              <ClassesCard
                image={"../../../assets/clase-prueba-tres.jpeg"}
                title={"Intensivo de verano"}
                items={[
                  "Danza clasica",
                  "Danza contemporanea",
                  "Entrenamiento",
                ]}
              />
            </div>
          </div>
        </div>
    </>
  );
};
