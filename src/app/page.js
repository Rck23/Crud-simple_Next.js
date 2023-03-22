"use client"
import { useTasks } from "@/context/TasksContext"

import { TaskCard } from "@/components/TaskCard";

export default function Page(){

  const {tareas} = useTasks();

  return(
    <div>
      {tareas.map((tarea)=>(
       <TaskCard tarea={tarea} key={tarea.id} />
      ))}
    </div>
  )
}