"use server";

import { candidateTempRegister, employerTempRegister } from "@/shared/api";

type BaseRegisterRequest = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

export type RegisterRequest = BaseRegisterRequest &
  (
    | {
        accountType: "candidate";
      }
    | {
        accountType: "employer";
        companyName: string;
      }
  );

export type RegisterResult =
  | {
      accountType: "candidate";
      token: string;
    }
  | {
      accountType: "employer";
      token: string;
    };

export async function register(
  request: RegisterRequest,
): Promise<RegisterResult> {
  try {
    if (request.accountType === "employer") {
      const response = await employerTempRegister({
        name: request.name,
        surname: request.surname,
        email: request.email,
        password: request.password,
        companyName: request.companyName,
      });

      return {
        accountType: "employer",
        token: response.token,
      };
    }

    const response = await candidateTempRegister({
      name: request.name,
      surname: request.surname,
      email: request.email,
      password: request.password,
    });

    return {
      accountType: "candidate",
      token: response.token,
    };
  } catch {
    throw new Error("Kayıt yapılamadı, lütfen tekrar deneyin.");
  }
}
