const sum = require('./sum')
test("The summation of two number", ()=> {
    expect(sum(4, 7)).toBe(11)
})