import { ModeToggle } from '@/components/mode-toggle'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage
})

const title = 'اسپارک: اولین پلتفرم فول استک مدرن وب'

function HomePage() {
  return (
    <div className='py-12 text-center'>
      <h1 className='text-center lg:text-4xl md:text-3xl sm:text-2xl text-xl font-black'>
        {title}
      </h1>
      <a target='_blank' className='underline text-blue-400 font-medium' href='https://github.com/soheilghanbary/spark'>
        <p className='pt-4'>سورس پروژه</p>
      </a>
      <div className='text-center mt-4'>
        <ModeToggle />
      </div>
    </div>
  )
}