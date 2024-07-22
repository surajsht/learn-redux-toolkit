import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "./ProductSlice";

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.product);

  if (state.isLoading) return <h1> Loading... </h1>;

  return (
    <div>
      <button onClick={() => dispatch(fetchProduct())}> Fetch Product </button>

      {state.data.map((item) => {
        return (
          <div key={item.id}>
            <h2> {item.title} </h2>
          </div>
        );
      })}
    </div>
  );
};

export default App;
