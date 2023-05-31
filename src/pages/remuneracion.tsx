import React, { useState } from "react";

import MainLayout from "@/Layout/MainLayout";
import Encuadre from "@/components/remuneracion/EncuadreRem";
import AdelantoPTU from "@/components/remuneracion/AdelantoPTU";
import Noticias from "@/components/remuneracion/Noticias";
import FechasImportantes from "@/components/remuneracion/FechasImportantes";

type Event = {
    date: string,
    title: string
}

export default function Remuneracion() {

    const [eventos, setEventos] = useState<Event[]>([
        {
            date: "13/01/2023",
            title: "Fondo de ahorro"
        },
        {
            date: "05/11/2023",
            title: "Titulo de evento un poco mas largo"
        },
        {
            date: "11/02/2023",
            title: "Titulo de evento"
        },
        {
            date: "20/07/2023",
            title: "Titulo de evento"
        },
    ]);



    return (
        <>
            <MainLayout>
                <div id="remuneracion-header-container"
                    className="w-full mt-[40px] text-center items-center flex justify-center"
                >
                    <div className="w-[300px] h-[60px] flex items-center justify-center">
                        <h1 className="w-full h-full font-bold rounded-lg text-white text-2xl 
                        bg-gradient-to-r from-red-500 to-yellow-500 
                        flex items-center justify-center"
                        >
                            Remuneración
                        </h1>
                    </div>
                </div>
                <div id='encuadre_adelanto-main-container' className='flex justify-center w-full p-[40px]'>
                    <div id='encuadre-content-container' className='bg-gray-200 rounded-xl sm:w-[640px]'>

                        <Encuadre />

                        {/* LineBreak */}
                        <div className='flex justify-center my-[20px]'>
                            <div className="h-1 w-full mx-[30px] bg-gray-300 my-auto rounded-xl"></div>
                        </div>

                        <AdelantoPTU />

                    </div>
                </div>

                <div id='noticias-main-container' className='w-full px-[40px]'>
                    <Noticias />
                </div>

                <div id='fechas-main-container' className='w-full px-[40px]'>

                    <FechasImportantes eventos={eventos} />
                </div>
            </MainLayout>
        </>
    )
}
