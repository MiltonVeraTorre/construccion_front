import Image from 'next/image'
import { Inter } from 'next/font/google'
import MainLayout from '@/Layout/MainLayout'
import ProgresoUsuario from '@/components/Index/ProgresoUsuario'
import UltimosCursos from '@/components/Index/UltimosCursos'
import Clasificacion from '@/components/Index/Clasificacion'
import Recomendaciones from '@/components/Index/Recomendaciones'
import Resumen from '@/components/Index/Resumen'


export default function Home() {
  return (
    <MainLayout>
      <div className='md:grid md:grid-cols-2'>

      <ProgresoUsuario />
      <UltimosCursos />
      <Clasificacion />
      <Resumen />
      <Recomendaciones />
      </div>
    </MainLayout>
  )
}
