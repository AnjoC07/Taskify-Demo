import React, { useState } from "react";
import "./App.css";
import { InputField } from "./components/InputField";
import { Todo } from "./components/model";

const App: React.FC = () => {
  // useStateHook | The use "<>" will indicate what type is used.
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault();
  };

  console.log(todo);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
};

export default App;
