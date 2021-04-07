import {sumaArray} from './arrayoperations'

test(
    "si le paso un array vacío me devuelve 0",
    () => {
        const arr = [];
        expect(sumaArray(arr)).toBe(0)
    }
)

test(
    "si le paso un undefined o null o no le paso nada, que me devuelva 0",
    ()=> {
        expect(sumaArray(undefined)).toBe(0)
        expect(sumaArray(null)).toBe(0)
        expect(sumaArray()).toBe(0)
    }
)

test(
    "si le paso un array con números quiero que me los sume",
    () => {
        expect(sumaArray([1,2,3,4])).toBe(10)
        expect(sumaArray([5,5,5,5,5])).toBe(25) 
        expect(sumaArray([10])).toBe(10)
    }
)

test(
    "si le paso un array con cosas que no son números, quiero que sume los números",
    () => {
        expect(sumaArray(["pepito", 4, 6, false])).toBe(10)
        expect(sumaArray([null, 4, 6, undefined])).toBe(10)
    }
)