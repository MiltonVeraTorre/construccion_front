export default function Clasificacion() {
  return (
    <div className="w-11/12 max-w-md mx-auto mt-4 bg-gray-50 p-4 rounded-lg md:row-span-2">
      <div className="flex justify-center items-center gap-2">
        <i className="fa-solid fa-ranking-star text-xl text-orange-400"></i>
        <h3 className="text-center font-bold">Top empleados</h3>
      </div>
      <div className="w-11/12 mx-auto py-3 overflow-y-auto h-72">
        <Empleado
          lugar={1}
          nombre={"Pedro Paramo"}
          titulo={"Gerente general"}
          nivel={28}
        />
        <Empleado
          lugar={2}
          nombre={"Pedro Paramo"}
          titulo={"Gerente general"}
          nivel={18}
        />
        <Empleado
          lugar={3}
          nombre={"Pedro Paramo"}
          titulo={"Gerente general"}
          nivel={12}
        />
        <Empleado
          lugar={4}
          nombre={"Pedro Paramo"}
          titulo={"Gerente general"}
          nivel={8}
        />
      </div>
    </div>
  );
}

function Empleado({ lugar, nombre, titulo, nivel }: any) {
  return (
    <div className="w-full flex justify-between items-center gap-4 shadow rounded-md p-4 px-8">
      <p
        className={`text-3xl 
      ${lugar === 1 ? "text-yellow-500 text-4xl" : ""}
      ${lugar === 2 ? "text-gray-800 text-4xl" : ""}
      ${lugar === 3 ? "text-yellow-800 text-4xl" : ""}
      
      `}
      >
        <span className="text-xl">#</span>
        {lugar}
      </p>
      <div className="h-12 w-[2px] bg-slate-300 rounded-lg"></div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-xl ">{nombre}</p>
        <div className="flex justify-center items-center gap-2">
          <p>Lvl <span className="text-orange-600">{nivel}</span> </p>
          <p className="text-gray-500 text-sm">{titulo}</p>
        </div>
      </div>
    </div>
  );
}
