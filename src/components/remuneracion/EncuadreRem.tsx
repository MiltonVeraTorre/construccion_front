import React from 'react';

type Props = {
  encuadre: string,
  sueldo: number
}

export default function Encuadre({ }: Props) {
  return (
    <>
      <div className='p-[10px]'>
        <div className='text-center text-xl mt-[20px] mb-[20px]'>
          <h2>Encuadre actual</h2>
        </div>
        <div className='text-center text-lg'>
          <p>$20,000.00</p>
        </div>
      </div>
    </>
  )
}

