import { ReactComponent as Logo } from 'assets/shared/desktop/logo.svg'
import { ReactComponent as CartIcon } from 'assets/shared/desktop/icon-cart.svg'
import { ReactComponent as HamburgerIcon } from 'assets/shared/tablet/icon-hamburger.svg'
import { ReactComponent as CloseIcon } from 'assets/shared/tablet/icon-close.svg'
import { Link } from 'react-router-dom'
import Modal from 'react-modal';
import Cart from '../modals/Cart';
import { useSelector, useDispatch } from 'react-redux';
import CategoryMenu from './CategoryMenu'
import { changeOpenModal } from 'store/modalSlice'
import { RootState } from 'store'

export default function Nav() {

  Modal.setAppElement('#root')

  const dispatch = useDispatch()
  const openModal = useSelector((state: RootState) => state.modal.openModal)
  const totalQuantity = useSelector((state: RootState) => state.cart.totalQuantity)

  return (
    <nav className='bg-black'>

      <div className='py-8 mx-40 max-lg:mx-10 max-sm:mx-6 flex justify-between items-center'>

        <div className='flex items-center'>
          {openModal === 'menu'
            ? <CloseIcon
              className='hidden max-lg:block cursor-pointer max-lg:mr-10 max-sm:mr-0'
              onClick={() => dispatch(changeOpenModal('none'))}
            />
            : <HamburgerIcon
              className='hidden max-lg:block cursor-pointer max-lg:mr-10 max-sm:mr-0'
              onClick={() => dispatch(changeOpenModal('menu'))}
            />
          }
          <Link to={'/'} className='max-sm:hidden'><Logo /></Link>
        </div>
        <Modal
          isOpen={openModal === 'menu'}
          onRequestClose={() => dispatch(changeOpenModal('none'))}
          className='bg-white focus:outline-none absolute w-full pt-32 px-10 rounded-lg max-sm:pt-18 max-sm:px-6'
        >
          <CategoryMenu />
        </Modal>

        <div className='hidden max-sm:block'>
          <Link to={'/'}><Logo /></Link>
        </div>

        <ul className='flex max-lg:hidden'>
          <li className='text-navlink mx-8.5'><Link to={'/'}>HOME</Link></li>
          <li className='text-navlink mx-8.5'><Link to={'/headphones'}>HEADPHONES</Link></li>
          <li className='text-navlink mx-8.5'><Link to={'/speakers'}>SPEAKERS</Link></li>
          <li className='text-navlink mx-8.5'><Link to={'/earphones'}>EARPHONES</Link></li>
        </ul>

        <div className='w-6'>
          <CartIcon className='cursor-pointer absolute' onClick={() => dispatch(openModal === 'cart' ? changeOpenModal('none') :changeOpenModal('cart'))} />
          <div
            className={totalQuantity > 0
              ? 'relative left-4 bottom-3 bg-primary text-white text-13 font-bold py-0.5 px-2 rounded-full'
              : 'text-transparent'}
          >{totalQuantity}</div>
          <Modal
            isOpen={openModal === 'cart'}
            onRequestClose={() => dispatch(changeOpenModal('none'))}
            className='focus:outline-none bg-white w-96 p-8 rounded-lg absolute top-10 right-40 max-lg:right-10 max-sm:right-0 max-sm:w-[calc(100%-24px)] max-sm:mx-3 max-sm:px-6'
          >
            <Cart />
          </Modal>
        </div>

      </div>

    </nav>

  )
}
