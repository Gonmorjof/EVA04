import React from "react";

/* debo recibir los props */
export function TodoItem({ todo, cambiarEstado }) {
  const { id, task, completed } = todo;
  const fnCambiarEstado = () => {
    cambiarEstado(id)
  }
  return (
    <li className="list-group-item">
      <input type="checkbox" 
      onChange={fnCambiarEstado}
      className="form-check-input me-2" checked={completed}/>
      {task}
    </li>
  );
}
