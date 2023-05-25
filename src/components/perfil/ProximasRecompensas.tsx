import React from "react";

export default function ProximasRecompensas() {
  return (
    <div className="mx-3 my-4 bg-white rounded pt-2 pb-4 lg:row-span-2">
      <h3 className="text-center text-lg font-bold pb-4 pt-2">
        Proximas Recompensas
      </h3>
      <div className="px-4">
        <Recompensa
          icono="fa-solid fa-wine-bottle"
          titulo="!Vino Gratis!"
          descripcion="Obten una botella de vino gratis"
          progreso={80}
        />
        <Recompensa
          icono="fa-solid fa-calendar-day"
          titulo="Dia libre"
          descripcion="Obten un dia libre"
          progreso={60}
        />
        <Recompensa
          icono="fa-solid fa-calendar-day"
          titulo="Dia libre"
          descripcion="Obten un dia libre"
          progreso={60}
        />
        <Recompensa
          icono="fa-solid fa-calendar-day"
          titulo="Dia libre"
          descripcion="Obten un dia libre"
          progreso={60}
        />
      </div>
    </div>
  );
}

function Recompensa({ icono, titulo, descripcion, progreso }: any) {
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
        <Progreso progreso={progreso} />
      </div>
    </div>
  );
}

function Progreso({ progreso }: any) {
  return (
    <div className="w-full h-3 rounded-full bg-slate-500 col-span-5">
      <div
        style={{ width: `${progreso}%` }}
        className="h-3 bg-yellow-500 rounded-full"
      ></div>
    </div>
  );
}
