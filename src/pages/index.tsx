import MainLayout from "@/Layout/MainLayout";
import Encuadres from "@/components/index/Encuadres";
import React from "react";

export default function index() {
  return (
    <MainLayout>
      <div className="px-5 py-3">
        <div className="grid place-items-center my-4">
            <img 
            className="w-24  h-24  rounded-full"
            src="defaultProfilePic.jpg" 
            alt="Foto Perfil" />
            <h2 className="text-2xl font-bold text-gray-600">Pedro Paramo</h2>
          <div className="h-[1px] w-full bg-gray-300 mx-auto"></div>

        </div>
        <div className="grid gap-2">
          <h3 className="text-xl text-center font-bold text-gray-600">Datos Generales</h3>
          <p className="text-gray-500">
            Información general sobre tu status en Ternium
          </p>
          <div className="h-[1px] w-full bg-gray-300 mx-auto"></div>
          <Encuadres />
        </div>
      </div>
    </MainLayout>
  );
}
