import React from 'react'

export default function Encuadres() {
  return (
    <div className='grid grid-cols-2 gap-4 w-full'>
        <div className='space-y-1'>
            <h3 className='text-lg font-bold text-gray-600 text-center'>Inicio Encuadre</h3>
            <p className='text-center'>Junio, 2020</p>
        </div>
        <div className='space-y-1'>
            <h3 className='text-lg font-bold text-gray-600 text-center'>Graduacion</h3>
            <p className='text-center'>Junio, 2025</p>
        </div>
        <div className='space-y-1'>
            <h3 className='text-lg font-bold text-gray-600 text-center'>Jefe Actual</h3>
            <p className='text-center'>Antonio Benitez</p>
        </div>
        <div className='space-y-1'>
            <h3 className='text-lg font-bold text-gray-600 text-center'>Direccion</h3>
            <p className='text-center'>Finanzas</p>
        </div>
    </div>
  )
}
