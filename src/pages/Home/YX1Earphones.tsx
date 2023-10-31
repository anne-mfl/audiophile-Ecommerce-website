import React from 'react'
import { Link } from 'react-router-dom'

export default function YX1Earphones() {
  return (
    <section className='grid grid-cols-2 gap-4 h-80 max-sm:flex max-sm:flex-col max-sm:h-fit'>
      <img src={require('assets/home/desktop/image-earphones-yx1.jpg')} className='rounded-lg h-80 object-cover bg-center bg-no-repeat max-sm:h-48' />
      <div className='bg-grey rounded-lg w-full flex items-center pl-24 max-lg:pl-10 max-sm:h-48'>
        <div className=''>
          <h1 className='text-28 font-bold tracking-2 mb-8'>YX1 EARPHONES</h1>
          <Link to={'/earphones/yx1-earphones'}>
            <button className='button2'>SEE PRODUCT</button>
          </Link>
        </div>
      </div>
    </section>
  )
}
