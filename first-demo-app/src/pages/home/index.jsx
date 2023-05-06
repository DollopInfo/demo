import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Decrement from "../../actions";
import MainLayout from "../../layouts/main-layout";
import getRequest from "../../api-handler";

const Home = () => {
  const count = 0;
  const xyz = useSelector((store) => store);
  const dispatch = useDispatch();
  console.log("xyz =>", xyz);
  const getAllUsers = async () => {
    const data = await getRequest("user");
    console.log("data  => ", data);
  };
  return (
    <MainLayout secure>
      <div className="d-flex justify-content-center align-items-center gap-4">
        <Button onClick={getAllUsers}>Get All Users</Button>
        <Button onClick={() => dispatch(Decrement(15))} variant="contained">
          -
        </Button>
        <Typography variant="h4" className="my-5" textAlign={"center"}>
          {count}
        </Typography>
        <Button
          onClick={() =>
            dispatch({
              type: "increment",
            })
          }
          variant="contained"
        >
          +
        </Button>
      </div>
    </MainLayout>
  );
};

export default Home;
