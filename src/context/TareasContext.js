"use client";

import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

const TareaContext = createContext();

export const useTareas = () => {
  const context = useContext(TareaContext);

  if (!context) throw new Error("Error de ejecución");

  return context;
};

export const TareaProvider = ({ children }) => {
  const [tareas, setTareas] = useState([]);

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

  const ActualizarTarea = (id, ActualizarTarea) =>
    setTareas([
      ...tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, ...ActualizarTarea } : tarea
      ),
    ]);

  return (
    <TareaContext.Provider
      value={{ tareas, crearTarea, borrarTarea, ActualizarTarea }}
    >
      {children}
    </TareaContext.Provider>
  );
};
