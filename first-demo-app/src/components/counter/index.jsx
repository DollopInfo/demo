import { Button, Typography } from "@mui/material";
import { useContext, useReducer } from "react";
import { CounterContext } from "../../context/counter-context";
import "./style.css";
const initialValue = {
  age: 10,
};
const Counter = () => {
  const { counter, setCounter } = useContext(CounterContext);
  const reducerFunction = (state, action) => {
    switch (action.type) {
      case "increament":
        return { ...state, age: state.age + action.payload };
      case "decreament":
        return { ...state, age: state.age - (action.payload ?? 1) };
      default:
        return state;
    }
  };

  const [store, dispatch] = useReducer(reducerFunction, initialValue);
  const { age } = store;
  console.log("store  => ", store);
  return (
    <div className="huhuh">
      <Typography variant="h2" textAlign="center" gutterBottom={true}>
        Counter demo
      </Typography>
      <div className="d-flex align-items-center">
        <Button
          variant="contained"
          onClick={() => dispatch({ type: "increament", payload: 10 })}
        >
          +
        </Button>
        <Typography variant="body1" className="main main1">
          {age}
        </Typography>
        <Button
          variant="contained"
          onClick={() => dispatch({ type: "decreament" })}
          disabled={age <= 0}
        >
          -
        </Button>
      </div>
    </div>
  );
};

export default Counter;
