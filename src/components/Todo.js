import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function Todo({ todo, toggleComplete, handleDelete, handleEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleInputChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleEditConfirm = () => {
    handleEdit(todo, editedTitle);
    setIsEditing(false);
  };

  return (
    <div className="todo">
      {isEditing ? (
        <input
          type="text"
          value={editedTitle}
          onChange={handleInputChange}
          className="list1"
        />
      ) : (
        <div
          style={{ textDecoration: todo.completed && "line-through" }}
          className="list"
          onClick={() => handleEditClick()}
        >
          {todo.title}
        </div>
      )}
      <div>
        <button className="btn-complete" onClick={() => toggleComplete(todo)}>
          <CheckCircleIcon id="1" />
        </button>
        {isEditing ? (
          <button className="btn-edit" onClick={() => handleEditConfirm()}>
            <CheckCircleIcon id="1" />
          </button>
        ) : (
          <button className="btn-edit" onClick={() => handleEditClick()}>
            <EditIcon id="1" />
          </button>
        )}
        <button className="btn-delete" onClick={() => handleDelete(todo.id)}>
          <DeleteIcon id="1" />
        </button>
      </div>
    </div>
  );
}

export default Todo;
