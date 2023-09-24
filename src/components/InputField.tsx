import React, { useRef } from "react";
import "./styles.css";

interface InputFieldProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (event: React.FormEvent) => void;
}

// Passing props to component
export const InputField = ({ todo, setTodo, handleAdd }: InputFieldProps) => {
  // useRef Hook with TypeScript
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <form
        className="input"
        onSubmit={(event) => {
          handleAdd(event);
          // Blur shifts the focus from the input box
          inputRef.current?.blur();
        }}
      >
        <input
          ref={inputRef}
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
