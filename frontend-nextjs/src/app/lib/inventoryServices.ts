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

export const findOne = async (URL_inventory: string): Promise<Inventory> => {
    const res = await fetch(URL_inventory, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        credentials: 'include'
    })
    const data = await res.json();
    return data
}

export const updateInvtry = async (id: number, updtInvtry: Inventory): Promise<Inventory> => {
    const res = await fetch(URL_inventory + id, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify(updtInvtry)
    })
    if (!res.ok) throw new Error(`Item not found`)
    const data = await res.json()
    return data
}

export const deleteInvntry = async (id: number): Promise<any> => {
    const res = await fetch(URL_inventory + id, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        credentials: 'include',
    })
    if (!res.ok) throw new Error(`Item not found`)
    const data = await res.json()
    return data;
}
