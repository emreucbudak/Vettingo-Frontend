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
      try {
        const payload = decodeJwt(await getToken());
        const currentUser: User = {
          Sub: payload.sub ?? "",
          Email: (payload.email as string) ?? "",
          GivenName: (payload.given_name as string) ?? "",
          FamilyName: (payload.family_name as string) ?? "",
          Role: (payload.Role as string) ?? "",
        };
        setUser(currentUser);
      } catch {
        setUser(undefined);
      }
    }

    void getInformation();
  }, []);

  return user;
}