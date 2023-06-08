import React from 'react'
import MainLayout from '@/Layout/MainLayout'

type Props = {}

const videojuego = (props: Props) => {
    return (
        <MainLayout>
            <h3 className="text-center my-4 font-bold md:text-lg lg:text-xl">
                Videojuego
            </h3>
            Aquí pon el videojuego
        </MainLayout>
    )
}

export default videojuego