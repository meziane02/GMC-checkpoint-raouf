import { useDispatch, useSelector } from "react-redux";
import { addToTodos, removeFromTodos } from "../app/todoSlice.js";

export default function useTodo() {
  const Todo = useSelector((store) => store.todos);
  const dispatch = useDispatch();
  return {
    Todo,

    addToTodos: (Todo) => {
      dispatch(addToTodos({ Todo }));
    },
    removeFromTodos: (Todo) => {
      dispatch(removeFromTodos(Todo));
    },
  };
}
