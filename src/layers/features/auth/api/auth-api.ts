'use server'
import { getJWTToken } from "@/shared/api";
import { decodeJwt } from "jose";
export type LoginRequest = {
  email: string;
  password: string;
  kind: "login";
};
interface Role {
  role: string
}
export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
};
export type RegisterRequest = {
  name: string;
  surname: string;
  email: string;
  password: string;
  role: "Worker" | "Company";
  kind: "register"
};
async function post<TResponse>(request : LoginRequest | RegisterRequest): Promise<any> {
  let response: Response;

  try {
    if (request.kind === "login"){
     const token = await getJWTToken(request);
     const role = decodeJwt(token) as Role;
     switch (role.role) {
      case "Candidate":
        return "/candidate"
    
      case "Human Resources":
        return "/hr";
    
      case "Company":
        return "/employer";      
      default:
        return undefined;
    
     }
    }
    if(request.kind === "register"){
      await register(request);

    }
  } catch {
    throw new Error(
      "API gateway'e ulaşılamadı lütfen auth service'in aktif olduğunu doğrulayınız.",
    );
  }

}

export async function login(request: LoginRequest) {
  return await  post<LoginResponse>(request);
}

export async function register(request: RegisterRequest) {
  return await  post<void>(request);
}
