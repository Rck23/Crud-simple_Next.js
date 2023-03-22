"use client"

import { createContext, useContext } from "react";

export const TaskContext = createContext()


export const useTasks =() => {
    const context = useContext(TaskContext)

    if(!context) throw new Error('Error de ejecución')

    return context

}
export const TaskProvider = ({children}) => {

    const tareas =[{
      id:1,
      titulo:"Tarea 1",
      descripcion: "La descripcion detallada de la tarea"  
    },
    {
        id:2,
        titulo:"Tarea 2",
        descripcion: "La descripcion detallada de la tarea"  
      },
      {
        id:3,
        titulo:"Tarea 3",
        descripcion: "La descripcion detallada de la tarea"  
      },
      {
        id:4,
        titulo:"Tarea 4",
        descripcion: "La descripcion detallada de la tarea"  
      },
    ]; 

    return <TaskContext.Provider value={{tareas}}>
        {children}
    </TaskContext.Provider>
}