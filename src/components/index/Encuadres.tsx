import { formatearFecha } from '@/helpers/helpers'
import React from 'react'

interface EncuadresProps {
    inicioEncuadre:string,
    graduacion:string,
    encuadre:string,
    direccion:string
}

export default function Encuadres({
    inicioEncuadre,
    graduacion,
    encuadre,
    direccion
}:EncuadresProps) {
  return (
    <div className='grid grid-cols-2 gap-4 w-full'>
        <div className='space-y-1'>
            <h3 className='text-lg font-bold text-gray-600 text-center'>Inicio Encuadre</h3>
            <p className='text-center'>
                {formatearFecha(inicioEncuadre)}
            </p>
        </div>
        <div className='space-y-1'>
            <h3 className='text-lg font-bold text-gray-600 text-center'>Graduacion</h3>
            <p className='text-center'>
                {formatearFecha(graduacion)}
            </p>
        </div>
        <div className='space-y-1'>
            <h3 className='text-lg font-bold text-gray-600 text-center'>Encuadre</h3>
            <p className='text-center capitalize'>{encuadre || "Desconocido"}</p>
        </div>
        <div className='space-y-1'>
            <h3 className='text-lg font-bold text-gray-600 text-center'>Direccion</h3>
            <p className='text-center capitalize'>{direccion}</p>
        </div>
    </div>
  )
}
