import MainLayout from '@/Layout/MainLayout'
import PerfilHeader from '@/components/perfil/PerfilHeader'
import ProximasRecompensas from '@/components/perfil/ProximasRecompensas'
import Recompensas from '@/components/perfil/Recompensas'
import React from 'react'

export default function perfil() {
  return (
    <MainLayout>
        <div className='md:grid md:grid-cols-2 md:place-items-center'>
        <PerfilHeader />

        <ProximasRecompensas />
        <Recompensas />
        </div>
    </MainLayout>
  )
}
