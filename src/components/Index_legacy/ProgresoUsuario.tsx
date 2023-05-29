export default function ProgresoUsuario() {
  return (
    <div className="w-10/12 lg:max-w-lg mx-auto mt-4 bg-gray-50 shadow p-4 rounded-lg md:col-span-2">
      <h3 className="text-center font-bold text-lg">Tu Progreso</h3>

      <div className="flex justify-center items-center mt-2">
        <p className="font-bold">Lvl 1</p>
        <div className="w-8/12 mx-auto h-4 rounded-full bg-gray-300 ">
          <div className="w-1/2 h-4 bg-gradient-to-r from-yellow-200 to-yellow-400 rounded-full"></div>
        </div>
        <p className="font-bold">Lvl 3</p>
      </div>

      <div className="flex justify-center items-center gap-2">
        <p className="text-orange-400">100 xp</p>
        <p>/</p>
        <p className="text-orange-400">700xp</p>
      </div>
    </div>
  );
}
