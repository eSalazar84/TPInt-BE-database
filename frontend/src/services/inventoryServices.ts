export const URL_invtry = 'http://localhost:3000/inventory';
import { DeleteResult } from "typeorm";
import { Inventory, Items } from ".";

const controller = new AbortController();

export const getAllInvtry = async (URL_invtry: string): Promise<Inventory[]> => {
    try {
        const res = await fetch(URL_invtry, {
            method: 'GET',
            headers: { 'Content-Type': "application/json" },
            signal: controller.signal
        });
        if (!res.ok) throw new Error("Response not ok");
        const parsed = await res.json();
        return parsed;
    } catch (err) {
        throw err;
    }
}

export const getInvtryById = async (id: number): Promise<Inventory> => {
    try {
        const res = await fetch(`${URL_invtry}/${id}`, {
            method: "GET",
            headers: { 'Content-Type': "application/json" },
            signal: controller.signal
        });
        if (!res.ok) throw new Error("Response not ok");
        const parsed = await res.json();
        return parsed;
    } catch (err) {
        throw err;
    }
}

//works!
export const addInvtry = async (invtry: Inventory) => {
    try {
        const res = await fetch(URL_invtry, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(invtry)
        });
        console.log(`res:${res.json()}`);
        if (!res.ok) throw new Error(`Response not OK`)

        const parsed = res.json();
        window.location.reload();
        return parsed;
    } catch (err) {
        throw (err);
    }
}

export const deleteInvtry = async (invtry: Inventory): Promise<DeleteResult> => {
    try {
        const res = await fetch(`${URL_invtry}${invtry.id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
        if (!res.ok) throw new Error(`Response not OK`)
        const parsed = await res.json();
        window.location.reload();
        return parsed
    } catch (err) {
        throw (err);
    }
}

export const updateInvtryById = async (id: number, updatedProduct: Inventory): Promise<Inventory> => {
    //const invtryFound: Inventory = await getInvtryById(updatedProduct.id)
    //if (!invtryFound) throw new Error('Inventory not found')
    try {
        const res = await fetch(`${URL_invtry}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedProduct),
        });
        console.log("PRODUCTO NUEVO", updatedProduct);
        const parsed = await res.json();
        return parsed;
    } catch (err) {
        throw (err);
    }
}

export const getInvtryByItem = async (item: Items): Promise<Inventory[]> => {
    const res = await fetch(URL_invtry)
    const allInvtry = await res.json();
    const items = allInvtry.filter((invtry: Inventory) => invtry.item === item)
    if (!items.length) throw new Error(`No hay ${item} en stock`)
    return items;
}


