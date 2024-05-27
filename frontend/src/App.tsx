import { useQuery } from '@tanstack/react-query'
import { api } from './lib/api'

const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await api.users.$get()
      const data = await res.json()
      return data
    }
  })
}

export function App() {
  const { data, isPending } = useUsers()
  if (isPending) return <p>Loading Data...</p>
  return (
    <section className='p-4'>
      <h1 className='text-blue-600 font-medium'>Vite + React</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </section>
  )
}
