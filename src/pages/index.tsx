import MainLayout from "@/Layout/MainLayout";
import Encuadres from "@/components/index/Encuadres";
import React, { useEffect, useState } from "react";

import { Select } from "antd";
import { OPCIONES_INTERESES } from "@/config/constants";
import Swal from "sweetalert2";
import { axiosConfig } from "@/config/axiosConfig";
import clienteAxios from "@/config/clienteAxios";
import useAuth from "@/hooks/useAuth";
const { Option } = Select;

export default function index() {
  const { auth } = useAuth();

  // Datos generales
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [inicioEncuadre, setInicioEncuadre] = useState("");
  const [graduacion, setGraduacion] = useState("");
  const [encuadre, setEncuadre] = useState("");
  const [direccion, setDireccion] = useState("");

  const [intereses, setIntereses] = useState<string[]>([]);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const config = axiosConfig();
        if (!config) return;

        const [{ data: userData }, { data: interesesData }] = await Promise.all(
          [
            clienteAxios.post(
              "/User/GetUserInfoData",
              { iIdUser: auth?.iIdUser },
              config
            ),
            clienteAxios.post(
              "/UserInterest/GetData",
              { iIdUser: auth?.iIdUser },
              config
            ),
          ]
        );

        console.log(auth?.iIdUser)

        setNombre(userData[0].sName);
        setPuesto(userData[0].sBusinessUnit);
        setInicioEncuadre(userData[0].dFechaEncuadreActual);
        setGraduacion(userData[0].dGeneracionGraduacion);
        setEncuadre(userData[0].sEncuadreActual);
        setDireccion(userData[0].sDivision);

          console.log(interesesData)

        setIntereses(
          interesesData.map((interes: Interes) =>
            interes.iIdInterest.toString()
          )
        );


      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error al cargar los datos",
        });
      }
    };
    if (auth) {
      cargarDatos();
    }
  }, [auth]);

  const handleSelect = async (value: string[]) => {
    setIntereses(value);
    const config = axiosConfig();
    if (!config) return;

    await clienteAxios.post(
      "/UserInterest/DeleteUserInterests",
      {
        iIdUser: auth?.iIdUser,
      },
      config
    );

    for(const interes of value){
      clienteAxios.post(
        "/UserInterest/AddInterestToUser",
        {
          iIdUser: auth?.iIdUser,
          iIdInterest: interes,
        },
        config
      );
    }
  };

  return (
    <MainLayout>
      <div className="px-5 py-3 2xl:bg-gray-100 2xl:w-1/2 2xl:mx-auto 2xl:mt-6 2xl:py-10 2xl:rounded-lg">
        <div className="grid place-items-center my-4">
          <img
            className="w-24  h-24  rounded-full"
            src="defaultProfilePic.jpg"
            alt="Foto Perfil"
          />
          <h2 className="text-2xl font-bold text-gray-600 capitalize">
            {nombre}
          </h2>
          <p className="bg-orange-200 rounded-lg text-orange-700 px-3 font-bold text-sm capitalize">
            {puesto}
          </p>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-4 max-w-2xl mx-auto">
          <div className="grid gap-2">
            <h3 className="text-xl xl:text-2xl text-center font-bold text-gray-600">
              Datos Generales
            </h3>
            <p className="text-gray-500">
              Información general sobre tu status en Ternium
            </p>
            <div className="h-[1px] w-full bg-gray-300 mx-auto"></div>
            <Encuadres
              inicioEncuadre={inicioEncuadre}
              graduacion={graduacion}
              encuadre={encuadre}
              direccion={direccion}
            />
          </div>
          <div className="grid gap-2 my-4 md:my-0">
            <h3 className="text-xl xl:text-2xl text-center font-bold text-gray-600">
              Intereses
            </h3>
            <p className="text-gray-500">Edita o agrega tus intereses</p>
            <div className="h-[1px] w-full bg-gray-300 mx-auto"></div>
            <Select
              mode="multiple"
              style={{ width: "100%", height: "20px" }}
              placeholder="Selecciona tus intereses"
              value={intereses}
              onChange={(value) => handleSelect(value)}
            >
              {OPCIONES_INTERESES.map((interes) => (
                <Option key={Math.random()} value={interes.value}>
                  {interes.label}
                </Option>
              ))}
            </Select>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
