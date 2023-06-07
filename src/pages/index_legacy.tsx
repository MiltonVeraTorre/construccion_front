
import MainLayout from '@/Layout/MainLayout'
import ProgresoUsuario from '@/components/Index_legacy/ProgresoUsuario'
import UltimosCursos from '@/components/Index_legacy/UltimosCursos'
import Clasificacion from '@/components/Index_legacy/Clasificacion'
import Recomendaciones from '@/components/Index_legacy/Recomendaciones'
import Resumen from '@/components/Index_legacy/Resumen'


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
