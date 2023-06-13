//Game/GetData
// {
//   "iIdGameStats": 0,
//   "iIdUser": 1,
//   "iMaxPuntaje": 0,
//   "iVidas": 0
// }

import { axiosConfig } from "@/config/axiosConfig";
import clienteAxios from "@/config/clienteAxios";
import MainLayout from "@/Layout/MainLayout";
import React, { useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import Swal from "sweetalert2";

// Para obtener el id de usuario desde el local storage
const getStoredUserId = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('idUsuario');
  }
  return null;
};

export default function VideoJuego() {
  // Numero de vidas disponibles para el usuario
  const [numVidas, setNumVidas] = useState<number>(0);

  useEffect(() => {
    // Id de Usuario actual
    const idUsuario = getStoredUserId();

    const cargarDatos = async () => {
      try {
        const config = axiosConfig()
        if (!config) return

        const response = await clienteAxios.post("/User/GetData", { iIdUser: idUsuario }, config);
        const { iVidas } = response.data;

        setNumVidas(iVidas)

      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Hubo un error al cargar las vidas',
        })
      }
    }
    cargarDatos();
  }, [])

  const { unityProvider } = useUnityContext({
    loaderUrl: "assets/Tetris.loader.js",
    dataUrl: "assets/Tetris.data",
    frameworkUrl: "assets/Tetris.framework.js",
    codeUrl: "assets/Tetris.wasm",
  });

  if (numVidas <= 0) {
    return (
      <MainLayout>
        <div className="flex justify-center items-center">
          <h1>No tienes suficientes vidas como para poder utilizar el juego</h1>
        </div>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <div className="w-full h-screen flex justify-center items-center">
        <Unity unityProvider={unityProvider} className="w-full h-full" />
      </div>
    </MainLayout>
  );
}

