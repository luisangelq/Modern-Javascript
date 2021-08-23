const basket = ["Guitar", "Drums", "Keys"];

describe("Test to basket", () => {
    test('Try at least 3 items in the basket', () => {
        expect(basket.length >= 3).toBe(true);
    })

    test("Try the basket isn't empty", () => {
        expect(basket.length).not.toBe(0);
    });
    
});