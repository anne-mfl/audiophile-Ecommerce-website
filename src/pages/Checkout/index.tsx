import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useForm, SubmitHandler } from "react-hook-form"
import { ReactComponent as CashPaymentIcon } from "assets/checkout/icon-cash-on-delivery.svg"
import { useSelector, useDispatch } from "react-redux"
import Modal from 'react-modal'
import ThankyouForYourOrder from "modals/ThankyouForYourOrder"
import Input from "./Input"
import { changeOpenModal } from "store/modalSlice"
import { RootState } from "store"
import { CartItemType, InputsType } from "types"


export default function Checkout() {

  const [paymentMethod, setPaymentMethod] = useState('emoney')

  const navigate = useNavigate()

  const dispatch = useDispatch()
  const openModal = useSelector((state: RootState) => state.modal.openModal)
  const items = useSelector((state: RootState) => state.cart.items)
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<InputsType>({ defaultValues: { paymentMethod: 'emoney' } })

  const onSubmit: SubmitHandler<InputsType> = (data) => {
    console.log(data)
    dispatch(changeOpenModal('confirmation'))
  }

  useEffect(()=>{
    if (items.length === 0) {
      navigate('/404')
    }  }, [])

  return (
    <div className='px-41 pt-16 pb-32 bg-grey max-xl:px-10 max-sm:px-6 max-sm:pt-4'>
      <form onSubmit={handleSubmit(onSubmit)} >
        <button className='button-goback mb-9 max-sm:mb-6' onClick={() => navigate(-1)}>Go Back</button>

        <div className='grid grid-cols-[2fr,1fr] gap-8 max-lg:grid-cols-1'>

          <section className='bg-white rounded-lg p-12 max-lg:p-7 max-sm:p-6'>
            <h1 className='text-title-32 mb-10 max-sm:text-28'>CHECKOUT</h1>

            <h2 className='text-title-13 mb-4'>BILLING DETAILS</h2>

            <div className='grid grid-cols-2 gap-4 mb-12 max-sm:grid-cols-1'>
              <Input
                inputFor={'name'}
                errors={errors.name ? errors.name : false}
                register={register}
                label={'Name'}
                placeholder={'Alexei Ward'}
                type={'text'}
              />
              <Input
                inputFor={'email'}
                errors={errors.email ? errors.email : false}
                register={register}
                label={'Email Address'}
                placeholder={'alexei@mail.com'}
                type={'email'}
              />
              <Input
                inputFor={'phone'}
                errors={errors.phone ? errors.phone : false}
                register={register}
                label={'Phone Number'}
                placeholder={'+1 202 555 0136'}
                type={'number'}
              />
            </div>

            <h2 className='text-title-13 mb-4'>SHIPPING INFO</h2>
            <div className='mb-4'>
              <Input
                inputFor={'address'}
                errors={errors.address ? errors.address : false}
                register={register}
                label={'Address'}
                placeholder={'1137 Williams Avenue'}
                type={'text'}
              />
            </div>
            <div className='grid grid-cols-2 gap-4 mb-12 max-sm:grid-cols-1'>
              <Input
                inputFor={'zip'}
                errors={errors.zip ? errors.zip : false}
                register={register}
                label={'ZIP Code'}
                placeholder={'1001'}
                type={'number'}
              />
              <Input
                inputFor={'city'}
                errors={errors.city ? errors.city : false}
                register={register}
                label={'City'}
                placeholder={'New York'}
                type={'text'}
              />
              <Input
                inputFor={'country'}
                errors={errors.country ? errors.country : false}
                register={register}
                label={'Country'}
                placeholder={'United States'}
                type={'text'}
              />
            </div>

            <h2 className='text-title-13 mb-4'>PAYMENT DETAILS</h2>
            <div className='grid grid-cols-2 gap-4 max-sm:grid-cols-1'>
              <label className='text-input-label block mb-2'>Payment Method</label>
              <div>
                <label
                  className={`text-sm font-bold input-form block mb-4 cursor-pointer hover:border-primary ${paymentMethod === 'emoney' && 'border-primary'}`}
                  onClick={() => setPaymentMethod('emoney')}
                >
                  <input {...register("paymentMethod", { required: true })} type="radio" value="emoney" className='mr-4 checked:accent-primary cursor-pointer' />
                  e-Money
                </label>
                <label
                  className={`text-sm font-bold input-form block mb-8 cursor-pointer hover:border-primary ${paymentMethod === 'cash' && 'border-primary'}`}
                  onClick={() => setPaymentMethod('cash')}
                >
                  <input {...register("paymentMethod", { required: true })} type="radio" value="cash" className='mr-4 checked:accent-primary cursor-pointer' />
                  Cash on Delivery
                </label>
              </div>
            </div>

            {paymentMethod === 'emoney'
              ? <div className='grid grid-cols-2 gap-4 mb-4 max-sm:grid-cols-1'>
                <Input
                  inputFor={'emoneyNumber'}
                  errors={errors.emoneyNumber ? errors.emoneyNumber : false}
                  register={register}
                  label={'e-Money Number'}
                  placeholder={'238521993'}
                  type={'number'}
                />
                <Input
                  inputFor={'emoneyPin'}
                  errors={errors.emoneyPin ? errors.emoneyPin : false}
                  register={register}
                  label={'e-Money PIN'}
                  placeholder={'6891'}
                  type={'number'}
                />
              </div>
              : paymentMethod === 'cash'
              && <div className='flex'>
                <div className='mr-8'>
                  <CashPaymentIcon />
                </div>
                <p className='text-description opacity-50'>The 'Cash on Delivery' option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
              </div>
            }
          </section>

          <section className='bg-white rounded-lg p-12 h-fit max-lg:p-7 max-sm:p-6'>
            <h2 className='text-title-18 mb-8'>SUMMARY</h2>

            {items.map((item: CartItemType) => {
              return <div className='flex justify-between items-center mb-6 last-of-type:mb-8' key={item.name}>
                <div className='flex items-center'>
                  <img src={require(`assets/${item.thumbnail}`)} className='rounded-lg w-16 mr-4' />
                  <div >
                    <h2 className='text-description font-bold'>{item.nameAbbreviated}</h2>
                    <h3 className='text-sm font-bold leading-6.25 opacity-50'>${item.price.toLocaleString()}</h3>
                  </div>
                </div>
                <p className='text-description font-bold opacity-50'>x {item.quantity}</p>
              </div>
            })}

            <div className='flex justify-between items-center mb-1'>
              <h3 className='text-description opacity-50'>TOTAL</h3>
              <p className='text-lg font-bold'>$ {totalPrice.toLocaleString()}</p>
            </div>

            <div className='flex justify-between items-center mb-1'>
              <h3 className='text-description opacity-50'>SHIPPING</h3>
              <p className='text-lg font-bold'>$ 50</p>
            </div>

            <div className='flex justify-between items-center mb-6'>
              <h3 className='text-description opacity-50'>VAT (INCLUDED)</h3>
              <p className='text-lg font-bold'>$ {Math.floor(totalPrice * 0.2)}</p>
            </div>

            <div className='flex justify-between items-center mb-8'>
              <h3 className='text-description opacity-50'>GRAND TOTAL</h3>
              <p className='text-lg font-bold text-primary'>$ {(totalPrice + 50).toLocaleString()}</p>
            </div>

            <button className='button1 w-full' type='submit' >CONTINUE & PAY</button>
            <Modal
              isOpen={openModal === 'confirmation'}
              onRequestClose={()=> dispatch(changeOpenModal('none'))}
              className='focus:outline-none bg-white w-135 p-12 rounded-lg absolute top-8 left-[calc(50%-270px)] max-sm:p-7 max-sm:w-[calc(100%-48px)] max-sm:left-0 max-sm:mx-6 max-sm:top-4'
            >
              <ThankyouForYourOrder />
            </Modal>
          </section>
        </div>

      </form>
    </div >
  )
}
