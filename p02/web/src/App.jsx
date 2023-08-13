import { useEffect, useState } from "react";
import "./App.css";
import Loading from "./Loading";
import TodoList from "./TodoList";
import { TodoForm } from "./TodoForm";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  const getTodoList = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:5000/todo/list");
    const { status, cls, msg, payload } = await response.json();

    setLoading(false);

    setItems(payload.items);
  };

  const saveTodoItem = async (item) => {
    setLoading(true);
    const response = await fetch(
      `http://localhost:5000/todo/save/${item._id}`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      }
    );
    const { status, cls, msg, payload } = await response.json();

    const todoItem = payload.item;

    setItems((prevItems) => {
      let todos = [...prevItems, todoItem];
      console.log("🚀 ~ file: App.jsx:41 ~ setItems ~ todos:", todos);
      return todos;
    });

    setLoading(false);
  };

  useEffect(() => {
    getTodoList();
  }, []);

  return (
    <>
      <h1>TODO App</h1>
      <TodoForm onSave={saveTodoItem} />
      <br />
      <button onClick={getTodoList}>Refresh</button>
      <br />
      {loading && <Loading />}
      <div>
        {!loading && items.length === 0 && <p>No items</p>}
        {items.length > 0 && <TodoList items={items} />}
      </div>
    </>
  );
};

export default App;
