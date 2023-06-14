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

  // Lista total de usuarios
  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  // Lista total de Cursos
  const [cursos, setCursos] = useState<Curso[]>([])

  //Currently selected User ID
  const [idUsuario, setIdUsuario] = useState("")
  //Currently selected course id
  const [idCurso, setidCurso] = useState("")
  //Currently selected status (user-course)
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

  // Funcion para manejar la API y agregar un curso a un usuario
  const handleAddUserCourse = async () => {
    try {
      const config = axiosConfig()
      if (!config) return

      // Post to add the trainee to the course
      await clienteAxios.post("/Course/AddTraineeToCourse", {
        iIdCourse: idCurso,
        iIdUser: idUsuario,
      }, config)

      Swal.fire({
        icon: 'success',
        title: 'Usuario agregado correctamente',
      })

      // Reset
      setIdUsuario("")
      setidCurso("")
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error al agregar el usuario al curso',
      })
    }
  }

  // Funcion para manejar la API y cambiar el status de un usuario en relación al curso
  // True (Completado) - False (No Completado)
  // Es necesario cambiar forzosamente el status para que no sea vacío
  const handleStatus = async () => {
    // Revisar status actual
    console.log("Status: ", (status === "true"))
    try {
      const config = axiosConfig();
      // No conection to axios, stop process
      if (!confirm) return

      // Cambiar el status del curso en relacion al usuario
      await clienteAxios.post("/CourseAttendance/InsertOrUpdate", {
        iIdCourse: idCurso,
        iIdUser: idUsuario,
        bAttendanceStatus: (status === "true"),
      })

      Swal.fire({
        icon: 'success',
        title: 'Usuario agregado correctamente',
      })
      // Regresar status a empty, se necesita cambiar forzosamente el status en la selección
      // Comentado para mantener el status en su ultima selección por comodidad del admin
      // setStatus("")
    } catch (error: any) {
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error al agregar un usuario',
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
        {/* Component to add a user to a course */}
        <UpdateUserCourse
          idUsuario={idUsuario}
          idCurso={idCurso}
          handleAddUserCourse={handleAddUserCourse}
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
