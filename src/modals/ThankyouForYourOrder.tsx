import { useEffect, useState } from 'react'
import { ReactComponent as CheckIcon } from 'assets/checkout/icon-order-confirmation.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from 'store'
import { CartItemType } from 'types'

export default function ThankyouForYourOrder() {

  const items = useSelector((state: RootState) => state.cart.items)
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice)

  const [viewAll, setViewAll] = useState(false)
  const [shownItems, setShownItems] = useState(items.slice(0, 1))

  useEffect(() => {
    setShownItems(viewAll ? items : items.slice(0, 1))
  }, [viewAll, setViewAll])

  return (
    <div>
      <CheckIcon className='mb-8 max-sm:mb-5' />
      <h1 className='text-title-32 mb-6 whitespace-pre-wrap max-sm:text-2xl max-sm:mb-4'>{'THANK YOU\nFOR YOUR ORDER'}</h1>
      <p className='text-description opacity-50 mb-8 max-sm:mb-6'>You will receive an email confirmation shortly.</p>

      <section className='mb-11 grid grid-cols-[1.25fr,1fr] max-sm:grid-cols-1 max-sm:mb-6'>
        <div className={`bg-grey rounded-l-lg p-6 ${items.length === 1 && 'pt-10'} max-sm:rounded-t-lg max-sm:rounded-bl-none`}>
          {shownItems.map((item: CartItemType) => {
            return <div className={`flex justify-between ${items.length > 1 && 'mb-4'}`} key={item.name}>
              <div className='flex'>
                <img src={require(`assets/${item.thumbnail}`)} className='w-12 mr-4' />
                <div>
                  <h2 className='text-description font-bold'>{item.nameAbbreviated}</h2>
                  <h3 className='text-sm font-bold leading-6.25 opacity-50'>${item.price.toLocaleString()}</h3>
                </div>
              </div>
              <p className='text-description font-bold opacity-50'>x {item.quantity}</p>
            </div>
          })}
          {items.length > 1 &&
            <div className='border-t-1 border-black border-opacity-10'>
              <p
                className='text-input-label opacity-50 pt-3 text-center cursor-pointer'
                onClick={() => setViewAll(!viewAll)}
              >
                {viewAll
                  ? 'View less'
                  : `and ${items.length - 1} other item(s)`
                }
              </p>
            </div>
          }
        </div>

        <div className='bg-black rounded-r-lg flex items-end py-10 pl-8 max-sm:py-4 max-sm:pl-6 max-sm:rounded-b-lg max-sm:rounded-tr-none'>
          <div>
            <h3 className='text-description text-white opacity-50'>GRAND TOTAL</h3>
            <p className='text-title-18 text-white'>$ {totalPrice.toLocaleString()}</p>
          </div>
        </div>

      </section>

      <Link to={'/'}>
        <button className='button1 w-full'>BACK TO HOME</button>
      </Link>
    </div>
  )
}
