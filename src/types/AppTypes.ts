interface Usuario{
    iIdUser: number
    iIdCet: string
    sUser: string
    bActive: boolean
    bSuperUser: boolean
    sJwtToken: string
}
interface UsuarioData{
    iIdCet: number;
    sName: string;
    cGenero: string;
    dFechaNacimiento: string;
    sUbicacion: string;
    sBusinessUnit: string;
    sDivision: string;
    sRole: string;
    bGraduado: boolean;
    sEncuadreActual: string;
    dFechaEncuadreActual: string
    dGeneracionGraduacion: string;
    sSupervisor: string;
}

interface Interes{
    iIdInterest: number;
    sInterestName: string;
}
interface InteresSelect{
    iIdInterest: number;
    iIdUser: number;
}

interface Opcion{
    value: string;
    label: string;
}