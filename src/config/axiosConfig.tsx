export function axiosConfig(json:boolean = true){
    const token = localStorage.getItem("token");
    if(!token) return null
    const config = {
        headers: {
        "Content-Type": json ? "application/json" : "multipart/form-data",
        Authorization: `Bearer ${token}`,
        },
    };
    return config
}