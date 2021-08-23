const client = {
    name: 'Luis',
    age: 30,
    balance: 600
}

describe('Test Objects', () => {
    test('Client is premium', () => {
        expect(client.balance).toBeGreaterThan(500);
    })

    test("Is luis", () => {
        expect(client.name).toBe('Luis');
    })

    test("Is not premium", () => {
        expect(client.balance).toBeLessThan(700);
    })
    
})