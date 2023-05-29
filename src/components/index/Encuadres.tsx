import React from 'react'

export default function Encuadres() {
  return (
    <div className='grid grid-cols-2 gap-4'>
        <div className='space-y-1'>
            <h3 className='text-lg font-bold text-gray-600'>Encuadre</h3>
            <p>Jefe De Finanzas</p>
        </div>
        <div className='space-y-1'>
            <h3 className='text-lg font-bold text-gray-600'>Inicio Encuadre</h3>
            <p>Junio, 2020</p>
        </div>
        <div className='space-y-1'>
            <h3 className='text-lg font-bold text-gray-600'>Graduacion</h3>
            <p>Junio, 2025</p>
        </div>
        <div className='space-y-1'>
            <h3 className='text-lg font-bold text-gray-600'>Direccion</h3>
            <p>Finanzas</p>
        </div>
    </div>
  )
}
