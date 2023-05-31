import React, { useState } from 'react'

type Event = {
    date: string,
    title: string
}


type Props = {
    eventos: Event[]
}

export default function FechasImportantes({ eventos }: Props) {
    function calcularInformacionFecha(dateString: string) {
        const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        const meses = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];

        const [day, month, year] = dateString.split("/");

        const date = new Date(Number(year), Number(month) - 1, Number(day));
        const diaSemana = diasSemana[date.getDay()];
        const mes = meses[date.getMonth()];
        const diaNumerico = day;

        return {
            diaSemana,
            mes,
            diaNumerico,
        };
    }


    return (
        <>
            <div className='p-[10px]'>


                <div className="grid grid-cols-[repeat(auto-fill,minmax(165px,1fr))] 
                    gap-x-[80px] gap-y-[10px] mt-[35px] transition-opacity
                    ">

                    {eventos.map((evento, index) => {
                        const { diaSemana, mes, diaNumerico } = calcularInformacionFecha(evento.date);
                        return (
                            <>
                                <div className='flex flex-row h-[120px] justify-between 
                            bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-tex
                            rounded-xl my-[20px]'
                                >
                                    <div className='my-[10px] ml-[10px] w-4/12'>
                                        <div>
                                            <p className='font-medium'>{diaSemana}</p>
                                        </div>
                                        <div className=''>
                                            <p className='text-3xl'>{diaNumerico} {mes}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-end w-8/12 mr-[12px]">
                                        <p className="m-0  text-lg text-right font-semibold">{evento.title}</p>
                                    </div>
                                </div>

                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}