import React from "react";

/* debo recibir los props */


export function TodoItem({ todo, cambiarEstado }) {
  const { id,taskN, task, completed } = todo;
  const fnCambiarEstado = () => {
    cambiarEstado(id)
  }
  return (

    <div className="container">
      <div className="row">
        <div className="col justify-content-end">
          <ul>
            <li>
            
              <a href="">
              
                {/* <input type="checkbox" onChange={fnCambiarEstado}
                className="form-check-input me-2" checked={completed}/> */}
                <button><i className="bi bi-pin-angle-fill"></i></button>
                  <h2>
                    {taskN}
                  </h2>
                  <p>
                    {task}
                  </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
