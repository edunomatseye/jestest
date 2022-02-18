import React, {useState} from 'react'

function Counter() {
  const [counter, setCounter] = useState(0)
  return (
    <div>
        <div>Counter Incremented {{counter}} time(s)</div>
        <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
    </div>
  )
}

module.exports = Counter