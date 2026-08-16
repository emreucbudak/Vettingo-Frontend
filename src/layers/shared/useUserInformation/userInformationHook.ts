"use client"
import { useEffect, useState } from "react";
import { getToken } from "../auth";
import { decodeJwt } from "jose";
export interface User {
  Sub:string,
  Email:string,
  GivenName:string,
  FamilyName:string,
  Role:string,
}
export const[user,setUser] = useState<User>();
export  function useUserInformation() {
    useEffect(()  => {
         async function getInformation()  {
            const token = await getToken();
            const user = decodeJwt(token) as User
            setUser(user);
         }
         getInformation();
  

    },[])  
}