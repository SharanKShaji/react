import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

export const RequireAuth = ({children}) => {
  const user= useSelector((state)=>state.loginReducer.loginuser)
  return (
    <div>{ user.user!=='sharan' && !sessionStorage.getItem("user") ? <Redirect to='/' /> : children}</div>
  )
  
}
