import MainLayout from "@/Layout/MainLayout";
import Encuadres from "@/components/index/Encuadres";
import React from "react";

import {Select} from "antd";
import { OPCIONES_INTERESES } from "@/config/constants";
const { Option } = Select;

export default function index() {
  return (
    <MainLayout>
      <div className="px-5 py-3 2xl:bg-gray-100 2xl:w-1/2 2xl:mx-auto 2xl:mt-6 2xl:py-10 2xl:rounded-lg">
        <div className="grid place-items-center my-4">
            <img 
            className="w-24  h-24  rounded-full"
            src="defaultProfilePic.jpg" 
            alt="Foto Perfil" />
            <h2 className="text-2xl font-bold text-gray-600">Pedro Paramo</h2>
            <p className="bg-orange-200 rounded-lg text-orange-700 px-3 font-bold text-sm">Jefe de Finanzas</p>
      

        </div>
        <div className="md:grid md:grid-cols-2 md:gap-4 max-w-2xl mx-auto">

        <div className="grid gap-2">
          <h3 className="text-xl xl:text-2xl text-center font-bold text-gray-600">Datos Generales</h3>
          <p className="text-gray-500">
            Información general sobre tu status en Ternium
          </p>
          <div className="h-[1px] w-full bg-gray-300 mx-auto"></div>
          <Encuadres />
        </div>
        <div className="grid gap-2 my-4 md:my-0">
          <h3 className="text-xl xl:text-2xl text-center font-bold text-gray-600">Intereses</h3>
          <p className="text-gray-500">
            Edita o agrega tus intereses
          </p>
          <div className="h-[1px] w-full bg-gray-300 mx-auto"></div>
          <Select
            mode="multiple"
            style={{ width: "100%", height:"20px" }}
            placeholder="Selecciona tus intereses"
          >
            {OPCIONES_INTERESES.map((interes) => (
                <Option value={interes.label}>{interes.value}</Option>
            ))}
          </Select>
        </div>
        </div>
      </div>
    </MainLayout>
  );
}
