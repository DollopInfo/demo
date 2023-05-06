import { Button } from "@mui/material";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import MainLayout from "../../layouts/main-layout";
import FormDemo from "./form-demo";

const RowColDemo = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(localStorage.setItem("token", "jhfgfffgdgfdgfdgfd"));
  return (
    <MainLayout secure>
      <Button onClick={handleShow}>Open Modal</Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormDemo />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </MainLayout>
  );
};

export default RowColDemo;
