import { React, useState } from "react";
import "../styles/AllTable.css";
import { AiFillDelete, AiFillEdit } from "react-icons/Ai";

function ButtonEdit() {
  const [openDialog, setOpenDialog] = useState(false);
  const [editedProduct, setEditedProduct] = useState(null);

  const handleOpenDialog = () => {
    setOpenDialog(true);

  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <button className="button-edit" onClick={handleOpenDialog}>
        <AiFillEdit />
      </button>
      {openDialog && (
        <div className="dialog">
          <div id="dialog-content">
            <h2>Editar Producto</h2>
            
            <button onClick={handleCloseDialog}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ButtonEdit;
