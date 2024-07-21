import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "./TodoSlice";

const App = () => {
  const [todoValue, setTodoValue] = useState("");

  const todoData = useSelector((a) => a.todo.value);
  const dispatch = useDispatch();

  const performTask = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: new Date().getMilliseconds(),
        value: todoValue,
      })
    );
  };

  return (
    <div>
      <form onSubmit={(e) => performTask(e)}>
        <input
          type="text"
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
        />
        <button> Add </button>
      </form>

      <ul>
        {todoData.map((item) => {
          return (
            <li key={item.id}>
              {item.value}
              <button onClick={() => dispatch(removeTodo(item.id))}> x </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
