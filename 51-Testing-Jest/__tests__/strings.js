const password = 'Ex3600000';

describe("Validate the password in not empty and at least 6 char", () => {

    test('Password is not empty', () => {
        expect(password).not.toBe('');
    })

    test('Password is at least 6 char', () => {
        expect(password.length >= 6).toBe(true);
    })
})