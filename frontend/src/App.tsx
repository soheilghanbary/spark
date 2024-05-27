import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='p-4'>
      <h1 className='text-blue-600 font-medium'>Vite + React</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </section>
  )
}

export default App
