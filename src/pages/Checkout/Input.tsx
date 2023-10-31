import { UseFormRegister, FieldError } from 'react-hook-form'
import { InputsType } from 'types'

type InputProps = {
  errors: boolean | FieldError
  register: UseFormRegister<InputsType>
  label: string
  placeholder: string
  type: string
  inputFor: any
}

export default function Input({ errors, register, label, placeholder, type, inputFor }: InputProps) {

  return (
    <div>
      <div className='flex justify-between'>
        <label className='text-input-label block mb-2'>{label}</label>
        {errors && <span className='text-error-message'>This field is required</span>}
      </div>
      <input className={`input-form w-full ${errors && 'border-red-600'}`} type={type} placeholder={placeholder}
        {...register(inputFor, { required: true })}
      />
    </div>
  )
}
