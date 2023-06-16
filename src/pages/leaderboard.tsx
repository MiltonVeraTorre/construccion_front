import React, { useEffect, useState } from 'react'
import { axiosConfig } from "@/config/axiosConfig";
import clienteAxios from "@/config/clienteAxios";
import axios from 'axios';
import Swal from "sweetalert2";

type Props = {}

const Leaderboard = (props: Props) => {

    const [topPlayers, setTopPlayers] = useState({});

    useEffect(() => {
        const cargarDatos = async () => {
            try {
                const config = axiosConfig();
                if (!config) return;

                const [
                    { data: topPlayersData }
                ] = await Promise.all([
                    clienteAxios.get("http://localhost:5155/Game/GetTopPlayers", config)
                ]);

                setTopPlayers(topPlayersData);

            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Hubo un error al cargar los datos de los top players',
                });
            }
            console.log(topPlayers)
        };

        cargarDatos();
    }, []);



    return (
        <div className='flex flex-col h-screen items-center bg-[#0e0f15] text-gray-200'>
            <div className='text-center text-3xl mt-[20px] mb-[40px] sm:mb-[100px]'>Top Players</div>

            <div className='flex flex-col sm:flex-row justify-center items-center sm:items-start w-full'>

                <div className='text-center flex flex-col items-center w-[300px] h-[200px] rounded-md bg-gray-600 sm:mt-[80px]'>
                    <div className='h-[80px] w-[80px] mt-[10px]'>
                        <img className='w-full h-full rounded-lg shadow-none' src={`https://static.vecteezy.com/system/resources/previews/000/649/115/original/user-icon-symbol-sign-vector.jpg`} width={0} height={0} alt="Avatar" />
                    </div>
                    <div className='text-center mt-[10px]'>
                        <p className='text-xl'>Username 1</p>
                        <p className='text-xl mt-[10px]'>Score</p>
                    </div>
                </div>

                <div className='text-center flex flex-col items-center w-[300px] h-[200px] my-[20px] sm:my-0 sm:mx-[30px] rounded-md bg-gradient-to-r from-red-500 to-yellow-500'>
                    <div className='h-[80px] w-[80px] mt-[10px]'>
                        <img className='w-full h-full rounded-lg shadow-none' src={`https://static.vecteezy.com/system/resources/previews/000/649/115/original/user-icon-symbol-sign-vector.jpg`} width={0} height={0} alt="Avatar" />
                    </div>
                    <div className='text-center mt-[10px]'>
                        <p className='text-xl'>Username 2</p>
                        <p className='text-xl mt-[10px]'>Score</p>
                    </div>
                </div>

                <div className='text-center flex flex-col items-center w-[300px] h-[200px] rounded-md sm:mt-[140px] bg-[#CD7F32]'>
                    <div className='h-[80px] w-[80px] mt-[10px]'>
                        <img className='w-full h-full rounded-lg shadow-none' src={`https://static.vecteezy.com/system/resources/previews/000/649/115/original/user-icon-symbol-sign-vector.jpg`} width={0} height={0} alt="Avatar" />
                    </div>
                    <div className='text-center mt-[10px]'>
                        <p className='text-xl'>Username 3</p>
                        <p className='text-xl mt-[10px]'>Score</p>
                    </div>
                </div>

            </div>
            <div className='mt-[40px]'>
                <div className='sm-[]'>

                </div>
                <ol className='bg-[#202123] rounded-lg'>
                    <li className='sm:w-[600px] flex justify-around items-center'>
                        <i className="fa-solid fa-trophy h-[30px] ml-[10px] pt-[5px]"> 4</i>
                        <p>Username4</p>
                        <p>Score</p>
                    </li>
                    <br></br>
                    <div className='h-[1px] bg-gray-800'></div>
                    <br></br>
                    <li className='sm:w-[600px] flex justify-around items-center'>
                        <i className="fa-solid fa-trophy h-[30px] ml-[10px] pt-[5px]"> 5</i>
                        <p>Username5</p>
                        <p>Score</p>
                    </li>
                </ol>
            </div>

        </div>

    )
}

export default Leaderboard