import { createContext, useState, useEffect, useCallback } from "react";
import { getAllInvtry, URL_invtry, getInvtryByItem } from '../services/inventoryServices'
import {  Items } from "../services";

export const InvtryCtx = createContext([]);

export const InvtryCtxProvider = ({ children }) => {
  const [invtry, setInvtry] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  //para filtrar por item 
  const [filterFerreteria, setFilterFerreteria] = useState([]);
  const [filterTranquera, setFilterTranquera] = useState([]);
  const [filterRopaTrabajo, setFilterRopaTrabajo] = useState([]);

  //useCallback: the same function instance is used across renders, optimizing performance by avoiding unnecessary re-creations of the function. This is the key concept behind memoization.
  const fetchData = useCallback(async () => {
    try {
      setError(null);
      setIsLoading(true);
      //guardo todo el inventario en data
      const data = await getAllInvtry(URL_invtry);
      setInvtry(data);
      //voy guardando por item
      const ferreteria = await getInvtryByItem(Items.Ferretería);
      setFilterFerreteria(ferreteria);
      const tranquera = await getInvtryByItem(Items.Tranquera);
      setFilterTranquera(tranquera);
      const ropaTrabajo = await getInvtryByItem(Items.Ropa_de_Trabajo);
      setFilterRopaTrabajo(ropaTrabajo);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <InvtryCtx.Provider value={{ invtry, filterFerreteria, filterTranquera, filterRopaTrabajo ,error, isLoading, setInvtry, fetchData }}>
      {children}
    </InvtryCtx.Provider>
  );
};

