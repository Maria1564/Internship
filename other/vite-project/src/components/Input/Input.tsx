import React from 'react'
import { Field, ErrorMessage } from 'formik'
import "./Input.css"

type InputProps = {
    id: string,
    label: string,
    name: string,
    placeholder: string,
    type?: string,
}

const Input: React.FC<InputProps> = ({id, label, name, placeholder, type="text"}) => {
  return (
    <div className='input_container'>
        <label htmlFor={id}>{label}</label>
        <Field id={id} type={type} name={name} placeholder={placeholder} />
        <ErrorMessage name={name}>{(error)=><span className='error'>{error}</span>}</ErrorMessage>
    </div>
  )
}

export default Input