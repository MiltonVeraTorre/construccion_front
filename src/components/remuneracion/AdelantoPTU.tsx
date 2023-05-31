import React from 'react'

type Props = {
    fecha: string
}

export default function AdelantoPTU({ }: Props) {
    return (
        <>
            <div className='p-[10px]'>

                <div className='text-center text-xl mb-[20px]'>
                    <h2>Adelanto PTU</h2>
                </div>
                <div className='text-center text-lg mb-[20px]'>
                    <p>16 de junio de 2023</p>
                </div>
            </div>
        </>
    )
}

