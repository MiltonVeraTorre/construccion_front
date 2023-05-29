export default function UltimosCursos() {
  return (
    <div className="w-11/12 mx-auto mt-4 bg-gray-50 p-4 rounded-lg">
      <p className="text-center text-lg text-gray-700">Continua donde lo dejaste</p>
      <div className="w-full px-2 mt-2 overflow-x-auto grid grid-flow-col gap-3 place-items-center">
        <Curso />
        <Curso />
      </div>
    </div>
  );
}

function Curso() {
  return (
    <div className="w-52 bg-gray-100">
      <img
        className="w-full rounded-lg object-cover object-center "
        src="https://img-c.udemycdn.com/course/240x135/3809174_9a5b_2.jpg"
        alt="Curso"
      />
      
      <div className="w-10/12 mx-auto h-2 rounded-full bg-gray-300 my-2">
        <div className="w-1/2 h-2 bg-gradient-to-r from-orange-200 to-orange-400 rounded-full"></div>
      </div>
      <div className="px-1 py-2">
        <p className="text-center font-bold">
          Reconocimiento facial con python
        </p>
      </div>
    </div>
  );
}
