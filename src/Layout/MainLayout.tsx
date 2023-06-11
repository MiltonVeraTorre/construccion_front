

import Head from "next/head";

import React, { useEffect, useState } from "react";

import { ReactElement } from "react";
import Sidebar from "@/components/Sidebar";
import Navegacion from "@/components/Navegacion";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/router";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}): ReactElement {

  const {auth,cargando} = useAuth()

  const router = useRouter()
  const [sidebar, setSidebar] = useState(false)

  useEffect(()=>{
    if(!auth && !cargando){
      router.push("/login")
    }
  },[cargando,auth,router])

  if (cargando) return <div>cargando...</div> ;

  return (
    <>
      <Head>
        <title>App Construccion</title>
        <meta name="description" content="Admin de gimnasio" />
      </Head>
      <div className="flex min-h-screen w-full bg-gray-50">
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        <div className="w-full ">
          <Navegacion sidebar={sidebar} setSidebar={setSidebar}  />
          {children}
        </div>
      </div>
    </>
  );
}
