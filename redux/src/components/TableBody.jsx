import React from "react";
import { ButtonGroup, Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
const TableBody = ({ taskInfo, taskId, deleteButton, editButton }) => {
  console.log("asds", taskId);

  const { id, title, author, end_date, assigned_to } = taskInfo;
  return (
    <tbody>
      <tr>
        <td>{taskId + 1}</td>
        <td>{title}</td>
        <td>{author}</td>
        <td>{assigned_to}</td>
        <td>{end_date}</td>
        <td>
          <Stack className="gap-2 flex-row">
            <Button variant="danger" onClick={deleteButton}>
              Sil
            </Button>
            <Button variant="warning" onClick={editButton}>
              Düzenle
            </Button>
          </Stack>
        </td>
      </tr>
    </tbody>
  );
};

export default TableBody;
