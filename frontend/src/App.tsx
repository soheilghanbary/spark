import { useEffect, useState } from 'react'
import { api } from './lib/api'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    async function getUsers() {
      const res = await api.users.$get()
      const data = await res.json()
      console.log(data)
    }
    getUsers()
  })

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
