import { Inventory } from "./data";

export const URL_inventory: string = 'http://localhost:3010/inventory';

export const findAll = async (URL_inventory: string): Promise<Inventory[]> => {
    const res = await fetch(URL_inventory, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        mode: "cors",
        credentials: 'include'
    })
    const data = await res.json()
    return data
}

