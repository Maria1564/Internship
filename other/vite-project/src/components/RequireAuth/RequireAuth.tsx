import React from 'react'
import { Navigate } from 'react-router-dom'

type RequireAuthProps = {
    isAuth: boolean,
    children: React.ReactNode
}

const RequireAuth: React.FC<RequireAuthProps> = ({isAuth, children}) => {

    if(!isAuth){
        return <Navigate to="/login"/>
    }
  return children
}

export default RequireAuth