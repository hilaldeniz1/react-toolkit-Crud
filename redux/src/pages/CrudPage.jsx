import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import FormModal from "../components/FormModal";
import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "../redux/slices/crudSlices";

import TableBody from "../components/TableBody";
const CrudPage = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const state = useSelector((store) => store.crudReducer);
  console.log("crud state", state.tasks);

  return (
    <div className="px-3">
      <Button onClick={() => setShow(true)} variant="success" className="my-2">
        Yeni Görev Ekle{" "}
      </Button>
      <FormModal show={show} handleClose={handleClose} />
      <Table variant="dark" bordered striped hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Görev</th>
            <th>Yazar</th>
            <th>Atanan</th>
            <th>Tarih</th>
            <th>İşlemler</th>
          </tr>
        </thead>

        {state.tasks.map((task, index) => (
          <TableBody
            deleteButton={() => dispatch(removeTask(task.id))}
            key={index}
            taskInfo={task}
            taskId={index}
          />
        ))}
      </Table>
    </div>
  );
};

export default CrudPage;
