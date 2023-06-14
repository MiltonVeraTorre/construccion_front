import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

import { TableStyles } from "react-data-table-component";

import clienteAxios from "@/config/clienteAxios";
import { axiosConfig } from "@/config/axiosConfig";
import Swal from "sweetalert2";


interface UserProps {
  usuarios: Usuario[]
  setIdUsuario: (id: string) => void
  handleModalVerCursos: () => void
  handleModalEditarUsuario: () => void
}

const UserTable: React.FC<UserProps> = ({ usuarios, setIdUsuario,handleModalVerCursos,handleModalEditarUsuario }: UserProps) => {
  const [cliente, setCliente] = useState(false);

  // Definir los datos que se mostrarán en la tabla
  const data = usuarios.map((usuario) => {
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
      name: "Accion",
      cell: (row: any) => (
        <div className="grid grid-cols-3 gap-3">
          <button
            className=" fa-solid fa-person-chalkboard text-lg bg-gradient-to-r from-orange-100 to-yellow-100 text-yellow-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            // Se cambia el estado de idUsuario (Admin.tsx)
            onClick={() => {
              setIdUsuario(row.id)
              handleModalVerCursos()
            }}
          >
          </button>
          <button
            className=" fa-solid fa-arrow-pointer text-yellow-400 border-2 border-yellow-400 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            // Se cambia el estado de idUsuario (Admin.tsx)
            onClick={() => setIdUsuario(row.id)}
          >
          </button>
          <button
            className="fa-solid fa-pencil text-yellow-400  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => {
              setIdUsuario(row.id)
              handleModalEditarUsuario()
            }}
          ></button>
        </div>
      ),
    },
  ];

  // Manejar el click del botón
  const handleButtonClick = (userId: string) => {
    alert(`Viewing details for user with ID: ${userId}`);
    
    // Eliminar usuario
    const handleDelete = async () => {
      try {
        const config = axiosConfig();
        // No conection to axios, stop process
        if (!config) return

        // Need the add user API endpoint
        await clienteAxios.post("/User/Delete", {
          iIdUser: userId,
        },config)
      } catch (error: any) {
        Swal.fire({
          icon: 'error',
          title: 'Hubo un error al agregar un usuario',
        })
      }
    }
    handleDelete()
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
