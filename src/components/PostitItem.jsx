import React from "react";
import { v4 as uuid } from "uuid";

import {EliminarPostit} from "./PostitList"

/* debo recibir los props */


export function PostitItem({ postit, cambiarEstado }) {
  const { id,taskN, task, taskRefImp, completed } = postit;
  const fnCambiarEstado = () => {
    cambiarEstado(id)
  }

  const color="primary"
  if (taskRefImp.current.value === true){
    color="importante"
  } 
  


  
  return (
            <li>
              <a className={color}>
                {/* <input type="checkbox" onChange={fnCambiarEstado}
                className="form-check-input me-2" checked={completed}/> */}
                <button><i className="bi bi-pin-angle-fill" onClick={EliminarPostit}></i></button>
                  <h2>
                    {taskN}
                  </h2>
                  <p>
                    {task}
                  </p>
              </a>
            </li>
  );
};


/* función postit importante */
export function PostitItemImportante({ postit, cambiarEstado }) {
  const { id,taskN, task,  completed } = postit;
  const fnCambiarEstado = () => {
    cambiarEstado(id)
  }
  
  return (

    <div className="container">
      <div className="row">
        <div className="col m-3">
            <li>
              <a className="importante">
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
        </div>
      </div>
    </div>
  );
};