import { useRouter } from "next/navigation";

export const TaskCard = ({tarea}) => {

    const router = useRouter(); 

    return (
        <div style={{background: "#F43C14", color:"#f3f3f3"}}
                onClick={() => router.push(`/edit/${tarea.id}`)}
        >
        <h1>
          {/* {tarea.id} */}
          
          {tarea.titulo} 
        </h1>
        <button>Borrar</button>
        <p>{tarea.descripcion}</p>
      </div>
    );
};