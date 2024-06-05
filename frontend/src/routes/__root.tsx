import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: App
})

function App() {
  return (
    <section className='container p-2 mx-auto'>
      <div className="flex gap-2">
        <Link to="/" className="[&.active]:text-primary px-4 py-2 rounded-md">
          صفحه اصلی
        </Link>
        <Link to="/about" className="[&.active]:text-primary px-4 py-2 rounded-md">
          درباره ما
        </Link>
      </div>
      <hr />
      <Outlet />
    </section>
  )
}