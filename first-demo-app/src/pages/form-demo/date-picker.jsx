import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

export default function BasicDatePicker({ register, control }) {
  return (
    // <LocalizationProvider dateAdapter={AdapterDayjs}>
    //   <DemoContainer components={["DatePicker"]}>
    //     <DatePicker label="Basic date picker" {...register("date")} />
    //   </DemoContainer>
    // </LocalizationProvider>

    <Controller
      name="date"
      control={control}
      render={({ field: { onChange, ...restField } }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Date"
            onChange={(event) => {
              onChange(event);
            }}
            renderInput={(params) => <TextField {...params} />}
            {...restField}
          />
        </LocalizationProvider>
      )}
    />
  );
}
