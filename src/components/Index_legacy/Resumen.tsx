

export default function Resumen() {
  return (
    <div className="w-10/12 md:w-11/12 mx-auto mt-4 bg-gray-100 p-4 rounded-lg">
      <h3 className="text-center font-bold">Tus ultimos logros <i className="fa-solid fa-trophy text-yellow-400 text-lg"></i> </h3>
      <div className="w-full px-2 mt-2 overflow-x-auto grid grid-flow-col gap-3 place-items-center">
          <Logro
            titulo="Primer curso"
            experiencia="100xp"
            icono="fa-solid fa-trophy"
            descripcion="Completaste tu primer curso"
          />
          <Logro
            titulo="Estudiante rapido"
            experiencia="200xp"
            icono="fa-solid fa-graduation-cap"
            descripcion="Acabaste un curso en menos de un mes"
          />
          <Logro
            titulo="Estudiante aplicado"
            experiencia="500xp"
            icono="fa-solid fa-glasses"
            descripcion="Completaste 4 cursos"
          />
          <Logro
            titulo="Sabio"
            experiencia="1500xp"
            icono="fa-solid fa-brain"
            descripcion="Completaste 10 cursos"
          />
      </div>
    </div>
  )
}

function Logro({titulo,experiencia,icono,descripcion}:any) {
  return (
    <div className="bg-white p-2 w-56 rounded-lg">
      <div className="grid grid-cols-3 place-items-center py-3">
        <div className="grid place-items-center">

        <i className={`${icono} text-4xl text-orange-400 `}></i>
        <p className="text-center">+<span className="text-yellow-600">{experiencia}</span> </p>

        </div>
        <p className="text-xl font-bold text-center col-span-2">{titulo}</p>
      </div>
      <div className="w-full h-1 bg-gray-200 rounded-lg"></div>
      <div className="gridplace-items-center px-3">
        <p className="text-center">{descripcion}</p>
      </div>
    </div>

  )
}
