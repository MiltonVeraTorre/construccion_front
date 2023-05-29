import MainLayout from '@/Layout/MainLayout'
import PerfilHeader from '@/components/perfil_legacy/PerfilHeader'
import ProximasRecompensas from '@/components/perfil_legacy/ProximasRecompensas'
import Recompensas from '@/components/perfil_legacy/Recompensas'
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
