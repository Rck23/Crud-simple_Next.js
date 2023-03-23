import { useRouter } from "next/navigation";
import { useTareas } from "@/context/TareasContext";
export const TareaCard = ({ tarea }) => {
  const router = useRouter();
  const { borrarTarea } = useTareas();

  return (
    <div
      className="container mt-5"
      style={{ background: "#F43C14", color: "#f3f3f3" }}
      onClick={() => router.push(`/editar/${tarea.id}`)}
    >
      <div className="card-body">
        <h5 className="card-title">{tarea.titulo} </h5>
        <p className="card-text">{tarea.descripcion}</p>
        <a
          href="#"
          onClick={(e) => {
            e.stopPropagation(), borrarTarea(tarea.id);
          }}
          className="btn btn-primary"
        >
          Borrar
        </a>
      </div>
    </div>
  );
};
