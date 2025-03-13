import React from "react";

export default function TodoForm() {
  return (
    <form>
      <input type="text" placeholder="enter what to do \" />
      <select name="Todo" id="TodoType">
        <option value="easy">easy</option>
        <option value="medium">medium</option>
        <option value="hard">hard</option>
      </select>
      <input type="date" />
      <button type="submit">submit</button>
    </form>
  );
}
