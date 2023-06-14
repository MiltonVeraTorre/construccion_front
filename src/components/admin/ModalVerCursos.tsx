import { Fragment, useEffect, useState } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { axiosConfig } from "@/config/axiosConfig";
import clienteAxios from "@/config/clienteAxios";
import Swal from "sweetalert2";

interface ModalVerCursosProps {
  modalVerCursos: boolean;
  handleModalVerCursos: () => void;
  idUsuario: string;
}

const ModalVerCursos = ({
  modalVerCursos,
  handleModalVerCursos,
  idUsuario,
}: ModalVerCursosProps) => {
  const [cursos, setCursos] = useState<CursoInt[]>([]);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const config = axiosConfig();
        if (!config) return;
        const { data }: { data: CursoData[] } = await clienteAxios.post(
          "/CourseAttendance/GetData",
          {
            iIdUser: idUsuario,
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
    if (idUsuario !== "") {
      cargarDatos();
    }
  }, [idUsuario]);
  return (
    <Transition.Root show={modalVerCursos} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto "
        onClose={handleModalVerCursos}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 ">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-gray-700 rounded-lg px-4 pt-3 pb-6 overflow-hidden shadow-xl transform transition-all sm:align-middle w-full md:w-2/3 lg:w-1/3 sm:p-6">
              <div className="">
                <Dialog.Title
                  as="h3"
                  className="text-2xl leading-6 text-gray-200"
                >
                  Cursos del usuario
                </Dialog.Title>
                <div className="my-3 text-center">
                  <div className="grid grid-cols-2 md:grid-cols-3 md:w-2/3 max-w-5xl md:mx-auto gap-4 px-4 place-items-center my-3">
                    <div className="grid place-items-center bg-gray-600 p-4 rounded-md shadow w-full">
                      <i className="fa-solid fa-graduation-cap text-3xl md:text-4xl text-orange-500"></i>
                      <p className="text-2xl font-bold text-gray-100">
                        {cursos.reduce((total, curso) => {
                          return (
                            total + (curso.attendanceStatus === "OK" ? 1 : 0)
                          );
                        }, 0)}
                      </p>
                      <p className="text-center  text-gray-200 ">Completos</p>
                    </div>
                    <div className="grid place-items-center bg-gray-600 p-4 rounded-md shadow w-full">
                      <i className="fa-solid fa-chalkboard-user text-3xl md:text-4xl text-orange-500"></i>
                      <p className="text-2xl font-bold  text-gray-100">
                        {cursos.reduce((total, curso) => {
                          return (
                            total +
                            (curso.attendanceStatus === "PENDIENTE" ? 1 : 0)
                          );
                        }, 0)}
                      </p>
                      <p className="text-center  text-gray-200 ">Cursando</p>
                    </div>
                    <div className="grid place-items-center bg-gray-600 p-4 rounded-md shadow w-full">
                      <i className="fa-solid fa-xmark text-4xl md:text-5xl text-red-500"></i>
                      <p className="text-2xl font-bold  text-gray-100">
                        {cursos.reduce((total, curso) => {
                          return (
                            total + (curso.attendanceStatus === "NO" ? 1 : 0)
                          );
                        }, 0)}
                      </p>
                      <p className="text-center  text-gray-200 ">No</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-5xl lg:mx-auto gap-4 place-items-center mx-4">
                    {cursos.map((curso) => (
                      <Curso
                        status={curso.attendanceStatus}
                        nombre={curso.courseName}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
interface CursoProps {
  nombre: string;
  status: string;
}
function Curso({ nombre, status }: CursoProps) {
  return (
    <div
      className={`w-full pb-4 rounded-md ${
        status === "PENDIENTE"
          ? "bg-yellow-100"
          : status === "OK"
          ? "bg-green-100"
          : "bg-red-100"
      }`}
    >
      <div className="w-full grid place-items-center h-24 bg-orange-100 text-orange-500 rounded-md text-5xl">
        <i className="fa-solid fa-chalkboard-user"></i>
      </div>

      <div className="px-1 py-2">
        <p className="text-center font-bold capitalize">{nombre}</p>
      </div>

      <div className="mt-2">
        <p className="text-center text-sm text-gray-500 capitalize">{status}</p>
      </div>
    </div>
  );
}

export default ModalVerCursos;
