import React, { Fragment, useState, useRef } from "react";
import { v4 as uuid } from "uuid";
/* Importar postititem */
import { PostitItem } from "./PostitItem";

import { PostitItemImportante } from "./PostitItem";

export function EliminarPostit(){
  const [postits, setPostits, postit] = useState([]);
  const eliminarTarea = () => {
    /* Filtras todas las tareas que aun no se hacen */
    const newPostits = postits.filter((postit) => !postit.completed);
    setPostits(newPostits);
  };
};


export function PostitList() {
  /* Definir una lista con tareas */
  const [postits, setPostits] = useState([]);

    /* ref del nombre de la tarea */
  const taskRefNom = useRef();
  const taskRef = useRef();
  const taskRefImp = useRef();

  const agregarTarea = () => {
    /* Rescatar el valor del input */
    const taskN = taskRefNom.current.value;
    const task = taskRef.current.value;
    
    console.log(task);
    
    if (taskN.trim() === "") return;
    if (task.trim() === "") return;
    
    console.log("Agregando tarea ...");
    /* Metodo definido por react para operar los elementos */
    setPostits((prevPostits) => {
      const newTask = {
        id: uuid(),
        taskN: taskN,
        task: task,
        taskRefImp: taskRefImp,
        completed: false,
      };

      return [...prevPostits, newTask];
    });
    taskRef.current.value = null;
    taskRefNom.current.value = null;
    taskRefImp.current.checked = false;
  };

  const cantidadTareas = () => {
    /* Filter */
    return postits.filter((postit) => !postit.completed).length;
  };

  const cambiarEstadoTarea = (id) => {
    console.log(id);
    /* Tomar todos los datos de la lista actual de tareas*/
    const newPostits = [...postits];
    /* buscar en la lista ese id */
    const postit = newPostits.find((postit) => postit.id === id);
    /* Cambiamos al estado contrario */
    postit.completed = !postit.completed;
    setPostits(newPostits);
  };

  const eliminarTarea = () => {
    const newPostits = postits.filter((postit) => !postit.completed);
    setPostits(newPostits);
  };

  
  return (
    <div className="container">
      <div className="row">
        <div className="col">
        <Fragment>
      <h1>Tareas pendientes</h1>
      <br />

      <div className="input-group">

        {/* nombre de la tarea */}
        <input
            type="text"
            ref={taskRefNom}
            className="form-control m-1"
            placeholder="Nombre de la tarea"
        />
          {/* descripción de la tarea */}
        <input
            type="text"
            ref={taskRef}
            className="form-control m-1"
            placeholder="Descripción de la tarea"
        />
        {/* chek importante */}
        <input className="form-check-input m-3" type="checkbox" value="" id="importante" /* onClick={importante} */ref={taskRefImp} />Importante!!

          {/* Boton agregar */}
        <button className="btn btn-outline-dark ms-3" onClick={agregarTarea}>
          <i class="bi bi-plus-square-fill m-2"></i>Añadir
        </button>
          {/* Botón eliminar */}
        {/* <button className="btn btn-outline-danger ms-3" onClick={eliminarTarea}>
            <i class="bi bi-trash-fill"></i>
        </button>  */}
      </div>

      {/* Cargar lista con tareas */}
      <div>
        <ul>
          {/* Método avanzado de js */}
          {/* map es como un foreach */}
          {postits.map((postit) => (
            <PostitItem
            postit={postit}
              key={postit.id}
              cambiarEstado={cambiarEstadoTarea}
            ></PostitItem>
          ))}
        </ul>
      </div>






      {/* <ResumenTareas /> */}
    </Fragment>
        </div>
      </div>
    </div>
  );
}
