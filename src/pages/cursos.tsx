import MainLayout from "@/Layout/MainLayout";
import React from "react";

export default function cursos() {
  return (
    <MainLayout>
      <h3 className="text-center my-4 font-bold md:text-lg lg:text-xl">
        Ternium University
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 md:w-2/3 max-w-4xl md:mx-auto gap-4 px-4 place-items-center my-3">
        <div className="grid place-items-center bg-gray-100 p-4 rounded-md shadow w-full">
          <i className="fa-solid fa-graduation-cap text-3xl md:text-4xl text-orange-400"></i>
          <p className="text-2xl font-bold">10</p>
          <p className="text-center text-lg">Completados</p>
        </div>
        <div className="grid place-items-center bg-gray-100 p-4 rounded-md shadow w-full">
          <i className="fa-solid fa-chalkboard-user text-3xl md:text-4xl text-orange-400"></i>
          <p className="text-2xl font-bold">5</p>
          <p className="text-center text-lg">Cursando</p>
        </div>
        <div className="grid place-items-center bg-gray-100 p-4 rounded-md shadow w-full">
          <i className="fa-solid fa-xmark text-4xl md:text-5xl text-red-400"></i>
          <p className="text-2xl font-bold">2</p>
          <p className="text-center text-lg">No Asistidos</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-5xl lg:mx-auto gap-4 place-items-center mx-4">
        <Curso status="no asistio" color="bg-red-100" />
        <Curso status="cursando" color="bg-yellow-100" />
        <Curso status="completado" color="bg-green-100" />
        <Curso status="no asistio" color="bg-red-100" />
        <Curso status="cursando" color="bg-yellow-100" />
        <Curso status="completado" color="bg-green-100" />
      </div>
    </MainLayout>
  );
}

interface CursoProps {
  color: string;
  status: string
}

function Curso({ color,status }: CursoProps) {
  return (
    <div className={`w-full bg-gray-100 pb-4 rounded-md ${color}`}>

      <div className="w-full grid place-items-center h-24 bg-orange-100 text-orange-500 rounded-md text-5xl">
      <i className="fa-solid fa-chalkboard-user"></i>
      </div>
      

      <div className="px-1 py-2">
        <p className="text-center font-bold">
          Reconocimiento facial con python
        </p>
      </div>

      
      <div className="mt-2">
        <p className="text-center text-sm text-gray-500 capitalize">{status}</p>
      </div>
    </div>
  );
}
