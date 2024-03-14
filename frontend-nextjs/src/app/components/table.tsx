import React from "react";
import { findAll, URL_inventory } from "../lib/inventoryServices";
import { Inventory } from "../lib/data";
import { formatPrice } from "../lib/utils";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import ButtonOptions from "./ButtonOptions";
import "./table.css";

async function Table() {
  const listItem: Inventory[] = await findAll(URL_inventory);

  return (
    <table className="table-container">
      <thead>
        <tr>
          <th>Codigo</th>
          <th>Productos</th>
          <th>Descripcion</th>
          <th>Precio</th>
          <th>Rubro</th>
          <th>Cantidad Disponible</th>
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
              <img
                src={product.images}
                alt={product.product}
                width={100}
                height={100}
              />
            </td>
            <td>
              <ButtonOptions
                product={product.product}
                icon={<AiFillEdit className="btn-options" />}
                onclick={handleEdit}
              />
            </td>
            <td>
              <ButtonOptions
                product={product.code}
                icon={<AiFillDelete className="btn-options" />}
                onclick={handleDelete}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
