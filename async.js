const axios = require('axios')

const fetchData = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`
    const results = await axios.get(url)
    console.log(results.data)
    return results.data
}

fetchData(4)

module.exports = fetchData