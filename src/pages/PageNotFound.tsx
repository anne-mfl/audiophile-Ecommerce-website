import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <section className='h-96 flex justify-center items-center'>
      <div className='text-center'>
        <h1 className='text-56 font-bold text-gray-400'>404</h1>
        <p>Page not found</p>
        <p className='mb-5'>The page you're looking for doesn't exist</p>
        <button className='button1'>
          <Link to={'/'}>Go Home</Link>
        </button>
      </div>
    </section>
  )
}
