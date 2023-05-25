

export default function Recomendaciones() {
  return (
    <div className="w-11/12 mx-auto mt-4 bg-gray-50 p-4 rounded-lg md:col-span-2">
      <p className="text-center text-lg text-gray-700">Recomendaciones</p>
      <div className="w-full px-2 mt-2 overflow-x-auto grid grid-flow-col gap-3 place-items-center">
        <Curso />
        <Curso />
        <Curso />
        <Curso />
      </div>
    </div>
  )
}

function Curso() {
  return (
    <div className="w-52 bg-gray-100 ">
      <img
        className="w-full rounded-lg object-cover object-center "
        src="https://img-c.udemycdn.com/course/240x135/3809174_9a5b_2.jpg"
        alt="Curso"
      />
      
      <div className="px-1 py-2">
        <p className="text-center font-bold">
          Reconocimiento facial con python
        </p>
      </div>

    <div className="flex items-baseline gap-1 pb-3">
      <p className="text-yellow-700 font-bold text-xl ml-4">4.4</p>
      <div className="grid grid-cols-5 place-items-center w-20">
        <i className="fa-solid fa-star text-yellow-500 text-sm"></i>
        <i className="fa-solid fa-star text-yellow-500 text-sm"></i>
        <i className="fa-solid fa-star text-yellow-500 text-sm"></i>
        <i className="fa-solid fa-star text-yellow-500 text-sm"></i>
        <i className="fa-solid fa-star text-gray-600 text-sm"></i>

      </div>
      <p className="text-gray-500">(1,200)</p>
    </div>
    </div>
  );
}
