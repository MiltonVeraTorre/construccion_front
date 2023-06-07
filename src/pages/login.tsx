import clienteAxios from "@/config/clienteAxios";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function login() {

  const router = useRouter()

  const {setAuth} = useAuth()


  
  const [correo, setCorreo] = useState("")
  const [password, setPassword] = useState("")
  
  const handleSubmit =async (e:any) => {
    e.preventDefault()
    try {
      if (correo.trim() === "" || password.trim() === "") {
        Swal.fire({
          icon: "error",
          title: "Todos los campos son obligatorios",
        })
      }
      const {data} = await clienteAxios.post("/Login/UserLogin", { sUser:correo, sPassword:password })
      
      router.push("/")
      setAuth(data)

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
      })
    }
  }
  return (
    <div className="min-h-screen bg-gray-50 grid place-items-center">
      <div className="grid place-items-center">
        <img className="w-56 md:w-1/2" src="logo_ternium.png" alt="Logo" />

        <h1 className="text-center text-2xl md:text-4xl font-bold text-slate-800">
          Ternium University
        </h1>

        <form onSubmit={handleSubmit} className="mt-5 md:w-1/2 lg:w-1/3">
          <div className="flex flex-col gap-2">
            
            <div className="flex gap-3 justify-center items-center bg-white border-b-2 border-gray-200 rounded-md px-2 md:px-0 py-1 md:py-2">
              <i className="fa-solid fa-envelope text-xl md:text-3xl text-yellow-400"></i>
              <input
                className="bg-white py-2 px-3 text-lg md:text-xl"
                type="text"
                placeholder="Usuario"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>

            
            <div className="flex gap-3 justify-center items-center bg-white border-b-2 border-gray-200 rounded-md px-2 md:px-0 py-1 md:py-2">
              <i className="fa-solid fa-lock text-xl md:text-3xl text-yellow-400"></i>
              <input
                className="bg-white py-2 px-3 text-lg md:text-xl"
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              className="bg-orange-500 text-white rounded-md text-xl md:text-2xl font-bold px-2 py-2 md:py-3 mt-3 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
              type="submit"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
