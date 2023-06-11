import useAuth from "@/hooks/useAuth"
import { useState } from "react"

export default function Navegacion({sidebar, setSidebar}:any) {

  const {auth} = useAuth()

  return (
    <div className='w-full bg-white py-5 shadow flex justify-between'>
        <button 
        type='button'
        className='ml-4 fa-solid fa-bars text-xl md:text-3xl text-slate-800 transition-transform hover:scale-110'
        onClick={() => setSidebar(true)}
        >
            
        </button>
        <div className='mr-6 flex justify-center items-center '>
          <h4 className='md:text-lg'>Bienvenido <span className='font-bold text-lg md:text-xl text-slate-700 capitalize'>
            {auth?.sUser.split(" ")[0]}
            </span> </h4>
          <button
            type='button'

          >

          <img className='ml-3 w-9 h-9 md:w-12 md:h-12 rounded-full shadow-none' src={`https://static.vecteezy.com/system/resources/previews/000/649/115/original/user-icon-symbol-sign-vector.jpg`} width={36} height={36} alt="Avatar" />
          </button> 
        </div>

    </div>
  )
}
