import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useEffect } from "react";

const UseEffectDemo = () => {
  const [name, setName] = useState("nayan");
  const [list, setList] = useState([]);

  useEffect(() => {
    console.log("hjhghggjh", list);
  }, [list]);

  const addValueToLIst = () => {
    setList([...list, name]);
    console.log(list);
    setName("");
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <TextField
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <Button
          variant="outlined"
          className="py-3 px-5"
          onClick={addValueToLIst}
        >
          Add
        </Button>
      </div>
      {list.map((li) => (
        <div key={li}>{li}</div>
      ))}
    </div>
  );
};

export default UseEffectDemo;
