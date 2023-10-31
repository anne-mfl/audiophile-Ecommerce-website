import { Link } from "react-router-dom"

type ProductPropsType = {
  newProduct: boolean
  slug: string
  name: string
  description: string
  image: { mobile: string, tablet: string, desktop: string }
  category?: string
}

export default function Product({ newProduct, slug, name, description, image, category }: ProductPropsType) {

  return (
    <div className='mb-32 flex items-center gap-28 even:flex-row-reverse max-lg:flex-col max-lg:even:flex-col max-lg:gap-13 max-lg:mb-30'>

      <img src={require(`assets/${image.desktop}`)} className='rounded-lg w-135 max-lg:hidden' />
      <img src={require(`assets/${image.tablet}`)} className='hidden rounded-lg max-lg:block max-sm:hidden' />
      <img src={require(`assets/${image.mobile}`)} className='hidden rounded-lg max-sm:block' />

      <div className='max-lg:text-center'>
        {newProduct &&
          <h2 className='text-newproduct text-primary mb-4'>NEW PRODUCT</h2>
        }
        <h1 className='text-title-40 w-68 mb-8 uppercase max-lg:mx-auto'>{name}</h1>
        <p className='text-description opacity-50 mb-10 max-lg:px-14 max-lg:mb-6 max-sm:px-0'>{description}</p>
        <Link to={`/${category}/${slug}`}>
          <button className='button1'>SEE PRODUCT</button>
        </Link>
      </div>

    </div>
  )
}
