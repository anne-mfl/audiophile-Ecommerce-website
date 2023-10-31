import { ReactComponent as Logo } from 'assets/shared/desktop/logo.svg'
import { ReactComponent as FacebookIcon } from 'assets/shared/desktop/icon-facebook.svg'
import { ReactComponent as TwitterIcon } from 'assets/shared/desktop/icon-twitter.svg'
import { ReactComponent as InstagramIcon } from 'assets/shared/desktop/icon-instagram.svg'
import { Link, useLocation } from 'react-router-dom'
import * as Scroll from 'react-scroll'


export default function Footer() {

  let scroll = Scroll.animateScroll
  let location = useLocation()

  return (
    <footer className='bg-almostBlack px-41 pb-12 max-xl:px-10 max-sm:px-6'>
      <div className='border-b-4 border-primary w-25 mb-18 max-sm:mx-auto'></div>

      <section className='flex justify-between mb-9 max-xl:flex-col max-xl:mb-8 max-sm:mb-12 max-sm:items-center'>
        {location.pathname === '/'
          ? <div onClick={() => scroll.scrollToTop()} className='hover:cursor-pointer max-xl:mb-8 max-sm:mb-12'><Logo className='' /></div>
          : <Link to={'/'} ><Logo className='max-xl:mb-8 max-sm:mb-12' /></Link>
        }
        <ul className='flex justify-end max-xl:justify-start max-sm:flex-col'>
          {location.pathname === '/'
            ? <li onClick={() => scroll.scrollToTop()} className='hover:cursor-pointer text-navlink max-sm:text-center'>HOME</li>
            : <li className='text-navlink max-sm:text-center'><Link to={'/'}>HOME</Link></li>
          }
          <li className='text-navlink ml-8.5 max-sm:ml-0 max-sm:mt-4 max-sm:text-center'><Link to={'/headphones'}>HEADPHONES</Link></li>
          <li className='text-navlink ml-8.5 max-sm:ml-0 max-sm:mt-4 max-sm:text-center'><Link to={'/speakers'}>SPEAKERS</Link></li>
          <li className='text-navlink ml-8.5 max-sm:ml-0 max-sm:mt-4 max-sm:text-center'><Link to={'/earphones'}>EARPHONES</Link></li>
        </ul>
      </section>

      <section className='flex justify-between items-end mb-14 max-xl:mb-20 max-sm:mb-12'>
        <p className='text-description text-white opacity-50 max-w-[540px] max-xl:max-w-full max-sm:text-center'>
          Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.
        </p>
        <ul className='flex justify-end max-xl:hidden'>
          <li><Link to={'https://www.facebook.com'} className='text-white hover:text-primary'><FacebookIcon /></Link></li>
          <li className='ml-4'><Link to={'https://twitter.com'} className='text-white hover:text-primary'><TwitterIcon /></Link></li>
          <li className='ml-4'><Link to={'https://instagram.com'} className='text-white hover:text-primary'><InstagramIcon /></Link></li>
        </ul>
      </section>

      <section className='max-xl:flex max-xl:justify-between  max-sm:flex-col'>
        <p className='text-description text-white opacity-50 font-bold max-sm:mb-12 max-sm:text-center'>Copyright 2021. All Rights Reserved</p>
        <ul className='hidden max-xl:flex max-xl:justify-end max-sm:justify-center'>
          <li><Link to={'https://www.facebook.com'} className='text-white hover:text-primary'><FacebookIcon /></Link></li>
          <li className='ml-4'><Link to={'https://twitter.com'} className='text-white hover:text-primary'><TwitterIcon /></Link></li>
          <li className='ml-4'><Link to={'https://instagram.com'} className='text-white hover:text-primary'><InstagramIcon /></Link></li>
        </ul>
      </section>
    </footer>
  )
}
