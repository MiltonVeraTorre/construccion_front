import React from 'react'

export default function PerfilHeader() {
  return (
    <div className='my-8 grid place-items-center md:col-span-2 lg:col-span-1'>
      <div className='grid place-items-center'>

      <img 
      src="defaultProfilePic.jpg" 
      alt="Avatar Perfil"
      className='w-20 h-20 rounded-full mx-auto'
      />
      <h2 className="text-center text-2xl font-bold">Nombre Apellido</h2>
      </div>

      <div className='grid place-items-center'>

      <p className='text-center text-orange-400 font-bold text-xl'>Gran Sabio</p>
      <p className='text-center text-gray-700'>1,200 <span>xp</span></p>
      </div>
    </div>
  )
}
