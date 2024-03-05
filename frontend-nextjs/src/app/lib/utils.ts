import { Items } from "./data";

export function formatPrice(stringPrice: string | number) {
    if (typeof stringPrice === 'number') {
        stringPrice = stringPrice.toFixed(2); // Redondeamos el número a 2 decimales
        const partes = stringPrice.split('.');
        const parteEntera = partes[0];
        const parteDecimal = partes[1];

        let resultado = '';
        let contador = 0;

        for (let i = parteEntera.length - 1; i >= 0; i--) {
            resultado = parteEntera[i] + resultado;
            contador++;
            if ((contador % 3 === 0) && i !== 0) {
                resultado = '.' + resultado;
            }
        }

        stringPrice = resultado + ',' + parteDecimal;

        return stringPrice;
    } else {
        return 'Por favor, proporciona un número válido.';
    }
}

export function convertirItemAEnum(item: string) {
    switch (item) {
        case 'Tranquera':
            return Items.Tranquera;
        case 'Ropa de trabajo':
            return Items.Ropa_de_Trabajo;
        case 'Ferretería':
            return Items.Ferretería;
        default:
            throw new Error('Tipo de item no válido')
    }
}