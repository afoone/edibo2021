import { calculaTotales } from './facturas'

let mifactura;


describe("hace los cálculos correctos",
    () => {
        beforeAll(
            () => {
                mifactura = {
                    cliente: "pepito",
                    lineas: [
                        {
                            concepto: "a",
                            importe: 30.5
                        },
                        {
                            concepto: "b",
                            importe: 60.5
                        },
                        {
                            concepto: "c",
                            importe: 9
                        }
                    ]
                }

            }
        )

        test(
            "calcula el importe total",
            () => {
                const resultado = calculaTotales(mifactura)
                expect(resultado.total).toBeTruthy()
                expect(resultado.total).toBe(100)
            }
        )

        test(
            "calcula el IVA",
            () => {
                const resultado = calculaTotales(mifactura)
                expect(resultado.iva).toBeTruthy()
                expect(resultado.iva).toBe(21)
            }
        )
    }
)

describe("es tolerante a fallos",
    () => {
        beforeAll(() => {
            () => {
                mifactura = {
                    cliente: "pepito",
                    lineas: [
                        {
                            concepto: "a",
                            importe: 30.5
                        },
                        {
                            concepto: "b",
                            importe: 60.5
                        },
                        {
                            concepto: "c",
                            importe: 9
                        },
                        {
                            concepto: "c",
                            importe: "kldsjf"
                        },
                        {
                            concepto: "c",
                            importe: null
                        }
                    ]
                }
            }
        })

        test(
            "calcula el importe total",
            () => {
                const resultado = calculaTotales(mifactura)
                expect(resultado.total).toBeTruthy()
                expect(resultado.total).toBe(100)
            }
        )

        test(
            "calcula el IVA",
            () => {
                const resultado = calculaTotales(mifactura)
                expect(resultado.iva).toBeTruthy()
                expect(resultado.iva).toBe(21)
            }
        )
    }
)
