import { useState,useEffect,createContext } from "react";
import clienteAxios from "@/config/clienteAxios";
import Swal from "sweetalert2";

interface AuthInterface{
    auth:any,
    setAuth:any,
    cargando:boolean
}

const AuthInterface = {
    auth:{},
    setAuth:()=>{},
    cargando:true
}

const AuthContext = createContext<AuthInterface>(AuthInterface)

const AuthProvider = ({children}:any)=>{

    const [auth, setAuth] = useState({})
    const [cargando, setCargando] = useState(true)
    

    useEffect(()=>{
        const autenticarUsuario = async () =>{
            const iIdUser = localStorage.getItem("idUsuario");
            if(!iIdUser){
                setCargando(false)
                return
            }
            const config = {
                headers:{
                    "Content-Type":"application/json"
                }
            }
            try {
                const {data} = await clienteAxios.post("/User/GetData",{iIdUser},config)
                setAuth(data)
            } catch (error) {
                setAuth({})
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
