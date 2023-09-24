import React from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (event: React.FormEvent) => void;
}

// Passing props to component
export const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <div>
      <form className="input" onSubmit={handleAdd}>
        <input
          className="input__box"
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
          type="input"
          placeholder="Enter a task"
        />
        <button className="input_submit" type="submit">
          Go
        </button>
      </form>
    </div>
  );
};
