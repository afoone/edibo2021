import { sumaArray } from './arrayoperations'

export const calculaTotales = (factura) => {
    const importes = factura.lineas.map(l => l.importe)
    const total = sumaArray(importes)
    return {
        total: total,
        iva: total * 0.21
    }
}