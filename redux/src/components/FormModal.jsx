import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { addTask } from "./../redux/slices/crudSlices";
import { useDispatch } from "react-redux";
const FormModal = ({ handleClose, show }) => {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({
    title: "",
    author: "",
    assigned_to: "",
    end_date: "",
  });

  const handleSubmit = (e) => {
    console.log("girdim");
    e.preventDefault();

    dispatch(addTask(formState));

    handleClose();
  };

  const onChange = (key, e) => {
    setFormState({ ...formState, [key]: e.target.value });
  };

  return (
    <>
      <Modal
        className="text-dark"
        backdrop="static"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Görev Ekle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mg-3">
              {" "}
              <Form.Label>Başlık</Form.Label>
              <Form.Control
                onChange={(e) => onChange("title", e)}
                type="text"
                placeholder="Görev İçin Başlık Girin"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Yazar</Form.Label>
              <Form.Control
                onChange={(e) => onChange("author", e)}
                type="text"
                placeholder="Yazar Giriniz"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Atanacak Kişi Bilgisi</Form.Label>
              <Form.Control
                onChange={(e) => onChange("assigned_to", e)}
                type="text"
                placeholder="Atanacak Kişi Giriniz"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Bitirme Tarihi</Form.Label>
              <Form.Control
                onChange={(e) => onChange("end_date", e)}
                type="date"
                placeholder="Bitirme Tarihi Belirleiyniz"
              />
            </Form.Group>

            <Form.Group className="d-flex gap-2">
              <Button variant="secondary" onClick={handleClose}>
                Kapat
              </Button>
              <Button variant="primary" type="submit">
                Kaydet
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FormModal;
