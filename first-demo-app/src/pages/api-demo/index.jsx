import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import getRequest, { postRequest, putRequest } from "../../api-handler";
import MediaCard from "../../components/cards/media-card";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ApiDemo = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [file, setFile] = useState([]);
  const [currentId, setCurrentId] = useState("");
  const getData = async () => {
    const response = await getRequest("/crud");
    setData(response.slice(0, 20));
  };
  console.log("file  => ", file);
  const addData = async () => {
    if (!name) {
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("avatar", file);
    const response = await postRequest("/crud", formData);
    if (response) {
      getData();
      handleClose();
    } else {
    }
  };
  const updateData = async (id) => {
    setCurrentId(id);
    const response = await getRequest(`/crud/${id}`);
    if (response) {
      setName(response.name);
      handleOpen();
    } else {
    }
  };
  const update = async () => {
    if (!name) {
      return;
    }
    const response = await putRequest(`/crud/${currentId}`, {
      name: name,
    });
    if (response) {
      getData();
      handleClose();
    } else {
    }
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setCurrentId("");
    setName("");
    setOpen(false);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div>
        <Button onClick={handleOpen}>Add Data</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <TextField
              id="outlined-basic"
              label="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              type="file"
              variant="outlined"
              inputProps={{
                multiple: true,
              }}
              className="mt-3"
            />
            {currentId ? (
              <Button onClick={update}>Update</Button>
            ) : (
              <Button onClick={addData}>Submit</Button>
            )}
          </Box>
        </Modal>
      </div>{" "}
      <div className="card-container">
        {data.length ? (
          data.map((item, index) => (
            <MediaCard
              key={index}
              item={item}
              getData={getData}
              updateData={updateData}
            />
          ))
        ) : (
          <div>No data</div>
        )}
      </div>
    </div>
  );
};

export default ApiDemo;
