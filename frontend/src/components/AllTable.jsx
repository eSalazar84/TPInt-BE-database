import { useContext, useState } from "react";
import { InvtryCtx } from "../context/inventoryContext";
import "../styles/AllTable.css";
import { convertirItemAEnum, formatPrice } from "../utils/fomatPrice";
import { AiFillDelete, AiFillEdit } from "react-icons/Ai";
import { deleteInvtry, updateInvtryById } from "../services/inventoryServices";

function AllTable({ listItem }) {
  const [openDialog, setOpenDialog] = useState(false);
  const { error, isLoading } = useContext(InvtryCtx);
  const [editedProduct, setEditedProduct] = useState(null);

  const handleOpenDialog = (product) => {
    console.log("entre");
    setOpenDialog(true);
    setEditedProduct(product);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleUpdateClick = async () => {
    if (editedProduct) {
      const updatedAmount = parseInt(editedProduct.amount, 10);
      const updatedProduct = {
        ...editedProduct,
        amount: updatedAmount,
      };
      try {
        const updatedProductResponse = await updateInvtryById(
          editedProduct.id,
          updatedProduct
        );
        return updatedProductResponse;
      } catch (error) {
        console.error("Error al actualizar el producto:", error);
      }
    }
    setEditedProduct(null);
  };

  const handleInputChange = (field, value) => {
    let parsedValue = value;
    if (field === "amount" || field === "price") {
      parsedValue = parseFloat(value);
    }
    setEditedProduct({
      ...editedProduct,
      [field]: parsedValue,
    });
    console.log(
      setEditedProduct({
        ...editedProduct,
        [field]: parsedValue,
      })
    );
  };

  /* const handleUpdateClick = async () => {
    if (editedProduct) {
      const updatedAmount = parseInt(editedProduct.amount, 10);
      const updatedProduct = {
        ...editedProduct,
        amount: updatedAmount,
      };
      try {
        const updatedProductResponse = await updateInvtryById(
          editedProduct.id,
          updatedProduct
        );
        console.log(updatedProductResponse);
        //window.location.reload();
        return updatedProductResponse;
      } catch (error) {
        console.error("Error al actualizar el producto:", error);
      }
    }
    setEditedProduct(null);
  }; */

  if (isLoading) return <div className="loader">{isLoading}</div>;
  if (error)
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );
  return (
    <section className="layout">
      <div className="table-container">
        <h1>Lista de Productos</h1>
        <table className="product-table">
          <thead>
            <tr>
              <th>Código</th>
              <th>Productos</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Rubro</th>
              <th>Cantidad disponible</th>
              <th>Imagen</th>
              <th>Modificar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {listItem.map((product) => (
              <tr key={product.id}>
                <td>{product.code}</td>
                <td>{product.product}</td>
                <td>{product.description}</td>
                <td>${formatPrice(product.price)}</td>
                <td>{product.item}</td>
                <td>{product.amount}</td>
                <td>
                  <img src={product.images} alt={product.product} width="100" />
                </td>
                <td>
                  <button
                    className="button-edit"
                    onClick={() => handleOpenDialog(product)}
                  >
                    <AiFillEdit />
                  </button>
                </td>
                <td>
                  <button onClick={() => deleteInvtry(product)}>
                    <AiFillDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        {openDialog && editedProduct && (
          <div className="dialog">
            <div id="dialog-content">
              <h2>Editar Producto</h2>
              <form action="" method="dialog" id="form">
                <input
                  type="text"
                  value={editedProduct.code}
                  onChange={(e) => handleInputChange("code", e.target.value)}
                />
                <input
                  type="text"
                  value={editedProduct.product}
                  onChange={(e) => handleInputChange("product", e.target.value)}
                />
                <input
                  type="text"
                  value={editedProduct.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                />
                <input
                  type="number"
                  value={editedProduct.price}
                  onChange={(e) =>
                    handleInputChange("price", Number(e.target.value))
                  }
                />
                <select
                  name="item"
                  id="item"
                  className="form-input"
                  onChange={(e) =>
                    handleInputChange(
                      "item",
                      convertirItemAEnum(e.target.value)
                    )
                  }
                >
                  <option value="Ferretería">Ferretería</option>
                  <option value="Tranquera">Tranquera</option>
                  <option value="Ropa de trabajo">Ropa de trabajo</option>
                </select>
                <input
                  type="number"
                  value={editedProduct.amount}
                  onChange={(e) =>
                    handleInputChange("amount", Number(e.target.value))
                  }
                />
                <input
                  type="text"
                  value={editedProduct.images}
                  onChange={(e) => handleInputChange("images", e.target.value)}
                />
                <button onClick={() => handleUpdateClick()}>Guardar</button>
                <button onClick={() => handleCloseDialog()}>Cancelar</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default AllTable;
