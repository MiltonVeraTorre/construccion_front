

import Head from "next/head";

import React, { useState } from "react";

import { ReactElement } from "react";
import Sidebar from "@/components/Sidebar";
import Navegacion from "@/components/Navegacion";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}): ReactElement {

  const [sidebar, setSidebar] = useState(false)
  return (
    <>
      <Head>
        <title>App Construccion</title>
        <meta name="description" content="Admin de gimnasio" />
      </Head>
      <div className="flex min-h-screen w-full bg-gray-100">
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        <div className="w-full ">
          <Navegacion sidebar={sidebar} setSidebar={setSidebar}  />
          {children}
        </div>
      </div>
    </>
  );
}
