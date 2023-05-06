import { Button, CircularProgress, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import MainLayout from "../../layouts/main-layout";
import BasicDatePicker from "./date-picker";
import SelectDemo from "./select-react";

const initialValues = {
  name: "",
  email: "",
  date: null,
  age: [],
};
// let users = [
//   {
//     name: "one",
//     email: "ddfdf",
//     date: "2023-03-21",
//     age: [10, 30, 20],
//   },
//   {
//     name: "two",
//     email: "ddfdf",
//     date: "2023-03-21",
//     age: [30],
//   },
//   {
//     name: "three",
//     email: "ddfdf",
//     date: "2023-03-21T18:30:00.000Z",
//     age: [10, 20],
//   },
// ];
const FormDemo = () => {
  const { register, handleSubmit, control, setValue, watch, reset } = useForm({
    defaultValues: { ...initialValues },
  });
  const [users, setUsers] = useState([]);
  console.log("users  => ", users);
  const [loader, setLoader] = useState(false);
  const selectVal = watch("age");
  const [current, setCurrent] = useState(null);
  const resetValues = () => {
    // setValue("name", "");
    setValue("email", "");
    setValue("date", "");
    setValue("age", []);
  };

  const onSubmit = (values) => {
    console.log("values ", values);
    setUsers([...users, values]);
    resetValues();
  };

  const edit = (user) => {
    setLoader(true);
    setCurrent(user);
  };
  useEffect(() => {
    if (current) {
      Object.keys(current).map((key) => {
        setValue(key, current[key]);
      });
    }
    setLoader(false);
  }, [current]);

  return (
    <MainLayout>
      {loader ? (
        <CircularProgress />
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <div className="d-flex flex-column">
            <TextField
              type="file"
              className="w-100"
              {...register("name")}
              inputProps={{
                multiple: true,
                accept: "image/*",
              }}
            />
            {/* <input type="text" ref={emailRef} /> */}
            <TextField
              label="Email"
              name="email"
              {...register("email")}
              className="w-100"
            />
            <BasicDatePicker register={register} control={control} />
            {selectVal !== undefined && (
              <SelectDemo register={register} control={control} />
            )}
            <Button variant="outlined" type="submit">
              Submit
            </Button>
          </div>
        </form>
      )}
      {!!users.length &&
        users.map((user, index) => (
          <Button key={index} onClick={() => edit(user)}>{`Edit${
            index + 1
          }`}</Button>
        ))}
    </MainLayout>
  );
};
export default FormDemo;
