import { useState, type ReactNode } from "react";
import { TodosContext, useTodosContext, type Todo } from "./todosContext";

function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Context" },
  ]);
  const addTodo = (title: string) => {
    setTodos([...todos, { id: new Date().getTime().toString(), title }]);
  };
  const updateTodo = (todo: Todo) => {
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
  };
  const deleteTodo = (id: string) => {
    setTodos(todos.filter((t) => t.id !== id));
  };
  return (
    <TodosContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo }}>
      {children}
    </TodosContext.Provider>
  );
}

function TodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodosContext();
  const [todo, setTodo] = useState<Todo>({ id: "", title: "" });
  return (
    <div id="wd-context-todo-list">
      <h3>Todo List (Context)</h3>
      <input
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        placeholder="New todo"
        id="wd-context-todo-title"
        className="mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
      />
      <button
        type="button"
        onClick={() => {
          addTodo(todo.title);
          setTodo({ id: "", title: "" });
        }}
        id="wd-context-add-todo-click"
        className="me-2 rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Add
      </button>
      <button
        type="button"
        onClick={() => {
          updateTodo(todo);
          setTodo({ id: "", title: "" });
        }}
        disabled={!todo.id}
        id="wd-context-update-todo-click"
        className="rounded bg-yellow-500 px-3 py-1.5 text-sm font-medium disabled:opacity-50"
      >
        Update
      </button>
      <ul className="m-0 mt-2 max-w-sm list-none p-0">
        {todos.map((t) => (
          <li
            key={t.id}
            className="mb-1 flex items-center justify-between rounded border border-neutral-200 px-3 py-1"
          >
            <span>{t.title}</span>
            <span>
              <button
                type="button"
                onClick={() => setTodo(t)}
                id={`wd-context-edit-todo-${t.id}-click`}
                className="me-2 rounded bg-blue-600 px-2 py-0.5 text-sm font-medium text-white"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => deleteTodo(t.id)}
                id={`wd-context-delete-todo-${t.id}-click`}
                className="rounded bg-red-600 px-2 py-0.5 text-sm font-medium text-white"
              >
                Delete
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ReactContextTodoList() {
  return (
    <TodosProvider>
      <TodoList />
    </TodosProvider>
  );
}
