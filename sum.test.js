const sum = require('./sum')
test("The summation of two number", ()=> {
    expect(sum(4, 7)).toBe(11)
})

it("should add 2 + 2 and gives 4", ()=>{
    const sum = 2 + 2
    expect(sum).toEqual(4)
})

describe("arrays", () => {
    test("Availability of items in an array", ()=>{
        const arr = ['okoro', 'peters', 'paul', 'abraham']
        expect(arr).toContain('peters')
    })
})