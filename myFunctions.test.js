const functionsModule = require('./myFunctions');

// .checkValue
test('Should be null', () => {
    expect(functionsModule.checkValue(null)).toBeFalsy();
});

// .toBe()      for comparing primitives
test('Adds 1 + 2 to equal 3', () => {
    expect(functionsModule.add(1, 2)).toBe(3);
});

// .not
test('Adds 1 + 2 to NOT equal 4', () => {
    expect(functionsModule.add(1, 2)).not.toBe(4);
});

// .toBeNull()
test('Should be null', () => {
    expect(functionsModule.isNull()).toBeNull();
});

// .toEqual()   for comparing objects
test('User should be Brad Traversy object', () => {
    expect(functionsModule.createUser()).toEqual({
        firstName: 'Brad',
        lastName: 'Traversy'
    });
});

// less than, greater than
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
});

// regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

// arrays
test('Admin should be in usernames', () => {
    usernames = ['John', 'Karen', 'Admin'];
    expect(usernames).toContain('Admin');
});

// ASYNC TESTS
// Promise
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1); // ensures a certain number of callbacks are called
    return functionsModule.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham');
        });
});
// Async Await
test('User fetched name should be Leanne Graham', async () => {
    // * may seem redundant to keep because of async await, but
    // * not including expect.assertions at the start of the test
    // * will prevent assertions in the catch block from running,
    // * resulting in the test to still pass
    expect.assertions(1);
    
    const data = await functionsModule.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});