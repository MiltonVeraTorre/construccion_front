
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";



export default function Sidebar({sidebar, setSidebar}:any) {

  const router = useRouter()



  useEffect(() => {
    // Función para manejar el clic fuera del Sidebar
    const handleClickOutside = (event:any) => {
      const sidebarElement = document.querySelector(".sidebar");

      // Si se hace clic fuera del área del Sidebar
      if (sidebarElement && !sidebarElement.contains(event.target)) {
        setSidebar(false);
      }
    };

    // Agregar el EventListener
    window.addEventListener("mousedown", handleClickOutside);

    // Eliminar el EventListener al desmontar el componente
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setSidebar]);

  return (
    <div className="z-50 min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800 sidebar">
      <div
        className={`${
          sidebar ? "" : "-translate-x-full"
        } transition-all fixed top-0 left-0 w-56 md:w-80 flex flex-col bg-white h-full border-r shadow`}
      >
        <div className="flex items-center justify-center h-14 border-b relative">
          <h1 className="text-xl">App construccion</h1>
          <button
            type="button"
            className="absolute top-2 right-3 fa-solid fa-xmark text-xl md:text-2xl text-slate-800"
            onClick={() => setSidebar(false)}
          >
          </button>
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-4 space-y-7">
            
            <li>
              <Link
                href="/"
                className="relative flex ml-5 items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                onClick={() => setSidebar(false)}
              >
                <span className="flex justify-center items-center">
                  <i className="fa-solid fa-home text-orange-400 text-2xl"></i>
                </span>
                <span className="ml-2 text-2xl tracking-wide truncate">
                  Inicio
                </span>
              </Link>
            </li>
            
            <li>
              <Link
                href="/cursos"
                className="relative flex ml-5 items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                onClick={() => setSidebar(false)}
              >
                <span className="flex justify-center items-center">
                <i className="fa-solid fa-graduation-cap text-orange-400 text-2xl"></i>
                </span>
                <span className="ml-2 text-2xl tracking-wide truncate">
                  Cursos
                </span>
              </Link>
            </li>
            
           
            
          </ul>
        </div>
      </div>
    </div>
  );
}
