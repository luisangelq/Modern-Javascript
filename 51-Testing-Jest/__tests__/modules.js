import { sum } from "../js/funciones.js"

describe("Sum of two numbers", () => {
    test('test 30 and 20 have to be 50', () => {
        expect(sum(30, 20)).toBe(50);
    })
    
})