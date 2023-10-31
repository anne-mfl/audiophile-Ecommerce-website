import CategoryMenu from 'components/CategoryMenu'
import React from 'react'
import ZX9Speaker from './ZX9Speaker'
import ZX7Speaker from './ZX7Speaker'
import YX1Earphones from './YX1Earphones'
import BestAudioGear from 'components/BestAudioGear'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main>
      <section className='mb-36 max-lg:mb-12 max-sm:mb-0'>
        <div className='border-t-1 border-white/20 mx-41 max-lg:mx-10'></div> 
        <div className='absolute pl-41 pt-40 max-lg:p-0 max-lg:w-screen max-lg:h-[calc(100%-112px)] max-lg:flex max-lg:justify-center max-lg:items-center max-sm:h-fit'>
          <div className='max-sm:pt-26 max-lg:text-center'>
            <h2 className='text-newproduct text-white opacity-50 mb-6 '>NEW PRODUCT</h2>
            <h1 className='text-title-56 w-[396px] mb-6 max-sm:w-full'>XX99 MARK II<br/>HEADPHONES</h1>
            <p className='text-description text-white opacity-75 w-[350px] mb-10  max-sm:w-full max-sm:px-10'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            <Link to={'/headphones/xx99-mark-two-headphones'}><button className='button1 max-lg:block max-lg:mx-auto'>SEE PRODUCT</button></Link>
          </div>
        </div>
        <img src={require('assets/home/desktop/image-header.jpg')} className='/*relative bottom-7*/ -z-10 h-[calc(100vh-90px)] w-screen max-lg:hidden' />
        <img src={require('assets/home/tablet/image-header.jpg')} className='relative bottom-7 -z-10 hidden max-lg:block max-lg:bottom-28 max-md:bottom-12 max-sm:hidden' />
        <img src={require('assets/home/mobile/image-header.jpg')} className='relative bottom-7 -z-10 hidden max-sm:block max-sm:bottom-28' />
      </section>

      <section className='mx-41 max-xl:mx-10 max-sm:mx-6'>
        <CategoryMenu />
        <ZX9Speaker />
        <ZX7Speaker />
        <YX1Earphones />
        <BestAudioGear />
      </section>
    </main>
  )
}
