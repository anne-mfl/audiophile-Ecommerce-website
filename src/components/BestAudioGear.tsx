import React from 'react'

export default function BestAudioGear() {
  return (
    <div className='mt-18 mb-36 flex items-center max-lg:flex-col max-lg:mb-24'>
      <img src={require('assets/shared/tablet/image-best-gear.jpg')} className='hidden rounded-lg max-lg:block max-lg:mb-16 max-sm:hidden' />
      <img src={require('assets/shared/mobile/image-best-gear.jpg')} className='hidden rounded-lg max-sm:block max-sm:mb-8' />
      <section className='mr-36 max-xl:mr-10 max-lg:mr-0 max-lg:text-center'>
        <h1 className='text-title-40 mb-8 max-sm:text-28'>BRINGING YOU THE <span className='text-primary'>BEST</span> AUDIO GEAR</h1>
        <p className='text-description opacity-50 max-lg:px-16 max-sm:px-0'>
          Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
        </p>
      </section>
      <img src={require('assets/shared/desktop/image-best-gear.jpg')} className='rounded-lg max-lg:hidden' />
    </div>
  )
}
