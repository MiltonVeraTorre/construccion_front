import CoursesTable from "@/components/admin/CoursesTable";
import UpdateUserCourse from "@/components/admin/UpdateUserCourse";
import UserCourseStatus from "@/components/admin/UserCourseStatus";
import UserTable from "@/components/admin/UserTable";
import { axiosConfig } from "@/config/axiosConfig";
import clienteAxios from "@/config/clienteAxios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

type AdminProps = {};

const Admin: React.FC = (props: AdminProps) => {

  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  const [cursos, setCursos] = useState<Curso[]>([])

  const [idUsuario, setIdUsuario] = useState("")
  const [idCurso, setidCurso] = useState("")
  const [status, setStatus] = useState("")

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const config = axiosConfig()
        if (!config) return

        const [
          { data: usuariosData },
          { data: cursosData }
        ] = await Promise.all([
          clienteAxios.post("/User/GetData", {}, config),
          clienteAxios.post("/Course/GetData", {}, config)
        ])

        setUsuarios(usuariosData)
        setCursos(cursosData)

      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Hubo un error al cargar los datos',
        })
      }

    }
    cargarDatos()
  }, [])

  const handleStatus = async () => {
    try {
      const config = axiosConfig()
      if (!config) return

      await clienteAxios.post("/Course/AddTraineeToCourse", {
        iIdCourse: idCurso,
        iIdUser: idUsuario,
      }, config)

      Swal.fire({
        icon: 'success',
        title: 'Status actualizado correctamente',
      })

      setIdUsuario("")
      setidCurso("")
      setStatus("")
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error al actualizar el status',
      })
    }
  }

  const handleAddUser = async (userId: string) => {
    try {
      const config = axiosConfig();
      // No conection to axios, stop process
      if (!confirm) return

      // Need the add user API endpoint
      await clienteAxios.post("/", {
        iIdUser: userId
      })
    } catch(error: any) {
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error al agregar un usuario',
      })
    }
  }

  const handleRemoveUser = async (userId: string) => {
    try {
      const config = axiosConfig();
      // No conection to axios, stop process
      if (!confirm) return

      // Need the add user API endpoint
      await clienteAxios.post("/", {
        iIdUser: userId
      })
    } catch(error: any) {
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error al remover un usuario',
      })
    }
  }

  return (
    <div className="bg-[#202123] h-full w-screen overflow-x-hidden min-h-screen">
      <div className="text-white text-center font-bold text-[26px]">
        Ternium Admin
      </div>
      <div className="w-full grid md:grid-cols-2 max-w-xl mx-auto place-items-center gap-3 my-3">
        <div className="bg-gray-600 w-5/6 px-6 rounded flex items-center">
          <i className="fa-solid fa-user text-orange-300 w-1/3 text-3xl"></i>
          <div className="w-1/2 py-2">
            <p className="text-center text-gray-100 text-2xl font-bold">{usuarios.length}</p>
            <h3 className="text-center text-lg text-gray-200">
              Usuarios
            </h3>
          </div>
        </div>
        <div className="bg-gray-600 w-5/6 px-6 rounded flex items-center">
          <i className="fa-solid fa-chalkboard-user text-orange-300 w-1/3 text-3xl"></i>
          <div className="w-1/2 py-2">
            <p className="text-center text-gray-100 text-2xl font-bold">{cursos.length}</p>
            <h3 className="text-center text-lg text-gray-200">
              Cursos
            </h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 place-items-center gap-4 lg:grid-cols-2">
        <UserTable
          usuarios={usuarios}
          setIdUsuario={setIdUsuario}

        />
        <CoursesTable
          cursos={cursos}
          setidCurso={setidCurso}
        />
        {/* Component to add or remove a user from the course */}
        <UpdateUserCourse
          idUsuario={idUsuario}
          idCurso={idCurso}
          handleAddUser={handleAddUser}
          handleRemoveUser={handleRemoveUser}
        />

        {/* Component to update the status of a user in a selected course */}
        <UserCourseStatus
          idUsuario={idUsuario}
          idCurso={idCurso}
          status={status}
          setStatus={setStatus}
          handleStatus={handleStatus}
        />
      </div>
    </div>
  );
};

export default Admin;
