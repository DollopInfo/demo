import * as React from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

export default function BasicFilePicker({ setValue, control, watch }) {
  return (
    <Controller
      name="name"
      control={control}
      render={({ field: { onChange, ...restField } }) => (
        <TextField
          type="file"
          className="w-100"
          inputProps={{
            multiple: true,
          }}
          onChange={(e) => {
            onChange(e);
            console.log("vbv  => ", e.target.files[0]);
          }}
          {...restField}
        />
      )}
    />
  );
}
