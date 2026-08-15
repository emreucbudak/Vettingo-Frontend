"use client"
import { useEffect } from "react";
import { getToken } from "../auth";
import { decodeJwt } from "jose";
export interface User {
  Sub:string,
  Email:string,
  GivenName:string,
  FamilyName:string,
  Role:string,
}
export async function useUserInformation() {
    useEffect(() => {
         async function getInformation() : Promise<User> {
            const token = await getToken();
            const user = decodeJwt(token) as User
            return user
         }
         getInformation();


    },[])  
}