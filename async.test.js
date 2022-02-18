const fetchData = require('./async')

it("should return the correct todo node", async() => {
    const todo = await fetchData(4)
    expect(todo.id).toBe(4)
})