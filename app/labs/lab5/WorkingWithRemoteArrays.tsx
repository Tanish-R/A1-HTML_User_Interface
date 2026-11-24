"use client";

import { useState } from "react";
import "./tailwind.css";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

const LINK = "inline-block rounded bg-blue-600 px-4 py-1.5 text-white underline";
const INPUT = "rounded border border-neutral-300 px-3 py-1";
const HEADING = "mb-4 mt-4 text-xl font-semibold";

export default function WorkingWithRemoteArrays() {
  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    completed: false,
  });
  const API = `${HTTP_SERVER}/lab5/todos`;
  return (
    <div id="wd-working-with-remote-arrays">
      <h3 className="mb-2 mt-4 text-2xl font-semibold">Working with Arrays</h3>

      <h4 className={HEADING}>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className={LINK} href={API}>
        Get Todos
      </a>

      <h4 className={HEADING}>Retrieving an Item from an Array by ID</h4>
      <div className="mb-2 flex items-center gap-3">
        <a
          id="wd-retrieve-todo-by-id"
          className={LINK}
          href={`${API}/${todo.id}`}
        >
          Get Todo by ID
        </a>
        <input
          id="wd-todo-id"
          className={INPUT}
          value={todo.id}
          onChange={(e) => setTodo({ ...todo, id: e.target.value })}
        />
      </div>

      <h4 className={HEADING}>Filtering Array Items</h4>
      <a
        id="wd-retrieve-completed-todos"
        className={LINK}
        href={`${API}?completed=true`}
      >
        Get Completed Todos
      </a>

      <h4 className={HEADING}>Creating new Items in an Array</h4>
      <a id="wd-create-todo" className={LINK} href={`${API}/create`}>
        Create Todo
      </a>

      <h4 className={HEADING}>Removing from an Array</h4>
      <a
        id="wd-remove-todo"
        className={LINK + " bg-red-600"}
        href={`${API}/${todo.id}/delete`}
      >
        Remove Todo with ID = {todo.id}
      </a>

      <h4 className={HEADING}>Updating an Item in an Array</h4>
      <div className="mb-2 flex flex-wrap items-center gap-3">
        <a
          href={`${API}/${todo.id}/title/${todo.title}`}
          id="wd-update-todo-title"
          className={LINK}
        >
          Update Todo
        </a>
        <input
          className={`${INPUT} w-16`}
          value={todo.id}
          onChange={(e) => setTodo({ ...todo, id: e.target.value })}
        />
        <input
          className={INPUT}
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />
      </div>
      <div className="mb-2 flex items-center gap-3">
        <a
          href={`${API}/${todo.id}/completed/${todo.completed}`}
          id="wd-update-todo-completed"
          className={LINK}
        >
          Complete Todo ID = {todo.id}
        </a>
        <input
          id="wd-todo-completed"
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
        />
      </div>
      <div className="mb-2 flex items-center gap-3">
        <a
          href={`${API}/${todo.id}/description/${todo.description}`}
          id="wd-update-todo-description"
          className={LINK}
        >
          Describe Todo ID = {todo.id}
        </a>
        <input
          id="wd-todo-description"
          className={INPUT}
          value={todo.description}
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        />
      </div>
      <hr className="mt-4" />
    </div>
  );
}
