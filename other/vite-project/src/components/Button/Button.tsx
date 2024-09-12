import React, { ReactNode } from 'react'
import "./Button.css"

type ButtonProps = {
    children: ReactNode,
    type?: "button" | "submit" | "reset",
    onClick?: ()=> void
}

const Button: React.FC<ButtonProps> = ({children, onClick, type="button"}) => {
  return (
    <button type={type} className='btn' onClick={onClick}>{children}</button>
  )
}

export default Button