import React, { useEffect, useState } from 'react'
import { axiosConfig } from "@/config/axiosConfig";
import clienteAxios from "@/config/clienteAxios";
import axios from 'axios';
import Swal from "sweetalert2";
import { data } from 'autoprefixer';
import MainLayout from '@/Layout/MainLayout';

type Props = {}



const Leaderboard = (props: Props) => {

    const [topPlayers, setTopPlayers] = useState<TopInt[] | null>(null);

    useEffect(() => {
        const cargarDatos = async () => {
            try {
                const config = axiosConfig();
                if (!config) return;

                const {data}:{data:TopInt[]} = await clienteAxios.get("/Game/GetTopPlayers", config);

                console.log(data)
                setTopPlayers(data);

            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Hubo un error al cargar los datos de los top players',
                });
            }
        };

        cargarDatos();
    }, []);



    return (
        <MainLayout>
            {
                topPlayers ?(

            <div className='flex flex-col h-screen items-center text-gray-700'>
                <div className='text-center text-3xl mt-[20px] mb-[40px] sm:mb-[100px]'>Top Players</div>

                <div className='flex flex-col sm:flex-row justify-center items-center sm:items-start w-full'>

                    <div className='text-center flex flex-col items-center w-[300px] h-[200px] rounded-md bg-gray-600 sm:mt-[80px]'>
                        <div className='h-[80px] w-[80px] mt-[10px]'>
                            <img className='w-full h-full rounded-lg shadow-none' src={`https://static.vecteezy.com/system/resources/previews/000/649/115/original/user-icon-symbol-sign-vector.jpg`} width={0} height={0} alt="Avatar" />
                        </div>
                        <div className='text-center mt-[10px]'>
                            <p className='text-xl  capitalize text-gray-100'>{topPlayers[1].sUser ?? "Username 2"}</p>
                            <p className=' mt-[10px] text-3xl font-bold  text-gray-100'>{topPlayers[1].iMaxPuntaje ?? "¨Puntaje"}</p>
                        </div>
                    </div>

                    <div className='text-center flex flex-col items-center w-[300px] h-[200px] my-[20px] sm:my-0 sm:mx-[30px] rounded-md bg-gradient-to-r from-red-500 to-yellow-500'>
                        <div className='h-[80px] w-[80px] mt-[10px]'>
                            <img className='w-full h-full rounded-lg shadow-none' src={`https://static.vecteezy.com/system/resources/previews/000/649/115/original/user-icon-symbol-sign-vector.jpg`} width={0} height={0} alt="Avatar" />
                        </div>
                        <div className='text-center mt-[10px]'>
                            <p className='text-xl capitalize  text-gray-100'>{topPlayers[0].sUser ?? "Username 1"}</p>
                            <p className=' mt-[10px] text-3xl font-bold  text-gray-100'>{topPlayers[0].iMaxPuntaje ?? "Puntaje"}</p>
                        </div>
                    </div>

                    <div className='text-center flex flex-col items-center w-[300px] h-[200px] rounded-md sm:mt-[140px] bg-[#CD7F32]'>
                        <div className='h-[80px] w-[80px] mt-[10px]'>
                            <img className='w-full h-full rounded-lg shadow-none' src={`https://static.vecteezy.com/system/resources/previews/000/649/115/original/user-icon-symbol-sign-vector.jpg`} width={0} height={0} alt="Avatar" />
                        </div>
                        <div className='text-center mt-[10px]'>
                            <p className='text-xl capitalize  text-gray-100'>{topPlayers[2].sUser ?? "Username 3"}</p>
                            <p className='mt-[10px] text-3xl font-bold  text-gray-100'>{topPlayers[2].iMaxPuntaje ?? "Puntaje"}</p>
                        </div>
                    </div>

                </div>
                <div className='mt-[40px] bg-gray-200 rounded-md'>

                    
                        <div className='grid grid-cols-3 place-items-center py-3 rounded-md'>
                            <div className='flex items-center gap-3'>
                                <p className='text-3xl font-bold'>4</p>
                                <i className="fa-solid fa-trophy text-orange-400"></i>
                            </div>
                            <p className=' text-xl capitalize'>{topPlayers[3].sUser ?? "Username 4"}</p>
                            <p className='text-3xl font-bold'>{topPlayers[3].iMaxPuntaje ?? "Puntaje"}</p>
                        </div>

                        <div className='grid grid-cols-3 place-items-center py-3 rounded-md'>
                            <div className='flex items-center gap-3'>
                                <p className='text-3xl font-bold'>5</p>
                                <i className="fa-solid fa-trophy text-orange-400"></i>
                            </div>
                            <p className=' text-xl capitalize'>{topPlayers[4].sUser ?? "Username 5"}</p>
                            <p className='text-3xl font-bold'>{topPlayers[4].iMaxPuntaje ?? "Puntaje"}</p>
                        </div>
                </div>

            </div>
                ):(
                    <p>Cargando</p>
                )
            }

        </MainLayout>

    )
}

export default Leaderboard