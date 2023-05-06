import { Button, Typography } from "@mui/material";
import { useState } from "react";

const FunctionalComponent = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Button
        variant="contained"
        disabled={counter === 0}
        onClick={() => setCounter(counter - 1)}
      >
        -
      </Button>
      <Typography>{counter}</Typography>
      <Button variant="contained" onClick={() => setCounter(counter + 1)}>
        +
      </Button>
    </>
  );
};

export default FunctionalComponent;
