import React from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {
  // console.log(data)

  const logoutUser=()=>{
   localStorage.removeItem('loggedInUser')
   props.changeUser('')
  //  window.location.reload()
  }
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl font-medium'>{props.data?.firstName || "User"} 👋</span>
 </h1>
        <button onClick={logoutUser} className='bg-red-500 text-white px-5 py-2 rounded text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header