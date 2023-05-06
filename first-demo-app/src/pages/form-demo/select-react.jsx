import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";

const SelectDemo = ({ control }) => (
  <FormControl fullWidth>
    <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
    <Controller
      render={({ field: { ...restField } }) => (
        <Select
          {...restField}
          defaultValue={""}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="Age"
        >
          <MenuItem value="Choose" disabled>
            Choose
          </MenuItem>
          <MenuItem value={10} selected>
            Ten
          </MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      )}
      name={"age"}
      control={control}
    />
  </FormControl>
);

export default SelectDemo;
