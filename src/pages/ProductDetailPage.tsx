import { useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import CategoryMenu from 'components/CategoryMenu'
import BestAudioGear from 'components/BestAudioGear'
import { useDispatch, useSelector } from "react-redux"
import { incrementCounter, decrementCounter, resetCounter } from "store/counterSlice"
import { addItemToCart } from "store/cartSlice"
import { RootState } from 'store'
import { ProductType } from 'types'

export default function ProductDetailPage() {

  let { slug } = useParams()
  let navigate = useNavigate()

  const dispatch = useDispatch()
  const allProducts = useSelector((state: RootState) => state.products)
  const product = allProducts.filter((prod: ProductType) => prod.slug === slug)[0]
  // console.log(product.slug)
  const quantity = useSelector((state: RootState) => state.counter)
  const itemsInCart = useSelector((state: RootState) => state.cart.items)
  // console.log(JSON.stringify(itemsInCart))

  useEffect(() => {
    if (product === undefined) {
      navigate('/404')
    }
  }, [navigate, slug, product])


  // let local = localStorage.getItem('cart')
  // useEffect(() => {
  //   console.log(local)
  // }, [local])

  return (
    <>
      {product !== undefined &&
        <div className='mx-41 max-xl:mx-10 max-sm:mx-6'>
          <button className='button-goback mt-20 mb-14 max-lg:mt-8 max-lg:mb-6' onClick={() => navigate(-1)}>Go Back</button>

          <div className='mb-32 flex items-center gap-16 max-lg:mb-30 max-sm:flex-col max-sm:gap-8 max-sm:mb-22'>

            <img src={require(`assets/${product.image.desktop}`)} className='rounded-lg w-135 max-lg:hidden' />
            <img src={require(`assets/${product.image.tablet}`)} className='hidden rounded-lg w-72 max-lg:block max-sm:hidden' />
            <img src={require(`assets/${product.image.mobile}`)} className='hidden rounded-lg max-sm:block' />

            <div className=''>
              {product.new && <h2 className='text-newproduct text-primary mb-4'>NEW PRODUCT</h2>}
              <h1 className='text-title-40 w-68 mb-8 uppercase max-lg:text-28'>{product.name}</h1>
              <p className='text-description opacity-50 mb-10'>{product.description}</p>

              <h3 className='text-title-18 mb-12'>${product.price.toLocaleString()}</h3>

              <div className='flex max-sm:w-full'>

                <div className='bg-grey flex justify-around text-13 font-bold max-sm:grow'>
                  <button
                    className='opacity-25 hover:text-primary hover:opacity-100 p-3'
                    onClick={() => dispatch(decrementCounter(1))}
                  >-</button>
                  <p className='py-3 px-4'>{quantity.counter}</p>
                  <button
                    className='opacity-25 hover:text-primary hover:opacity-100 p-3'
                    onClick={() => dispatch(incrementCounter(1))}
                  >+</button>
                </div>

                <button
                  className='button1 ml-4 whitespace-nowrap max-sm:grow max-sm:mr-8 '
                  onClick={() => {
                    dispatch(resetCounter())
                    dispatch(addItemToCart({
                      id: product.id,
                      name: product.name,
                      nameAbbreviated: product.nameAbbreviated,
                      price: product.price,
                      quantity: quantity.counter,
                      thumbnail: product.image.desktop
                    }))
                    localStorage.setItem('cart', JSON.stringify(itemsInCart))
                  }}
                >
                  ADD TO CART
                </button>
              </div>

            </div>

          </div>

          <section className='grid grid-cols-[2fr,1fr] mb-40 max-lg:block max-lg:mb-30 max-sm:mb-22'>
            <div className='mr-32 max-lg:mr-0 max-lg:mb-30 max-sm:mb-22'>
              <h2 className='text-title-32 mb-8'>FEATURES</h2>
              <p className='text-description opacity-50 whitespace-break-spaces'>{product.features}</p>
            </div>
            <div className='max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1'>
              <h2 className='text-title-32 mb-8'>IN THE BOX</h2>
              <div>
                {product.includes.map((inc: { quantity: number, item: string }) => {
                  return <div className='mb-2 flex' key={inc.item}>
                    <p className='text-description text-primary font-bold mr-6'>{inc.quantity}x</p>
                    <p className='text-description opacity-50'>{inc.item}</p>
                  </div>
                })}
              </div>
            </div>
          </section>


          <section className='flex gap-8 max-sm:flex-col max-lg:gap-5 mb-40 max-lg:mb-30'>
            <div className='flex gap-8 flex-col max-lg:gap-5'>
              <img src={require(`assets/${product.gallery.first.desktop}`)} alt='gallery image' className='rounded-lg object-cover w-full min-h-[280px] max-lg:min-h-[174px]' />
              <img src={require(`assets/${product.gallery.second.desktop}`)} alt='gallery image' className='rounded-lg object-cover w-full min-h-[280px] max-lg:min-h-[174px]' />
            </div>
            <div>
              <img src={require(`assets/${product.gallery.third.desktop}`)} alt='gallery image' className='rounded-lg object-cover w-full min-h-[592px] max-lg:min-h-[368px]' />
            </div>
          </section>


          <section className='text-center mb-56 max-sm:mb-40'>
            <h2 className='text-title-32 mb-16 max-sm:text-2xl'>YOU MAY ALSO LIKE</h2>
            <div className='grid grid-cols-3 gap-x-8 max-lg:gap-x-2 max-sm:block'>
              {product.others.map((other: { slug: string, name: string, category: string, image: { mobile: string, tablet: string, desktop: string } }) => {
                return <div className='max-sm:mb-14' key={other.slug}>
                  <img src={require(`assets/${other.image.desktop}`)} className='rounded-lg mb-10 max-lg:hidden' />
                  <img src={require(`assets/${other.image.tablet}`)} className='hidden rounded-lg mb-10 max-lg:block max-sm:hidden' />
                  <img src={require(`assets/${other.image.mobile}`)} className='hidden rounded-lg mb-8 max-sm:block' />
                  <h3 className='text-title-24 uppercase mb-8'>{other.name}</h3>
                  <Link to={`/${other.category}/${other.slug}`} className=''><button className='button1'>SEE PRODUCT</button></Link>
                </div>
              })}
            </div>
          </section>

          <CategoryMenu />
          <BestAudioGear />
        </div>
      }
    </>
  )
}
