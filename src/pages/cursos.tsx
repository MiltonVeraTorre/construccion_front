import MainLayout from "@/Layout/MainLayout";
import { axiosConfig } from "@/config/axiosConfig";
import clienteAxios from "@/config/clienteAxios";
import useAuth from "@/hooks/useAuth";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function cursos() {
  const { auth } = useAuth();
  const [cursos, setCursos] = useState<CursoInt[]>([]);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const config = axiosConfig();
        if (!config) return;
        const { data }: { data: CursoData[] } = await clienteAxios.post(
          "/CourseAttendance/GetData",
          {
            iIdUser: auth?.iIdUser,
          },
          config
        );
        setCursos(data[0].courses);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Hubo un error al cargar los datos",
        });
      }
    };
    if (auth) {
      cargarDatos();
    }
  }, [auth]);

  return (
    <MainLayout>
      <h3 className="text-center my-4 font-bold md:text-lg lg:text-xl">
        Ternium University
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 md:w-2/3 max-w-4xl md:mx-auto gap-4 px-4 place-items-center my-3">
        <div className="grid place-items-center bg-gray-100 p-4 rounded-md shadow w-full">
          <i className="fa-solid fa-graduation-cap text-3xl md:text-4xl text-orange-400"></i>
          <p className="text-2xl font-bold">{cursos.reduce((total,curso)=>{
              return total+(curso.attendanceStatus==="OK"?1:0  )
          },0)}</p>
          <p className="text-center text-lg">Completados</p>
        </div>
        <div className="grid place-items-center bg-gray-100 p-4 rounded-md shadow w-full">
          <i className="fa-solid fa-chalkboard-user text-3xl md:text-4xl text-orange-400"></i>
          <p className="text-2xl font-bold">{cursos.reduce((total,curso)=>{
              return total+(curso.attendanceStatus==="PENDIENTE"?1:0)  
          },0)}</p>
          <p className="text-center text-lg">Cursando</p>
        </div>
        <div className="grid place-items-center bg-gray-100 p-4 rounded-md shadow w-full">
          <i className="fa-solid fa-xmark text-4xl md:text-5xl text-red-400"></i>
          <p className="text-2xl font-bold">{cursos.reduce((total,curso)=>{
              return total+(curso.attendanceStatus==="NO"?1:0  )
          },0)}</p>
          <p className="text-center text-lg">No Asistidos</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-5xl lg:mx-auto gap-4 place-items-center mx-4">
        {cursos.map((curso) => (

        <Curso status={curso.attendanceStatus} nombre={curso.courseName} />
        ))}
      </div>
    </MainLayout>
  );
}

interface CursoProps {
  nombre:string
  status: string;
}

function Curso({ nombre, status }: CursoProps) {
  return (
    <div className={`w-full pb-4 rounded-md ${status === "PENDIENTE" ? "bg-yellow-100" : (status === "OK" ? "bg-green-100" : "bg-red-100")}`}>
      <div className="w-full grid place-items-center h-24 bg-orange-100 text-orange-500 rounded-md text-5xl">
        <i className="fa-solid fa-chalkboard-user"></i>
      </div>

      <div className="px-1 py-2">
        <p className="text-center font-bold capitalize">
          {nombre}
        </p>
      </div>

      <div className="mt-2">
        <p className="text-center text-sm text-gray-500 capitalize">{status}</p>
      </div>
    </div>
  );
}
