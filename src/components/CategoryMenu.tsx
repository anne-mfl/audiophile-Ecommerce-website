import { ReactComponent as Arrow } from 'assets/shared/desktop/icon-arrow-right.svg'
import { Link, useLocation } from 'react-router-dom'
import * as Scroll from 'react-scroll'
import { useDispatch } from 'react-redux'
import { changeOpenModal } from 'store/modalSlice'

export default function CategoryMenu() {

  let scroll = Scroll.animateScroll
  let location = useLocation()
  const dispatch = useDispatch()

  const categories = ['headphones', 'speakers', 'earphones']

  return (
    <div className='grid grid-cols-3 gap-7 max-lg:gap-2 max-sm:block'>

      {categories.map((category) => {
        return <div className='mb-36 h-36 max-lg:h-20 max-sm:h-16' key={category}>
          <div className='bg-grey rounded-lg pt-24 max-lg:pt-16 max-sm:pt-12'>
            <h1 className='text-title-18 uppercase text-center mb-4 max-md:text-15 max-sm:mb-3'>{category}</h1>
            {location.pathname === `/${category}`
              ? <div onClick={() => {
                scroll.scrollToTop()
                dispatch(changeOpenModal('none'))
              }}
                className='flex justify-center'>
                <button className='button3 flex justify-center items-center mb-7'>
                  SHOP<Arrow className='ml-4' />
                </button>
              </div>
              : <Link to={`/${category}`} className='flex justify-center' onClick={() => dispatch(changeOpenModal('none'))}>
                <button className='button3 flex justify-center items-center mb-7 max-sm:mb-5'>
                  SHOP<Arrow className='ml-4' />
                </button>
              </Link>
            }
          </div>
          <img
            src={require(`assets/shared/desktop/image-category-thumbnail-${category}.png`)}
            className='w-48 h-52 object-contain mx-auto relative bottom-[260px] z-10
            max-lg:w-40 max-sm:w-32 max-sm:h-40 max-sm:bottom-[200px]
          ' /> 
        </div>
      })
      }

    </div>
  )


}
