"use client";

import { useState } from "react";
import { useTareas } from "@/context/TareasContext";
import { useRouter } from "next/navigation";

export default function Page() {
  const [tarea, setTarea] = useState();

  const { crearTarea } = useTareas();

  const router = useRouter();

  const handleCambio = (e) => {
    setTarea({ ...tarea, [e.target.name]: e.target.value });
  };

  const hSubmit = (e) => {
    e.preventDefault();
    // console.log(tarea);
    crearTarea(tarea.titulo, tarea.descripcion);

    router.push("/");
  };

  return (
    <form onSubmit={hSubmit}>
      <input placeholder="Titulo" name="titulo" onChange={handleCambio} />

      <textarea
        placeholder="Descripción"
        name="descripcion"
        onChange={handleCambio}
      />

      <button>Guardar</button>
    </form>
  );
}
