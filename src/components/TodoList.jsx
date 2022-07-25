import React, { Fragment, useState, useRef } from "react";
import { v4 as uuid } from "uuid";
/* Importar todoitem */
import { TodoItem } from "./TodoItem";

export function TodoList() {
  /* Definir una lista con tareas */
  const [todos, setTodos] = useState([]);

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
    setTodos((prevTodos) => {
      const newTask = {
        id: uuid(),
        taskN: taskN,
        task: task,
        completed: false,
      };

      return [...prevTodos, newTask];
    });
    taskRef.current.value = null;
    taskRefNom.current.value = null;
    taskRefImp.current.checked = false;
  };

  const ResumenTareas = () => {
    const cant = cantidadTareas();

    if (cant === 0) {
      return (
        <div className="alert alert-success mt-3">
          Felicidades no tienes tareas pendientes
        </div>
      );
    }

    if (cant === 1) {
      return (
        <div className="alert alert-info mt-3">
          Te queda solamente una tarea pendiente
        </div>
      );
    }

    return (
      <div className="alert alert-info mt-3">
        Te quedan {cant} tareas pendientes
      </div>
    );
  };

  const cantidadTareas = () => {
    /* Filter */
    return todos.filter((todo) => !todo.completed).length;
  };

  const cambiarEstadoTarea = (id) => {
    console.log(id);
    /* Tomar todos los datos de la lista actual de tareas*/
    const newTodos = [...todos];
    /* buscar en la lista ese id */
    const todo = newTodos.find((todo) => todo.id === id);
    /* Cambiamos al estado contrario */
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };
  const eliminarTareasCompletas = () => {
    /* Filtras todas las tareas que aun no se hacen */
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <Fragment>
      <h1>Listado de Tareas</h1>

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
        <input className="form-check-input m-3" type="checkbox" value="" id="checkImpor" /* onClick={importante} */ref={taskRefImp} />Importante!!

          {/* Boton agregar */}
        <button className="btn btn-outline-dark ms-3" onClick={agregarTarea}>
          <i class="bi bi-plus-square-fill m-2"></i>Añadir
        </button>
          {/* Botón eliminar */}
        {/* <button className="btn btn-outline-danger ms-3" onClick={eliminarTareasCompletas}>
            <i class="bi bi-trash-fill"></i>
        </button> */}
      </div>

      {/* Cargar lista con tareas */}
      <div>
        <ul className="list-group my-4">
          {/* Método avanzado de js */}
          {/* map es como un foreach */}
          {todos.map((todo) => (
            <TodoItem
              todo={todo}
              key={todo.id}
              cambiarEstado={cambiarEstadoTarea}
            ></TodoItem>
          ))}
        </ul>
      </div>

      <ResumenTareas />
    </Fragment>
  );
}
