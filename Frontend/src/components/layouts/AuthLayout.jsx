import React from 'react'
import UI_IMG from "../../assets/images/auth-img.png"

const AuthLayout = ({children}) => {
  return <div className="flex">
    <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
        <h2 className="text-lg font-medium text-black">Task Trackr</h2>
        {children}
    </div>

    <div className="hidden md:flex w-[70vw] h-screen items-center justigy-center bg-blue-300 bg-[url('/bg-img-3.jpg')] bg-cover overflow-hidden bg-no-repeat bg-right">
        <img src={UI_IMG} className="w-80 h-150 lg:w-[100%]" />
    </div>
  </div>
}

export default AuthLayout