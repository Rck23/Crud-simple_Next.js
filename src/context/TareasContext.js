"use client";

import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const TareaContext = createContext();

export const useTareas = () => {
  const context = useContext(TareaContext);

  if (!context) throw new Error("Error de ejecución");

  return context;
};

export const TareaProvider = ({ children }) => {
  const [tareas, setTareas] = useState([
    {
      id: 1,
      titulo: "Tarea 1",
      descripcion: "La descripcion detallada de la tarea",
    },
    {
      id: 2,
      titulo: "Tarea 2",
      descripcion: "La descripcion detallada de la tarea",
    },
    {
      id: 3,
      titulo: "Tarea 3",
      descripcion: "La descripcion detallada de la tarea",
    },
    {
      id: 4,
      titulo: "Tarea 4",
      descripcion: "La descripcion detallada de la tarea",
    },
  ]);

  const crearTarea = (titulo, descripcion) => {
    setTareas([
      ...tareas,
      {
        titulo,
        descripcion,
        id: uuid(),
      },
    ]);
  };

  const borrarTarea = (id) => {
    setTareas([...tareas.filter((tarea) => tarea.id !== id)]);
  };

  return (
    <TareaContext.Provider value={{ tareas, crearTarea, borrarTarea }}>
      {children}
    </TareaContext.Provider>
  );
};
