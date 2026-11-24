"use client";
import { useEffect, useState } from "react";
import { isAxiosError } from "axios";
import { FaPencilAlt, FaPlusCircle, FaTrash } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import * as client from "./client";
import "./tailwind.css";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
  description?: string;
  editing?: boolean;
};

export default function WorkingWithRemoteArraysAsync() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const fetchTodos = async () => {
    setTodos(await client.fetchTodos());
  };
  const removeTodo = async (todo: Todo) => {
    setTodos(await client.removeTodo(todo));
  };
  const createNewTodo = async () => {
    setTodos(await client.createNewTodo());
  };
  const postNewTodo = async () => {
  const newTodo = await client.postNewTodo({
    title: "New Posted Todo",
    completed: false,
  });
  setTodos([...todos, newTodo]);
  };
  const editTodo = (todo: Todo) => {
  setTodos(todos.map((t) => (t.id === todo.id ? { ...todo, editing: true } : t)));
  };
const updateTodo = async (todo: Todo) => {
  await client.updateTodo(todo);
  setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
  };
  
  useEffect(() => { fetchTodos(); }, []);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const deleteTodo = async (todo: Todo) => {
    try {
      await client.deleteTodo(todo);
      setTodos(todos.filter((t) => t.id !== todo.id));
    } catch (error) {
      if (isAxiosError(error)) {
        setErrorMessage(error.response?.data.message);
      }
    }
  };


  return (
    <div id="wd-asynchronous-arrays">
      <h3 className="mb-2 mt-4 text-2xl font-semibold">
        Working with Arrays Asynchronously
      </h3>
      <h4 className="mb-4 mt-4 flex items-center gap-2 text-xl font-semibold">
        Todos
        <FaPlusCircle
          onClick={createNewTodo}
          id="wd-create-todo-async"
          className="cursor-pointer text-green-600"
        />
        <FaPlusCircle
          onClick={postNewTodo}
          id="wd-post-todo"
          className="cursor-pointer text-blue-600"
        />
      </h4>
      {errorMessage && (
        <p
          id="wd-todo-error-message"
          className="mb-2 max-w-md rounded bg-red-100 px-3 py-2 text-red-800"
        >
          {errorMessage}
        </p>
      )}
      <ul className="m-0 list-none p-0 ps-14">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center gap-4 py-1.5 text-xl">
            <FaTrash
              onClick={() => removeTodo(todo)}
              id={`wd-remove-todo-async-${todo.id}`}
              className="cursor-pointer text-red-600"
            />
            <TiDelete
              onClick={() => deleteTodo(todo)}
              id={`wd-delete-todo-${todo.id}`}
              className="cursor-pointer text-2xl text-red-600"
            />
            <FaPencilAlt
              onClick={() => editTodo(todo)}
              id={`wd-edit-todo-${todo.id}`}
              className="cursor-pointer text-blue-600"
            />
            <input
              type="checkbox"
              id={`wd-todo-completed-${todo.id}`}
              className="h-4 w-4"
              checked={todo.completed}
              onChange={(e) =>
                updateTodo({ ...todo, completed: e.target.checked })
              }
            />
            {!todo.editing ? (
              <span>{todo.title}</span>
            ) : (
              <input
                id={`wd-todo-title-${todo.id}`}
                className="w-56 rounded border border-neutral-300 px-3 py-1 text-base"
                defaultValue={todo.title}
                onChange={(e) => updateTodo({ ...todo, title: e.target.value })}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    updateTodo({ ...todo, editing: false });
                  }
                }}
              />
            )}
          </li>
        ))}
      </ul>
      <hr className="mt-4" />
    </div>
  );
}
