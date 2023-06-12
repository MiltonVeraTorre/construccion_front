interface UpdateUserCourseProps{
  idUsuario:string
  idCurso:string
  status:string
  setStatus:React.Dispatch<React.SetStateAction<string>>
  handleStatus: () => void
}

const UpdateUserCourse: React.FC<UpdateUserCourseProps> = ({idUsuario,idCurso,status,setStatus,handleStatus}:UpdateUserCourseProps) => {
  return (
    <div className=" mx-[10px] w-5/6 lg:col-span-2 lg:w-2/3">
      <div className="bg-[#343541] shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
        <h3 className="text-center text-gray-200 font-bold mb-[10px]">
          Status de Curso
        </h3>
        <div className="mb-6 flex items-center gap-6 flex-wrap lg:flex-nowrap">
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

          <div className="mt-[10px] grid place-items-center w-full">
            <select
              name="status"
              id="status"
              className="rounded-md bg-[#414250] text-gray-200 p-3"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              
              <option value="" className="text-gray-200">
                -- Seleccionar --
              </option>
              <option value="cursado" className="text-gray-200">
                Cursado
              </option>
              <option value="cursando" className="text-gray-200">
                Cursando
              </option>
              <option value="no_cursado" className="text-gray-200">
                No cursado
              </option>
            </select>
          </div>
        </div>

        <div className="w-full grid place-items-center">
          <button
            className="bg-orange-100 text-orange-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleStatus}
          >
            Modificar
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserCourse;
