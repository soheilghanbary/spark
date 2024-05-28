import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: App
})

function App() {
  return (
    <section className='container p-4 mx-auto'>
      <div className="flex gap-4">
        <Link to="/" className="[&.active]:text-primary text-muted-foreground font-medium px-3 py-2">
          Home
        </Link>
        <Link to="/about" className="[&.active]:text-primary text-muted-foreground font-medium px-3 py-2">
          About
        </Link>
      </div>
      <hr />
      <Outlet />
    </section>
  )
}