import axios from 'axios'

export const ServerURL =
  process.env.NODE_ENV === "production" ? "" : "https://test01-production-2c18.up.railway.app/  ";

  export const API = axios.create({
    baseURL: "https://test01-production-2c18.up.railway.app/",
   headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });

  export const getHeaders = () =>{
    return {
        headers:{
            'Content-Type':'application/json',
            Accept:'application/json'
        },
        withCredentials:true
    }
}