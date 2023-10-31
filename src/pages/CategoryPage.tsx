import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import CategoryMenu from 'components/CategoryMenu'
import BestAudioGear from 'components/BestAudioGear'
import { useSelector } from 'react-redux'
import Product from 'components/Product'
import { RootState } from 'store'
import { ProductType } from 'types'

export default function Category() {

  let { category } = useParams()
  let navigate = useNavigate()

  const allProducts = useSelector((state: RootState) => state.products)
  const products = allProducts.filter((prod: ProductType) => prod.category === category).sort((a: ProductType, b: ProductType) => b.price - a.price)

  useEffect(() => {
    if (products.length === 0) {
      navigate('/404')
    }
  }, [navigate, products])

  return (
    <>
      <div className='bg-black'>
        <div className='h-60 bg-black flex justify-center items-center mb-40 border-t-1 border-white/20 mx-41 max-sm:h-24 max-lg:mb-28 max-sm:mb-16'>
          <h1 className='text-title-40 text-white uppercase max-sm:text-28'>{category}</h1>
        </div>
      </div>

      <div className='mx-41 max-xl:mx-10 max-sm:mx-6'>

        {products.map((prod: ProductType) => {
          return <Product
            key={prod.id}
            newProduct={prod.new}
            slug={prod.slug}
            name={prod.name}
            description={prod.description}
            image={prod.categoryImage}
            category={category}
          />
        })}

        <div className='h-28'></div>
        <CategoryMenu />
        <BestAudioGear />
      </div>
    </>
  )
}
