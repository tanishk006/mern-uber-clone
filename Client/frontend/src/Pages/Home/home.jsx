import React from 'react'
import logo from "../../assets/logo.png";



const home = () => {
  return (
    <div>
      <div className='h-screen flex justify-between flex-col w-full bg-red-400'>
      <img src={logo} alt="Uber Logo" className="bg-transparent w-32" />
          <div className='bg-white'>
             <h2>Get started with Uber </h2>
          <button>Continue</button>
          </div>
      </div>
    </div>
  )
}

export default home