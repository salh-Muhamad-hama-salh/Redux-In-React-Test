import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from "./Redux/CountSlice";
import "./App.css";

function App() {
  const [data, setData] = useState(""); // Initialize with an empty string
  const count = useSelector((state) => state.counter.value); // Ensure correct selector
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(Number(data))); // Ensure data is converted to a number
  };

  const handleReset = () => {
    setData(""); // Reset input field to an empty string
    dispatch(reset());
  };

  return (
    <>
      <div className="container">
        <h1>{count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrementByAmount}>Increment By Number</button>
        <button onClick={handleReset}>Reset</button>
        <input
          type="number"
          value={data}
          onChange={(e) => setData(e.target.value)} // Corrected function name
        />
      </div>
    </>
  );
}

export default App;
