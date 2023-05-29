import React from 'react'

export default function Recompensas() {
  return (
    <div className='mx-3 my-4 bg-white rounded pt-2 pb-4'>
      <h3 className='text-center text-lg font-bold pb-4 pt-2'>Recompensas listas para canjear</h3>
      <div className='px-4'>
      <Recompensa
          icono='fa-solid fa-clock'
          titulo='Salida temprana'
          descripcion='Puedes salir una hora antes en un turno de tu elección'
        />
      <Recompensa
          icono='fa-solid fa-clock'
          titulo='Salida temprana'
          descripcion='Puedes salir una hora antes en un turno de tu elección'
        />

      </div>
    </div>
  )
}

function Recompensa({ icono, titulo, descripcion }: any) {
  return (
    <div className="w-full px-3 shadow bg-gray-50 rounded p-4">
      <div className="grid place-items-center gap-5">
        <div className="grid grid-cols-3 place-items-center">
          <i className={`${icono} text-4xl text-orange-700`}></i>
          <div className="col-span-2">
            <p className="text-2xl font-bold"> {titulo} </p>
            <p className="col-span-5 text-gray-600 text-lg">{descripcion}</p>
          </div>
        </div>
        <button
          className="bg-orange-500 text-white font-bold py-2 px-4 rounded"
          type='button'
        >
          Canjear
        </button>
      </div>
    </div>
  );
}

