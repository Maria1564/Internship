import React, { ReactNode } from 'react'
import "./Button.css"

type ButtonProps = {
    children: ReactNode
}

const Button: React.FC<ButtonProps> = ({children}) => {
  return (
    <button type='submit' className='btn'>{children}</button>
  )
}

export default Button