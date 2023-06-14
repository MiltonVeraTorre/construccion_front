import { Fragment, useEffect, useState } from "react";

import { Dialog, Switch, Transition } from "@headlessui/react";
import Swal from "sweetalert2";
import { axiosConfig } from "@/config/axiosConfig";
import clienteAxios from "@/config/clienteAxios";

interface ModalVerCursosProps {
  modalEditarUsuario: boolean;
  handleModalEditarUsuario: () => void;
  idUsuario: string;
}

const ModalEditarUsuario = ({
  modalEditarUsuario,
  handleModalEditarUsuario,
  idUsuario,
}: ModalVerCursosProps) => {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");

  const [activo, setActivo] = useState(false);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const config = axiosConfig();
        if (!config) return;

        const { data }: { data: Usuario[] } = await clienteAxios.post(
          "/User/GetData",
          {
            iIdUser: idUsuario,
          },
          config
        );
        setNombre(data[0].sUser);
        setActivo(data[0].bActive);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Hubo un error al cargar los datos del usuario",
        });
      }
    };
    if (idUsuario !== ""){

        cargarDatos();
    }
  }, [idUsuario]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const config = axiosConfig();
      if (!config) return;

      await clienteAxios.post(
        "/User/InsertOrUpdate",
        {
          iIdUser: idUsuario,
          sUser: nombre,
          sPassword: password,
          bActive: activo,
        },
        config
      );
      Swal.fire({
        icon: "success",
        title: "Usuario editado correctamente",
      })
      handleModalEditarUsuario();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Hubo un error al editar el usuario",
      });
    }
  };

  return (
    <Transition.Root show={modalEditarUsuario} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto "
        onClose={handleModalEditarUsuario}
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
                  Editar Usuario
                </Dialog.Title>
                <div className="my-3 text-center">
                  <form
                    onSubmit={handleSubmit}
                    action=""
                    className="grid gap-2"
                  >
                    <div className="grid gap-2">
                      <label htmlFor="nombre" className="text-gray-200">
                        Usuario
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        className="w-full bg-gray-800 text-gray-200 p-2 rounded"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="password" className="text-gray-200">
                        Contraseña
                      </label>
                      <input
                        type="text"
                        name="password"
                        id="password"
                        className="w-full bg-gray-800 text-gray-200 p-2 rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="grid gap-1 place-items-center">
                      <label htmlFor="password" className="text-gray-200">
                        Activo
                      </label>
                      <Switch
                        checked={activo}
                        onChange={(e) => setActivo(e)}
                        className={`switch ${
                          activo ? "bg-orange-400" : "bg-gray-600"
                        } relative inline-flex h-6 w-11 items-center rounded-full`}
                      >
                        <span className="sr-only">Activo</span>
                        <span
                          className={`${
                            activo ? "translate-x-6" : "translate-x-1"
                          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                        />
                      </Switch>
                    </div>

                    <input
                      type="submit"
                      className="bg-orange-400 hover:bg-orange-500 w-full p-2 rounded text-gray-200 font-bold my-3"
                      value={"Editar Usuario"}
                    />
                  </form>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ModalEditarUsuario;
