export type CartItemType = {
  id: number
  name: string
  nameAbbreviated: string
  price: number
  quantity: number
  thumbnail: string
}

export type ProductType = {
  category: string
  categoryImage: { desktop: string, mobile: string, tablet: string }
  description: string
  features: string
  gallery: {
    first: { desktop: string, mobile: string, tablet: string }
    second: { desktop: string, mobile: string, tablet: string }
    third: { desktop: string, mobile: string, tablet: string }
  }
  id: number
  image: { desktop: string, mobile: string, tablet: string }
  includes: { quantity: number, item: string }[]
  name: string
  nameAbbreviated: string
  new: boolean
  others: { slug: string, name: string, category: string, image: { desktop: string, mobile: string, tablet: string } }[]
  price: number
  slug: string
}

export type InputsType = {
  name: string
  email: string
  phone: number
  address: string
  zip: number
  city: string
  country: string
  paymentMethod: string
  emoneyNumber?: number
  emoneyPin?: number
}

