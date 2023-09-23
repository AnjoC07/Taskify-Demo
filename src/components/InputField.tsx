import React from "react";
import "./styles.css";

export const InputField = () => {
  return (
    <div>
      <form className="input" action="">
        <input className="input__box" type="input" placeholder="Enter a task" />
        <button className="input_submit" type="submit">
          Go
        </button>
      </form>
    </div>
  );
};
