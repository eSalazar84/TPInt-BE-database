export type Inventory = {
    id: number
    code: string
    product: string
    description: string
    price: number
    item: Items
    amount: number
    images: string
}

export enum Items {
    Tranquera = 'Tranquera',
    Ropa_de_Trabajo = 'Ropa de trabajo',
    Ferretería = 'Ferretería'
} 
