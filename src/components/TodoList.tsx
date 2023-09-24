// ToDoList Component
import React from "react";
import { Todo } from "./model";
import SingleTodo from "./SingleTodo";

interface TodoProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<TodoProps> = ({ todos, setTodos }) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todos__heading">Active Task</span>
        {todos.map((todo) => (
          <SingleTodo
            todo={todo}
            todos={todos}
            key={todo.id}
            setTodos={setTodos}
          />
        ))}
      </div>
      <div className="todos remove">
        <span className="todos__heading">Completed Tasks</span>
        {todos.map((todo) => (
          <SingleTodo
            todo={todo}
            todos={todos}
            key={todo.id}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
    // DOCUMENTATION: BEFORE DRAG AND DROP
    // <div className="todos">
    //   {todos.map((todo) => (
    //     <SingleTodo
    //       todo={todo}
    //       key={todo.id}
    //       todos={todos}
    //       setTodos={setTodos}
    //     />
    //   ))}
    // </div>
  );
};

export default TodoList;
