//Course/AddTraineeToCourse 
// {
//   "iIdCourseTrainees": null,
//   "iIdCourse": 1,
//   "iIdUser": 2
// }

interface UpdateUserCourseProps {
  idUsuario: string
  idCurso: string
  handleAddUserCourse: (userId: string, courseId: string) => void // Pass the course and user data to add (Admin.tsx)
  // handleRemoveUser: (userId: string, courseId: string) => void // Pass the course and user data to remove (Admin.tsx)
}

const UpdateUserCourse: React.FC<UpdateUserCourseProps> = ({ idUsuario, idCurso, handleAddUserCourse }) => {
  return (
    <div className=" mx-[10px] w-5/6 lg:col-span-2 lg:w-2/3">
      <div className="bg-[#343541] shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
        <h3 className="text-center text-gray-200 font-bold mb-[10px]">
          Agregar Curso a Usuario
        </h3>
        <div className="mb-6 flex items-center gap-6 flex-wrap lg:flex-nowrap">
          <label
            className=" text-gray-300 text-sm font-bold mb-2 mt-3"
            htmlFor="email"
          >
            Id Curso
          </label>
          <input
            className="focus:outline appearance-none rounded w-full py-2 px-3 text-gray-200 leading-tight bg-gray-700"
            id="idCurso"
            type={"number"}
            placeholder="Id del curso"
            readOnly
            value={idCurso}
          />

          <label
            className=" text-gray-300 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Id Usuario
          </label>
          <input
            className="focus:outline appearance-none rounded w-full py-2 px-3 text-gray-200 leading-tight bg-gray-700"
            id="idUsuario"
            type="number"
            placeholder="Id de usuario"
            readOnly
            value={idUsuario}
          />
        <div className="grid place-items-center mr-[10px]">
          <button
            className="bg-green-600 text-gray-200 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => handleAddUserCourse(idUsuario, idCurso)}
          >
            Agregar
          </button>
        </div>
        </div>

        {/* <div className="flex flex-row justify-center">
          <div className="grid place-items-center mr-[10px]">
            <button
              className="bg-green-600 text-gray-200 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => handleAddUserCourse(idUsuario, idCurso)}
            >
              Agregar
            </button>
          </div>
          <div className="grid place-items-center ml-[10px]">
            <button
              className="bg-red-600 text-gray-200 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => handleRemoveUserCourse(idUsuario, idCurso)}
            >
              Remover
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default UpdateUserCourse;
