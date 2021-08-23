const customer = {
    name: 'John Doe',
    age: 30,
    balance: 500,
    type: 'gold'
}

describe('snapshots', () => {
    test('is John Doe', () => {
        expect(customer).toMatchSnapshot();
    })
    
})