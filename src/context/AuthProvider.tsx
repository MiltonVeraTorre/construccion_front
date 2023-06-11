import { useState,useEffect,createContext } from "react";
import clienteAxios from "@/config/clienteAxios";
import Swal from "sweetalert2";
import { axiosConfig } from "@/config/axiosConfig";

interface AuthInterface{
    auth:Usuario | null,
    setAuth:any,
    cargando:boolean
}

const AuthInterface = {
    auth:null,
    setAuth:()=>{},
    cargando:true
}

const AuthContext = createContext<AuthInterface>(AuthInterface)

const AuthProvider = ({children}:any)=>{

    const [auth, setAuth] = useState<Usuario | null>(null)
    const [cargando, setCargando] = useState(true)
    

    useEffect(()=>{
        const autenticarUsuario = async () =>{
            const iIdUser = localStorage.getItem("idUsuario");
            if(!iIdUser){
                setCargando(false)
                return
            }

            const config = axiosConfig()
            if(!config) return
            try {
                const {data}:{data:Usuario[]} = await clienteAxios.post("/User/GetData",{iIdUser:+iIdUser},config)

                if(data[0].iIdUser){
                    setAuth(data[0])
                }
            } catch (error) {
                setAuth(null)
            } finally{
                setCargando(false)
            }
            
        }
        autenticarUsuario()

    },[])


    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                cargando,
            }}
          
        >
            {children}
        </AuthContext.Provider>
    )
}

export {AuthProvider}

export default AuthContext
