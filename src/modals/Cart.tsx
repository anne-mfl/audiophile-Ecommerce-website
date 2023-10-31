import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { addItemByOne, removeItemByOne, resetCart } from "store/cartSlice"
import { changeOpenModal } from "store/modalSlice"
import { RootState } from 'store';
import { CartItemType } from "types";

export default function Cart() {

  const dispatch = useDispatch()
  const items = useSelector((state: RootState) => state.cart.items)
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice)
  const totalQuantity = useSelector((state: RootState) => state.cart.totalQuantity)

  return (
    <div>
      <section className='flex justify-between mb-8'>
        <h1 className='text-title-18'>CART ({totalQuantity})</h1>
        <button
          className='description opacity-50 underline'
          onClick={() => dispatch(resetCart())}
        >Remove all</button>
      </section>

      {items.map((item: CartItemType) => {
        return <section className='flex justify-between items-center mb-6' key={item.name}>
          <div className='flex items-center'>
            <img src={require(`assets/${item.thumbnail}`)} className='rounded-lg w-16 mr-4' />
            <div >
              <h2 className='text-description font-bold'>{item.nameAbbreviated}</h2>
              <h3 className='text-sm font-bold leading-6.25 opacity-50'>${item.price.toLocaleString()}</h3>
            </div>
          </div>

          <div className='bg-grey flex justify-around text-13 font-bold'>
            <button
              className='opacity-25 hover:text-primary hover:opacity-100 px-3 py-2'
              onClick={() => dispatch(removeItemByOne(item.id))}
            >-</button>
            <p className='py-2 px-3'>{item.quantity}</p>
            <button
              className='opacity-25 hover:text-primary hover:opacity-100 px-3 py-2'
              onClick={() => dispatch(addItemByOne(item.id))}
            >+</button>
          </div>

        </section>
      })}

      <section className='flex justify-between mb-6 pt-2'>
        <p className='description opacity-50 '>TOTAL</p>
        <p className='text-lg font-bold '>${totalPrice.toLocaleString()}</p>
      </section>

      <Link to={'/checkout'}>
        <button
          className='button1 w-full disabled:bg-primaryLight'
          disabled={totalQuantity === 0}
          onClick={() => dispatch(changeOpenModal('none'))}
        >CHECKOUT</button>
      </Link>
    </div>
  )
}
