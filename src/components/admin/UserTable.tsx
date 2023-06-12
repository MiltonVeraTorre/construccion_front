import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

import { TableStyles } from "react-data-table-component";

interface UserProps{
  usuarios: Usuario[]
  setIdUsuario: (id: string) => void
}

const UserTable: React.FC<UserProps> = ({usuarios,setIdUsuario}:UserProps) => {
  const [cliente, setCliente] = useState(false);

  // Definir los datos que se mostrarán en la tabla
  const data =  usuarios.map((usuario) => {
    return {
      id: usuario.iIdUser,
      nombre: usuario.sUser
    }
  })
  

  // Definir las columnas de la tabla
  const columns = [
    { name: "ID", selector: "id" },
    { name: "Nombre", selector: "nombre" },
    {
      name: "Action",
      cell: (row: any) => (
        <div className="grid grid-cols-2 gap-3">
          <button
            className=" bg-gradient-to-r from-orange-100 to-yellow-100 text-yellow-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => setIdUsuario(row.id)}
          >
            Seleccionar
          </button>
          <button
            className="fa-solid fa-trash text-yellow-400 border-2 border-yellow-400 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => handleButtonClick(row.id)}
          ></button>
        </div>
      ),
    },
  ];

  // Manejar el click del botón
  const handleButtonClick = (id: string) => {
    alert(`Viewing details for user with ID: ${id}`);
  };

  const customStyles: TableStyles = {
    header: {
      style: {
        backgroundColor: "#343541",
        color: "#FFFFFF",
      },
    },
    headRow: {
      style: {
        backgroundColor: "#343541",
        borderBottomColor: "#4A5568",
      },
    },
    headCells: {
      style: {
        color: "#A0AEC0",
      },
    },
    cells: {
      style: {
        backgroundColor: "#343541",
        color: "#FFFFFF",
        borderBottomColor: "#4A5568",
      },
    },
    rows: {
      style: {
        color: "#A0AEC0",
        backgroundColor: "#343541",
      },
      stripedStyle: {
        backgroundColor: "#343541",
        color: "#A0AEC0",
      },
    },
    pagination: {
      style: {
        color: "#c7d5db",
        backgroundColor: "#343541",
      },
      pageButtonsStyle: {
        backgroundColor: "#c7d5db",
      },
    },
  };
  useEffect(() => {
    setCliente(true);
  }, []);

  // Renderizar la tabla
  return (
    <div className="w-10/12">
      {cliente && (
        <DataTable
          title="Usuarios"
          columns={columns as any}
          data={data}
          //theme="dark"
          customStyles={customStyles}
          pagination
        />
      )}
    </div>
  );
};

export default UserTable;
