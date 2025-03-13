import React from "react";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Provider } from "react-redux";
import { store } from "./app/store";

const App = () => (
 <Provider store={store}>
    <Navbar />
    <TodoForm />
    <TodoList />
  </Provider>
);

export default App;