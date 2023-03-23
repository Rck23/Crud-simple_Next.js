"use client"
import { useTareas } from "@/context/TareasContext"

import { TareaCard } from "@/componentes/TareaCard";
import 'bootstrap/dist/css/bootstrap.css'; // Add this line

export default function Page(){

  const {tareas} = useTareas();

  return(
    <div>
      
      {tareas.map((tarea)=>(
       <TareaCard tarea={tarea} key={tarea.id} />
      ))}
    </div>
    
  )
}