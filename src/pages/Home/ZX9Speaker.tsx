import { ReactComponent as Circle } from 'assets/home/desktop/pattern-circles.svg'
import { Link } from 'react-router-dom'

export default function ZX9Speaker() {
  return (
    <section className='bg-primary h-140 rounded-lg overflow-hidden mb-10 
     bg-[url("assets/home/desktop/pattern-circles.svg")] bg-no-repeat bg-[left_-120px_bottom_-300px]
     max-lg:h-[720px] max-lg:bg-[center_bottom_48px] max-sm:mb-4
    '>
      <div className='grid grid-cols-2 h-140 max-lg:h-[720px] max-lg:block'>
        <img src={require('assets/home/desktop/image-speaker-zx9.png')} className='w-96 z-10 justify-self-end self-end relative top-3 max-lg:w-48 max-lg:mx-auto max-lg:mt-12 max-lg:mb-16' />
        <div className='w-80 justify-self-center self-center z-10 max-lg:text-center max-lg:mx-auto'>
          <h1 className='text-title-56 mb-6'>ZX9<br />SPEAKER</h1>
          <p className='text-description text-white opacity-75 mb-10'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
          <Link to={'/speakers/zx9-speaker'}>
            <button className='bg-black text-white py-4 px-8 text-13 tracking-1 hover:bg-[#4c4c4c]'>SEE PRODUCT</button>
          </Link>
        </div>
      </div>
      {/* <Circle className='relative right-28 bottom-[600px] max-lg:hidden' /> */}
    </section>
  )
}
