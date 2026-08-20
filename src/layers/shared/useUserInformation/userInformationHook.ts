"use client";

import { decodeJwt } from "jose";
import { useEffect, useState } from "react";
import { getToken } from "../auth";

export interface User {
  Sub: string;
  Email: string;
  GivenName: string;
  FamilyName: string;
  Role: string;
}

export function useUserInformation() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    async function getInformation() {
      const token = await getToken();
      const currentUser = decodeJwt(token) as User;
      setUser(currentUser);
    }

    void getInformation();
  }, []);

  return user;
}