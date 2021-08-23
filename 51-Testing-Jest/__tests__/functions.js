function sum(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

describe('Test functions sum and substraction', () => {
    test('Sum 20 and 30', () => {
        expect(sum(20, 30)).toBe(50);
    })
    test('Substract 30 and 20', () => {
        expect(substract(30, 20)).toBe(10);
    })
    
    
});