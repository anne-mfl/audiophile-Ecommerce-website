import { Link } from "react-router-dom"

export default function ZX7Speaker() {
  return (
    <section className='mb-10 rounded-lg
      bg-[url("assets/home/desktop/image-speaker-zx7.jpg")]
      max-md:bg-[url("assets/home/tablet/image-speaker-zx7.jpg")]
      max-sm:bg-[url("assets/home/mobile/image-speaker-zx7.jpg")] bg-center bg-cover bg-no-repeat max-sm:mb-4
    '>
      <div className='grid grid-cols-2 h-80 max-sm:whitespace-nowrap'>
        <div className='pl-28 self-center max-md:pl-16 max-sm:pl-4'>
          <h1 className='text-28 font-bold tracking-2 mb-8'>ZX7 SPEAKER</h1>
          <Link to={'/speakers/zx7-speaker'}>
            <button className='button2'>SEE PRODUCT</button>
          </Link>
        </div>
      </div>
    </section>
  )
}
