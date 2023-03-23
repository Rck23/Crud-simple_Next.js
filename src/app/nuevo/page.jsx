"use client";

import { useState, useEffect } from "react";
import { useTareas } from "@/context/TareasContext";
import { useRouter } from "next/navigation";

export default function Page({params}) {
  const [tarea, setTarea] = useState({
    titulo: "",
    descripcion: "",
  });

  const { tareas, crearTarea, ActualizarTarea } = useTareas();

  const router = useRouter();

  const handleCambio = (e) => {
    setTarea({ ...tarea, [e.target.name]: e.target.value });
  };

  const hSubmit = (e) => {
    e.preventDefault();
    // console.log(tarea);
    if (params.id) {
      ActualizarTarea(params.id, tarea)
    } else {
      crearTarea(tarea.titulo, tarea.descripcion);
    }
    router.push("/");
  };

  useEffect(() => {
    if (params.id) {
      const tareaEncontrada = tareas.find((tarea) => tarea.id === params.id);

      if (tareaEncontrada)
        setTarea({
          titulo: tareaEncontrada.titulo,
          descripcion: tareaEncontrada.descripcion,
        });
    }
  }, []);
  return (
    <form onSubmit={hSubmit}>
      <input
        placeholder="Titulo"
        name="titulo"
        onChange={handleCambio}
        value={tarea.titulo}
      />

      <textarea
        placeholder="Descripción"
        name="descripcion"
        onChange={handleCambio}
        value={tarea.descripcion}
      />

      <button>Guardar</button>
    </form>
  );
}
