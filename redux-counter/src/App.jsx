import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./CounterSlice";

const App = () => {
  const count = useSelector((s) => s.suraj.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2> {count} </h2>

      <button onClick={() => dispatch(increment())}> Increase </button>
      <button onClick={() => dispatch(decrement())}> Decrease </button>
    </div>
  );
};

export default App;
